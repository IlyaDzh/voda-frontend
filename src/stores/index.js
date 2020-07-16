import { AuthorizationStore } from "./AuthorizationStore";
import { UserStore } from "./UserStore";

const user = new UserStore();
const authorization = new AuthorizationStore(user);

export const store = { user, authorization };
