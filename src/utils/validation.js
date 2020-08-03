import { getYear, getDaysInMonth } from "date-fns";
import { isStringEmpty } from "@/utils";

const WALLET_REGEXP = /^[0-9a-zA-Z_-]{6,}$/;
const PASSWORD_REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const WITHDRAW_NUMBER_REGEXP = /^[0-9]*[.,]?[0-9]+$/;

export const validateWallet = wallet => {
    if (isStringEmpty(wallet)) {
        return "Wallet can't be empty";
    }

    if (wallet.length <= 8) {
        return "Wallet is not strong";
    }

    if (!WALLET_REGEXP.test(wallet)) {
        return "Wallet contains invalid characters";
    }
};

export const validatePassword = password => {
    if (isStringEmpty(password)) {
        return "Password can't be empty";
    }

    if (!PASSWORD_REGEXP.test(password)) {
        return "Your password can only contain Latin letters, must be at least 8 characters long, be of mixed case and also contain digit or symbol";
    }
};

export const validatePasswordConfirmation = (passwordConfirmation, password) => {
    if (passwordConfirmation !== password) {
        return "Password mismatch";
    }
};

export const validateFileName = name => {
    if (isStringEmpty(name)) {
        return "File name can't be empty";
    }
};

export const validatePrice = price => {
    if (price === undefined) {
        return "Price can't be empty";
    }

    if (isNaN(price)) {
        return "Price must be a valid number";
    }

    if (price <= 0) {
        return "Price must be positive";
    }
};

export const validateInfo = info => {
    if (info.length >= 350) {
        return "Info is too long";
    }
};

export const validateAttachedFile = file => {
    if (file === undefined || file === null) {
        return "File is required";
    }
};

export const validateYear = year => {
    if (year === "") {
        return "Required";
    }

    if (year < getYear(new Date())) {
        return "Incorrect";
    }
};

export const validateDay = (year, month, day) => {
    if (day === "") {
        return "Required";
    }

    if (day <= 0 || day > getDaysInMonth(new Date(+year, +month - 1))) {
        return "Incorrect";
    }
};

export const validateSelect = select => {
    if (isStringEmpty(select)) {
        return "Can't be empty";
    }
};

export const validateWithdrawNumber = number => {
    if (Number(number) === 0) {
        return "Your number must be positive";
    }

    if (!WITHDRAW_NUMBER_REGEXP.test(Number(number))) {
        return "Invalid balance to withdraw";
    }
};
