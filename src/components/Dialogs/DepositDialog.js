import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    Typography,
    IconButton,
    makeStyles
} from "@material-ui/core";

import { Button } from "@/components";
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
    depositSubtitle: {
        marginBottom: "16px"
    },
    disabledField: {
        background: theme.palette.background.main,
        padding: "6px 16px",
        borderRadius: "5px 0 0 5px",
        overflow: "hidden"
    },
    copyWrapper: {
        display: "flex",
        marginBottom: "8px"
    },
    disabledFieldAddress: {
        lineHeight: "18px",
        fontWeight: "bold",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden"
    },
    dialogActionsWrapper: {
        padding: "0 24px 24px",
        justifyContent: "unset"
    },
    copyBtn: {
        borderRadius: "0 5px 5px 0",
        minWidth: "84px"
    },
    doneBtn: {
        minWidth: "105px"
    }
}));

const DepositDialog = ({ openDepositModal, setOpenDepositModal, user }) => {
    const classes = useStyles();
    const [copied, setCopied] = useState(false);

    const handleClose = () => {
        setOpenDepositModal(false);
        setCopied(false);
    };

    return (
        <Dialog
            classes={{ paper: classes.dialogPaper }}
            open={openDepositModal}
            onClose={handleClose}
        >
            <DialogTitle
                classes={{ root: classes.dialogTitleWrapper }}
                disableTypography
            >
                <Typography variant="h2">Deposit</Typography>
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={handleClose}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent classes={{ root: classes.dialogContentWrapper }}>
                <Typography
                    classes={{ root: classes.depositSubtitle }}
                    component="div"
                    color="textSecondary"
                >
                    Please, make a transaction from your Lambda account to this
                    wallet
                </Typography>
                <div className={classes.copyWrapper}>
                    <div className={classes.disabledField}>
                        <Typography
                            classes={{ root: classes.disabledFieldAddress }}
                            color="textSecondary"
                        >
                            {user && user.address}
                        </Typography>
                    </div>
                    <CopyToClipboard
                        text={user && user.address}
                        onCopy={() => setCopied(true)}
                    >
                        <Button
                            className={classes.copyBtn}
                            color="secondary"
                            disableElevation
                        >
                            {copied ? "Copied" : "Copy"}
                        </Button>
                    </CopyToClipboard>
                </div>
                <Typography variant="caption">
                    Note, that it could take up to 15 minutes to receive funds in
                    your wallet
                </Typography>
            </DialogContent>
            <DialogActions
                classes={{ root: classes.dialogActionsWrapper }}
                disableSpacing
            >
                <Button
                    className={classes.doneBtn}
                    onClick={handleClose}
                    color="secondary"
                    disableElevation
                >
                    Done
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const mapMoxToProps = ({ userBalance, user }) => ({
    openDepositModal: userBalance.openDepositModal,
    setOpenDepositModal: userBalance.setOpenDepositModal,
    user: user.user
});

export default inject(mapMoxToProps)(observer(DepositDialog));
