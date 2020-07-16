import { AuthorizationStore } from "./AuthorizationStore";
import { UserStore } from "./UserStore";
import { DrawerStore } from "./DrawerStore";

const user = new UserStore();
const authorization = new AuthorizationStore(user);
const drawer = new DrawerStore();

export const store = { user, authorization, drawer };
