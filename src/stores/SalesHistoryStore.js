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
                `api/v3/transactions?address=${this.userStore.user.address}&page=${this.page}&pageSize=10&type=dataPurchase`
            )
            .then(({ data }) => {
                this.historyItems = data;
            })
            .finally(() => (this.pending = false));
    };

    @action
    resetHistory = () => {
        this.historyItems = [];
        this.page = -1;
    };
}