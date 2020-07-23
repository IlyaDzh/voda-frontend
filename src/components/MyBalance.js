import React from "react";
import { inject, observer } from "mobx-react";
import { Paper, Typography, Hidden, makeStyles } from "@material-ui/core";

import { Loader } from "@/components";
import { WalletIcon } from "@/icons";

const useStyles = makeStyles(theme => ({
    walletWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "19px 24px",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        }
    },
    walletHeader: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "24px"
        }
    },
    walletIcon: {
        marginRight: "16px"
    },
    walletTitle: {
        fontSize: "24px",
        fontWeight: "bold",
        marginRight: "10px",
        [theme.breakpoints.down("md")]: {
            fontSize: "22px"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "16px"
        }
    },
    walletBody: {
        display: "flex",
        borderRadius: "5px",
        border: `1px solid ${theme.palette.background.main}`,
        [theme.breakpoints.down("sm")]: {
            display: "block"
        }
    },
    disabledField: {
        background: theme.palette.background.main,
        padding: "11px 11px 7px",
        width: "100%",
        "& p": {
            wordBreak: "break-word",
            [theme.breakpoints.down("sm")]: {
                fontSize: "12px"
            }
        },
        [theme.breakpoints.down("sm")]: {
            width: "unset"
        }
    },
    activeField: {
        borderRadius: "0 5px 5px 0",
        padding: "11px",
        height: "20px",
        margin: "auto 0"
    },
    walletNumber: {
        fontSize: "22px",
        fontWeight: "bold",
        [theme.breakpoints.down("md")]: {
            fontSize: "16px"
        }
    }
}));

const MyWallet = ({ address, balance }) => {
    const classes = useStyles();

    return (
        <Paper classes={{ root: classes.walletWrapper }} elevation={3}>
            <div className={classes.walletHeader}>
                <div className={classes.walletIcon}>
                    <Hidden smDown>
                        <WalletIcon />
                    </Hidden>
                    <Hidden mdUp>
                        <WalletIcon isMobile />
                    </Hidden>
                </div>
                <Typography classes={{ root: classes.walletTitle }} variant="h2">
                    My Balance
                </Typography>
            </div>
            <div className={classes.walletBody}>
                <div className={classes.disabledField}>
                    <Typography>{address}</Typography>
                </div>
                <div className={classes.activeField}>
                    <Typography
                        classes={{ root: classes.walletNumber }}
                        variant="h2"
                        color="textSecondary"
                    >
                        {balance || <Loader size={20} />}
                    </Typography>
                </div>
            </div>
        </Paper>
    );
};

const mapMoxToProps = ({ user, userBalance }) => ({
    address: user.user.address,
    balance: userBalance.balance,
    pending: userBalance.pending
});

export default inject(mapMoxToProps)(observer(MyWallet));
