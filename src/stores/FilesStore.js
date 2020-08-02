import { observable, get, action, reaction } from "mobx";
import { axiosInstance, DataMartApi } from "@/api";
import { debounce } from "@/utils";

export class FilesStore {
    @observable
    exploreFiles = [];

    @observable
    pending = false;

    @observable
    searchValue = undefined;

    @observable
    page = 1;

    @observable
    shouldResetResults = false;

    @observable
    countFiles = undefined;

    @get
    nextPageIsExist = () => {
        return this.exploreFiles.length < this.countFiles;
    };

    constructor() {
        reaction(
            () => this.searchValue,
            debounce(() => {
                this.shouldResetResults = true;
                this.fetchExploreFiles();
            }, 350)
        );
    }

    @action
    fetchExploreFiles = () => {
        if (this.shouldResetResults) {
            this.exploreFiles = [];
            this.page = 1;
            this.shouldResetResults = false;
            this.countFiles = undefined;
        }

        this.pending = true;

        let urlFiles, urlCount;
        if (this.searchValue) {
            urlFiles = DataMartApi.getSearchByQueryUrl(this.searchValue, this.page);
            urlCount = DataMartApi.getCountByQueryUrl(this.searchValue);
        } else {
            urlFiles = DataMartApi.getAllFilesUrl(this.page);
            urlCount = DataMartApi.getAllCountUrl();
        }

        if (this.page === 1) {
            const fetchFilesPromise = axiosInstance
                .get(urlFiles)
                .then(({ data }) => {
                    this.exploreFiles = [...data];
                    this.page += 1;
                });

            const fetchCountPromise = axiosInstance
                .get(urlCount)
                .then(({ data }) => {
                    this.countFiles = data.count;
                });

            Promise.all([fetchFilesPromise, fetchCountPromise]).then(() => {
                this.pending = false;
            });
        } else {
            axiosInstance
                .get(urlFiles)
                .then(({ data }) => {
                    this.exploreFiles.push(...data);
                    this.page += 1;
                })
                .finally(() => (this.pending = false));
        }
    };

    @action
    setSearchText = searchValue => {
        this.searchValue = searchValue;
    };

    @action
    resetFiles = () => {
        this.exploreFiles = [];
        this.page = 1;
        this.countFiles = undefined;
        this.searchValue = undefined;
    };
}
