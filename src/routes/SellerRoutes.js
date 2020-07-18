import React from "react";
import { Switch, Route } from "react-router-dom";

import {
    DataOwnersPage,
    DataSalesPage,
    ProfilePage,
    MyFilesPage,
    ErrorPage
} from "@/pages";

const SellerRoutes = () => (
    <Switch>
        <Route exact path={["/", "/owners"]} component={DataOwnersPage} />
        <Route exact path="/sales" component={DataSalesPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/files" component={MyFilesPage} />
        <Route component={ErrorPage} />
    </Switch>
);

export default SellerRoutes;
