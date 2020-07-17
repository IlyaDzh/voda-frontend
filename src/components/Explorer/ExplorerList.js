import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import { Button, FileCard } from "@/components";

const useStyles = makeStyles(theme => ({
    loadMoreBtn: {
        display: "block",
        maxWidth: "220px",
        margin: "0 auto"
    }
}));

const ExplorerList = () => {
    const classes = useStyles();

    const handleLoadMore = () => {
        console.log("Load more");
    };

    return (
        <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(card => (
                <FileCard key={card} card={card} />
            ))}
            <Grid item xs={12}>
                <Button
                    className={classes.loadMoreBtn}
                    size="large"
                    color="secondary"
                    onClick={handleLoadMore}
                    fullWidth
                >
                    Load more
                </Button>
            </Grid>
        </>
    );
};

export default ExplorerList;
