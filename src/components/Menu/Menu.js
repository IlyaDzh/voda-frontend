import React from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { Drawer, Typography, Hidden, makeStyles, useTheme } from "@material-ui/core";

import { MenuList, Button } from "@/components";
import logo from "@/icons/logo.png";

const useStyles = makeStyles(theme => ({
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: "280px",
            flexShrink: 0
        }
    },
    drawerPaper: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        width: "280px",
        background: theme.palette.primary.main,
        boxShadow: "5px 0px 10px rgba(0, 0, 0, 0.25)",
        [theme.breakpoints.down("xs")]: {
            width: "230px"
        }
    },
    logoWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "134px"
    },
    userTypeWrapper: {
        padding: "0 32px",
        [theme.breakpoints.down("xs")]: {
            padding: "24px 24px 0"
        }
    },
    userType: {
        color: "#fff",
        lineHeight: "37px",
        [theme.breakpoints.down("xs")]: {
            fontSize: "16px"
        }
    },
    entryActions: {
        padding: "0 32px 16px",
        "& button:first-child": {
            marginBottom: "16px"
        },
        "& button:last-child": {
            marginBottom: 0
        },
        [theme.breakpoints.down("xs")]: {
            padding: "0 24px"
        }
    },
    lendingLinks: {
        padding: "16px 32px 0px",
        "& a": {
            display: "block",
            color: "white",
            marginBottom: "8px",
            textDecoration: "none",
            fontSize: "14px"
        }
    },
    bottomMenu: {
        padding: "32px"
    },
    policy: {
        marginBottom: "8px",
        color: "#fff",
        "& a": {
            color: "#fff",
            textDecoration: "none"
        }
    },
    copyright: {
        fontSize: "10px",
        fontWeight: 300,
        color: "#fff"
    }
}));

const Menu = ({
    isAuth,
    userType,
    user,
    setOpenLoginModal,
    setOpenRegisterModal,
    doLogout,
    mobileOpen,
    toggleMobileOpen
}) => {
    const classes = useStyles();
    const theme = useTheme();

    const handleLogin = () => {
        setOpenLoginModal(true);
    };

    const handleRegister = () => {
        setOpenRegisterModal(true);
    };

    const drawer = (
        <>
            <div>
                <Hidden xsDown>
                    <Link to="/" className={classes.logoWrapper}>
                        <img src={logo} alt="Voda logo" />
                    </Link>
                </Hidden>
                <div className={classes.userTypeWrapper}>
                    <Typography classes={{ root: classes.userType }} variant="h3">
                        {isAuth &&
                            (userType === "seller"
                                ? "Data validator client"
                                : userType === "purchaser"
                                ? "Data mart client"
                                : "")}
                    </Typography>
                </div>
                <MenuList typeUser={userType} />
                <div className={classes.entryActions}>
                    {!isAuth ? (
                        <>
                            <Hidden xsDown>
                                <Button
                                    color="secondary"
                                    size="large"
                                    onClick={handleLogin}
                                    fullWidth
                                >
                                    Log In
                                </Button>
                                <Button
                                    size="large"
                                    onClick={handleRegister}
                                    fullWidth
                                >
                                    Register
                                </Button>
                            </Hidden>
                            <Hidden smUp>
                                <Button
                                    color="secondary"
                                    onClick={handleLogin}
                                    disableElevation
                                    fullWidth
                                >
                                    Log In
                                </Button>
                                <Button
                                    onClick={handleRegister}
                                    disableElevation
                                    fullWidth
                                >
                                    Register
                                </Button>
                            </Hidden>
                        </>
                    ) : (
                        <>
                            <Hidden xsDown>
                                <Button
                                    color="secondary"
                                    size="large"
                                    onClick={doLogout}
                                    fullWidth
                                >
                                    Sign Out
                                </Button>
                            </Hidden>
                            <Hidden smUp>
                                <Button
                                    color="secondary"
                                    onClick={doLogout}
                                    disableElevation
                                    fullWidth
                                >
                                    Sign Out
                                </Button>
                            </Hidden>
                        </>
                    )}
                </div>
                <div className={classes.lendingLinks}>
                    <Typography>
                        <a
                            href="https://voda.global/technology"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Technology
                        </a>
                    </Typography>
                    <Typography>
                        <a
                            href="https://voda.global/documents"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Documents
                        </a>
                    </Typography>
                    <Typography>
                        <a
                            href="https://voda.global/about"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            About
                        </a>
                    </Typography>
                    <Typography>
                        <a
                            href="https://voda.global/contacts"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contacts
                        </a>
                    </Typography>
                </div>
            </div>
            <div className={classes.bottomMenu}>
                <Typography classes={{ root: classes.policy }}>
                    <a
                        href="https://voda.global/docs/Privacy_Policy_VODA.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Privacy Policy
                    </a>
                </Typography>
                <Typography classes={{ root: classes.copyright }}>
                    Copyright VODA team (c) 2020
                </Typography>
            </div>
        </>
    );

    return (
        <nav className={classes.drawer}>
            <Hidden implementation="css" smUp>
                <Drawer
                    variant="temporary"
                    anchor={theme.direction === "rtl" ? "right" : "left"}
                    open={mobileOpen}
                    onClose={toggleMobileOpen}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    ModalProps={{
                        keepMounted: true
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden implementation="css" xsDown>
                <Drawer
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    );
};

const mapMoxToProps = ({ user, login, register, drawer }) => ({
    isAuth: user.isAuth,
    userType: user.userType,
    doLogout: user.doLogout,
    setOpenLoginModal: login.setOpenLoginModal,
    setOpenRegisterModal: register.setOpenRegisterModal,
    mobileOpen: drawer.mobileOpen,
    setMobileOpen: drawer.setMobileOpen,
    toggleMobileOpen: drawer.toggleMobileOpen
});

export default inject(mapMoxToProps)(observer(Menu));
