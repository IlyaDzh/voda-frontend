import React from "react";
import { Grid } from "@material-ui/core";

import { MyBalance, AccountBalance, DashboardTransactions } from "@/components";

const ProfilePage = () => (
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <MyBalance />
        </Grid>
        <Grid item xs={12}>
            <AccountBalance />
        </Grid>
        <DashboardTransactions />
    </Grid>
);

export default ProfilePage;
