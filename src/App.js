import React from "react";
import { inject, observer } from "mobx-react";
import { makeStyles } from "@material-ui/core";

import { UnregRoutes, PurchaserRoutes, SellerRoutes } from "@/routes";
import {
    Menu,
    Header,
    Backdrop,
    LoginDialog,
    RegisterDialog,
    FileUploadDialog,
    CardInfoDialog,
    TransactionInfoDialog,
    DepositDialog,
    WithdrawDialog,
    Snackbar
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

const _App = ({ isAuth, userType, pending, authWithForm, logoutWithForm }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <Menu />

            <main className={classes.content}>
                <div className={classes.toolbar} />
                {!pending ? (
                    isAuth ? (
                        userType === "purchaser" ? (
                            <PurchaserRoutes redirect={authWithForm} />
                        ) : (
                            <SellerRoutes redirect={authWithForm} />
                        )
                    ) : (
                        <UnregRoutes redirect={logoutWithForm} />
                    )
                ) : (
                    <Backdrop />
                )}
            </main>

            <LoginDialog />
            <RegisterDialog />
            <FileUploadDialog />
            <CardInfoDialog />
            <TransactionInfoDialog />
            <DepositDialog />
            <WithdrawDialog />
            <Snackbar />
        </div>
    );
};

const mapMoxToProps = ({ user }) => ({
    isAuth: user.isAuth,
    userType: user.userType,
    pending: user.pending,
    authWithForm: user.authWithForm,
    logoutWithForm: user.logoutWithForm
});

export const App = inject(mapMoxToProps)(observer(_App));
