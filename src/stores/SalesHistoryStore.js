import { observable, action } from "mobx";

export class SalesHistoryStore {
    @observable
    openTxnInfoModal = false;

    @observable
    currentTxnInfo = undefined;

    @action
    setOpenTxnInfoModal = (openTxnInfoModal, currentTxnInfo) => {
        this.openTxnInfoModal = openTxnInfoModal;
        this.currentTxnInfo = currentTxnInfo || undefined;
    };
}
