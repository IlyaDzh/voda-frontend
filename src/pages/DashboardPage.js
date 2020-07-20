import React from "react";
import { Grid } from "@material-ui/core";

import { MyBalance, AccountBalance } from "@/components";

const DashboardPage = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <MyBalance />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <AccountBalance
                        title="Account Balance"
                        number="15.2000"
                        unclockNumber="15.2000"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <AccountBalance
                        title="Wallet Balance"
                        number="65.1000"
                        unclockNumber="65.1000"
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default DashboardPage;
