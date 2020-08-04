import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import { SearchInput } from "@/components";

const useStyles = makeStyles(() => ({
    searchBlock: {
        paddingRight: 80
    }
}));

const SearchInputGrid = ({ sm, md, lg }) => {
    const classes = useStyles();
    
    return (
        <Grid item sm={sm} md={md} lg={lg}>
            <div className={classes.searchBlock}>
                <SearchInput />
            </div>
        </Grid>
    );
};

export default SearchInputGrid;
