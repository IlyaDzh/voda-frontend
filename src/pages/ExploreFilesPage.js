import React from "react";
import { inject, observer } from "mobx-react";
import { Grid, Hidden } from "@material-ui/core";

import { SearchBar, MyBalance, FilesList } from "@/components";

const ExploreFilesPage = ({ isAuth }) => (
    <Grid container spacing={3}>
        {isAuth && (
            <Hidden mdUp>
                <Grid item xs={12}>
                    <MyBalance />
                </Grid>
            </Hidden>
        )}
        <SearchBar />
        <FilesList />
    </Grid>
);

const mapMoxToProps = ({ user }) => ({
    isAuth: user.isAuth
});

export default inject(mapMoxToProps)(observer(ExploreFilesPage));
