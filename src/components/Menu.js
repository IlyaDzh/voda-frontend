import React, { useState } from "react";
import {
    AppBar,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    Hidden,
    makeStyles,
    useTheme
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { ExploreFilesIcon, KibanaDashboardsIcon } from "@/icons";

const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

const Menu = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <List>
                <ListItem key="explore" button>
                    <ListItemIcon>
                        <ExploreFilesIcon />
                    </ListItemIcon>
                    <ListItemText primary="Explore files" />
                </ListItem>
                <ListItem key="kibana-dashboards" button>
                    <ListItemIcon>
                        <KibanaDashboardsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Kibana Dashboards" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden implementation="css" smUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
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
        </div>
    );
};

export default Menu;
