import React from "react";
import { inject, observer } from "mobx-react";

import { UnregRoutes, PurchaserRoutes, SellerRoutes } from "@/routes";
import { Menu, Header, LoginDialog, RegisterDialog } from "@/components";

const _App = ({ isAuth, typeUser }) => (
    <div className="App">
        <Menu isAuth={isAuth} type={typeUser} />
        <Header isAuth={isAuth} />
        {isAuth ? (
            typeUser === "purchaser" ? (
                <PurchaserRoutes />
            ) : (
                <SellerRoutes />
            )
        ) : (
            <UnregRoutes />
        )}
        <LoginDialog />
        <RegisterDialog />
    </div>
);

const mapMoxToProps = ({ authorization }) => ({
    isAuth: authorization.isAuth,
    typeUser: authorization.typeUser
});

export const App = inject(mapMoxToProps)(observer(_App));
