import { observable, action } from "mobx";

export class AuthorizationStore {
    @observable
    user = undefined;

    @observable
    typeUser = "seller";

    @observable
    isAuth = false;

    @observable
    openLoginModal = false;

    @observable
    openRegisterModal = false;

    @action
    fetchUser = () => {
        console.log("start fetching");
        setTimeout(() => {
            this.user = {
                id: "123456",
                name: "Ilya"
            };
            this.isAuth = true;
            console.log("stop fetching");
        }, 500);
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
