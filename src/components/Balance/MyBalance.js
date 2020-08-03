import React from "react";
import { inject, observer } from "mobx-react";
import { Paper, Typography, Hidden, makeStyles } from "@material-ui/core";

import { Loader } from "@/components";
import { WalletIcon } from "@/icons";
import MyWallet from '@/components/Balance/MyWallet';

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
            marginBottom: "16px"
        }
    },
    walletIcon: {
        marginRight: "16px",
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    walletTitle: {
        fontSize: "24px",
        fontWeight: "bold",
        marginRight: 24,
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
        flex: 1,
        border: `1px solid ${theme.palette.background.main}`,
        [theme.breakpoints.down("sm")]: {
            display: "block"
        },
        [theme.breakpoints.down("xs")]: {
            display: "flex",
            width: "100%",
            overflow: "hidden"
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
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: "16px",
                wordBreak: "normal",
                overflow: "hidden",
                textOverflow: "ellipsis"
            }
        },
        [theme.breakpoints.down("sm")]: {
            width: "unset"
        },
        [theme.breakpoints.down("xs")]: {
            width: "40%"
        }
    },
    activeField: {
        borderRadius: "0 5px 5px 0",
        padding: "11px",
        height: "20px",
        margin: "auto 0",
        [theme.breakpoints.down("xs")]: {
            padding: "11px 8px 7px",
            overflow: "hidden",
            textOverflow: "ellipsis"
        }
    },
    walletNumber: {
        fontSize: "22px",
        fontWeight: "bold",
        [theme.breakpoints.down("md")]: {
            fontSize: "16px"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "16px",
            lineHeight: 1.5,
            wordBreak: "normal",
            overflow: "hidden",
            textOverflow: "ellipsis"
        }
    }
}));

const MyBalance = ({ user, balance, pending }) => {
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
                    <Typography>{user && user.ethereumAddress}</Typography>
                </div>
                <div className={classes.activeField}>
                    <Typography
                        classes={{ root: classes.walletNumber }}
                        variant="h2"
                        color="textSecondary"
                    >
                        {!pending ? balance : <Loader size={20} />}
                    </Typography>
                </div>
            </div>
            <MyWallet/>
        </Paper>
    );
};

const mapMoxToProps = ({ user, userBalance }) => ({
    user: user.user,
    balance: userBalance.balance,
    pending: userBalance.pending
});

export default inject(mapMoxToProps)(observer(MyBalance));
