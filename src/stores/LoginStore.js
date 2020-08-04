import { observable, action } from "mobx";
import { axiosInstance, DataMartApi, DataValidatorApi } from "@/api";

const INITIAL_LOGIN_FORM = {
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
    drawerStore = undefined;

    constructor(userStore, drawerStore) {
        this.userStore = userStore;
        this.drawerStore = drawerStore;
    }

    @action
    doLogin = () => {
        if (!this.captchaToken) {
            return;
        }

        this.pending = true;
        this.loginSubmissionError = undefined;

        const authData = {
            username: this.loginForm.wallet.trim(),
            password: this.loginForm.password.trim()
        };

        DataMartApi.login(authData)
            .then(({ data }) => {
                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("userType", "purchaser");
                this.openLoginModal = false;
                this.userStore.logoutWithForm = false;
                this.userStore.authWithForm = true;
                this.userStore.userType = "purchaser";
                this.userStore.fetchUser();
                this.resetLoginForm();
                this.drawerStore.setMobileOpen(false);
                this.pending = false;
            })
            .catch(error => {
                if (error.response.status === 401) {
                    DataValidatorApi.login(authData)
                        .then(({ data }) => {
                            localStorage.setItem("accessToken", data.accessToken);
                            localStorage.setItem("userType", "seller");
                            this.openLoginModal = false;
                            this.userStore.logoutWithForm = false;
                            this.userStore.authWithForm = true;
                            this.userStore.userType = "seller";
                            this.userStore.fetchUser();
                            this.resetLoginForm();
                            this.drawerStore.setMobileOpen(false);
                            this.pending = false;
                        })
                        .catch(error => {
                            this.loginSubmissionError = error;
                            this.pending = false;
                        });
                } else {
                    this.loginSubmissionError = error;
                    this.pending = false;
                }
            });
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
