import React from "react";
import { makeStyles } from "@material-ui/core";

import { SearchInput, FilterItem } from "@/components";

const useStyles = makeStyles(() => ({
    searchWrapper: {},
    searchFiltersWrapper: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginBottom: "32px"
    }
}));

const SearchBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.searchWrapper}>
            <SearchInput />
            <div className={classes.searchFiltersWrapper}>
                {[
                    "Filter by name",
                    "Filter by price",
                    "Filter by date",
                    "Filter by type"
                ].map(filter => (
                    <FilterItem key={filter} filter={filter} />
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
