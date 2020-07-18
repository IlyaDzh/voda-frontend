import React from "react";
import { List, makeStyles } from "@material-ui/core";

import { MenuItem } from "@/components";
import { SELLER_MENU_LIST, PURCHASER_MENU_LIST, UNREG_MENU_LIST } from "@/utils";
import {
    ExploreFilesIcon,
    KibanaDashboardsIcon,
    DataPurchasesIcon,
    ProfileIcon,
    DataOwnersIcon,
    DataSalesIcon,
    MyFilesIcon
} from "@/icons";

const useStyles = makeStyles(() => ({
    list: {
        padding: "24px 0"
    }
}));

const MenuList = ({ typeUser }) => {
    const classes = useStyles();

    const menuItems =
        typeUser === "purchaser"
            ? PURCHASER_MENU_LIST
            : typeUser === "seller"
            ? SELLER_MENU_LIST
            : UNREG_MENU_LIST;

    return (
        <List classes={{ root: classes.list }}>
            {menuItems.map(item => {
                switch (item) {
                    case "explore-files":
                        return (
                            <MenuItem
                                key={item}
                                to="/explore"
                                activeRoutes={
                                    typeUser !== "purchaser" && ["/", "/explore"]
                                }
                                icon={<ExploreFilesIcon />}
                                text="Explore files"
                            />
                        );
                    case "kibana-dashboards":
                        return (
                            <MenuItem
                                key={item}
                                to="/dashboard"
                                icon={<KibanaDashboardsIcon />}
                                text="Kibana Dashboards"
                            />
                        );
                    case "data-purchases":
                        return (
                            <MenuItem
                                key={item}
                                to="/purchases"
                                activeRoutes={["/", "/purchases"]}
                                icon={<DataPurchasesIcon />}
                                text="Data purchases"
                            />
                        );
                    case "profile":
                        return (
                            <MenuItem
                                key={item}
                                to="/profile"
                                icon={<ProfileIcon />}
                                text="Profile"
                            />
                        );
                    case "data-owners":
                        return (
                            <MenuItem
                                key={item}
                                to="/owners"
                                activeRoutes={["/", "/owners"]}
                                icon={<DataOwnersIcon />}
                                text="Data owners"
                            />
                        );
                    case "data-sales":
                        return (
                            <MenuItem
                                key={item}
                                to="/sales"
                                icon={<DataSalesIcon />}
                                text="Data sales"
                            />
                        );
                    case "my-files":
                        return (
                            <MenuItem
                                key={item}
                                to="/files"
                                icon={<MyFilesIcon />}
                                text="My files"
                            />
                        );
                    default:
                        return null;
                }
            })}
        </List>
    );
};

export default MenuList;
