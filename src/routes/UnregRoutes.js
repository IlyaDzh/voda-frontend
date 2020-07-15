import React from "react";
import { Switch, Route } from "react-router-dom";

import { Explore, Dashboard, ErrorPage } from "@/pages";

const UnregRoutes = () => (
    <Switch>
        <Route exact path={["/", "/explore"]} component={Explore} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route component={ErrorPage} />
    </Switch>
);

export default UnregRoutes;
