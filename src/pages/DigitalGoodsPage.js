import React from "react";
import { Grid, Typography, Hidden, makeStyles } from "@material-ui/core";

import {
    MyBalance,
    Button,
    SearchInput,
    FilterItem,
    DigitalGoodsTable
} from "@/components";
import { FilterIcon } from "@/icons";

const useStyles = makeStyles(theme => ({
    uploadFileWrapper: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        }
    },
    uploadBtn: {
        display: "block",
        minWidth: "175px",
        marginRight: "24px"
    },
    uploadBtnMobile: {
        marginBottom: "16px"
    },
    uploadCaption: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "10px"
        }
    },
    searchMobileWrapper: {
        display: "flex"
    },
    filterMobileBtn: {
        minWidth: "48px",
        marginRight: "16px"
    }
}));

const DigitalGoodsPage = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <MyBalance />
            </Grid>
            <Grid item xs={12}>
                <div className={classes.uploadFileWrapper}>
                    <Hidden smDown>
                        <Button
                            className={classes.uploadBtn}
                            color="secondary"
                            size="large"
                        >
                            Upload a New File
                        </Button>
                    </Hidden>
                    <Hidden mdUp>
                        <Button
                            className={classes.uploadBtnMobile}
                            color="secondary"
                            disableElevation
                            fullWidth
                        >
                            Upload a New File
                        </Button>
                    </Hidden>
                    <Typography
                        className={classes.uploadCaption}
                        variant="caption"
                        color="textSecondary"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={12}>
                <Hidden smDown>
                    <Grid container spacing={3}>
                        <Grid item sm={12} md={12} lg={4}>
                            <SearchInput />
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
            <DigitalGoodsTable />
        </Grid>
    );
};

export default DigitalGoodsPage;
