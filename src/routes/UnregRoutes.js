import React from "react";
import { Switch, Route } from "react-router-dom";

import { ExploreFilesPage, DashboardPage, ErrorPage } from "@/pages";

const UnregRoutes = () => (
    <Switch>
        <Route exact path={["/", "/explore"]} component={ExploreFilesPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route component={ErrorPage} />
    </Switch>
);

export default UnregRoutes;
