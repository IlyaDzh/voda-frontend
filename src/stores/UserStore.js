import { observable, action } from "mobx";

export class UserStore {
    @observable
    user = undefined;
}
