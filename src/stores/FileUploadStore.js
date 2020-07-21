import { observable, action } from "mobx";

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

    @action
    doUpload = () => {
        console.log("upload");
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
}
