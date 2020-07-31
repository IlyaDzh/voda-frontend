import React from "react";
import { Link } from "react-router-dom";
import { Typography, makeStyles } from "@material-ui/core";
import { ArrowBackOutlined } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    errorPage: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 64px)",
        [theme.breakpoints.down("xs")]: {
            height: "calc(100vh - 134px)"
        }
    },
    errorTitle: {
        fontWeight: "bold",
        fontSize: "200px",
        margin: 0,
        color: theme.palette.primary.main,
        [theme.breakpoints.down("sm")]: {
            fontSize: "140px"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "112px"
        }
    },
    errorSubtitle: {
        margin: 0,
        fontSize: "48px",
        color: theme.palette.text.secondary,
        [theme.breakpoints.down("sm")]: {
            fontSize: "32px"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "26px"
        }
    },
    errorButton: {
        display: "flex",
        alignItems: "center",
        marginTop: 20,
        color: theme.palette.text.secondary,
        "& svg": {
            marginRight: 6
        }
    },
    errorButtonText: {
        fontSize: "32px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "24px"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "18px"
        }
    }
}));

const ErrorPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.errorPage}>
            <Typography classes={{ root: classes.errorTitle }} variant="h1">
                404
            </Typography>
            <Typography classes={{ root: classes.errorSubtitle }}>
                Page not found
            </Typography>
            <Link to="/" className={classes.errorButton}>
                <ArrowBackOutlined />
                <Typography classes={{ root: classes.errorButtonText }} variant="h2">
                    Go to main page
                </Typography>
            </Link>
        </div>
    );
};

export default ErrorPage;
