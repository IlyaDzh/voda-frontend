import { observable, action } from "mobx";

export class FilesStore {
    @observable
    exploreFiles = [];

    @action
    fetchExploreFiles = () => {
        setTimeout(() => {
            this.exploreFiles.push(
                {
                    title: "File #1",
                    price: "0.87656286",
                    type: "image/png",
                    hashtags: ["Lorem", "Ipsum", "Dolor", "Consectetur"]
                },
                {
                    title: "File #1",
                    price: "0.87656286",
                    type: "image/png",
                    hashtags: ["Lorem", "Ipsum", "Dolor", "Consectetur"]
                },
                {
                    title: "File #1",
                    price: "0.87656286",
                    type: "image/png",
                    hashtags: ["Lorem", "Ipsum", "Dolor", "Consectetur"]
                },
                {
                    title: "File #1",
                    price: "0.87656286",
                    type: "image/png",
                    hashtags: ["Lorem", "Ipsum", "Dolor", "Consectetur"]
                },
                {
                    title: "File #1",
                    price: "0.87656286",
                    type: "image/png",
                    hashtags: ["Lorem", "Ipsum", "Dolor", "Consectetur"]
                },
                {
                    title: "File #1",
                    price: "0.87656286",
                    type: "image/png",
                    hashtags: ["Lorem", "Ipsum", "Dolor", "Consectetur"]
                },
                {
                    title: "File #1",
                    price: "0.87656286",
                    type: "image/png",
                    hashtags: ["Lorem", "Ipsum", "Dolor", "Consectetur"]
                },
                {
                    title: "File #1",
                    price: "0.87656286",
                    type: "image/png",
                    hashtags: ["Lorem", "Ipsum", "Dolor", "Consectetur"]
                },
                {
                    title: "File #1",
                    price: "0.87656286",
                    type: "image/png",
                    hashtags: ["Lorem", "Ipsum", "Dolor", "Consectetur"]
                }
            );
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
