import { DrawerStore } from "./DrawerStore";
import { SnackbarStore } from "./SnackbarStore";
import { UserStore } from "./UserStore";
import { UserBalanceStore } from "./UserBalanceStore";
import { LoginStore } from "./LoginStore";
import { RegisterStore } from "./RegisterStore";
import { FilesStore } from "./FilesStore";
import { DigitalGoodsStore } from "./DigitalGoodsStore";
import { SalesHistoryStore } from "./SalesHistoryStore";
import { DataPurchasesStore } from "./DataPurchasesStore";
import { FileUploadStore } from "./FileUploadStore";
import { FilePurchaseStore } from "./FilePurchaseStore";
import { InfoModalsStore } from "./InfoModalsStore";

const drawer = new DrawerStore();
const snackbar = new SnackbarStore();
const user = new UserStore();
const userBalance = new UserBalanceStore(user, snackbar);
const login = new LoginStore(user, drawer);
const register = new RegisterStore(user, drawer);
const files = new FilesStore();
const digitalGoods = new DigitalGoodsStore(user);
const salesHistory = new SalesHistoryStore(user);
const dataPurchases = new DataPurchasesStore(user);
const fileUpload = new FileUploadStore(user, digitalGoods, userBalance, snackbar);
const filePurchase = new FilePurchaseStore(user);
const infoModals = new InfoModalsStore();

export const store = {
    drawer,
    snackbar,
    user,
    userBalance,
    login,
    register,
    files,
    digitalGoods,
    salesHistory,
    dataPurchases,
    fileUpload,
    filePurchase,
    infoModals
};
