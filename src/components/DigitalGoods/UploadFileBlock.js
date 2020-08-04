import React from "react";
import { inject, observer } from "mobx-react";
import { Typography, Hidden, makeStyles } from "@material-ui/core";

import { Button } from "@/components";

const useStyles = makeStyles(theme => ({
    uploadFileWrapper: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        }
    },
    uploadBtn: {
        display: "block",
        minWidth: "175px",
        marginRight: "24px"
    },
    uploadBtnMobile: {
        marginBottom: "16px"
    },
    uploadCaption: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "10px"
        }
    }
}));

const UploadFileBlock = ({ setOpenFileUploadModal }) => {
    const classes = useStyles();

    const handleOpenUploadFileModal = () => {
        setOpenFileUploadModal(true);
    };

    return (
        <div className={classes.uploadFileWrapper}>
            <Hidden smDown>
                <Button
                    className={classes.uploadBtn}
                    color="secondary"
                    size="large"
                    onClick={handleOpenUploadFileModal}
                >
                    Upload a New File
                </Button>
            </Hidden>
            <Hidden mdUp>
                <Button
                    className={classes.uploadBtnMobile}
                    color="secondary"
                    onClick={handleOpenUploadFileModal}
                    disableElevation
                    fullWidth
                >
                    Upload a New File
                </Button>
            </Hidden>
            <Typography
                className={classes.uploadCaption}
                variant="caption"
                color="textSecondary"
            >
                Please supply all the uploading files with appropriate descriptions
                and hashtags. That will help users to browse and purchase them.
            </Typography>
        </div>
    );
};

const mapMoxToProps = ({ fileUpload }) => ({
    setOpenFileUploadModal: fileUpload.setOpenFileUploadModal
});

export default inject(mapMoxToProps)(observer(UploadFileBlock));
