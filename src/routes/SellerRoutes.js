import React from "react";
import { Switch, Route } from "react-router-dom";

import { DataOwners, DataSales, Profile, Files, ErrorPage } from "@/pages";

const SellerRoutes = () => (
    <Switch>
        <Route exact path={["/", "/data"]} component={DataOwners} />
        <Route exact path="/sales" component={DataSales} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/files" component={Files} />
        <Route component={ErrorPage} />
    </Switch>
);

export default SellerRoutes;
