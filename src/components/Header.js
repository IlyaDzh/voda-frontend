import React from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { AppBar, IconButton, Toolbar, Hidden, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import logo from "@/icons/logo.png";

const useStyles = makeStyles(theme => ({
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: "calc(100% - 280px)",
            marginLeft: "280px"
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    toolbar: {
        justifyContent: "space-between",
        minHeight: "60px",
        padding: "0 24px"
    },
    logoWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
        "& img": {
            height: "100%"
        },
        [theme.breakpoints.down("xs")]: {
            height: "30px"
        }
    }
}));

const _Header = ({ toggleMobileOpen }) => {
    const classes = useStyles();

    return (
        <Hidden smUp>
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar classes={{ root: classes.toolbar }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={toggleMobileOpen}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to="/" className={classes.logoWrapper}>
                        <img src={logo} alt="Voda logo" />
                    </Link>
                </Toolbar>
            </AppBar>
        </Hidden>
    );
};

const mapMoxToProps = ({ drawer }) => ({
    toggleMobileOpen: drawer.toggleMobileOpen
});

export default inject(mapMoxToProps)(observer(_Header));
