import { DrawerStore } from "./DrawerStore";
import { UserStore } from "./UserStore";
import { UserBalanceStore } from "./UserBalanceStore";
import { LoginStore } from "./LoginStore";
import { RegisterStore } from "./RegisterStore";
import { FilesStore } from "./FilesStore";
import { DigitalGoodsStore } from "./DigitalGoodsStore";
import { SalesHistoryStore } from "./SalesHistoryStore";
import { DataPurchasesStore } from "./DataPurchasesStore";
import { FileUploadStore } from "./FileUploadStore";
import { InfoModalsStore } from "./InfoModalsStore";

const drawer = new DrawerStore();
const user = new UserStore();
const userBalance = new UserBalanceStore(user);
const login = new LoginStore(user);
const register = new RegisterStore(user);
const files = new FilesStore();
const digitalGoods = new DigitalGoodsStore(user);
const salesHistory = new SalesHistoryStore(user);
const dataPurchases = new DataPurchasesStore(user);
const fileUpload = new FileUploadStore(user, digitalGoods);
const infoModals = new InfoModalsStore();

export const store = {
    drawer,
    user,
    userBalance,
    login,
    register,
    files,
    digitalGoods,
    salesHistory,
    dataPurchases,
    fileUpload,
    infoModals
};
