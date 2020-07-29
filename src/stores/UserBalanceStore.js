import { observable, action, reaction } from "mobx";
import { axiosInstance } from "@/api/axios-instance";

export class UserBalanceStore {
    @observable
    balance = undefined;

    @observable
    pending = false;

    @observable
    openBalanceModal = false;

    @observable
    typeBalanceModal = undefined;

    userStore = undefined;

    constructor(userStore) {
        this.userStore = userStore;

        reaction(
            () => this.userStore.user,
            user => (user ? this.fetchUserBalance() : this.resetBalance())
        );
    }

    @action
    fetchUserBalance = () => {
        this.pending = true;
        axiosInstance
            .get(`api/v3/accounts/${this.userStore.user.address}/balance`)
            .then(({ data }) => {
                this.balance = data.balance;
            })
            .finally(() => (this.pending = false));
    };

    @action
    setOpenBalanceModal = (openBalanceModal, typeBalanceModal) => {
        this.openBalanceModal = openBalanceModal;
        if (typeBalanceModal) {
            this.typeBalanceModal = typeBalanceModal;
        }
    };

    @action
    doDeposit = () => {
        console.log("deposit");
    };

    @action
    doWithdraw = () => {
        console.log("withdraw");
    };

    @action
    resetBalance = () => {
        this.balance = undefined;
    };
}
