import React from "react";
import { inject, observer } from "mobx-react";
import { NavLink, useLocation } from "react-router-dom";
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    listItem: {
        padding: "8px 32px",
        "&.Mui-selected": {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.3)"
            }
        },
        [theme.breakpoints.down("xs")]: {
            padding: "8px 24px"
        }
    },
    listItemIcon: {
        minWidth: "44px"
    },
    listItemText: {
        color: "#fff"
    }
}));

const MenuItem = ({ to, activeRoutes, icon, text, setMobileOpen }) => {
    const classes = useStyles();
    const { pathname } = useLocation();

    return (
        <ListItem
            classes={{ root: classes.listItem }}
            component={NavLink}
            onClick={() => setMobileOpen(false)}
            isActive={() =>
                activeRoutes ? activeRoutes.includes(pathname) : to === pathname
            }
            to={to}
            activeClassName="Mui-selected"
            button
        >
            <ListItemIcon classes={{ root: classes.listItemIcon }}>
                {icon}
            </ListItemIcon>
            <ListItemText>
                <Typography classes={{ root: classes.listItemText }}>
                    {text}
                </Typography>
            </ListItemText>
        </ListItem>
    );
};

const mapMoxToProps = ({ drawer }) => ({
    setMobileOpen: drawer.setMobileOpen
});

export default inject(mapMoxToProps)(observer(MenuItem));
