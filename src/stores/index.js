import { DrawerStore } from "./DrawerStore";
import { UserStore } from "./UserStore";
import { LoginStore } from "./LoginStore";
import { RegisterStore } from "./RegisterStore";
import { FilesStore } from "./FilesStore";
import { FileUploadStore } from "./FileUploadStore";
import { InfoModalsStore } from "./InfoModalsStore";

const drawer = new DrawerStore();
const user = new UserStore();
const login = new LoginStore(user);
const register = new RegisterStore(user);
const files = new FilesStore();
const fileUpload = new FileUploadStore();
const infoModals = new InfoModalsStore();

export const store = {
    drawer,
    user,
    login,
    register,
    files,
    fileUpload,
    infoModals
};
