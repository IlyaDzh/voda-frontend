import React from "react";
import { Paper, Typography, makeStyles } from "@material-ui/core";

import { Button, TextField } from "@/components";

const useStyles = makeStyles(theme => ({
    passwordPaper: {
        display: "flex",
        alignItems: "center",
        padding: "19px 24px",
        [theme.breakpoints.down("md")]: {
            display: "block"
        }
    },
    passwordWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        }
    },
    passwordTitle: {
        fontWeight: "bold",
        marginRight: "32px",
        whiteSpace: "nowrap",
        [theme.breakpoints.down("md")]: {
            marginBottom: "16px"
        }
    },
    passwordInput: {
        width: "300px",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            marginBottom: "16px"
        }
    },
    passwordBtn: {
        color: theme.palette.primary.main,
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.4)"
    }
}));

const AccountPassword = () => {
    const classes = useStyles();

    return (
        <Paper classes={{ root: classes.passwordPaper }} elevation={3}>
            <Typography classes={{ root: classes.passwordTitle }} variant="h2">
                Account Password
            </Typography>
            <div className={classes.passwordWrapper}>
                <TextField
                    className={classes.passwordInput}
                    placeholder="Enter your password"
                    type="password"
                    variant="outlined"
                />
                <Button
                    className={classes.passwordBtn}
                    variant="outlined"
                    size="large"
                    onClick={() => console.log("change password")}
                >
                    Change Password
                </Button>
            </div>
        </Paper>
    );
};

export default AccountPassword;
