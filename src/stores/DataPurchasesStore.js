import { observable, action } from "mobx";
import { DataMartApi } from "@/api";

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

        DataMartApi.getTransactions(this.userStore.user.ethereumAddress, this.page)
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
