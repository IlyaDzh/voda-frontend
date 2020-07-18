import React from "react";
import { Paper, Typography, makeStyles } from "@material-ui/core";

import { WalletIcon } from "@/icons";

const useStyles = makeStyles(() => ({
    walletWrapper: {
        display: "flex",
        alignItems: "center",
        padding: "19px 24px"
    },
    walletIcon: {
        marginRight: "16px"
    },
    walletTitle: {
        fontWeight: "bold",
        marginRight: "50px"
    }
}));

const MyWallet = () => {
    const classes = useStyles();

    return (
        <Paper classes={{ root: classes.walletWrapper }} elevation={3}>
            <div className={classes.walletIcon}>
                <WalletIcon />
            </div>
            <Typography classes={{ root: classes.walletTitle }} variant="h2">
                My Wallet
            </Typography>

        </Paper>
    );
};

export default MyWallet;
