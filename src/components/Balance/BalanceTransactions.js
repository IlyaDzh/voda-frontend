import React, { useCallback, useEffect } from "react";
import { Grid, Typography, Paper, Hidden, makeStyles } from "@material-ui/core";

import { Button } from "@/components";

const useStyles = makeStyles(theme => ({
    transactionsTitle: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "24px"
        }
    },
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
            width: "15%",
            "&:first-child": {
                width: "55%",
                [theme.breakpoints.down("sm")]: {
                    width: "40%"
                },
                [theme.breakpoints.down("440")]: {
                    width: "25%"
                }
            },
            [theme.breakpoints.down("sm")]: {
                width: "20%",
                fontSize: "13px"
            },
            [theme.breakpoints.down("440")]: {
                width: "25%"
            }
        }
    },
    tableItem: {
        display: "flex",
        padding: "10px 16px",
        marginBottom: "4px",
        [theme.breakpoints.down("xs")]: {
            padding: "8px"
        },
        "& p": {
            fontSize: "12px",
            width: "15%",
            "&:first-child": {
                width: "55%",
                textOverflow: "ellipsis",
                overflow: "hidden",
                [theme.breakpoints.down("sm")]: {
                    width: "40%"
                },
                [theme.breakpoints.down("440")]: {
                    width: "25%"
                }
            },
            [theme.breakpoints.down("sm")]: {
                width: "20%",
                fontSize: "12px"
            },
            [theme.breakpoints.down("440")]: {
                width: "25%"
            }
        }
    },
    errorColor: {
        color: "#eb5757"
    },
    successColor: {
        color: "#17e3b2"
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
        time: "2020-06-24",
        type: "Lock",
        value: "0.12345678"
    },
    {
        txnID: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        time: "2020-06-24",
        type: "Unlock",
        value: "0.12345678"
    },
    {
        txnID: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        time: "2020-06-24",
        type: "Lock",
        value: "0.12345678"
    },
    {
        txnID: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        time: "2020-06-24",
        type: "Unlock",
        value: "0.12345678"
    },
    {
        txnID: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        time: "2020-06-24",
        type: "Unlock",
        value: "0.12345678"
    },
    {
        txnID: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        time: "2020-06-24",
        type: "Lock",
        value: "0.12345678"
    },
    {
        txnID: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        time: "2020-06-24",
        type: "Unlock",
        value: "0.12345678"
    },
    {
        txnID: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        time: "2020-06-24",
        type: "Lock",
        value: "0.12345678"
    },
    {
        txnID: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        time: "2020-06-24",
        type: "Unlock",
        value: "0.12345678"
    },
    {
        txnID: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        time: "2020-06-24",
        type: "Unlock",
        value: "0.12345678"
    }
];

const BalanceTransactions = ({ type }) => {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12}>
                <Typography
                    classes={{ root: classes.transactionsTitle }}
                    variant="h1"
                >
                    Transcations
                </Typography>
                <div className={classes.tableHeader}>
                    <Typography>Txn ID</Typography>
                    <Typography>Time</Typography>
                    <Typography>Type</Typography>
                    <Typography>Value</Typography>
                </div>
                {ROWS.map((item, i) => (
                    <Paper
                        key={i}
                        classes={{ root: classes.tableItem }}
                        elevation={3}
                    >
                        <Typography>{item.txnID}</Typography>
                        <Typography>{item.time}</Typography>
                        <Typography
                            classes={{
                                root:
                                    item.type === "Lock"
                                        ? classes.errorColor
                                        : classes.successColor
                            }}
                        >
                            {item.type}
                        </Typography>
                        <Typography>{item.value}</Typography>
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

export default BalanceTransactions;
