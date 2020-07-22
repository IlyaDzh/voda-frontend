import { observable, action } from "mobx";

export class UserStore {
    @observable
    user = undefined;

    @observable
    pending = false;

    @observable
    isAuth = false;

    @observable
    authWithForm = false;

    @observable
    logoutWithForm = false;

    @action
    fetchUser = () => {
        this.pending = true;
        setTimeout(() => {
            this.user = {
                id: "123456",
                name: "Ilya",
                type: "purchaser"
            };
            this.isAuth = true;
            this.pending = false;
        }, 500);
    };
}
