import { observable, action } from "mobx";
import { DataValidatorApi } from "@/api";

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

        DataValidatorApi.getTransactionByType(
            this.userStore.user.ethereumAddress,
            this.page,
            "dataPurchase"
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
