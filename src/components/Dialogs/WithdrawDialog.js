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

import { Button, TextField, Loader } from "@/components";
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
        display: "block",
        padding: "0 24px 24px"
    },
    withdrawBalanceBlock: {
        display: "flex",
        marginBottom: "12px",
        [theme.breakpoints.down("xs")]: {
            display: "block"
        },
        "&:last-child": {
            marginBottom: 0
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

const WithdrawDialog = ({
    balance,
    openWithdrawModal,
    withdrawNumber,
    balanceValidateError,
    withdrawSubmissionError,
    widthdrawPending,
    setOpenWithdrawModal,
    setWithdrawNumber,
    doWithdraw,
    user
}) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpenWithdrawModal(false);
    };

    const getLabelFromSubmissionError = error => {
        if (error.response) {
            if (error.response.status === 402) {
                return "Not enough balance to withdraw";
            }
            return `Unknown error occurred when tried to withdraw. Server responded with ${error.response.status} status`;
        }
        return "No response from server";
    };

    return (
        <Dialog
            classes={{ paper: classes.dialogPaper }}
            open={openWithdrawModal}
            onClose={handleClose}
        >
            <DialogTitle
                classes={{ root: classes.dialogTitleWrapper }}
                disableTypography
            >
                <Typography variant="h2">Withdraw</Typography>
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
                    You can withdraw <b>{balance}</b> max to your registered wallet
                    <Typography>
                        <b style={{ wordBreak: "break-all" }}>
                            {user && user.ethereumAddress}
                        </b>
                    </Typography>
                </Typography>
            </DialogContent>
            <DialogActions
                classes={{ root: classes.dialogActionsWrapper }}
                disableSpacing
            >
                <div className={classes.withdrawBalanceBlock}>
                    <TextField
                        className={classes.balanceInput}
                        variant="filled"
                        size="small"
                        InputProps={{ disableUnderline: true }}
                        value={withdrawNumber || ""}
                        onChange={e => setWithdrawNumber(e.target.value)}
                        disabled={widthdrawPending}
                        fullWidth
                    />
                    <Button
                        className={classes.balanceOperationBtn}
                        onClick={doWithdraw}
                        disabled={widthdrawPending}
                        disableElevation
                        error
                    >
                        Withdraw
                    </Button>
                </div>
                {widthdrawPending ? (
                    <Loader />
                ) : balanceValidateError ? (
                    <Typography variant="body2" color="error">
                        {balanceValidateError}
                    </Typography>
                ) : (
                    withdrawSubmissionError && (
                        <Typography variant="body2" color="error">
                            {getLabelFromSubmissionError(withdrawSubmissionError)}
                        </Typography>
                    )
                )}
            </DialogActions>
        </Dialog>
    );
};

const mapMoxToProps = ({ userBalance, user }) => ({
    balance: userBalance.balance,
    openWithdrawModal: userBalance.openWithdrawModal,
    withdrawNumber: userBalance.withdrawNumber,
    balanceValidateError: userBalance.balanceValidateError,
    withdrawSubmissionError: userBalance.withdrawSubmissionError,
    widthdrawPending: userBalance.widthdrawPending,
    setOpenWithdrawModal: userBalance.setOpenWithdrawModal,
    setWithdrawNumber: userBalance.setWithdrawNumber,
    doWithdraw: userBalance.doWithdraw,
    user: user.user
});

export default inject(mapMoxToProps)(observer(WithdrawDialog));
