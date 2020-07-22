import React from "react";
import { Grid, Hidden, makeStyles } from "@material-ui/core";

import { Button, SearchInput, FilesList, FilterItem } from "@/components";
import { FilterIcon } from "@/icons";

const useStyles = makeStyles(() => ({
    searchMobileWrapper: {
        display: "flex"
    },
    filterMobileBtn: {
        minWidth: "48px",
        marginRight: "16px"
    }
}));

const ExploreFilesPage = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Hidden smDown>
                <Grid item xs={12}>
                    <SearchInput />
                </Grid>
            </Hidden>
            <Grid item xs={12}>
                <Hidden smDown>
                    <Grid container spacing={1}>
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
                </Hidden>
                <Hidden mdUp>
                    <div className={classes.searchMobileWrapper}>
                        <Button
                            className={classes.filterMobileBtn}
                            color="secondary"
                            disableElevation
                        >
                            <FilterIcon />
                        </Button>
                        <SearchInput isMobile />
                    </div>
                </Hidden>
            </Grid>
            <FilesList />
        </Grid>
    );
};

export default ExploreFilesPage;
