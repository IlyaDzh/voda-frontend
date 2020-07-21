import React from "react";
import { Grid, Typography, Paper, Hidden, makeStyles } from "@material-ui/core";

import { Button } from "@/components";

const useStyles = makeStyles(theme => ({
    tableHeader: {
        display: "flex",
        padding: "10px 16px",
        marginBottom: "4px",
        [theme.breakpoints.down("xs")]: {
            padding: "8px"
        },
        "& p": {
            fontSize: "16px",
            fontWeight: "bold",
            width: "14%",
            "&:first-child": {
                width: "30%",
                [theme.breakpoints.down("sm")]: {
                    width: "20%"
                }
            },
            "&:last-child": {
                width: "30%",
                [theme.breakpoints.down("sm")]: {
                    width: "20%"
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
            padding: "8px"
        },
        "& p": {
            fontSize: "12px",
            width: "14%",
            "&:first-child": {
                color: theme.palette.primary.main,
                cursor: "pointer",
                textDecoration: "underline",
                width: "30%",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                [theme.breakpoints.down("sm")]: {
                    width: "20%"
                }
            },
            "&:last-child": {
                color: theme.palette.primary.main,
                cursor: "pointer",
                textDecoration: "underline",
                width: "30%",
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
        txnID: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        purchased: "2020-06-24",
        value: "0.12345678",
        uploaded: "2020-06-24",
        fileID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
        txnID: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        purchased: "2020-06-24",
        value: "0.12345678",
        uploaded: "2020-06-24",
        fileID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
        txnID: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        purchased: "2020-06-24",
        value: "0.12345678",
        uploaded: "2020-06-24",
        fileID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
        txnID: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        purchased: "2020-06-24",
        value: "0.12345678",
        uploaded: "2020-06-24",
        fileID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
        txnID: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        purchased: "2020-06-24",
        value: "0.12345678",
        uploaded: "2020-06-24",
        fileID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
        txnID: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        purchased: "2020-06-24",
        value: "0.12345678",
        uploaded: "2020-06-24",
        fileID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
        txnID: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        purchased: "2020-06-24",
        value: "0.12345678",
        uploaded: "2020-06-24",
        fileID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
        txnID: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        purchased: "2020-06-24",
        value: "0.12345678",
        uploaded: "2020-06-24",
        fileID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
        txnID: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        purchased: "2020-06-24",
        value: "0.12345678",
        uploaded: "2020-06-24",
        fileID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
        txnID: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        purchased: "2020-06-24",
        value: "0.12345678",
        uploaded: "2020-06-24",
        fileID:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    }
];

const HistoryTable = () => {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12}>
                <div className={classes.tableHeader}>
                    <Typography>Txn ID</Typography>
                    <Typography>Purchased</Typography>
                    <Typography>Value</Typography>
                    <Typography>Uploaded</Typography>
                    <Typography>File ID</Typography>
                </div>
                {ROWS.map((item, i) => (
                    <Paper
                        key={i}
                        classes={{ root: classes.tableItem }}
                        elevation={3}
                    >
                        <Typography>{item.txnID}</Typography>
                        <Typography>{item.purchased}</Typography>
                        <Typography>{item.value}</Typography>
                        <Typography>{item.uploaded}</Typography>
                        <Typography>{item.fileID}</Typography>
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

export default HistoryTable;
