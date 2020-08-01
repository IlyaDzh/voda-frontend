import { observable, action } from "mobx";
import { axiosInstance } from "@/api/axios-instance";

export class SalesHistoryStore {
    @observable
    historyItems = [];

    @observable
    pending = false;

    @observable
    page = -1;

    userStore = undefined;

    constructor(userStore) {
        this.userStore = userStore;
    }

    @action
    fetchSalesHistory = () => {
        this.pending = true;
        this.page += 1;

        axiosInstance
            .get(
                `api/v3/transactions?address=${this.userStore.user.ethereumAddress}&page=${this.page}&size=10&type=dataPurchase`
            )
            .then(({ data }) => {
                this.historyItems.push(...data);
            })
            .finally(() => (this.pending = false));
    };

    @action
    resetHistory = () => {
        this.historyItems = [];
        this.page = -1;
    };
}
