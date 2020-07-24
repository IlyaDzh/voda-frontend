import React from "react";
import { Grid, Typography } from "@material-ui/core";

import { MyBalance, AccountBalance, DashboardTransactions } from "@/components";

const DashboardPage = () => (
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <MyBalance />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
            <AccountBalance title="Account Balance" number="15.2000" />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
            <AccountBalance title="Wallet Balance" number="65.1000" />
        </Grid>
        <Grid item xs={12}>
            <Typography variant="caption" color="primary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat
            </Typography>
        </Grid>
        <DashboardTransactions />
    </Grid>
);

export default DashboardPage;
