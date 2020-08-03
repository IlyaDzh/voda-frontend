import { observable, action, reaction } from "mobx";
import { axiosInstance, DataMartApi, DataValidatorApi } from "@/api";

import {
    validateWallet,
    validatePassword,
    validatePasswordConfirmation
} from "@/utils";

const INITIAL_REGISTER_FORM = {
    type: "purchaser",
    wallet: "",
    password: "",
    repeat_password: ""
};

const INITIAL_REGISTER_FORM_ERRORS = {
    wallet: undefined,
    password: undefined,
    repeat_password: undefined
};

export class RegisterStore {
    @observable
    registerForm = INITIAL_REGISTER_FORM;

    @observable
    registerFormErrors = INITIAL_REGISTER_FORM_ERRORS;

    @observable
    captchaToken = null;

    @observable
    openRegisterModal = false;

    @observable
    registerSubmissionError = undefined;

    @observable
    pending = false;

    userStore = undefined;
    drawerStore = undefined;

    constructor(userStore, drawerStore) {
        this.userStore = userStore;
        this.drawerStore = drawerStore;

        reaction(
            () => this.registerForm.wallet,
            wallet =>
                wallet && (this.registerFormErrors.wallet = validateWallet(wallet))
        );

        reaction(
            () => this.registerForm.password,
            password => {
                if (password) {
                    this.registerFormErrors.password = validatePassword(password);
                    if (this.registerForm.repeat_password) {
                        this.registerFormErrors.repeat_password = validatePasswordConfirmation(
                            password,
                            this.registerForm.repeat_password
                        );
                    }
                }
            }
        );

        reaction(
            () => this.registerForm.repeat_password,
            repeat_password =>
                (this.registerFormErrors.repeat_password = validatePasswordConfirmation(
                    this.registerForm.password,
                    repeat_password
                ))
        );
    }

    @action
    doRegister = () => {
        if (!this.validateForm()) {
            return;
        }

        if (!this.captchaToken) {
            return;
        }

        this.pending = true;

        this.registerSubmissionError = undefined;

        const url =
            this.registerForm.type === "purchaser"
                ? DataMartApi.getRegisterUrl()
                : DataValidatorApi.getRegisterUrl();

        axiosInstance
            .post(url, {
                lambdaWallet: this.registerForm.wallet.trim(),
                password: this.registerForm.password,
                passwordConfirmation: this.registerForm.repeat_password
            })
            .then(({ data: { accessToken, ...data } }) => {
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("userType", this.registerForm.type);
                this.openRegisterModal = false;
                this.userStore.userType = this.registerForm.type;
                this.userStore.user = data;
                this.userStore.logoutWithForm = false;
                this.userStore.authWithForm = true;
                this.userStore.isAuth = true;
                this.resetRegisterForm();
                this.drawerStore.setMobileOpen(false);
            })
            .catch(error => {
                this.registerSubmissionError = error;
            })
            .finally(() => (this.pending = false));
    };

    @action
    setCaptchaToken = captchaToken => {
        this.captchaToken = captchaToken;
    };

    @action
    setRegisterFormValue = (key, value) => {
        this.registerForm[key] = value;
    };

    @action
    setOpenRegisterModal = openRegisterModal => {
        this.openRegisterModal = openRegisterModal;
        if (!openRegisterModal) {
            this.resetRegisterForm();
        }
    };

    @action
    validateForm = () => {
        this.registerFormErrors = {
            wallet: validateWallet(this.registerForm.wallet),
            password: validatePassword(this.registerForm.password),
            repeat_password: validatePasswordConfirmation(
                this.registerForm.password,
                this.registerForm.repeat_password
            )
        };

        const { wallet, password, repeat_password } = this.registerFormErrors;

        return Boolean(!(wallet || password || repeat_password));
    };

    @action
    resetRegisterForm = () => {
        this.registerForm = INITIAL_REGISTER_FORM;
        this.registerFormErrors = INITIAL_REGISTER_FORM_ERRORS;
        this.registerSubmissionError = undefined;
    };
}
