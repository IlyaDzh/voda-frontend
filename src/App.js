import React from "react";
import { inject, observer } from "mobx-react";
import { makeStyles } from "@material-ui/core";

import { UnregRoutes, PurchaserRoutes, SellerRoutes } from "@/routes";
import {
    Menu,
    Header,
    LoginDialog,
    RegisterDialog,
    FileUploadDialog
} from "@/components";

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
        overflowX: "hidden",
        [theme.breakpoints.down("sm")]: {
            padding: "32px"
        },
        [theme.breakpoints.down("xs")]: {
            padding: "24px"
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
                <FileUploadDialog />
            </main>
        </div>
    );
};

const mapMoxToProps = ({ user }) => ({
    isAuth: user.isAuth,
    user: user.user
});

export const App = inject(mapMoxToProps)(observer(_App));
