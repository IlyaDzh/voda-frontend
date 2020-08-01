import { getYear, getDaysInMonth } from "date-fns";
import { isStringEmpty } from "@/utils";

// const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9!@#$%^&*])(?=.{8,})/;

export const validateWallet = wallet => {
    if (isStringEmpty(wallet)) {
        return "Wallet can't be empty";
    }
};

export const validatePassword = password => {
    if (isStringEmpty(password)) {
        return "Password can't be empty";
    }

    // if (password.length < 8) {
    //     return "Your password must be at least 8 characters long, be of mixed case and also contain digit or symbol";
    // }

    // if (!PASSWORD_REGEXP.test(password)) {
    //     return "Your password must be at least 8 characters long, be of mixed case and also contain digit or symbol";
    // }
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
