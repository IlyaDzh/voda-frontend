import React, { useCallback, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { Grid, Typography, Paper, Hidden, makeStyles } from "@material-ui/core";

import { Button, Loader } from "@/components";
import { formatDate } from "@/utils";

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

const HistoryTable = ({
    historyItems,
    pending,
    fetchSalesHistory,
    resetHistory,
    setOpenTxnInfoModal,
    setOpenGoodsInfoModal
}) => {
    const classes = useStyles();
    const fetchSalesHistoryFunc = useCallback(fetchSalesHistory, []);
    const resetHistoryFunc = useCallback(resetHistory, []);

    useEffect(() => {
        fetchSalesHistoryFunc();
        return () => resetHistoryFunc();
    }, [fetchSalesHistoryFunc, resetHistoryFunc]);

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
                {historyItems.map(item => (
                    <Paper
                        key={item.hash}
                        classes={{ root: classes.tableItem }}
                        elevation={3}
                    >
                        <Typography onClick={() => setOpenTxnInfoModal(true, item)}>
                            {item.hash}
                        </Typography>
                        <Typography>{formatDate(item.createdAt)}</Typography>
                        <Typography>{item.sum}</Typography>
                        <Typography>{formatDate(item.file.createdAt)}</Typography>
                        <Typography
                            onClick={() => setOpenGoodsInfoModal(true, item)}
                        >
                            {item.file.id}
                        </Typography>
                    </Paper>
                ))}
                {pending && <Loader mt={25} mb={25} />}
            </Grid>
            <Grid item xs={12}>
                {!pending && (
                    <>
                        <Hidden smDown>
                            <Button
                                className={classes.loadMoreBtn}
                                size="large"
                                color="secondary"
                                onClick={fetchSalesHistory}
                                fullWidth
                            >
                                Load more
                            </Button>
                        </Hidden>
                        <Hidden mdUp>
                            <Button
                                className={classes.loadMoreBtn}
                                color="secondary"
                                onClick={fetchSalesHistory}
                                disableElevation
                                fullWidth
                            >
                                Load more
                            </Button>
                        </Hidden>
                    </>
                )}
            </Grid>
        </>
    );
};

const mapMoxToProps = ({ salesHistory, infoModals }) => ({
    historyItems: salesHistory.historyItems,
    pending: salesHistory.pending,
    fetchSalesHistory: salesHistory.fetchSalesHistory,
    resetHistory: salesHistory.resetHistory,
    setOpenTxnInfoModal: infoModals.setOpenTxnInfoModal,
    setOpenGoodsInfoModal: infoModals.setOpenGoodsInfoModal
});

export default inject(mapMoxToProps)(observer(HistoryTable));
