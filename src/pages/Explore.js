import React from "react";
import { Grid } from "@material-ui/core";

import { SearchBar, ExplorerList } from "@/components";

const Explore = () => (
    <div>
        <SearchBar />
        <Grid container spacing={3}>
            <ExplorerList />
        </Grid>
    </div>
);

export default Explore;
