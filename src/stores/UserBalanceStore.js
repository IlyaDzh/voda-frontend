import { observable, action, reaction } from "mobx";
import { axiosInstance } from "@/api/axios-instance";

export class UserBalanceStore {
    @observable
    balance = undefined;

    @observable
    pending = false;

    @observable
    openWithdrawModal = false;

    @observable
    openDepositModal = false;

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
    setOpenWithdrawModal = openWithdrawModal => {
        this.openWithdrawModal = openWithdrawModal;
    };

    @action
    setOpenDepositModal = openDepositModal => {
        this.openDepositModal = openDepositModal;
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
