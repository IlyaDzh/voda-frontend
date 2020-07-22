import React from "react";
import { inject, observer } from "mobx-react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Typography,
    IconButton,
    makeStyles
} from "@material-ui/core";

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
        padding: "8px 24px 16px 24px"
    },
    dialogTitle: {
        wordBreak: "break-word"
    }
}));

const TransactionInfoDialog = ({
    currentTxnInfo,
    openTxnInfoModal,
    setOpenTxnInfoModal
}) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpenTxnInfoModal(false);
    };

    return (
        <Dialog
            classes={{ paper: classes.dialogPaper }}
            open={openTxnInfoModal}
            onClose={handleClose}
        >
            <DialogTitle
                classes={{ root: classes.dialogTitleWrapper }}
                disableTypography
            >
                <Typography classes={{ root: classes.dialogTitle }} variant="h2">
                    {currentTxnInfo && currentTxnInfo.txnID}
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
                <Typography variant="subtitle1" color="textSecondary">
                    VALUE:{" "}
                    <Typography color="textSecondary" display="inline">
                        {currentTxnInfo && currentTxnInfo.value}
                    </Typography>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    DATE:{" "}
                    <Typography color="textSecondary" display="inline">
                        {currentTxnInfo && currentTxnInfo.purchased}
                    </Typography>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    BUYER:{" "}
                    <Typography color="textSecondary" display="inline">
                        {currentTxnInfo && currentTxnInfo.buyer}
                    </Typography>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    FILE ID:{" "}
                    <Typography color="textSecondary" display="inline">
                        {currentTxnInfo && currentTxnInfo.fileID}
                    </Typography>
                </Typography>
            </DialogContent>
        </Dialog>
    );
};

const mapMoxToProps = ({ infoModals }) => ({
    currentTxnInfo: infoModals.currentTxnInfo,
    openTxnInfoModal: infoModals.openTxnInfoModal,
    setOpenTxnInfoModal: infoModals.setOpenTxnInfoModal
});

export default inject(mapMoxToProps)(observer(TransactionInfoDialog));
