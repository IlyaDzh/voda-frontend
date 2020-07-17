import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    makeStyles
} from "@material-ui/core";

import { ExploreFilesIcon, KibanaDashboardsIcon } from "@/icons";

const useStyles = makeStyles(theme => ({
    list: {
        padding: "24px 0"
    },
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

const MenuList = () => {
    const classes = useStyles();
    const { pathname } = useLocation();

    return (
        <List classes={{ root: classes.list }}>
            <ListItem
                key="explore"
                classes={{ root: classes.listItem }}
                component={NavLink}
                isActive={() => ["/", "/explore"].includes(pathname)}
                to="/explore"
                activeClassName="Mui-selected"
                button
            >
                <ListItemIcon classes={{ root: classes.listItemIcon }}>
                    <ExploreFilesIcon />
                </ListItemIcon>
                <ListItemText>
                    <Typography classes={{ root: classes.listItemText }}>
                        Explore files
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem
                key="kibana-dashboards"
                classes={{ root: classes.listItem }}
                component={NavLink}
                to="/dashboard"
                activeClassName="Mui-selected"
                button
            >
                <ListItemIcon classes={{ root: classes.listItemIcon }}>
                    <KibanaDashboardsIcon />
                </ListItemIcon>
                <ListItemText>
                    <Typography classes={{ root: classes.listItemText }}>
                        Kibana Dashboardss
                    </Typography>
                </ListItemText>
            </ListItem>
        </List>
    );
};

export default MenuList;
