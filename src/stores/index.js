import { DrawerStore } from "./DrawerStore";
import { UserStore } from "./UserStore";
import { LoginStore } from "./LoginStore";
import { RegisterStore } from "./RegisterStore";
import { FilesStore } from "./FilesStore";
import { FileUploadStore } from "./FileUploadStore";
import { DigitalGoodsStore } from "./DigitalGoodsStore";
import { SalesHistoryStore } from "./SalesHistoryStore";

const drawer = new DrawerStore();
const user = new UserStore();
const login = new LoginStore(user);
const register = new RegisterStore(user);
const files = new FilesStore();
const fileUpload = new FileUploadStore();
const digitalGoods = new DigitalGoodsStore();
const salesHistory = new SalesHistoryStore();

export const store = {
    drawer,
    user,
    login,
    register,
    files,
    fileUpload,
    digitalGoods,
    salesHistory
};
