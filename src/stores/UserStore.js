import { observable, action } from "mobx";
import { axiosInstance, DataMartApi, DataValidatorApi } from "@/api";

export class UserStore {
    @observable
    user = undefined;

    @observable
    userType = localStorage.getItem("userType");

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

        const url =
            this.userType === "purchaser"
                ? DataMartApi.getCurrentUserUrl()
                : DataValidatorApi.getCurrentUserUrl();

        axiosInstance
            .get(url)
            .then(({ data }) => {
                this.user = data;
                this.isAuth = true;
            })
            .catch(() => {
                this.userType = undefined;
                this.logoutWithForm = true;
                this.authWithForm = false;
                localStorage.removeItem("accessToken");
                localStorage.removeItem("userType");
            })
            .finally(() => {
                this.pending = false;
            });
    };

    @action
    doLogout = () => {
        this.logoutWithForm = true;
        this.authWithForm = false;
        this.user = undefined;
        this.userType = undefined;
        this.isAuth = false;
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userType");
    };
}
