import React from "react";
import { Switch, Route } from "react-router-dom";

import { DashboardPage, DigitalGoodsPage, HistoryPage, ErrorPage } from "@/pages";

const SellerRoutes = () => (
    <Switch>
        <Route exact path={["/", "/dashboard"]} component={DashboardPage} />
        <Route exact path="/digital-goods" component={DigitalGoodsPage} />
        <Route exact path="/history" component={HistoryPage} />
        <Route component={ErrorPage} />
    </Switch>
);

export default SellerRoutes;
