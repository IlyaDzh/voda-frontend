import React from "react";
import { inject, observer } from "mobx-react";
import { Paper, Typography, makeStyles } from "@material-ui/core";

import { Button, Loader } from "@/components";

const useStyles = makeStyles(theme => ({
    balanceItem: {
        display: "flex",
        justifyContent: "space-between",
        padding: "24px 32px 24px 24px",
        [theme.breakpoints.down("md")]: {
            display: "block",
            padding: "24px"
        }
    },
    balanceHeader: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            marginBottom: "16px"
        },
        [theme.breakpoints.down("sm")]: {
            display: "block"
        }
    },
    balanceActions: {
        display: "flex",
        alignItems: "center"
    },
    balanceTitle: {
        fontWeight: "bold",
        marginRight: "32px",
        whiteSpace: "nowrap",
        [theme.breakpoints.down("sm")]: {
            fontSize: "16px",
            marginBottom: "16px"
        }
    },
    disabledField: {
        background: theme.palette.background.main,
        borderRadius: "5px",
        padding: "4px 12px 2px 12px",
        marginRight: "16px",
        minWidth: "250px",
        width: "100%",
        height: "24px",
        [theme.breakpoints.down("md")]: {
            minWidth: "unset",
            marginRight: 0
        },
        [theme.breakpoints.down("sm")]: {
            maxWidth: "calc(100% - 24px)"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "16px"
        }
    },
    depositBtn: {
        minWidth: "125px",
        marginRight: "24px",
        [theme.breakpoints.down("sm")]: {
            minWidth: "unset",
            maxWidth: "125px",
            width: "100%"
        }
    },
    withdrawBtn: {
        minWidth: "125px",
        [theme.breakpoints.down("sm")]: {
            minWidth: "unset",
            maxWidth: "125px",
            width: "100%"
        }
    }
}));

const AccountBalance = ({
    balance,
    pending,
    setOpenDepositModal,
    setOpenWithdrawModal
}) => {
    const classes = useStyles();

    return (
        <Paper classes={{ root: classes.balanceItem }} elevation={3}>
            <div className={classes.balanceHeader}>
                <Typography variant="h2" classes={{ root: classes.balanceTitle }}>
                    Account Balance
                </Typography>
                <div className={classes.disabledField}>
                    {!pending ? (
                        <Typography>{balance}</Typography>
                    ) : (
                        <Loader size={20} />
                    )}
                </div>
            </div>
            <div className={classes.balanceActions}>
                <Button
                    className={classes.depositBtn}
                    color="secondary"
                    onClick={() => setOpenDepositModal(true)}
                    disableElevation
                >
                    Deposit
                </Button>
                <Button
                    className={classes.withdrawBtn}
                    onClick={() => setOpenWithdrawModal(true)}
                    disableElevation
                    error
                >
                    Withdraw
                </Button>
            </div>
        </Paper>
    );
};

const mapMoxToProps = ({ userBalance }) => ({
    balance: userBalance.balance,
    pending: userBalance.pending,
    setOpenDepositModal: userBalance.setOpenDepositModal,
    setOpenWithdrawModal: userBalance.setOpenWithdrawModal
});

export default inject(mapMoxToProps)(observer(AccountBalance));
