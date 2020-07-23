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
                address: "0xd99f1b5534E38b8CBf1ee7a33110cC6F665C8312",
                type: "seller"
            };
            this.isAuth = true;
            this.pending = false;
        }, 500);
    };
}
