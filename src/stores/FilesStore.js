import { observable, action, reaction } from "mobx";

import { axiosInstance } from "@/api/axios-instance";
import { debounce, API_BASE_MART } from "@/utils";

export class FilesStore {
    @observable
    exploreFiles = [];

    @observable
    pending = false;

    @observable
    searchValue = undefined;

    @observable
    page = 0;

    @observable
    shouldResetResults = false;

    constructor() {
        reaction(
            () => this.searchValue,
            debounce(searchValue => {
                this.shouldResetResults = true;
                this.fetchExploreFiles(searchValue);
            }, 350)
        );
    }

    @action
    fetchExploreFiles = searchValue => {
        if (this.shouldResetResults) {
            this.exploreFiles = [];
            this.page = 0;
            this.shouldResetResults = false;
        }

        this.pending = true;

        let url;
        if (searchValue) {
            url = `${API_BASE_MART}/api/v2/files/search?query=${searchValue}&page=${this.page}&size=9`;
        } else {
            url = `${API_BASE_MART}/api/v2/files/search?page=${this.page}&size=9`;
        }

        axiosInstance
            .get(url)
            .then(({ data }) => {
                this.exploreFiles.push(...data);
                this.page += 1;
            })
            .finally(() => (this.pending = false));
    };

    @action
    buyFile = title => {
        console.log(`file ${title} was purchased`);
    };

    @action
    setSearchText = searchValue => {
        this.searchValue = searchValue;
    };

    @action
    resetFiles = () => {
        this.exploreFiles = [];
    };
}
