import React, { useEffect, useCallback } from "react";
import { inject, observer } from "mobx-react";
import { Grid, Hidden, makeStyles } from "@material-ui/core";

import { Button, FileCard } from "@/components";

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
    exploreFiles,
    fetchExploreFiles,
    buyFile,
    resetFiles,
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
            {exploreFiles.map((card, i) => (
                <FileCard
                    key={i}
                    card={card}
                    buyFile={buyFile}
                    openDetails={setOpenGoodsInfoModal}
                />
            ))}
            <Grid item xs={12}>
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
            </Grid>
        </>
    );
};

const mapMoxToProps = ({ files, infoModals }) => ({
    exploreFiles: files.exploreFiles,
    fetchExploreFiles: files.fetchExploreFiles,
    buyFile: files.buyFile,
    resetFiles: files.resetFiles,
    setOpenGoodsInfoModal: infoModals.setOpenGoodsInfoModal
});

export default inject(mapMoxToProps)(observer(FilesList));
