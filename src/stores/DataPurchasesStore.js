import { observable, action } from "mobx";

import { axiosInstance } from "@/api/axios-instance";
import { API_BASE_MART } from "@/utils";

export class DataPurchasesStore {
    @observable
    purchasesItems = [];

    @observable
    pending = false;

    @observable
    page = -1;

    userStore = undefined;

    constructor(userStore) {
        this.userStore = userStore;
    }

    @action
    fetchDataPurchases = () => {
        this.pending = true;
        this.page += 1;

        axiosInstance
            .get(
                `${API_BASE_MART}/api/v2/transactions/${this.userStore.user.ethereumAddress}?page=${this.page}&size=10`
            )
            .then(({ data }) => {
                this.purchasesItems.push(...data);
            })
            .finally(() => (this.pending = false));
    };

    @action
    resetData = () => {
        this.purchasesItems = [];
        this.page = -1;
    };
}
