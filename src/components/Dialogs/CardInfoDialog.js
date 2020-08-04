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

import { Hashtag } from "@/components";
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
    }
}));

const CardInfoDialog = ({
    currentGoodsInfo,
    openGoodsInfoModal,
    setOpenGoodsInfoModal,
    setSearchText
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
                    {currentGoodsInfo && currentGoodsInfo.name}
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
                    ID:{" "}
                    <Typography color="textSecondary" display="inline">
                        {currentGoodsInfo && currentGoodsInfo.id}
                    </Typography>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    AVAILABLE UNTIL:{" "}
                    <Typography color="textSecondary" display="inline">
                        {currentGoodsInfo && formatDate(currentGoodsInfo.keepUntil)}
                    </Typography>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    PRICE:{" "}
                    <Typography color="textSecondary" display="inline">
                        {currentGoodsInfo && (currentGoodsInfo.price || 0)}
                    </Typography>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    TYPE:{" "}
                    <Typography color="textSecondary" display="inline">
                        {currentGoodsInfo && currentGoodsInfo.mimeType}
                    </Typography>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    EXTENSION:{" "}
                    <Typography color="textSecondary" display="inline">
                        {currentGoodsInfo && currentGoodsInfo.extension}
                    </Typography>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    SIZE:{" "}
                    <Typography color="textSecondary" display="inline">
                        {currentGoodsInfo && currentGoodsInfo.size} byte
                    </Typography>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    INFORMATION:{" "}
                    <Typography color="textSecondary" display="inline">
                        {currentGoodsInfo &&
                            (currentGoodsInfo.metadata
                                ? currentGoodsInfo.metadata.fullDescription || "None"
                                : currentGoodsInfo.fileMetadata &&
                                  (currentGoodsInfo.fileMetadata.fullDescription ||
                                      "None"))}
                    </Typography>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    HASHTAGS:{" "}
                    <span>
                        {currentGoodsInfo &&
                            (currentGoodsInfo.metadata
                                ? currentGoodsInfo.metadata.hashTags
                                      .filter(hashtag => hashtag)
                                      .map(hashtag => (
                                          <Hashtag
                                              key={hashtag}
                                              hashtagName={hashtag}
                                              hashtagClick={() => {
                                                  setSearchText(hashtag);
                                                  handleClose();
                                              }}
                                          />
                                      ))
                                : currentGoodsInfo.fileMetadata &&
                                  currentGoodsInfo.fileMetadata.hashTags
                                      .filter(hashtag => hashtag)
                                      .map(hashtag => (
                                          <Hashtag
                                              key={hashtag}
                                              hashtagName={hashtag}
                                              disabled
                                          />
                                      )))}
                    </span>
                </Typography>
            </DialogContent>
        </Dialog>
    );
};

const mapMoxToProps = ({ infoModals, files }) => ({
    currentGoodsInfo: infoModals.currentGoodsInfo,
    openGoodsInfoModal: infoModals.openGoodsInfoModal,
    setOpenGoodsInfoModal: infoModals.setOpenGoodsInfoModal,
    setSearchText: files.setSearchText
});

export default inject(mapMoxToProps)(observer(CardInfoDialog));
