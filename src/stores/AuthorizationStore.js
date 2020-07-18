import { observable, action } from "mobx";

export class AuthorizationStore {
    @observable
    loginForm = {
        wallet: "",
        password: ""
    };

    @observable
    registerForm = {
        wallet: "",
        password: ""
    };

    @observable
    loginFormErrors = {
        wallet: undefined,
        password: undefined
    };

    @observable
    registerFormErrors = {
        wallet: undefined,
        password: undefined,
        repeat_password: undefined
    };

    @observable
    isAuth = false;

    @observable
    openLoginModal = false;

    @observable
    openRegisterModal = false;

    userStore = undefined;

    constructor(userStore) {
        this.userStore = userStore;
    }

    @action
    fetchUser = () => {
        setTimeout(() => {
            this.userStore.user = {
                id: "123456",
                name: "Ilya",
                type: "seller"
            };
            this.isAuth = true;
        }, 500);
    };

    @action
    doLogin = () => {
        if (
            this.loginForm.wallet === "seller" &&
            this.loginForm.password === "123"
        ) {
            this.isAuth = true;
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
            this.isAuth = true;
            this.userStore.user = {
                id: "123456",
                name: "Ilya",
                type: "purchaser"
            };
            this.openLoginModal = false;
            localStorage.setItem("accessToken", "123");
            this.resetLoginForm();
        }
    };

    @action
    doRegister = () => {
        console.log("register");
    };

    @action
    doLogout = () => {
        this.isAuth = false;
        this.userStore.user = undefined;
        localStorage.removeItem("accessToken");
    };

    @action
    setLoginFormValue = (key, value) => {
        this.loginForm[key] = value;
    };

    @action
    setRegisterFormValue = (key, value) => {
        this.loginForm[key] = value;
    };

    @action
    setOpenLoginModal = openLoginModal => {
        this.openLoginModal = openLoginModal;
    };

    @action
    setOpenRegisterModal = openRegisterModal => {
        this.openRegisterModal = openRegisterModal;
    };

    @action
    resetLoginForm = () => {
        this.loginForm = {
            wallet: "",
            password: ""
        };
    };
}
