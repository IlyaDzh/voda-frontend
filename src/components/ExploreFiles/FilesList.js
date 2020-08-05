import React, { useEffect, useCallback } from "react";
import { inject, observer } from "mobx-react";
import { Grid, Typography, Hidden, makeStyles } from "@material-ui/core";

import { Button, FileCard, Loader } from "@/components";

const useStyles = makeStyles(theme => ({
    loadMoreBtn: {
        display: "block",
        maxWidth: "220px",
        margin: "0 auto",
        [theme.breakpoints.down("xs")]: {
            maxWidth: "unset"
        }
    }
}));

const FilesList = ({
    isAuth,
    setOpenLoginModal,
    exploreFiles,
    pending,
    nextPageIsExist,
    fetchExploreFiles,
    setSearchText,
    resetFiles,
    currentPurchasingFile,
    doPurchase,
    setOpenGoodsInfoModal
}) => {
    const classes = useStyles();
    const fetchExploreFilesFunc = useCallback(fetchExploreFiles, []);
    const resetFilesFunc = useCallback(resetFiles, []);

    useEffect(() => {
        fetchExploreFilesFunc();
        return () => resetFilesFunc();
    }, [fetchExploreFilesFunc, resetFilesFunc]);

    return (
        <>
            {exploreFiles.length
                ? exploreFiles.map(card => (
                      <FileCard
                          key={card.id}
                          card={card}
                          isPending={card.pending}
                          isPurchased={card.purchased}
                          currentPurchasingFile={currentPurchasingFile}
                          purchaseFile={doPurchase}
                          openDetails={setOpenGoodsInfoModal}
                          userIsAuth={isAuth}
                          setSearchText={setSearchText}
                          openLoginModal={setOpenLoginModal}
                      />
                  ))
                : !pending && (
                      <Grid item xs={12}>
                          <Typography color="primary" variant="h1">
                              Not Found
                          </Typography>
                      </Grid>
                  )}
            <Grid item xs={12}>
                {pending ? (
                    <Loader mt={25} mb={25} />
                ) : (
                    nextPageIsExist() && (
                        <>
                            <Hidden smDown>
                                <Button
                                    className={classes.loadMoreBtn}
                                    size="large"
                                    color="secondary"
                                    onClick={fetchExploreFiles}
                                    fullWidth
                                >
                                    Load more
                                </Button>
                            </Hidden>
                            <Hidden mdUp>
                                <Button
                                    className={classes.loadMoreBtn}
                                    color="secondary"
                                    onClick={fetchExploreFiles}
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

const mapMoxToProps = ({ user, login, files, filePurchase, infoModals }) => ({
    isAuth: user.isAuth,
    setOpenLoginModal: login.setOpenLoginModal,
    exploreFiles: files.exploreFiles,
    pending: files.pending,
    nextPageIsExist: files.nextPageIsExist,
    fetchExploreFiles: files.fetchExploreFiles,
    resetFiles: files.resetFiles,
    setSearchText: files.setSearchText,
    currentPurchasingFile: filePurchase.currentPurchasingFile,
    doPurchase: filePurchase.doPurchase,
    setOpenGoodsInfoModal: infoModals.setOpenGoodsInfoModal
});

export default inject(mapMoxToProps)(observer(FilesList));
