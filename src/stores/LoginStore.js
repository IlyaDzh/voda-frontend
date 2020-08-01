import { observable, action } from "mobx";

import { axiosInstance } from "@/api/axios-instance";
import { API_BASE_MART, API_BASE_VALIDATOR } from "@/utils";

const INITIAL_LOGIN_FORM = {
    type: "purchaser",
    wallet: "",
    password: ""
};

export class LoginStore {
    @observable
    loginForm = INITIAL_LOGIN_FORM;

    @observable
    loginSubmissionError = undefined;

    @observable
    captchaToken = null;

    @observable
    openLoginModal = false;

    @observable
    pending = false;

    userStore = undefined;

    constructor(userStore) {
        this.userStore = userStore;
    }

    @action
    doLogin = () => {
        if (!this.captchaToken) {
            return;
        }

        this.pending = true;

        this.loginSubmissionError = undefined;

        const url =
            this.loginForm.type === "purchaser"
                ? `${API_BASE_MART}/api/v2/auth/login`
                : `${API_BASE_VALIDATOR}/api/v3/auth/login`;

        axiosInstance
            .post(url, {
                username: this.loginForm.wallet,
                password: this.loginForm.password
            })
            .then(({ data }) => {
                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("userType", this.loginForm.type);
                this.openLoginModal = false;
                this.userStore.logoutWithForm = false;
                this.userStore.authWithForm = true;
                this.userStore.userType = this.loginForm.type;
                this.userStore.fetchUser();
                this.resetLoginForm();
            })
            .catch(error => {
                this.loginSubmissionError = error;
            })
            .finally(() => (this.pending = false));
    };

    @action
    setCaptchaToken = captchaToken => {
        this.captchaToken = captchaToken;
    };

    @action
    setLoginFormValue = (key, value) => {
        this.loginForm[key] = value;
    };

    @action
    setOpenLoginModal = openLoginModal => {
        this.openLoginModal = openLoginModal;
        if (!openLoginModal) {
            this.resetLoginForm();
        }
    };

    @action
    resetLoginForm = () => {
        this.loginForm = INITIAL_LOGIN_FORM;
        this.loginSubmissionError = undefined;
    };
}
