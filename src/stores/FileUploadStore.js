import { observable, action } from "mobx";
import { axiosInstance } from "@/api/axios-instance";

import { convertToBase64, removeBase64Header } from "@/utils";

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

    @action
    doUpload = async () => {
        const localFileRecord = await this.createLocalFile();
        await this.uploadFileByChunks(localFileRecord.id);
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
}
