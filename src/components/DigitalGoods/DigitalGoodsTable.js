import React, { useCallback, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { Grid, Typography, Paper, Hidden, makeStyles } from "@material-ui/core";

import { Button, Loader } from "@/components";
import { formatDate } from "@/utils";
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
                fontSize: "13px"
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
                fontSize: "12px"
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

const DigitalGoodsTable = ({
    uploadedItems,
    pending,
    fetchUploadedItems,
    resetUploadedItems,
    setOpenGoodsInfoModal
}) => {
    const classes = useStyles();
    const fetchUploadedItemsFunc = useCallback(fetchUploadedItems, []);
    const resetUploadedItemsFunc = useCallback(resetUploadedItems, []);

    useEffect(() => {
        fetchUploadedItemsFunc();
        return () => resetUploadedItemsFunc();
    }, [fetchUploadedItemsFunc, resetUploadedItemsFunc]);

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
                {uploadedItems &&
                    uploadedItems.map((item, i) => (
                        <Paper
                            key={i}
                            classes={{ root: classes.tableItem }}
                            elevation={3}
                        >
                            <Typography>{item.file.id}</Typography>
                            <Typography>
                                {formatDate(item.file.createdAt)}
                            </Typography>
                            <Typography>
                                {formatDate(item.file.keepUntil)}
                            </Typography>
                            <Typography>{item.file.price}</Typography>
                            <Button
                                className={classes.tableItemDetails}
                                onClick={() =>
                                    setOpenGoodsInfoModal(true, item, true)
                                }
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
                                onClick={fetchUploadedItems}
                                fullWidth
                            >
                                Load more
                            </Button>
                        </Hidden>
                        <Hidden mdUp>
                            <Button
                                className={classes.loadMoreBtn}
                                color="secondary"
                                onClick={fetchUploadedItems}
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

const mapMoxToProps = ({ digitalGoods, infoModals }) => ({
    uploadedItems: digitalGoods.uploadedItems,
    pending: digitalGoods.pending,
    fetchUploadedItems: digitalGoods.fetchUploadedItems,
    resetUploadedItems: digitalGoods.resetUploadedItems,
    setOpenGoodsInfoModal: infoModals.setOpenGoodsInfoModal
});

export default inject(mapMoxToProps)(observer(DigitalGoodsTable));
