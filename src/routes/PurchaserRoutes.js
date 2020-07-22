import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import {
    DataPurchasesPage,
    ExploreFilesPage,
    ProfilePage,
    KibanaDashboardsPage,
    ErrorPage
} from "@/pages";

const PurchaserRoutes = ({ redirect }) => (
    <Switch>
        <Route exact path={["/", "/purchases"]} component={DataPurchasesPage} />
        <Route exact path="/explore" component={ExploreFilesPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/kibana-dashboards" component={KibanaDashboardsPage} />
        <Route render={() => (redirect ? <Redirect to="/" /> : ErrorPage)} />
    </Switch>
);

export default PurchaserRoutes;
