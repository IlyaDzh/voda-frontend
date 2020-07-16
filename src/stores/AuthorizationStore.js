import { observable, action } from "mobx";

export class AuthorizationStore {
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
        console.log("login");
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
    setOpenLoginModal = openLoginModal => {
        this.openLoginModal = openLoginModal;
    };

    @action
    setOpenRegisterModal = openRegisterModal => {
        this.openRegisterModal = openRegisterModal;
    };
}
