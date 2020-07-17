import { observable, action } from "mobx";

export class DrawerStore {
    @observable
    mobileOpen = false;

    @action
    setMobileOpen = mobileOpen => {
        this.mobileOpen = mobileOpen;
    };

    @action
    toggleMobileOpen = () => {
        this.mobileOpen = !this.mobileOpen;
    };
}
