import { observable, action } from "mobx";

export class AuthorizationStore {
    @observable
    user = undefined;

    @observable
    typeUser = "seller";

    @observable
    isAuth = false;

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
}
