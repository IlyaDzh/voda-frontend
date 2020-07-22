import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import { Button, AccountBalance } from "@/components";

const useStyles = makeStyles(theme => ({
    accountBalance: {
        maxWidth: "550px"
    },
    addWalletBtn: {
        minWidth: "220px"
    }
}));

const AccountBalancesBlock = () => {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12}>
                <AccountBalance
                    className={classes.accountBalance}
                    title="Account Balance"
                    number="15.2000"
                />
            </Grid>
            <Grid item xs={12}>
                <AccountBalance
                    className={classes.accountBalance}
                    title="Account Balance"
                    number="15.2000"
                />
            </Grid>
            <Grid item xs={12}>
                <AccountBalance
                    className={classes.accountBalance}
                    title="Account Balance"
                    number="15.2000"
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    className={classes.addWalletBtn}
                    color="secondary"
                    size="large"
                    onClick={() => console.log("add wallet")}
                >
                    Add wallet
                </Button>
            </Grid>
        </>
    );
};

export default AccountBalancesBlock;
