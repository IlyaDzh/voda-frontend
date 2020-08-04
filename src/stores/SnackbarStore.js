import { observable, action } from "mobx";

export class SnackbarStore {
    @observable
    snackbarOpen = false;

    @observable
    snackbarText = undefined;

    @action
    setSnackbarOpen = (snackbarOpen, snackbarText) => {
        this.snackbarOpen = snackbarOpen;
        this.snackbarText = snackbarText;
    };
}
