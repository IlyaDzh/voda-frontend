import { axiosInstance } from "./axios-instance";
import { API_BASE_MART } from "@/utils";

export class DataMartApi {
    static getRegisterUrl() {
        return `${API_BASE_MART}/api/v2/accounts`;
    }

    static getCurrentUserUrl() {
        return `${API_BASE_MART}/api/v2/accounts/current`;
    }

    static getCurrentBalanceUrl() {
        return `${API_BASE_MART}/api/v2/accounts/current/balance`;
    }

    static getWithdrawBalanceUrl() {
        return `${API_BASE_MART}/api/v2/accounts/withdraw`;
    }

    static getSearchByQueryUrl(query, page) {
        return `${API_BASE_MART}/api/v2/files/search?query=${query}&page=${page}&size=9`;
    }

    static getCountByQueryUrl(query) {
        return `${API_BASE_MART}/api/v2/files/search/count?query=${query}`;
    }

    static getAllFilesUrl(page) {
        return `${API_BASE_MART}/api/v2/files/search?page=${page}&size=9`;
    }

    static getAllCountUrl() {
        return `${API_BASE_MART}/api/v2/files/search/count`;
    }

    static getBalanceTransactionsUrl() {
        return `${API_BASE_MART}/api/v2/accounts/current/lambda-transactions`;
    }

    static login(postData) {
        return axiosInstance.post(`${API_BASE_MART}/api/v2/auth/login`, postData);
    }

    static getTransactions(dataMartAddress, page) {
        return axiosInstance.get(
            `${API_BASE_MART}/api/v2/transactions/${dataMartAddress}?page=${page}&size=10`
        );
    }

    static checkFileStatus(dataMartAddress, fileId) {
        return axiosInstance.get(
            `${API_BASE_MART}/api/v2/transactions/${dataMartAddress}/purchase-status/${fileId}`
        );
    }

    static purchaseFile(fileId, dataMartAddress) {
        return axiosInstance.post(
            `${API_BASE_MART}/api/v2/files/${fileId}/purchase`,
            { dataMartAddress }
        );
    }

    static downloadFile(fileId) {
        return axiosInstance.get(`${API_BASE_MART}/api/v2/files/${fileId}`);
    }
}
