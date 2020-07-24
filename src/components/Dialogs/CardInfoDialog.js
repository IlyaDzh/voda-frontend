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

import { Button } from "@/components";
import { formatDate } from "@/utils";
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
    dialogTitle: {
        wordBreak: "break-word"
    },
    dialogActionsWrapper: {
        display: "block",
        padding: "0 24px 24px"
    },
    editBtn: {
        minWidth: "105px"
    }
}));

const CardInfoDialog = ({
    currentGoodsInfo,
    goodsInfoModalWithEdit,
    openGoodsInfoModal,
    setOpenGoodsInfoModal
}) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpenGoodsInfoModal(false);
    };

    return (
        <Dialog
            classes={{ paper: classes.dialogPaper }}
            open={openGoodsInfoModal}
            onClose={handleClose}
        >
            <DialogTitle
                classes={{ root: classes.dialogTitleWrapper }}
                disableTypography
            >
                <Typography classes={{ root: classes.dialogTitle }} variant="h2">
                    {currentGoodsInfo && currentGoodsInfo.file.id}
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
                    AVAILABLE UNTIL:{" "}
                    <Typography color="textSecondary" display="inline">
                        {currentGoodsInfo &&
                            formatDate(currentGoodsInfo.file.keepUntil)}
                    </Typography>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    PRICE:{" "}
                    <Typography color="textSecondary" display="inline">
                        {currentGoodsInfo && currentGoodsInfo.sum}
                    </Typography>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    TYPE:{" "}
                    <Typography color="textSecondary" display="inline">
                        {currentGoodsInfo && currentGoodsInfo.file.mimeType}
                    </Typography>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    INFORMATION:{" "}
                    <Typography color="textSecondary" display="inline">
                        {currentGoodsInfo &&
                            currentGoodsInfo.file.fileMetadata.briefDescription}
                    </Typography>
                </Typography>
            </DialogContent>
            {goodsInfoModalWithEdit && (
                <DialogActions classes={{ root: classes.dialogActionsWrapper }}>
                    <Button
                        className={classes.editBtn}
                        color="secondary"
                        disableElevation
                    >
                        Edit
                    </Button>
                </DialogActions>
            )}
        </Dialog>
    );
};

const mapMoxToProps = ({ infoModals }) => ({
    currentGoodsInfo: infoModals.currentGoodsInfo,
    goodsInfoModalWithEdit: infoModals.goodsInfoModalWithEdit,
    openGoodsInfoModal: infoModals.openGoodsInfoModal,
    setOpenGoodsInfoModal: infoModals.setOpenGoodsInfoModal
});

export default inject(mapMoxToProps)(observer(CardInfoDialog));
