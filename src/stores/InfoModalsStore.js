import { observable, action } from "mobx";

export class InfoModalsStore {
    @observable
    openGoodsInfoModal = false;

    @observable
    goodsInfoModalWithEdit = false;

    @observable
    openTxnInfoModal = false;

    @observable
    currentGoodsInfo = undefined;

    @observable
    currentTxnInfo = undefined;

    @action
    setOpenGoodsInfoModal = (
        openGoodsInfoModal,
        currentGoodsInfo,
        withEdit = false
    ) => {
        this.openGoodsInfoModal = openGoodsInfoModal;
        if (currentGoodsInfo) {
            this.currentGoodsInfo = currentGoodsInfo;
            this.goodsInfoModalWithEdit = withEdit;
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
