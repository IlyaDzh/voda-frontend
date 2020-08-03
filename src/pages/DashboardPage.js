import React from "react";
import { Grid } from "@material-ui/core";

import { MyBalance, AccountBalance, BalanceTransactions } from "@/components";

const DashboardPage = () => (
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <MyBalance />
        </Grid>
        <Grid item xs={12}>
            <AccountBalance />
        </Grid>
        <BalanceTransactions />
    </Grid>
);

export default DashboardPage;
