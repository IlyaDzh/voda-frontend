import React from "react";
import { Grid } from "@material-ui/core";

import { MyBalance, AccountBalancesBlock, AccountPassword } from "@/components";

const ProfilePage = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <MyBalance />
            </Grid>
            <AccountBalancesBlock />
            <Grid item xs={12}>
                <AccountPassword />
            </Grid>
        </Grid>
    );
};

export default ProfilePage;
