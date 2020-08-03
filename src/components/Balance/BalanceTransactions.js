import React, { useCallback, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";

import { NotFoundPaper, Loader } from "@/components";
import { formatDate } from "@/utils";

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

const BalanceTransactions = ({
    balanceTransactions,
    pending,
    fetchBalanceTransactions,
    resetBalanceTransactions
}) => {
    const classes = useStyles();
    const fetchBalanceTransactionsFunc = useCallback(fetchBalanceTransactions, []);
    const resetBalanceTransactionsFunc = useCallback(resetBalanceTransactions, []);

    useEffect(() => {
        fetchBalanceTransactionsFunc();
        return () => resetBalanceTransactionsFunc();
    }, [fetchBalanceTransactionsFunc, resetBalanceTransactionsFunc]);

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
                {balanceTransactions.length
                    ? balanceTransactions.map((item, i) => (
                          <Paper
                              key={i}
                              classes={{ root: classes.tableItem }}
                              elevation={3}
                          >
                              <Typography>{item.hash}</Typography>
                              <Typography>{formatDate(item.timestamp)}</Typography>
                              <Typography
                                  classes={{
                                      root:
                                          item.type === "LOCK"
                                              ? classes.errorColor
                                              : classes.successColor
                                  }}
                              >
                                  {item.type === "LOCK" ? "Withdraw" : "Deposit"}
                              </Typography>
                              <Typography>{item.value}</Typography>
                          </Paper>
                      ))
                    : !pending && <NotFoundPaper />}
            </Grid>
            <Grid item xs={12}>
                {pending && <Loader mt={25} mb={25} />}
                {/* {pending ? (
                    <Loader mt={25} mb={25} />
                ) : (
                    balanceTransactions.length > 0 && (
                        <>
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
                        </>
                    )
                )} */}
            </Grid>
        </>
    );
};

const mapMoxToProps = ({ userBalance }) => ({
    balanceTransactions: userBalance.balanceTransactions,
    pending: userBalance.transactionsPending,
    fetchBalanceTransactions: userBalance.fetchBalanceTransactions,
    resetBalanceTransactions: userBalance.resetBalanceTransactions
});

export default inject(mapMoxToProps)(observer(BalanceTransactions));
