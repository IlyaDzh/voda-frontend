import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { DashboardPage, DigitalGoodsPage, HistoryPage, ErrorPage } from "@/pages";

const SellerRoutes = ({ redirect }) => (
    <Switch>
        <Route exact path={["/", "/dashboard"]} component={DashboardPage} />
        <Route exact path="/digital-goods" component={DigitalGoodsPage} />
        <Route exact path="/history" component={HistoryPage} />
        <Route render={() => (redirect ? <Redirect to="/" /> : ErrorPage)} />
    </Switch>
);

export default SellerRoutes;
