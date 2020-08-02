import { axiosInstance } from "./axios-instance";
import { API_BASE_VALIDATOR } from "@/utils";

export class DataValidatorApi {
    static getLoginUrl() {
        return `${API_BASE_VALIDATOR}/api/v3/auth/login`;
    }

    static getRegisterUrl() {
        return `${API_BASE_VALIDATOR}/api/v3/accounts`;
    }

    static getCurrentUserUrl() {
        return `${API_BASE_VALIDATOR}/api/v3/accounts/current`;
    }

    static getCurrentBalanceUrl() {
        return `${API_BASE_VALIDATOR}/api/v3/accounts/current/balance`;
    }

    static getWithdrawBalanceUrl() {
        return `${API_BASE_VALIDATOR}/api/v3/accounts/withdraw`;
    }

    static getTransactionByType(dataValidatorAddress, page, type) {
        return axiosInstance.get(
            `${API_BASE_VALIDATOR}/api/v3/transactions?address=${dataValidatorAddress}&page=${page}&size=10&type=${type}`
        );
    }

    static createLocalFile() {
        return axiosInstance.post(`${API_BASE_VALIDATOR}/api/v3/files/local`);
    }

    static uploadFileByChunk(fileId, chunk) {
        return axiosInstance.post(
            `${API_BASE_VALIDATOR}/api/v3/files/local/${fileId}/chunk`,
            { chunkData: chunk }
        );
    }

    static uploadLocalFile(localFileId, postData) {
        return axiosInstance.post(
            `${API_BASE_VALIDATOR}/api/v3/files/local/${localFileId}/to-service-node`,
            postData
        );
    }

    static checkIfLocalFileUpload(serviceNodeFileId) {
        return axiosInstance.get(
            `${API_BASE_VALIDATOR}/api/v3/files/service-node/${serviceNodeFileId}/status`
        );
    }

    static deleteLocalFile(serviceNodeFileId) {
        return axiosInstance.delete(
            `${API_BASE_VALIDATOR}/api/v3/files/service-node/${serviceNodeFileId}`
        );
    }
}
