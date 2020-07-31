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

import { Button, TextField, Loader } from "@/components";
import { CloseIcon } from "@/icons";
import {
    UPLOAD_SELECTOR_TYPE,
    UPLOAD_SELECTOR_CATEROGY,
    UPLOAD_SELECTOR_GENRE
} from "@/utils";

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
            marginRight: "12px"
        },
        "& > div": {
            width: "46%",
            "&:first-child": {
                width: "31%"
            },
            "&:last-child": {
                width: "23%"
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
    dialogInput: {
        marginBottom: "16px",
        "&:last-child": {
            marginBottom: 0
        }
    },
    dialogActions: {
        padding: "16px 24px 54px",
        flexDirection: "column",
        alignItems: "unset",
        justifyContent: "unset"
    },
    dialogActionsButtons: {
        display: "flex",
        [theme.breakpoints.down("xs")]: {
            display: "block"
        }
    },
    uploadResultText: {
        marginBottom: "15px"
    },
    successUploadResultText: {
        color: "#09c709"
    },
    dialogAttachFileButton: {
        marginRight: "24px",
        boxShadow: `
            0px 3px 1px -2px rgba(0,0,0,0.2),
            0px 2px 2px 0px rgba(0,0,0,0.14),
            0px 1px 5px 0px rgba(0,0,0,0.12)
        `,
        [theme.breakpoints.down("xs")]: {
            boxShadow: "unset",
            marginRight: 0,
            marginBottom: "8px"
        }
    }
}));

const FileUploadDialog = ({
    openFileUploadModal,
    setOpenFileUploadModal,
    uploadForm,
    uploadFormErrors,
    submissionResult,
    attachedFile,
    maxDate,
    pending,
    setUploadFormValue,
    setAttachedFile,
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
            scroll="body"
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
                            type="number"
                            value={uploadForm.year}
                            onChange={event =>
                                setUploadFormValue("year", event.target.value)
                            }
                            error={Boolean(uploadFormErrors.year)}
                            helperText={uploadFormErrors.year}
                            fullWidth
                        />
                    </div>
                    <div>
                        <Typography classes={{ root: classes.inputCaption }}>
                            Month
                        </Typography>
                        <TextField
                            value={uploadForm.month}
                            onChange={event =>
                                setUploadFormValue("month", event.target.value)
                            }
                            variant="outlined"
                            select
                            fullWidth
                        >
                            <MenuItem value="1">January</MenuItem>
                            <MenuItem value="2">February</MenuItem>
                            <MenuItem value="3">March</MenuItem>
                            <MenuItem value="4">April</MenuItem>
                            <MenuItem value="5">May</MenuItem>
                            <MenuItem value="6">June</MenuItem>
                            <MenuItem value="7">July</MenuItem>
                            <MenuItem value="8">August</MenuItem>
                            <MenuItem value="9">September</MenuItem>
                            <MenuItem value="10">October</MenuItem>
                            <MenuItem value="11">November</MenuItem>
                            <MenuItem value="12">December</MenuItem>
                        </TextField>
                    </div>
                    <div>
                        <Typography classes={{ root: classes.inputCaption }}>
                            Day
                        </Typography>
                        <TextField
                            placeholder="Day"
                            variant="outlined"
                            type="number"
                            InputProps={{
                                inputProps: {
                                    min: 1,
                                    max: maxDate
                                }
                            }}
                            value={uploadForm.day}
                            onChange={event =>
                                setUploadFormValue("day", event.target.value)
                            }
                            error={Boolean(uploadFormErrors.day)}
                            helperText={uploadFormErrors.day}
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
                    error={Boolean(uploadFormErrors.price)}
                    helperText={uploadFormErrors.price}
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
                    error={Boolean(uploadFormErrors.name)}
                    helperText={uploadFormErrors.name}
                    fullWidth
                />
                <TextField
                    className={classes.dialogInput}
                    label="Type"
                    value={uploadForm.type}
                    onChange={event => {
                        setUploadFormValue("type", event.target.value);
                        setUploadFormValue("category", "");
                        setUploadFormValue("genre", "");
                    }}
                    variant="outlined"
                    error={Boolean(uploadFormErrors.type)}
                    helperText={uploadFormErrors.type}
                    select
                    fullWidth
                >
                    {UPLOAD_SELECTOR_TYPE.map(type => {
                        return (
                            <MenuItem key={type.name} value={type.name}>
                                {type.name}
                            </MenuItem>
                        );
                    })}
                </TextField>
                <TextField
                    className={classes.dialogInput}
                    label="Category"
                    value={uploadForm.category}
                    onChange={event => {
                        setUploadFormValue("category", event.target.value);
                        setUploadFormValue("genre", "");
                    }}
                    variant="outlined"
                    disabled={
                        !(
                            uploadForm.type &&
                            UPLOAD_SELECTOR_CATEROGY[uploadForm.type]
                        )
                    }
                    select
                    fullWidth
                >
                    {uploadForm.type && UPLOAD_SELECTOR_CATEROGY[uploadForm.type] ? (
                        UPLOAD_SELECTOR_CATEROGY[uploadForm.type].map(category => {
                            return (
                                <MenuItem key={category} value={category}>
                                    {category}
                                </MenuItem>
                            );
                        })
                    ) : (
                        <MenuItem key={"default"} value={"default"}>
                            {" "}
                        </MenuItem>
                    )}
                </TextField>
                <TextField
                    className={classes.dialogInput}
                    label="Genre"
                    value={uploadForm.genre}
                    onChange={event =>
                        setUploadFormValue("genre", event.target.value)
                    }
                    variant="outlined"
                    disabled={
                        !(
                            uploadForm.category &&
                            UPLOAD_SELECTOR_GENRE[uploadForm.category]
                        )
                    }
                    select
                    fullWidth
                >
                    {uploadForm.category &&
                    UPLOAD_SELECTOR_GENRE[uploadForm.category] ? (
                        UPLOAD_SELECTOR_GENRE[uploadForm.category].map(genre => {
                            return (
                                <MenuItem key={genre} value={genre}>
                                    {genre}
                                </MenuItem>
                            );
                        })
                    ) : (
                        <MenuItem key={"default"} value={"default"}>
                            {" "}
                        </MenuItem>
                    )}
                </TextField>
                <TextField
                    className={classes.dialogInput}
                    placeholder="File info"
                    variant="outlined"
                    value={uploadForm.info}
                    onChange={event =>
                        setUploadFormValue("info", event.target.value)
                    }
                    error={Boolean(uploadFormErrors.info)}
                    helperText={uploadFormErrors.info}
                    rows={3}
                    multiline
                    fullWidth
                />
            </DialogContent>
            <DialogActions classes={{ root: classes.dialogActions }} disableSpacing>
                {pending ? (
                    <Loader mb={25} />
                ) : (
                    submissionResult &&
                    (submissionResult.status === 200 ? (
                        <Typography
                            classes={{
                                root: classes.uploadResultText,
                                colorPrimary: classes.successUploadResultText
                            }}
                            color="primary"
                            align="center"
                        >
                            {submissionResult.message}
                        </Typography>
                    ) : (
                        <Typography
                            classes={{ root: classes.uploadResultText }}
                            align="center"
                            color="error"
                        >
                            {submissionResult.message}
                        </Typography>
                    ))
                )}
                {uploadFormErrors && uploadFormErrors.attachedFile && (
                    <Typography
                        classes={{ root: classes.uploadResultText }}
                        align="center"
                        color="error"
                    >
                        {uploadFormErrors.attachedFile}
                    </Typography>
                )}
                <div className={classes.dialogActionsButtons}>
                    <Hidden xsDown>
                        <Button
                            className={classes.dialogAttachFileButton}
                            color="secondary"
                            variant="outlined"
                            component="label"
                            size="large"
                            disabled={Boolean(attachedFile)}
                            fullWidth
                            autoFocus
                        >
                            Attach File
                            <input
                                type="file"
                                onChange={event =>
                                    setAttachedFile(event.target.files[0])
                                }
                                style={{ display: "none" }}
                            />
                        </Button>
                        <Button
                            color="secondary"
                            size="large"
                            onClick={doUpload}
                            disabled={pending}
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
                            component="label"
                            disabled={Boolean(attachedFile)}
                            fullWidth
                            autoFocus
                        >
                            Attach File
                            <input
                                type="file"
                                onChange={event =>
                                    setAttachedFile(event.target.files[0])
                                }
                                style={{ display: "none" }}
                            />
                        </Button>
                        <Button
                            color="secondary"
                            onClick={doUpload}
                            disabled={pending}
                            disableElevation
                            fullWidth
                        >
                            Upload
                        </Button>
                    </Hidden>
                </div>
            </DialogActions>
        </Dialog>
    );
};

const mapMoxToProps = ({ fileUpload }) => ({
    openFileUploadModal: fileUpload.openFileUploadModal,
    setOpenFileUploadModal: fileUpload.setOpenFileUploadModal,
    uploadForm: fileUpload.uploadForm,
    uploadFormErrors: fileUpload.uploadFormErrors,
    submissionResult: fileUpload.submissionResult,
    attachedFile: fileUpload.attachedFile,
    maxDate: fileUpload.maxDate,
    pending: fileUpload.pending,
    setUploadFormValue: fileUpload.setUploadFormValue,
    setAttachedFile: fileUpload.setAttachedFile,
    doUpload: fileUpload.doUpload
});

export default inject(mapMoxToProps)(observer(FileUploadDialog));
