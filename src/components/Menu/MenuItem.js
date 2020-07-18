import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    listItem: {
        padding: "8px 32px",
        "&.Mui-selected": {
            backgroundColor: "rgba(0, 0, 0, 0.2)"
        }
    },
    listItemIcon: {
        minWidth: "44px"
    },
    listItemText: {
        color: "#fff"
    }
}));

const MenuItem = ({ to, activeRoutes, icon, text }) => {
    const classes = useStyles();
    const { pathname } = useLocation();

    return (
        <ListItem
            classes={{ root: classes.listItem }}
            component={NavLink}
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

export default MenuItem;
