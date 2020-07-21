import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import { SearchInput, FilterItem } from "@/components";

const useStyles = makeStyles(() => ({
    searchWrapper: {},
    searchInputWrapper: {
        marginBottom: "32px"
    },
    searchFiltersWrapper: {
        marginBottom: "32px"
    }
}));

const SearchBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.searchWrapper}>
            <div className={classes.searchInputWrapper}>
                <SearchInput />
            </div>
            <Grid className={classes.searchFiltersWrapper} container spacing={1}>
                {[
                    "Filter by name",
                    "Filter by price",
                    "Filter by date",
                    "Filter by type",
                    "Filter by category",
                    "Filter by genre"
                ].map((filter, i) => (
                    <Grid key={i} item xs={4} sm={4} md={4} lg={2}>
                        <FilterItem filter={filter} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default SearchBar;
