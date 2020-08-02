import { observable, action } from "mobx";
import downloadFile from "js-file-download";

import { DataMartApi } from "@/api";

export class FilePurchaseStore {
    @observable
    pending = false;

    @observable
    error = undefined;

    @observable
    response = undefined;

    @observable
    filePurchaseStatus = undefined;

    userStore = undefined;

    constructor(userStore) {
        this.userStore = userStore;
    }

    @action
    doPurchase = async file => {
        this.pending = true;
        this.error = undefined;
        this.response = undefined;
        this.filePurchaseStatus = undefined;

        this.filePurchaseStatus = await this.checkFilePurchaseStatus(
            this.userStore.user.ethereumAddress,
            file.id
        );

        if (this.filePurchaseStatus.purchased) {
            this.pending = false;
            return;
        }

        DataMartApi.purchaseFile(file.id, this.userStore.user.ethereumAddress)
            .then(async ({ data }) => {
                this.response = data;

                DataMartApi.downloadFile(file.id).then(response =>
                    downloadFile(response.data, `${file.id}.${file.extension}`)
                );

                this.filePurchaseStatus = this.checkFilePurchaseStatus(
                    this.userStore.user.ethereumAddress,
                    file.id
                );
            })
            .catch(error => (this.error = error))
            .finally(() => (this.pending = false));
    };

    checkFilePurchaseStatus = async (dataMartAddress, fileId) => {
        return (await DataMartApi.checkFileStatus(dataMartAddress, fileId)).data;
    };
}
