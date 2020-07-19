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
        width: "280px",
        background: theme.palette.primary.main,
        boxShadow: "5px 0px 10px rgba(0, 0, 0, 0.25)"
    },
    logoWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "134px"
    },
    userTypeWrapper: {
        padding: "0 32px"
    },
    userType: {
        color: "#fff",
        lineHeight: "37px"
    },
    entryActions: {
        padding: "0 32px",
        "& button:first-child": {
            marginBottom: "16px"
        }
    }
}));

const Menu = ({
    isAuth,
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
            <Link to="/" className={classes.logoWrapper}>
                <img src={logo} alt="Voda logo" />
            </Link>
            <div className={classes.userTypeWrapper}>
                <Typography classes={{ root: classes.userType }} variant="h3">
                    {user && user.type === "seller"
                        ? "Data validator client"
                        : "Data mart client"}
                </Typography>
            </div>
            <MenuList typeUser={user && user.type} />
            <div className={classes.entryActions}>
                {!isAuth ? (
                    <>
                        <Button
                            color="secondary"
                            size="large"
                            onClick={handleLogin}
                            fullWidth
                        >
                            Log In
                        </Button>
                        <Button size="large" onClick={handleRegister} fullWidth>
                            Register
                        </Button>
                    </>
                ) : (
                    <Button
                        color="secondary"
                        size="large"
                        onClick={doLogout}
                        fullWidth
                    >
                        Sign Out
                    </Button>
                )}
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
    user: user.user,
    setOpenLoginModal: login.setOpenLoginModal,
    setOpenRegisterModal: register.setOpenRegisterModal,
    doLogout: login.doLogout,
    mobileOpen: drawer.mobileOpen,
    setMobileOpen: drawer.setMobileOpen,
    toggleMobileOpen: drawer.toggleMobileOpen
});

export default inject(mapMoxToProps)(observer(Menu));
