import { observable, action, reaction } from "mobx";
import { getYear, getMonth, getDate, getDaysInMonth } from "date-fns";

import { DataValidatorApi } from "@/api";
import {
    validateYear,
    validateDay,
    validateFileName,
    validatePrice,
    validateSelect,
    validateInfo,
    validateAttachedFile,
    convertToBase64,
    getFileExtensionFromName,
    removeBase64Header,
    sleep
} from "@/utils";

const CHUNK_SIZE = 5242878;

const INITIAL_UPLOAD_FORM = {
    year: getYear(new Date()),
    month: getMonth(new Date()) + 2,
    day: getDate(new Date()),
    price: "",
    name: "",
    extension: "",
    type: "",
    category: "",
    genre: "",
    info: ""
};

const INITIAL_MAX_DATE = getDaysInMonth(
    new Date(getYear(new Date()), getMonth(new Date()) + 1)
);

const INITIAL_UPLOAD_FORM_ERRORS = {
    year: undefined,
    day: undefined,
    price: undefined,
    name: undefined,
    info: undefined,
    attachedFile: undefined
};

export class FileUploadStore {
    @observable
    uploadForm = INITIAL_UPLOAD_FORM;

    @observable
    uploadFormErrors = INITIAL_UPLOAD_FORM_ERRORS;

    @observable
    openFileUploadModal = false;

    @observable
    attachedFile = undefined;

    @observable
    maxDate = INITIAL_MAX_DATE;

    @observable
    submissionResult = undefined;

    @observable
    pending = false;

    userStore = undefined;
    digitalGoodsStore = undefined;
    userBalanceStore = undefined;

    constructor(userStore, digitalGoodsStore, userBalanceStore) {
        this.userStore = userStore;
        this.digitalGoodsStore = digitalGoodsStore;
        this.userBalanceStore = userBalanceStore;

        reaction(
            () => this.uploadForm.year,
            year => {
                if (year) {
                    this.setMaxDate();
                    this.uploadFormErrors.year = validateYear(year);
                    this.uploadFormErrors.day = validateDay(
                        year,
                        this.uploadForm.month,
                        this.uploadForm.day
                    );
                }
            }
        );

        reaction(
            () => this.uploadForm.month,
            month => {
                if (month) {
                    this.setMaxDate();
                    this.uploadFormErrors.day = validateDay(
                        this.uploadForm.year,
                        month,
                        this.uploadForm.day
                    );
                }
            }
        );

        reaction(
            () => this.uploadForm.day,
            day =>
                day &&
                (this.uploadFormErrors.day = validateDay(
                    this.uploadForm.year,
                    this.uploadForm.month,
                    day
                ))
        );

        reaction(
            () => this.uploadForm.name,
            name => name && (this.uploadFormErrors.name = validateFileName(name))
        );

        reaction(
            () => this.uploadForm.price,
            price => price && (this.uploadFormErrors.price = validatePrice(price))
        );

        reaction(
            () => this.uploadForm.info,
            info => info && (this.uploadFormErrors.info = validateInfo(info))
        );

        reaction(
            () => this.uploadForm.type,
            type => type && (this.uploadFormErrors.type = validateSelect(type))
        );
    }

    @action
    doUpload = async () => {
        if (!this.isFormValid()) {
            return;
        }

        this.pending = true;
        this.submissionResult = undefined;

        try {
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
        } catch {
            this.pending = false;
            this.submissionResult = {
                status: 500,
                message: "Something went wrong"
            };
        } finally {
            if (this.submissionResult && this.submissionResult.status === 200) {
                this.resetUploadForm();
                this.digitalGoodsStore.resetUploadedItems();
                this.digitalGoodsStore.fetchUploadedItems();
                this.userBalanceStore.fetchUserBalance();
            }
        }
    };

    @action
    isFormValid = () => {
        this.uploadFormErrors = {
            year: validateYear(this.uploadForm.year),
            day: validateDay(
                this.uploadForm.year,
                this.uploadForm.month,
                this.uploadForm.day
            ),
            name: validateFileName(this.uploadForm.name),
            price: validatePrice(this.uploadForm.price),
            info: validateInfo(this.uploadForm.info),
            type: validateSelect(this.uploadForm.type),
            attachedFile: validateAttachedFile(this.attachedFile)
        };

        return !Boolean(
            this.uploadFormErrors.year ||
                this.uploadFormErrors.day ||
                this.uploadFormErrors.name ||
                this.uploadFormErrors.price ||
                this.uploadFormErrors.info ||
                this.uploadFormErrors.type ||
                this.uploadFormErrors.attachedFile
        );
    };

    @action
    setAttachedFile = file => {
        this.attachedFile = file;
        this.uploadFormErrors.attachedFile = undefined;
    };

    @action
    setUploadFormValue = (key, value) => {
        this.uploadForm[key] = value;
    };

    @action
    setMaxDate = () => {
        this.maxDate = getDaysInMonth(
            new Date(+this.uploadForm.year, +this.uploadForm.month - 1)
        );
    };

    @action
    setOpenFileUploadModal = openFileUploadModal => {
        this.openFileUploadModal = openFileUploadModal;
        if (!openFileUploadModal) {
            this.resetAll();
        }
    };

    @action
    resetUploadForm = () => {
        this.uploadForm = INITIAL_UPLOAD_FORM;
        this.uploadFormErrors = INITIAL_UPLOAD_FORM_ERRORS;
        this.maxDate = INITIAL_MAX_DATE;
        this.attachedFile = undefined;
    };

    @action
    resetAll = () => {
        this.resetUploadForm();
        this.submissionResult = undefined;
    };

    createLocalFile = async () => {
        return (await DataValidatorApi.createLocalFile()).data;
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

            await DataValidatorApi.uploadFileByChunk(fileId, chunk);
        }
    };

    uploadLocalFileToServiceNode = async localFileId => {
        const mimeType =
            this.attachedFile.type && this.attachedFile.type.length !== 0
                ? this.attachedFile.type
                : "application/octet-stream";

        return (
            await DataValidatorApi.uploadLocalFile(localFileId, {
                keepUntil: new Date(
                    `${this.uploadForm.year}/${this.uploadForm.month}/${this.uploadForm.day}`
                ).toISOString(),
                name: this.uploadForm.name,
                mimeType,
                size: this.attachedFile.size,
                dataValidatorAddress: this.userStore.user.ethereumAddress,
                price: Number(this.uploadForm.price),
                extension: getFileExtensionFromName(this.attachedFile.name),
                additional: {
                    fullDescription: this.uploadForm.info,
                    hashTags: [
                        this.uploadForm.type,
                        this.uploadForm.category,
                        this.uploadForm.genre
                    ]
                }
            })
        ).data;
    };

    checkIfLocalFileUploadToDds = async serviceNodeFileId => {
        let fileFullyUploaded = false;
        let failed = false;

        while (!fileFullyUploaded && !failed) {
            await sleep(5000);
            const fileUploadingCheckingResponse = await DataValidatorApi.checkIfLocalFileUpload(
                serviceNodeFileId
            );
            failed = fileUploadingCheckingResponse.data.failed;
            fileFullyUploaded = fileUploadingCheckingResponse.data.fullyUploaded;
        }

        return { failed, fileFullyUploaded };
    };

    deleteLocalFile = async serviceNodeFileId => {
        return await DataValidatorApi.deleteLocalFile(serviceNodeFileId);
    };
}
