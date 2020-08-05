import { observable, action } from "mobx";
import downloadFile from "js-file-download";

import { DataMartApi } from "@/api";

export class FilePurchaseStore {
    @observable
    currentPurchasingFile = undefined;

    userStore = undefined;
    userBalanceStore = undefined;
    snackbarStore = undefined;

    constructor(userStore, userBalanceStore, snackbarStore) {
        this.userStore = userStore;
        this.userBalanceStore = userBalanceStore;
        this.snackbarStore = snackbarStore;
    }

    @action
    doPurchase = async file => {
        if (this.userBalanceStore.balance <= 0) {
            this.snackbarStore.setSnackbarOpen(
                true,
                "Not enough balance to purchase",
                "error"
            );
            return;
        }

        this.currentPurchasingFile = file.id;

        file.pending = true;
        let filePurchaseStatus;

        filePurchaseStatus = await this.checkFilePurchaseStatus(
            this.userStore.user.ethereumAddress,
            file.id
        );

        if (filePurchaseStatus.purchased) {
            file.pending = false;
            file.purchased = true;
            this.currentPurchasingFile = undefined;
            return;
        }

        DataMartApi.purchaseFile(file.id, this.userStore.user.ethereumAddress)
            .then(async () => {
                DataMartApi.downloadFile(file.id).then(response =>
                    downloadFile(response.data, `${file.id}.${file.extension}`)
                );

                filePurchaseStatus = await this.checkFilePurchaseStatus(
                    this.userStore.user.ethereumAddress,
                    file.id
                );
                file.purchased = filePurchaseStatus.purchased;
            })
            .catch(() => {
                this.snackbarStore.setSnackbarOpen(
                    true,
                    "Something went wrong",
                    "error"
                );
            })
            .finally(() => {
                file.pending = false;
                this.currentPurchasingFile = undefined;
            });
    };

    @action
    downloadFile = file => {
        DataMartApi.downloadFile(file.id).then(response =>
            downloadFile(response.data, `${file.id}.${file.extension}`)
        );
    };

    checkFilePurchaseStatus = async (dataMartAddress, fileId) => {
        return (await DataMartApi.checkFileStatus(dataMartAddress, fileId)).data;
    };
}
