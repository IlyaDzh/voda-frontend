import { observable, action } from "mobx";

export class DigitalGoodsStore {
    @observable
    openGoodsInfoModal = false;

    @observable
    currentGoodsInfo = undefined;

    @action
    setOpenGoodsInfoModal = (openGoodsInfoModal, currentGoodsInfo) => {
        this.openGoodsInfoModal = openGoodsInfoModal;
        this.currentGoodsInfo = currentGoodsInfo || undefined;
    };
}
