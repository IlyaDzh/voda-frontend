import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { ExploreFilesPage, ErrorPage } from "@/pages";

const UnregRoutes = ({ redirect }) => (
    <Switch>
        <Route exact path={["/", "/explore"]} component={ExploreFilesPage} />
        <Route render={() => (redirect ? <Redirect to="/" /> : <ErrorPage />)} />
    </Switch>
);

export default UnregRoutes;
