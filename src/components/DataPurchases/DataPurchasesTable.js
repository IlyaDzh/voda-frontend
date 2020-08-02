import React, { useCallback, useEffect } from "react";
import { inject, observer } from "mobx-react";
import {
    Grid,
    Typography,
    Paper,
    Tooltip,
    Hidden,
    makeStyles
} from "@material-ui/core";

import { Button, Loader } from "@/components";
import { DownloadIcon } from "@/icons";

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
            width: "17%",
            "&:first-child": {
                width: "21%"
            },
            "&:last-child": {
                width: "10%",
                [theme.breakpoints.down("xs")]: {
                    width: "24px"
                }
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "13px"
            },
            [theme.breakpoints.down("xs")]: {
                width: "20%"
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
            width: "17%",
            textOverflow: "ellipsis",
            overflow: "hidden",
            "&:first-child": {
                width: "21%"
            },
            "&:nth-child(2)": {
                overflow: "unset",
                wordBreak: "break-word"
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "12px"
            },
            [theme.breakpoints.down("xs")]: {
                width: "20%"
            }
        }
    },
    tableNotFound: {
        padding: "4px",
        marginBottom: "4px"
    },
    tableItemDownload: {
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

const DataPurchasesTable = ({
    purchasesItems,
    pending,
    fetchDataPurchases,
    resetData
}) => {
    const classes = useStyles();
    const fetchPurchasesItemsFunc = useCallback(fetchDataPurchases, []);
    const resetPurchasesItemsFunc = useCallback(resetData, []);

    useEffect(() => {
        fetchPurchasesItemsFunc();
        return () => resetPurchasesItemsFunc();
    }, [fetchPurchasesItemsFunc, resetPurchasesItemsFunc]);

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
                    <Typography>Txn Hash</Typography>
                    <Typography>Sum</Typography>
                    <Typography>Date</Typography>
                    <Typography>Data Validator</Typography>
                    <Typography>File ID</Typography>
                    <Typography></Typography>
                </div>
                {purchasesItems.length
                    ? purchasesItems.map((item, i) => (
                          <Paper
                              key={i}
                              classes={{ root: classes.tableItem }}
                              elevation={3}
                          >
                              <Typography>{item.txnId}</Typography>
                              <Typography>{item.sum}</Typography>
                              <Typography>{item.date}</Typography>
                              <Typography>{item.validator}</Typography>
                              <Typography noWrap>{item.fileId}</Typography>
                              <Tooltip title="Retrieve the file" arrow>
                                  <div>
                                      <Button
                                          className={classes.tableItemDownload}
                                          onClick={() => console.log("download")}
                                          color="secondary"
                                          size="small"
                                          disableElevation
                                      >
                                          <Hidden xsDown>Download</Hidden>
                                          <Hidden smUp>
                                              <DownloadIcon />
                                          </Hidden>
                                      </Button>
                                  </div>
                              </Tooltip>
                          </Paper>
                      ))
                    : !pending && (
                          <Paper
                              classes={{ root: classes.tableNotFound }}
                              elevation={3}
                          >
                              <Typography
                                  color="primary"
                                  variant="h6"
                                  align="center"
                              >
                                  Not Found
                              </Typography>
                          </Paper>
                      )}
            </Grid>
            <Grid item xs={12}>
                {pending ? (
                    <Loader mt={25} mb={25} />
                ) : (
                    purchasesItems.length > 0 && (
                        <>
                            <Hidden smDown>
                                <Button
                                    className={classes.loadMoreBtn}
                                    size="large"
                                    color="secondary"
                                    onClick={fetchDataPurchases}
                                    fullWidth
                                >
                                    Load more
                                </Button>
                            </Hidden>
                            <Hidden mdUp>
                                <Button
                                    className={classes.loadMoreBtn}
                                    color="secondary"
                                    onClick={fetchDataPurchases}
                                    disableElevation
                                    fullWidth
                                >
                                    Load more
                                </Button>
                            </Hidden>
                        </>
                    )
                )}
            </Grid>
        </>
    );
};

const mapMoxToProps = ({ dataPurchases }) => ({
    purchasesItems: dataPurchases.purchasesItems,
    pending: dataPurchases.pending,
    fetchDataPurchases: dataPurchases.fetchDataPurchases,
    resetData: dataPurchases.resetData
});

export default inject(mapMoxToProps)(observer(DataPurchasesTable));
