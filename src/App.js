import React from "react";
import { inject, observer } from "mobx-react";
import { makeStyles } from "@material-ui/core";

import { UnregRoutes, PurchaserRoutes, SellerRoutes } from "@/routes";
import { Menu, Header, LoginDialog, RegisterDialog } from "@/components";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        height: "100%"
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        background: theme.palette.background.main
    }
}));

const _App = ({ isAuth, typeUser }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <Menu />
            <main className={classes.content}>
                <div className={classes.toolbar} />
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
            </main>
        </div>
    );
};

const mapMoxToProps = ({ authorization }) => ({
    isAuth: authorization.isAuth,
    typeUser: authorization.userStore.typeUser
});

export const App = inject(mapMoxToProps)(observer(_App));
