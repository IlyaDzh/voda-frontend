import React from "react";
import { Grid } from "@material-ui/core";

import { DashboardHeader, DashboardTransactions } from "@/components";

const DashboardPage = () => (
    <Grid container spacing={3}>
        <DashboardHeader />
        <DashboardTransactions />
    </Grid>
);

export default DashboardPage;
