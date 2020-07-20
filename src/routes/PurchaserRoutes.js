import React from "react";
import { Switch, Route } from "react-router-dom";

import {
    DataPurchasesPage,
    ExploreFilesPage,
    ProfilePage,
    KibanaDashboardsPage,
    ErrorPage
} from "@/pages";

const PurchaserRoutes = () => (
    <Switch>
        <Route exact path={["/", "/purchases"]} component={DataPurchasesPage} />
        <Route exact path="/explore" component={ExploreFilesPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/dashboard" component={KibanaDashboardsPage} />
        <Route component={ErrorPage} />
    </Switch>
);

export default PurchaserRoutes;