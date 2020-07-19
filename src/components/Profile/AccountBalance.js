import React from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    balanceItem: {
        padding: "24px 32px 24px 24px",
        maxWidth: "550px",
        marginBottom: "38px"
    },
    balanceTitle: {
        fontWeight: "bold"
    }
}));

const AccountBalance = () => {
    const classes = useStyles();

    return (
        <Paper classes={{ root: classes.balanceItem }} elevation={3}>
            <div>
                <Typography classes={{ root: classes.balanceTitle }}>
                    Account Balance
                </Typography>
                <Typography variant="caption">15.2000</Typography>
            </div>
        </Paper>
    );
};

export default AccountBalance;
