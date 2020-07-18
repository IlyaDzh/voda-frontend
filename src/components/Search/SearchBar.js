import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import { SearchInput, FilterItem } from "@/components";

const useStyles = makeStyles(() => ({
    searchWrapper: {},
    searchFiltersWrapper: {
        marginBottom: "32px"
    }
}));

const SearchBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.searchWrapper}>
            <SearchInput />
            <Grid className={classes.searchFiltersWrapper} container spacing={1}>
                {[
                    "Filter by name",
                    "Filter by price",
                    "Filter by date",
                    "Filter by type",
                    "Filter by category",
                    "Filter by genre"
                ].map(filter => (
                    <FilterItem key={filter} filter={filter} />
                ))}
            </Grid>
        </div>
    );
};

export default SearchBar;
