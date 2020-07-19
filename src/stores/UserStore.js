import { observable, action } from "mobx";

export class UserStore {
    @observable
    user = undefined;

    @observable
    isAuth = false;

    @action
    fetchUser = () => {
        setTimeout(() => {
            this.user = {
                id: "123456",
                name: "Ilya",
                type: "seller"
            };
            this.isAuth = true;
        }, 500);
    };
}
