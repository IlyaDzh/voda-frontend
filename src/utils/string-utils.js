export const isStringEmpty = string => !(string && string.trim().length !== 0);

export const capitalizeFirstLetter = string =>
    typeof string !== "string"
        ? ""
        : string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
