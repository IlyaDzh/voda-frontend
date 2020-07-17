import { DrawerStore } from "./DrawerStore";
import { AuthorizationStore } from "./AuthorizationStore";
import { UserStore } from "./UserStore";
import { FilesStore } from "./FilesStore";

const drawer = new DrawerStore();
const user = new UserStore();
const authorization = new AuthorizationStore(user);
const files = new FilesStore();

export const store = { drawer, user, authorization, files };
