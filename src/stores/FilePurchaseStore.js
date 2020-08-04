import { observable, action } from "mobx";
import downloadFile from "js-file-download";

import { DataMartApi } from "@/api";

export class FilePurchaseStore {
    @observable
    error = undefined;

    @observable
    response = undefined;

    userStore = undefined;

    constructor(userStore) {
        this.userStore = userStore;
    }

    @action
    doPurchase = async file => {
        file.pending = true;
        this.error = undefined;
        this.response = undefined;
        let filePurchaseStatus;

        filePurchaseStatus = await this.checkFilePurchaseStatus(
            this.userStore.user.ethereumAddress,
            file.id
        );

        if (filePurchaseStatus.purchased) {
            file.pending = false;
            file.purchased = true;
            return;
        }

        DataMartApi.purchaseFile(file.id, this.userStore.user.ethereumAddress)
            .then(async ({ data }) => {
                this.response = data;

                DataMartApi.downloadFile(file.id).then(response =>
                    downloadFile(response.data, `${file.id}.${file.extension}`)
                );

                filePurchaseStatus = await this.checkFilePurchaseStatus(
                    this.userStore.user.ethereumAddress,
                    file.id
                );
                file.purchased = filePurchaseStatus.purchased;
            })
            .catch(error => (this.error = error))
            .finally(() => (file.pending = false));
    };

    checkFilePurchaseStatus = async (dataMartAddress, fileId) => {
        return (await DataMartApi.checkFileStatus(dataMartAddress, fileId)).data;
    };
}
