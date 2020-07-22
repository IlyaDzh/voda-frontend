import React from "react";
import { Grid } from "@material-ui/core";

import { MyBalance, DataPurchasesTable } from "@/components";

const DataPurchasesPage = () => (
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <MyBalance />
        </Grid>
        <DataPurchasesTable />
    </Grid>
);

export default DataPurchasesPage;
