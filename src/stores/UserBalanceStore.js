import { observable, action, reaction } from "mobx";

import { axiosInstance } from "@/api/axios-instance";
import { validateWithdrawNumber, API_BASE_MART, API_BASE_VALIDATOR } from "@/utils";

export class UserBalanceStore {
    @observable
    balance = undefined;

    @observable
    balanceValidateError = undefined;

    @observable
    pending = false;

    @observable
    widthdrawPending = false;

    @observable
    withdrawNumber = undefined;

    @observable
    withdrawSubmissionError = undefined;

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
            this.resetWithdrawForm();
        }
    };

    @action
    setOpenDepositModal = openDepositModal => {
        this.openDepositModal = openDepositModal;
    };

    @action
    doWithdraw = () => {
        if (!this.validateForm()) {
            return;
        }

        this.withdrawSubmissionError = undefined;
        this.balanceValidateError = undefined;

        this.widthdrawPending = true;

        const url =
            this.userStore.userType === "purchaser"
                ? `${API_BASE_MART}/api/v2/accounts/withdraw`
                : `${API_BASE_VALIDATOR}/api/v3/accounts/withdraw`;

        axiosInstance
            .post(url, {
                amount: Number(this.withdrawNumber)
            })
            .then(() => {})
            .catch(error => {
                this.withdrawSubmissionError = error;
            })
            .finally(() => (this.widthdrawPending = false));
    };

    @action
    validateForm = () => {
        this.balanceValidateError = validateWithdrawNumber(this.withdrawNumber);

        return !Boolean(this.balanceValidateError);
    };

    @action
    resetBalance = () => {
        this.balance = undefined;
    };

    @action
    resetWithdrawForm = () => {
        this.withdrawNumber = undefined;
        this.withdrawSubmissionError = undefined;
        this.balanceValidateError = undefined;
    };
}
