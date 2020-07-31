import { getYear, getDate } from "date-fns";
import { isStringEmpty } from "@/utils";

const WALLET_REGEXP = /^[a-zA-Z0-9\u3130-\u318F\uAC00-\uD7AF\u4E00-\u9FFF\u3400-\u4DBF\u20000-\u2A6DF\u2A700-\u2B73F\u2B740-\u2B81F\u2B820-\u2CEAF\uF900-\uFAFF\u2F800-\u2FA1F_]+$/;
const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9!@#$%^&*])(?=.{8,})/;

export const validateWallet = wallet => {
    if (isStringEmpty(wallet)) {
        return "Wallet can't be empty";
    }

    if (!WALLET_REGEXP.test(wallet)) {
        return "Wallet contains invalid characters";
    }
};

export const validatePassword = password => {
    if (isStringEmpty(password)) {
        return "Password can't be empty";
    }

    if (password.length < 8) {
        return "Your password must be at least 8 characters long, be of mixed case and also contain digit or symbol";
    }

    if (!PASSWORD_REGEXP.test(password)) {
        return "Your password must be at least 8 characters long, be of mixed case and also contain digit or symbol";
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
    console.log(year, month, day);
    if (day === "") {
        return "Required";
    }

    if (day <= 0 || day > 31) {
        return "Incorrect";
    }
};
