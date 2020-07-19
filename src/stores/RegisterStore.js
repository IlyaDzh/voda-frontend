import { observable, action, reaction } from "mobx";

import {
    validateWallet,
    validatePassword,
    validatePasswordConfirmation
} from "@/utils";

export class RegisterStore {
    @observable
    registerForm = {
        wallet: "",
        password: "",
        repeat_password: ""
    };

    @observable
    registerFormErrors = {
        wallet: undefined,
        password: undefined,
        repeat_password: undefined
    };

    @observable
    captchaToken = null;

    @observable
    openRegisterModal = false;

    userStore = undefined;

    constructor(userStore) {
        this.userStore = userStore;

        reaction(
            () => this.registerForm.wallet,
            wallet => (this.registerFormErrors.wallet = validateWallet(wallet))
        );

        reaction(
            () => this.registerForm.password,
            password =>
                (this.registerFormErrors.password = validatePassword(password))
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

        console.log("register");
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
}
