import { observable, action } from "mobx";
import { axiosInstance } from "@/api/axios-instance";

import {
    convertToBase64,
    getFileExtensionFromName,
    removeBase64Header,
    sleep
} from "@/utils";

const CHUNK_SIZE = 5242878;

export class FileUploadStore {
    @observable
    uploadForm = {
        year: "",
        month: "",
        day: "",
        price: "",
        name: "",
        extension: "",
        type: "",
        category: "",
        genre: "",
        info: ""
    };

    @observable
    openFileUploadModal = false;

    @observable
    attachedFile = undefined;

    @observable
    submissionResult = undefined;

    @observable
    pending = false;

    userStore = undefined;

    constructor(userStore) {
        this.userStore = userStore;
    }

    @action
    doUpload = async () => {
        this.pending = true;

        const localFileRecord = await this.createLocalFile();

        await this.uploadFileByChunks(localFileRecord.id);

        const serviceNodeFileRecord = await this.uploadLocalFileToServiceNode(
            localFileRecord.id
        );

        const fileUploadingResponse = await this.checkIfLocalFileUploadToDds(
            serviceNodeFileRecord.id
        );

        this.pending = false;

        if (fileUploadingResponse.failed) {
            this.submissionResult = {
                status: 500,
                message: "Error occurred while uploading file, please try again"
            };
        } else if (fileUploadingResponse.fileFullyUploaded) {
            this.submissionResult = {
                status: 200,
                message: "You have successfully uploaded the file"
            };
        }

        await this.deleteLocalFile(serviceNodeFileRecord.id);
    };

    @action
    setAttachedFile = file => {
        this.attachedFile = file;
        this.uploadForm.name = file.name;
    };

    @action
    setUploadFormValue = (key, value) => {
        this.uploadForm[key] = value;
    };

    @action
    setOpenFileUploadModal = openFileUploadModal => {
        this.openFileUploadModal = openFileUploadModal;
    };

    @action
    resetUploadForm = () => {
        this.uploadForm = {
            price: "",
            name: "",
            extension: "",
            type: "",
            category: "",
            genre: "",
            info: ""
        };
    };

    createLocalFile = async () => {
        return (await axiosInstance.post(`/api/v3/files/local`)).data;
    };

    uploadFileByChunks = async localFileId => {
        const targetPosition = this.attachedFile.size;
        const fileId = localFileId;
        const totalChunks = Math.ceil(targetPosition / CHUNK_SIZE);
        let currentChunk = 0;
        let chunk;

        while (currentChunk < totalChunks) {
            const offset = currentChunk * CHUNK_SIZE;
            chunk = removeBase64Header(
                await convertToBase64(
                    this.attachedFile.slice(offset, offset + CHUNK_SIZE)
                )
            );
            if (offset + CHUNK_SIZE < targetPosition) {
                if (chunk.endsWith("=")) {
                    chunk = chunk.substring(0, chunk.indexOf("="));
                } else if (chunk.endsWith("==")) {
                    chunk = chunk.substring(0, chunk.indexOf("=="));
                }
            }
            currentChunk++;
            await axiosInstance.post(`/api/v3/files/local/${fileId}/chunk`, {
                chunkData: chunk
            });
        }
    };

    uploadLocalFileToServiceNode = async localFileId => {
        const mimeType =
            this.attachedFile.type && this.attachedFile.type.length !== 0
                ? this.attachedFile.type
                : "application/octet-stream";
        return (
            await axiosInstance.post(
                `/api/v3/files/local/${localFileId}/to-service-node`,
                {
                    keepUntil: new Date("2020/08/30").toISOString(),
                    name: this.uploadForm.name,
                    mimeType,
                    size: this.attachedFile.size,
                    dataValidatorAddress: this.userStore.user.address,
                    price: Number(this.uploadForm.price),
                    extension: getFileExtensionFromName(this.attachedFile.name),
                    additional: {
                        fullDescription: this.uploadForm.info
                    }
                }
            )
        ).data;
    };

    checkIfLocalFileUploadToDds = async serviceNodeFileId => {
        let fileFullyUploaded = false;
        let failed = false;

        while (!fileFullyUploaded && !failed) {
            await sleep(5000);
            const fileUploadingCheckingResponse = await axiosInstance.get(
                `/api/v3/files/service-node/${serviceNodeFileId}/status`
            );
            failed = fileUploadingCheckingResponse.data.failed;
            fileFullyUploaded = fileUploadingCheckingResponse.data.fullyUploaded;
        }

        return { failed, fileFullyUploaded };
    };

    deleteLocalFile = async serviceNodeFileId => {
        return await axiosInstance.delete(
            `/api/v3/files/service-node/${serviceNodeFileId}`
        );
    };
}
