import React from "react";
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
                width: "25%"
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "12px"
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
            textOverflow: "ellipsis",
            overflow: "hidden",
            "&:first-child": {
                width: "25%"
            },
            "&:nth-child(2)": {
                overflow: "unset",
                wordBreak: "break-word"
            },
            "&:last-child": {
                whiteSpace: "nowrap"
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "10px"
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
        owner: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        sum: "0.12345678",
        date: "2020-06-24",
        validator: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        txnId: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        fileId: "32dede-dd8-4yttd-df9ab-f142-4fa45-j19"
    },
    {
        owner: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        sum: "0.12345678",
        date: "2020-06-24",
        validator: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        txnId: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        fileId: "32dede-dd8-4yttd-df9ab-f142-4fa45-j19"
    },
    {
        owner: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        sum: "0.12345678",
        date: "2020-06-24",
        validator: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        txnId: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        fileId: "32dede-dd8-4yttd-df9ab-f142-4fa45-j19"
    },
    {
        owner: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        sum: "0.12345678",
        date: "2020-06-24",
        validator: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        txnId: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        fileId: "32dede-dd8-4yttd-df9ab-f142-4fa45-j19"
    },
    {
        owner: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        sum: "0.12345678",
        date: "2020-06-24",
        validator: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        txnId: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        fileId: "32dede-dd8-4yttd-df9ab-f142-4fa45-j19"
    },
    {
        owner: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        sum: "0.12345678",
        date: "2020-06-24",
        validator: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        txnId: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        fileId: "32dede-dd8-4yttd-df9ab-f142-4fa45-j19"
    },
    {
        owner: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        sum: "0.12345678",
        date: "2020-06-24",
        validator: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        txnId: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        fileId: "32dede-dd8-4yttd-df9ab-f142-4fa45-j19"
    },
    {
        owner: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        sum: "0.12345678",
        date: "2020-06-24",
        validator: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        txnId: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        fileId: "32dede-dd8-4yttd-df9ab-f142-4fa45-j19"
    },
    {
        owner: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        sum: "0.12345678",
        date: "2020-06-24",
        validator: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        txnId: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        fileId: "32dede-dd8-4yttd-df9ab-f142-4fa45-j19"
    },
    {
        owner: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        sum: "0.12345678",
        date: "2020-06-24",
        validator: "0x7ceAC27A4Af42A93417743BA7A42A93478",
        txnId: "0xae7ae9020ec8197c66d4fdba47d5a072aa0f590ac186ec1abb3e0119a55cb6a4",
        fileId: "32dede-dd8-4yttd-df9ab-f142-4fa45-j19"
    }
];

const DataPurchasesTable = () => {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12}>
                <Typography
                    classes={{ root: classes.transactionsTitle }}
                    variant="h1"
                >
                    Data Purchases
                </Typography>
                <div className={classes.tableHeader}>
                    <Typography>Data Owner (Wallet ID)</Typography>
                    <Typography>Sum</Typography>
                    <Typography>Date</Typography>
                    <Typography>Data Validator</Typography>
                    <Typography>Txn Hash</Typography>
                    <Typography>File ID</Typography>
                </div>
                {ROWS.map((item, i) => (
                    <Paper
                        key={i}
                        classes={{ root: classes.tableItem }}
                        elevation={3}
                    >
                        <Typography>{item.owner}</Typography>
                        <Typography>{item.sum}</Typography>
                        <Typography>{item.date}</Typography>
                        <Typography>{item.validator}</Typography>
                        <Typography>{item.txnId}</Typography>
                        <Typography>{item.fileId}</Typography>
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

export default DataPurchasesTable;