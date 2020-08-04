import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import { SearchInput, FilterItem } from "@/components";

const useStyles = makeStyles(() => ({
    searchBlock: {
        paddingRight: 80
    }
}));

const SearchInputGrid = () => {
    const classes = useStyles();

    return (
        <>
            <Grid item sm={12} md={12} lg={4}>
                <div className={classes.searchBlock}>
                    <SearchInput />
                </div>
            </Grid>
            <Grid item container sm={12} md={12} lg={8} spacing={1}>
                {[
                    "Filter by Uploaded Date",
                    "Filter by Available Date",
                    "Filter by Price"
                ].map((filter, i) => (
                    <Grid key={i} item xs={4} sm={4} md={4}>
                        <FilterItem filter={filter} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default SearchInputGrid;
