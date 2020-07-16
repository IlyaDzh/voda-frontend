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
        console.log("start fetching");
        setTimeout(() => {
            this.userStore.user = {
                id: "123456",
                name: "Ilya"
            };
            this.isAuth = true;
            console.log("stop fetching");
        }, 500);
    };

    @action
    doLogin = () => {
        if (
            this.loginForm.wallet === "123456" &&
            this.loginForm.password === "123456"
        ) {
            this.isAuth = true;
            this.openLoginModal = false;
        } else {
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
        sessionStorage.removeItem("accessToken");
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
}
