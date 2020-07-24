import { observable, action } from "mobx";

export class FilesStore {
    @observable
    exploreFiles = [];

    @observable
    pending = false;

    @action
    fetchExploreFiles = () => {
        this.pending = true;

        setTimeout(() => {
            this.exploreFiles.push(
                {
                    file: {
                        createdAt: "2020-06-24T18:27:37.061Z",
                        fileMetadata: {
                            title: "File #1",
                            briefDescription: "Test file",
                            hashtags: ["Lorem", "Ipsum", "Dolor", "Consectetur"]
                        },
                        id: "32ddf9ab-f142-4ff6-9722-3f51588ceed5",
                        keepUntil: "2020-07-24T17:49:41.176Z",
                        mimeType: "image/png",
                        price: 1
                    },
                    sum: 0
                },
                {
                    file: {
                        createdAt: "2020-06-24T18:27:37.061Z",
                        fileMetadata: {
                            title: "File #1",
                            briefDescription: "Test file",
                            hashtags: ["Lorem", "Ipsum", "Dolor", "Consectetur"]
                        },
                        id: "32ddf9ab-f142-4ff6-9722-3f51588ceed5",
                        keepUntil: "2020-07-24T17:49:41.176Z",
                        mimeType: "image/png",
                        price: 1
                    },
                    sum: 0
                },
                {
                    file: {
                        createdAt: "2020-06-24T18:27:37.061Z",
                        fileMetadata: {
                            title: "File #1",
                            briefDescription: "Test file",
                            hashtags: ["Lorem", "Ipsum", "Dolor", "Consectetur"]
                        },
                        id: "32ddf9ab-f142-4ff6-9722-3f51588ceed5",
                        keepUntil: "2020-07-24T17:49:41.176Z",
                        mimeType: "image/png",
                        price: 1
                    },
                    sum: 0
                },
                {
                    file: {
                        createdAt: "2020-06-24T18:27:37.061Z",
                        fileMetadata: {
                            title: "File #1",
                            briefDescription: "Test file",
                            hashtags: ["Lorem", "Ipsum", "Dolor", "Consectetur"]
                        },
                        id: "32ddf9ab-f142-4ff6-9722-3f51588ceed5",
                        keepUntil: "2020-07-24T17:49:41.176Z",
                        mimeType: "image/png",
                        price: 1
                    },
                    sum: 0
                },
                {
                    file: {
                        createdAt: "2020-06-24T18:27:37.061Z",
                        fileMetadata: {
                            title: "File #1",
                            briefDescription: "Test file",
                            hashtags: ["Lorem", "Ipsum", "Dolor", "Consectetur"]
                        },
                        id: "32ddf9ab-f142-4ff6-9722-3f51588ceed5",
                        keepUntil: "2020-07-24T17:49:41.176Z",
                        mimeType: "image/png",
                        price: 1
                    },
                    sum: 0
                },
                {
                    file: {
                        createdAt: "2020-06-24T18:27:37.061Z",
                        fileMetadata: {
                            title: "File #1",
                            briefDescription: "Test file",
                            hashtags: ["Lorem", "Ipsum", "Dolor", "Consectetur"]
                        },
                        id: "32ddf9ab-f142-4ff6-9722-3f51588ceed5",
                        keepUntil: "2020-07-24T17:49:41.176Z",
                        mimeType: "image/png",
                        price: 1
                    },
                    sum: 0
                },
                {
                    file: {
                        createdAt: "2020-06-24T18:27:37.061Z",
                        fileMetadata: {
                            title: "File #1",
                            briefDescription: "Test file",
                            hashtags: ["Lorem", "Ipsum", "Dolor", "Consectetur"]
                        },
                        id: "32ddf9ab-f142-4ff6-9722-3f51588ceed5",
                        keepUntil: "2020-07-24T17:49:41.176Z",
                        mimeType: "image/png",
                        price: 1
                    },
                    sum: 0
                },
                {
                    file: {
                        createdAt: "2020-06-24T18:27:37.061Z",
                        fileMetadata: {
                            title: "File #1",
                            briefDescription: "Test file",
                            hashtags: ["Lorem", "Ipsum", "Dolor", "Consectetur"]
                        },
                        id: "32ddf9ab-f142-4ff6-9722-3f51588ceed5",
                        keepUntil: "2020-07-24T17:49:41.176Z",
                        mimeType: "image/png",
                        price: 1
                    },
                    sum: 0
                },
                {
                    file: {
                        createdAt: "2020-06-24T18:27:37.061Z",
                        fileMetadata: {
                            title: "File #1",
                            briefDescription: "Test file",
                            hashtags: ["Lorem", "Ipsum", "Dolor", "Consectetur"]
                        },
                        id: "32ddf9ab-f142-4ff6-9722-3f51588ceed5",
                        keepUntil: "2020-07-24T17:49:41.176Z",
                        mimeType: "image/png",
                        price: 1
                    },
                    sum: 0
                }
            );
            this.pending = false;
        }, 500);
    };

    @action
    buyFile = title => {
        console.log(`file ${title} was purchased`);
    };

    @action
    resetFiles = () => {
        this.exploreFiles = [];
    };
}
