import React from "react";
import { inject, observer } from "mobx-react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    Typography,
    IconButton,
    makeStyles
} from "@material-ui/core";

import { Button, TextField } from "@/components";
import { CloseIcon } from "@/icons";

const useStyles = makeStyles(theme => ({
    dialogPaper: {
        maxWidth: "540px",
        [theme.breakpoints.down("xs")]: {
            maxWidth: "unset"
        }
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1)
    },
    dialogTitleWrapper: {
        padding: "24px 64px 8px 24px"
    },
    dialogContentWrapper: {
        padding: "8px 24px 24px"
    },
    dialogActionsWrapper: {
        display: "flex",
        padding: "0 24px 24px",
        [theme.breakpoints.down("xs")]: {
            display: "block"
        }
    },
    balanceOperationBtn: {
        minWidth: "105px",
        marginLeft: "24px",
        [theme.breakpoints.down("xs")]: {
            minWidth: "139px",
            marginLeft: 0
        }
    },
    balanceInput: {
        [theme.breakpoints.down("xs")]: {
            marginBottom: "16px"
        }
    }
}));

const BalanceOperationDialog = ({
    openBalanceModal,
    typeBalanceModal,
    setOpenBalanceModal,
    doDeposit,
    doWithdraw,
    user
}) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpenBalanceModal(false);
    };

    return (
        <Dialog
            classes={{ paper: classes.dialogPaper }}
            open={openBalanceModal}
            onClose={handleClose}
        >
            <DialogTitle
                classes={{ root: classes.dialogTitleWrapper }}
                disableTypography
            >
                <Typography variant="h2">
                    {typeBalanceModal === "deposit" ? "Deposit" : "Withdraw"}
                </Typography>
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={handleClose}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent classes={{ root: classes.dialogContentWrapper }}>
                <Typography component="div" color="textSecondary">
                    You can deposit <b>22000</b> max from your registered wallet
                    <Typography>
                        <b style={{ wordBreak: "break-all" }}>
                            {user && user.address}
                        </b>
                    </Typography>
                </Typography>
            </DialogContent>
            <DialogActions
                classes={{ root: classes.dialogActionsWrapper }}
                disableSpacing
            >
                <TextField
                    className={classes.balanceInput}
                    variant="filled"
                    size="small"
                    InputProps={{ disableUnderline: true }}
                    fullWidth
                />
                {typeBalanceModal === "deposit" ? (
                    <Button
                        className={classes.balanceOperationBtn}
                        color="secondary"
                        onClick={doDeposit}
                        disableElevation
                    >
                        Deposit
                    </Button>
                ) : (
                    <Button
                        className={classes.balanceOperationBtn}
                        onClick={doWithdraw}
                        disableElevation
                        error
                    >
                        Withdraw
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
};

const mapMoxToProps = ({ userBalance, user }) => ({
    openBalanceModal: userBalance.openBalanceModal,
    typeBalanceModal: userBalance.typeBalanceModal,
    setOpenBalanceModal: userBalance.setOpenBalanceModal,
    doDeposit: userBalance.doDeposit,
    doWithdraw: userBalance.doWithdraw,
    user: user.user
});

export default inject(mapMoxToProps)(observer(BalanceOperationDialog));