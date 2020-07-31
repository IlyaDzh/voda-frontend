import React from "react";
import { List, makeStyles } from "@material-ui/core";

import { MenuItem } from "@/components";
import { SELLER_MENU_LIST, PURCHASER_MENU_LIST, UNREG_MENU_LIST } from "@/utils";
import {
    ExploreFilesIcon,
    DataPurchasesIcon,
    ProfileIcon,
    DashboardIcon,
    DigitalGoodsIcon,
    HistoryIcon
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
                    case "dashboard":
                        return (
                            <MenuItem
                                key={item}
                                to="/dashboard"
                                activeRoutes={["/", "/dashboard"]}
                                icon={<DashboardIcon />}
                                text="Dashboard"
                            />
                        );
                    case "digital-goods":
                        return (
                            <MenuItem
                                key={item}
                                to="/digital-goods"
                                icon={<DigitalGoodsIcon />}
                                text="Digital Goods"
                            />
                        );
                    case "sales-history":
                        return (
                            <MenuItem
                                key={item}
                                to="/history"
                                icon={<HistoryIcon />}
                                text="Sales History"
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
