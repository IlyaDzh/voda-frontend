import { observable, action } from "mobx";

export class InfoModalsStore {
    @observable
    openGoodsInfoModal = false;

    @observable
    openTxnInfoModal = false;

    @observable
    currentGoodsInfo = undefined;

    @observable
    currentTxnInfo = undefined;

    @action
    setOpenGoodsInfoModal = (openGoodsInfoModal, currentGoodsInfo) => {
        this.openGoodsInfoModal = openGoodsInfoModal;
        if (currentGoodsInfo) {
            this.currentGoodsInfo = currentGoodsInfo;
        }
    };

    @action
    setOpenTxnInfoModal = (openTxnInfoModal, currentTxnInfo) => {
        this.openTxnInfoModal = openTxnInfoModal;
        if (currentTxnInfo) {
            this.currentTxnInfo = currentTxnInfo;
        }
    };
}
