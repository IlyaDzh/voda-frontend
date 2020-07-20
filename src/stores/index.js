import { DrawerStore } from "./DrawerStore";
import { UserStore } from "./UserStore";
import { LoginStore } from "./LoginStore";
import { RegisterStore } from "./RegisterStore";
import { FilesStore } from "./FilesStore";

const drawer = new DrawerStore();
const user = new UserStore();
const login = new LoginStore(user);
const register = new RegisterStore(user);
const files = new FilesStore();

export const store = { drawer, user, login, register, files };