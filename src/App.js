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
    toolbar: {
        [theme.breakpoints.down("xs")]: {
            minHeight: "70px"
        }
    },
    content: {
        flexGrow: 1,
        padding: "32px 64px",
        [theme.breakpoints.down("sm")]: {
            padding: "32px"
        }
    }
}));

const _App = ({ isAuth, user }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <Menu />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {isAuth ? (
                    user.type === "purchaser" ? (
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
    user: authorization.userStore.user
});

export const App = inject(mapMoxToProps)(observer(_App));
