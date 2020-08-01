import { observable, action } from "mobx";

import { axiosInstance } from "@/api/axios-instance";
import { API_BASE_MART, API_BASE_VALIDATOR } from "@/utils";

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
                ? `${API_BASE_MART}/api/v2/accounts/current`
                : `${API_BASE_VALIDATOR}/api/v3/accounts/current`;

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
