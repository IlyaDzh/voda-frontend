import React from "react";
import { inject, observer } from "mobx-react";
import { Grid, Typography, Paper, Hidden, makeStyles } from "@material-ui/core";

import { Button } from "@/components";
import { EyeIcon } from "@/icons";

const useStyles = makeStyles(theme => ({
    tableHeader: {
        display: "flex",
        padding: "10px 16px",
        marginBottom: "4px",
        [theme.breakpoints.down("xs")]: {
            padding: "4px 8px"
        },
        "& p": {
            fontSize: "16px",
            fontWeight: "bold",
            width: "15%",
            "&:first-child": {
                width: "45%",
                [theme.breakpoints.down("sm")]: {
                    width: "20%"
                }
            },
            "&:last-child": {
                width: "10%",
                [theme.breakpoints.down("xs")]: {
                    width: "24px"
                }
            },
            [theme.breakpoints.down("sm")]: {
                width: "20%",
                fontSize: "12px"
            },
            [theme.breakpoints.down("xs")]: {
                width: "25%"
            }
        }
    },
    tableItem: {
        display: "flex",
        alignItems: "center",
        padding: "10px 16px",
        marginBottom: "4px",
        [theme.breakpoints.down("xs")]: {
            padding: "4px 8px"
        },
        "& p": {
            fontSize: "12px",
            width: "15%",
            "&:first-child": {
                width: "45%",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                [theme.breakpoints.down("sm")]: {
                    width: "20%"
                }
            },
            [theme.breakpoints.down("sm")]: {
                width: "20%",
                fontSize: "10px"
            },
            [theme.breakpoints.down("xs")]: {
                width: "25%"
            }
        }
    },
    tableItemDetails: {
        width: "10%",
        [theme.breakpoints.down("xs")]: {
            width: "24px",
            minWidth: "24px",
            height: "24px",
            padding: 0
        }
    },
    loadMoreBtn: {
        display: "block",
        maxWidth: "220px",
        [theme.breakpoints.down("xs")]: {
            maxWidth: "unset"
        }
    }
}));

const ROWS = [
    {
        ID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        uploaded: "2020-06-24",
        availableUntil: "2020-06-24",
        price: "0.12345678"
    },
    {
        ID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        uploaded: "2020-06-24",
        availableUntil: "2020-06-24",
        price: "0.12345678"
    },
    {
        ID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        uploaded: "2020-06-24",
        availableUntil: "2020-06-24",
        price: "0.12345678"
    },
    {
        ID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        uploaded: "2020-06-24",
        availableUntil: "2020-06-24",
        price: "0.12345678"
    },
    {
        ID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        uploaded: "2020-06-24",
        availableUntil: "2020-06-24",
        price: "0.12345678"
    },
    {
        ID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        uploaded: "2020-06-24",
        availableUntil: "2020-06-24",
        price: "0.12345678"
    },
    {
        ID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        uploaded: "2020-06-24",
        availableUntil: "2020-06-24",
        price: "0.12345678"
    },
    {
        ID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        uploaded: "2020-06-24",
        availableUntil: "2020-06-24",
        price: "0.12345678"
    },
    {
        ID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        uploaded: "2020-06-24",
        availableUntil: "2020-06-24",
        price: "0.12345678"
    },
    {
        ID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        uploaded: "2020-06-24",
        availableUntil: "2020-06-24",
        price: "0.12345678"
    }
];

const DigitalGoodsTable = ({ setOpenGoodsInfoModal }) => {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12}>
                <div className={classes.tableHeader}>
                    <Typography>ID</Typography>
                    <Typography>Uploaded</Typography>
                    <Typography>Available until</Typography>
                    <Typography>Price</Typography>
                    <Typography></Typography>
                </div>
                {ROWS.map((item, i) => (
                    <Paper
                        key={i}
                        classes={{ root: classes.tableItem }}
                        elevation={3}
                    >
                        <Typography>{item.ID}</Typography>
                        <Typography>{item.uploaded}</Typography>
                        <Typography>{item.availableUntil}</Typography>
                        <Typography>{item.price}</Typography>
                        <Button
                            className={classes.tableItemDetails}
                            onClick={() => setOpenGoodsInfoModal(true, item)}
                            color="secondary"
                            size="small"
                            disableElevation
                        >
                            <Hidden xsDown>Details</Hidden>
                            <Hidden smUp>
                                <EyeIcon />
                            </Hidden>
                        </Button>
                    </Paper>
                ))}
            </Grid>
            <Grid item xs={12}>
                <Hidden smDown>
                    <Button
                        className={classes.loadMoreBtn}
                        size="large"
                        color="secondary"
                        onClick={() => console.log("load more")}
                        fullWidth
                    >
                        Load more
                    </Button>
                </Hidden>
                <Hidden mdUp>
                    <Button
                        className={classes.loadMoreBtn}
                        color="secondary"
                        onClick={() => console.log("load more")}
                        disableElevation
                        fullWidth
                    >
                        Load more
                    </Button>
                </Hidden>
            </Grid>
        </>
    );
};

const mapMoxToProps = ({ infoModals }) => ({
    setOpenGoodsInfoModal: infoModals.setOpenGoodsInfoModal
});

export default inject(mapMoxToProps)(observer(DigitalGoodsTable));
