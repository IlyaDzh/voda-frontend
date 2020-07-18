import React, { useEffect, useCallback } from "react";
import { inject, observer } from "mobx-react";
import { Grid, makeStyles } from "@material-ui/core";

import { Button, FileCard } from "@/components";

const useStyles = makeStyles(() => ({
    loadMoreBtn: {
        display: "block",
        maxWidth: "220px",
        margin: "0 auto"
    }
}));

const ExplorerList = ({ exploreFiles, fetchExploreFiles, buyFile, resetFiles }) => {
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
                <FileCard key={i} card={card} onBuy={buyFile} />
            ))}
            <Grid item xs={12}>
                <Button
                    className={classes.loadMoreBtn}
                    size="large"
                    color="secondary"
                    onClick={fetchExploreFiles}
                    fullWidth
                >
                    Load more
                </Button>
            </Grid>
        </>
    );
};

const mapMoxToProps = ({ files }) => ({
    exploreFiles: files.exploreFiles,
    fetchExploreFiles: files.fetchExploreFiles,
    buyFile: files.buyFile,
    resetFiles: files.resetFiles
});

export default inject(mapMoxToProps)(observer(ExplorerList));
