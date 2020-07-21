import React from "react";
import { inject, observer } from "mobx-react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    Typography,
    IconButton,
    Hidden,
    makeStyles
} from "@material-ui/core";

import { Button, TextField } from "@/components";
import { CloseIcon } from "@/icons";

const useStyles = makeStyles(theme => ({
    dialogPaper: {
        maxWidth: "350px",
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
        textAlign: "center",
        paddingTop: "54px"
    },
    dialogTitle: {
        textTransform: "uppercase"
    },
    dialogContent: {
        overflowX: "hidden"
    },
    availableTitle: {
        marginBottom: "16px"
    },
    availableWrapper: {
        display: "flex",
        "& > div:not(:last-child)": {
            marginRight: "16px"
        },
        "& > div": {
            width: "45%",
            "&:first-child": {
                width: "30%"
            },
            "&:last-child": {
                width: "25%"
            }
        }
    },
    inputCaption: {
        color: theme.palette.primary.main
    },
    availableCaption: {
        display: "block",
        fontSize: "10px",
        color: theme.palette.primary.main,
        marginTop: "8px",
        marginBottom: "24px"
    },
    flexInputGroup: {
        display: "flex",
        marginBottom: "16px",
        "& > div:not(:last-child)": {
            marginRight: "16px"
        },
        "& > div": {
            width: "50%"
        }
    },
    dialogInput: {
        marginBottom: "16px"
    },
    dialogActions: {
        padding: "16px 24px 54px"
    },
    dialogAttachFileButton: {
        marginRight: "24px",
        boxShadow: `
            0px 3px 1px -2px rgba(0,0,0,0.2), 
            0px 2px 2px 0px rgba(0,0,0,0.14), 
            0px 1px 5px 0px rgba(0,0,0,0.12)
        `,
        [theme.breakpoints.down("xs")]: {
            boxShadow: "unset"
        },
        [theme.breakpoints.down("360")]: {
            marginRight: "8px"
        }
    }
}));

export const FileUploadDialog = ({
    openFileUploadModal,
    setOpenFileUploadModal,
    uploadForm,
    setUploadFormValue,
    doUpload
}) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpenFileUploadModal(false);
    };

    return (
        <Dialog
            classes={{ paper: classes.dialogPaper }}
            open={openFileUploadModal}
            onClose={handleClose}
        >
            <DialogTitle
                classes={{ root: classes.dialogTitleWrapper }}
                disableTypography
            >
                <Typography classes={{ root: classes.dialogTitle }} variant="h2">
                    File upload
                </Typography>
                <IconButton className={classes.closeButton} onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent classes={{ root: classes.dialogContent }}>
                <Typography
                    classes={{ root: classes.availableTitle }}
                    align="center"
                >
                    Must be available until
                </Typography>
                <div className={classes.availableWrapper}>
                    <div>
                        <Typography classes={{ root: classes.inputCaption }}>
                            Year
                        </Typography>
                        <TextField
                            placeholder="Year"
                            variant="outlined"
                            value={uploadForm.year}
                            onChange={event =>
                                setUploadFormValue("year", event.target.value)
                            }
                            fullWidth
                        />
                    </div>
                    <div>
                        <Typography classes={{ root: classes.inputCaption }}>
                            Month
                        </Typography>
                        <TextField
                            placeholder="Month"
                            variant="outlined"
                            value={uploadForm.month}
                            onChange={event =>
                                setUploadFormValue("month", event.target.value)
                            }
                            fullWidth
                        />
                    </div>
                    <div>
                        <Typography classes={{ root: classes.inputCaption }}>
                            Day
                        </Typography>
                        <TextField
                            placeholder="Day"
                            variant="outlined"
                            value={uploadForm.day}
                            onChange={event =>
                                setUploadFormValue("day", event.target.value)
                            }
                            fullWidth
                        />
                    </div>
                </div>
                <Typography
                    classes={{ root: classes.availableCaption }}
                    variant="caption"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <TextField
                    className={classes.dialogInput}
                    placeholder="Asking Price"
                    variant="outlined"
                    value={uploadForm.price}
                    onChange={event =>
                        setUploadFormValue("price", event.target.value)
                    }
                    fullWidth
                />
                <TextField
                    className={classes.dialogInput}
                    placeholder="Name"
                    variant="outlined"
                    value={uploadForm.name}
                    onChange={event =>
                        setUploadFormValue("name", event.target.value)
                    }
                    fullWidth
                />
                <div className={classes.flexInputGroup}>
                    <div>
                        <TextField
                            select
                            label="Extension"
                            value={uploadForm.extension}
                            onChange={event =>
                                setUploadFormValue("extension", event.target.value)
                            }
                            variant="outlined"
                            fullWidth
                        >
                            <MenuItem value="png">Png</MenuItem>
                            <MenuItem value="jpg">Jpg</MenuItem>
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            select
                            label="Type"
                            value={uploadForm.type}
                            onChange={event =>
                                setUploadFormValue("type", event.target.value)
                            }
                            variant="outlined"
                            fullWidth
                        >
                            <MenuItem value="image">Image</MenuItem>
                            <MenuItem value="audio">Audio</MenuItem>
                        </TextField>
                    </div>
                </div>
                <div className={classes.flexInputGroup}>
                    <div>
                        <TextField
                            select
                            label="Category"
                            value={uploadForm.category}
                            onChange={event =>
                                setUploadFormValue("category", event.target.value)
                            }
                            variant="outlined"
                            fullWidth
                        >
                            <MenuItem value="category1">Category 1</MenuItem>
                            <MenuItem value="category2">Category 2</MenuItem>
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            select
                            label="Genre"
                            value={uploadForm.genre}
                            onChange={event =>
                                setUploadFormValue("genre", event.target.value)
                            }
                            variant="outlined"
                            fullWidth
                        >
                            <MenuItem value="genre1">Genre 1</MenuItem>
                            <MenuItem value="genre2">Genre 2</MenuItem>
                        </TextField>
                    </div>
                </div>
                <TextField
                    className={classes.dialogInput}
                    placeholder="File info"
                    variant="outlined"
                    value={uploadForm.info}
                    onChange={event =>
                        setUploadFormValue("info", event.target.value)
                    }
                    rows={3}
                    multiline
                    fullWidth
                />
            </DialogContent>
            <DialogActions classes={{ root: classes.dialogActions }} disableSpacing>
                <Hidden xsDown>
                    <Button
                        className={classes.dialogAttachFileButton}
                        color="secondary"
                        variant="outlined"
                        size="large"
                        onClick={() => console.log("attach file")}
                        fullWidth
                        autoFocus
                    >
                        Attach File
                    </Button>
                    <Button
                        color="secondary"
                        size="large"
                        onClick={doUpload}
                        fullWidth
                    >
                        Upload
                    </Button>
                </Hidden>
                <Hidden smUp>
                    <Button
                        className={classes.dialogAttachFileButton}
                        color="secondary"
                        variant="outlined"
                        onClick={() => console.log("attach file")}
                        fullWidth
                        autoFocus
                    >
                        Attach File
                    </Button>
                    <Button
                        color="secondary"
                        onClick={doUpload}
                        disableElevation
                        fullWidth
                    >
                        Upload
                    </Button>
                </Hidden>
            </DialogActions>
        </Dialog>
    );
};

const mapMoxToProps = ({ fileUpload }) => ({
    openFileUploadModal: fileUpload.openFileUploadModal,
    setOpenFileUploadModal: fileUpload.setOpenFileUploadModal,
    uploadForm: fileUpload.uploadForm,
    setUploadFormValue: fileUpload.setUploadFormValue,
    doUpload: fileUpload.doUpload
});

export default inject(mapMoxToProps)(observer(FileUploadDialog));
