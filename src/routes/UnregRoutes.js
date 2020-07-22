import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { ExploreFilesPage, KibanaDashboardsPage, ErrorPage } from "@/pages";

const UnregRoutes = ({ redirect }) => (
    <Switch>
        <Route exact path={["/", "/explore"]} component={ExploreFilesPage} />
        <Route exact path="/kibana-dashboards" component={KibanaDashboardsPage} />
        <Route render={() => (redirect ? <Redirect to="/" /> : <ErrorPage />)} />
    </Switch>
);

export default UnregRoutes;
