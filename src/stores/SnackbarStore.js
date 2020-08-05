import { observable, action } from "mobx";

export class SnackbarStore {
    @observable
    snackbarOpen = false;

    @observable
    snackbarText = undefined;

    @observable
    snackbarType = "success";

    @action
    setSnackbarOpen = (snackbarOpen, snackbarText, snackbarType = "success") => {
        this.snackbarOpen = snackbarOpen;
        if (snackbarOpen) {
            this.snackbarText = snackbarText;
            this.snackbarType = snackbarType;
        }
    };
}
