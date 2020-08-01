import { observable, action, reaction } from "mobx";

import { axiosInstance } from "@/api/axios-instance";
import { API_BASE_MART, API_BASE_VALIDATOR } from "@/utils";

export class UserBalanceStore {
    @observable
    balance = undefined;

    @observable
    pending = false;

    @observable
    withdrawNumber = undefined;

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

        const url =
            this.userStore.userType === "purchaser"
                ? `${API_BASE_MART}/api/v2/accounts/current/balance`
                : `${API_BASE_VALIDATOR}/api/v3/accounts/current/balance`;

        axiosInstance
            .get(url)
            .then(({ data }) => {
                this.balance = data.balance;
            })
            .finally(() => (this.pending = false));
    };

    @action
    setWithdrawNumber = withdrawNumber => {
        this.withdrawNumber = withdrawNumber;
    };

    @action
    setOpenWithdrawModal = openWithdrawModal => {
        this.openWithdrawModal = openWithdrawModal;
        if (!openWithdrawModal) {
            this.setWithdrawNumber("");
        }
    };

    @action
    setOpenDepositModal = openDepositModal => {
        this.openDepositModal = openDepositModal;
    };

    @action
    doWithdraw = () => {
        const url =
            this.userStore.userType === "purchaser"
                ? `${API_BASE_MART}/api/v2/withdraw`
                : `${API_BASE_VALIDATOR}/api/v3/withdraw`;

        axiosInstance
            .post(url, {
                amount: this.withdrawNumber
            })
            .then(data => {
                console.log(data);
            });
    };

    @action
    resetBalance = () => {
        this.balance = undefined;
    };
}
