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
        padding: "8px 24px"
    },
    dialogTitle: {
        wordBreak: "break-word"
    },
    dialogActionsWrapper: {
        display: "block",
        padding: "16px 24px 24px"
    },
    editBtn: {
        minWidth: "105px"
    }
}));

const CardInfoDialog = ({
    currentGoodsInfo,
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
                    {currentGoodsInfo && currentGoodsInfo.ID}
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
                        {currentGoodsInfo && currentGoodsInfo.availableUntil}
                    </Typography>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    PRICE:{" "}
                    <Typography color="textSecondary" display="inline">
                        {currentGoodsInfo && currentGoodsInfo.price}
                    </Typography>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    TYPE:{" "}
                    <Typography color="textSecondary" display="inline">
                        Picture/png
                    </Typography>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    INFORMATION:{" "}
                    <Typography color="textSecondary" display="inline">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                </Typography>
            </DialogContent>
            <DialogActions classes={{ root: classes.dialogActionsWrapper }}>
                <Button
                    className={classes.editBtn}
                    color="secondary"
                    disableElevation
                >
                    Edit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const mapMoxToProps = ({ digitalGoods }) => ({
    currentGoodsInfo: digitalGoods.currentGoodsInfo,
    openGoodsInfoModal: digitalGoods.openGoodsInfoModal,
    setOpenGoodsInfoModal: digitalGoods.setOpenGoodsInfoModal
});

export default inject(mapMoxToProps)(observer(CardInfoDialog));
