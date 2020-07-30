import { observable, action } from "mobx";
import { axiosInstance } from "@/api/axios-instance";

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

        axiosInstance
            .get(
                `api/v3/transactions?address=${this.userStore.user.address}&page=${this.page}&size=10&type=dataUpload`
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
