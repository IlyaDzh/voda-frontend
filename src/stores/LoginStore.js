import { observable, action } from "mobx";

export class LoginStore {
    @observable
    loginForm = {
        wallet: "",
        password: ""
    };

    @observable
    loginSubmissionError = undefined;

    @observable
    captchaToken = null;

    @observable
    openLoginModal = false;

    userStore = undefined;

    constructor(userStore) {
        this.userStore = userStore;
    }

    @action
    doLogin = () => {
        if (!this.captchaToken) {
            return;
        }

        this.loginSubmissionError = undefined;

        if (
            this.loginForm.wallet === "seller" &&
            this.loginForm.password === "123"
        ) {
            this.userStore.isAuth = true;
            this.userStore.user = {
                id: "123456",
                name: "Ilya",
                type: "seller"
            };
            this.openLoginModal = false;
            localStorage.setItem("accessToken", "123");
            this.resetLoginForm();
        } else if (
            this.loginForm.wallet === "purchaser" &&
            this.loginForm.password === "123"
        ) {
            this.userStore.isAuth = true;
            this.userStore.user = {
                id: "123456",
                name: "Ilya",
                type: "purchaser"
            };
            this.openLoginModal = false;
            localStorage.setItem("accessToken", "123");
            this.resetLoginForm();
        } else {
            this.loginSubmissionError = {
                response: {
                    status: 401
                }
            };
        }
    };

    @action
    doLogout = () => {
        this.userStore.isAuth = false;
        this.userStore.user = undefined;
        localStorage.removeItem("accessToken");
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
    };

    @action
    resetLoginForm = () => {
        this.loginForm = {
            wallet: "",
            password: ""
        };
    };
}
