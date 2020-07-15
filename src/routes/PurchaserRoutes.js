import React from "react";
import { Switch, Route } from "react-router-dom";

import { DataPurchases, Explore, Profile, Dashboard, ErrorPage } from "@/pages";

const PurchaserRoutes = () => (
    <Switch>
        <Route exact path={["/", "/data"]} component={DataPurchases} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route component={ErrorPage} />
    </Switch>
);

export default PurchaserRoutes;
