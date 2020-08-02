import { observable, action } from "mobx";
import { DataValidatorApi } from "@/api";

export class DigitalGoodsStore {
    @observable
    uploadedItems = [];

    @observable
    pending = false;

    @observable
    page = -1;

    userStore = undefined;

    constructor(userStore) {
        this.userStore = userStore;
    }

    @action
    fetchUploadedItems = () => {
        this.pending = true;
        this.page += 1;

        DataValidatorApi.getTransactionByType(
            this.userStore.user.ethereumAddress,
            this.page,
            "dataUpload"
        )
            .then(({ data }) => {
                this.uploadedItems.push(...data);
            })
            .finally(() => (this.pending = false));
    };

    @action
    resetUploadedItems = () => {
        this.uploadedItems = [];
        this.page = -1;
    };
}
