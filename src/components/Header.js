import React from "react";
import { inject, observer } from "mobx-react";
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Hidden,
    makeStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

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
    }
}));

const _Header = ({ toggleMobileOpen }) => {
    const classes = useStyles();

    return (
        <Hidden smUp>
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={toggleMobileOpen}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>
        </Hidden>
    );
};

const mapMoxToProps = ({ drawer }) => ({
    toggleMobileOpen: drawer.toggleMobileOpen
});

export default inject(mapMoxToProps)(observer(_Header));
