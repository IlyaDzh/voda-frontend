import React from "react";
import { Switch, Route } from "react-router-dom";

import { ExploreFilesPage, KibanaDashboardsPage, ErrorPage } from "@/pages";

const UnregRoutes = () => (
    <Switch>
        <Route exact path={["/", "/explore"]} component={ExploreFilesPage} />
        <Route exact path="/kibana-dashboards" component={KibanaDashboardsPage} />
        <Route component={ErrorPage} />
    </Switch>
);

export default UnregRoutes;
