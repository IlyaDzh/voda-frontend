import React from "react";
import { Grid, Hidden, makeStyles } from "@material-ui/core";

import {
    MyBalance,
    Button,
    SearchInput,
    FilterItem,
    HistoryTable
} from "@/components";
import { FilterIcon } from "@/icons";
import { SearchInputGrid } from '@/components/SearchInputGrid';

const useStyles = makeStyles(theme => ({
    searchMobileWrapper: {
        display: "flex"
    },
    filterMobileBtn: {
        minWidth: "48px",
        marginRight: "16px"
    },
}));

const HistoryPage = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <MyBalance />
            </Grid>
            <Grid item xs={12}>
                <Hidden smDown>
                    <Grid container spacing={3}>
                        <SearchInputGrid sm={12} md={12} lg={4} />
                        
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
            <HistoryTable />
        </Grid>
    );
};

export default HistoryPage;
