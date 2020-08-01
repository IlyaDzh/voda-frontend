import React from "react";
import { inject, observer } from "mobx-react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    IconButton,
    RadioGroup,
    FormControlLabel,
    Radio,
    Link,
    Hidden,
    makeStyles
} from "@material-ui/core";

import { Button, TextField, ReCaptcha, Loader } from "@/components";
import { CloseIcon } from "@/icons";

const useStyles = makeStyles(theme => ({
    dialogPaper: {
        maxWidth: "350px",
        maxHeight: "unset",
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
    dialogRadioGroup: {
        marginBottom: "15px"
    },
    dialogRadioControl: {
        width: "50%",
        marginRight: 0,
        "&:last-child": {
            marginLeft: 0
        }
    },
    dialogContent: {
        paddingBottom: "32px"
    },
    dialogInput: {
        marginBottom: "16px",
        "&:last-child": {
            marginBottom: "40px"
        }
    },
    dialogInputError: {
        marginBottom: 0
    },
    dialogActions: {
        flexDirection: "column",
        paddingRight: "24px",
        paddingLeft: "24px",
        paddingBottom: "54px"
    },
    submissionErrorTitle: {
        color: theme.palette.error.main,
        marginBottom: "10px"
    },
    dialogRegisterButton: {
        marginBottom: "16px"
    },
    dialogToLoginButton: {
        fontSize: "16px",
        lineHeight: "25px"
    }
}));

const RegisterDialog = ({
    openRegisterModal,
    setOpenRegisterModal,
    setOpenLoginModal,
    registerForm,
    registerFormErrors,
    registerSubmissionError,
    pending,
    setRegisterFormValue,
    setCaptchaToken,
    doRegister
}) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpenRegisterModal(false);
    };

    const handleOpenLogin = () => {
        setOpenRegisterModal(false);
        setOpenLoginModal(true);
    };

    const getLabelFromSubmissionError = error => {
        if (error.response) {
            if (error.response.status === 409) {
                return "Lambda wallet is already in use";
            }
            return `Unknown error occurred when tried to log in. Server responded with ${error.response.status} status`;
        }
        return "No response from server";
    };

    return (
        <Dialog
            classes={{ paper: classes.dialogPaper }}
            open={openRegisterModal}
            onClose={handleClose}
        >
            <DialogTitle
                classes={{ root: classes.dialogTitleWrapper }}
                disableTypography
            >
                <Typography classes={{ root: classes.dialogTitle }} variant="h2">
                    Registration
                </Typography>
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={handleClose}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent classes={{ root: classes.dialogContent }}>
                <RadioGroup
                    classes={{ root: classes.dialogRadioGroup }}
                    aria-label="type"
                    name="type"
                    value={registerForm.type}
                    onChange={event =>
                        setRegisterFormValue("type", event.target.value)
                    }
                    row
                >
                    <FormControlLabel
                        classes={{ root: classes.dialogRadioControl }}
                        value="purchaser"
                        control={<Radio color="primary" />}
                        label="Purchaser"
                    />
                    <FormControlLabel
                        classes={{ root: classes.dialogRadioControl }}
                        value="seller"
                        control={<Radio color="primary" />}
                        label="Seller"
                    />
                </RadioGroup>
                <div>
                    <TextField
                        className={[
                            classes.dialogInput,
                            Boolean(registerFormErrors.wallet)
                                ? classes.dialogInputError
                                : undefined
                        ].join(" ")}
                        placeholder="Wallet ID"
                        variant="outlined"
                        value={registerForm.wallet}
                        onChange={event =>
                            setRegisterFormValue("wallet", event.target.value)
                        }
                        error={Boolean(registerFormErrors.wallet)}
                        helperText={registerFormErrors.wallet}
                        fullWidth
                    />
                    <TextField
                        className={[
                            classes.dialogInput,
                            Boolean(registerFormErrors.password)
                                ? classes.dialogInputError
                                : undefined
                        ].join(" ")}
                        placeholder="Password"
                        type="password"
                        variant="outlined"
                        value={registerForm.password}
                        onChange={event =>
                            setRegisterFormValue("password", event.target.value)
                        }
                        error={Boolean(registerFormErrors.password)}
                        helperText={registerFormErrors.password}
                        fullWidth
                    />
                    <TextField
                        className={[
                            classes.dialogInput,
                            Boolean(registerFormErrors.repeat_password)
                                ? classes.dialogInputError
                                : undefined
                        ].join(" ")}
                        placeholder="Repeat password"
                        type="password"
                        variant="outlined"
                        value={registerForm.repeat_password}
                        onChange={event =>
                            setRegisterFormValue(
                                "repeat_password",
                                event.target.value
                            )
                        }
                        error={Boolean(registerFormErrors.repeat_password)}
                        helperText={registerFormErrors.repeat_password}
                        fullWidth
                    />
                </div>
                {!pending && <ReCaptcha onChange={setCaptchaToken} />}
            </DialogContent>
            <DialogActions classes={{ root: classes.dialogActions }} disableSpacing>
                {registerSubmissionError && (
                    <Typography
                        variant="body2"
                        className={classes.submissionErrorTitle}
                        align="center"
                    >
                        {getLabelFromSubmissionError(registerSubmissionError)}
                    </Typography>
                )}
                {pending && <Loader mb={25} />}
                <Hidden xsDown>
                    <Button
                        className={classes.dialogRegisterButton}
                        color="secondary"
                        size="large"
                        onClick={doRegister}
                        disabled={pending}
                        fullWidth
                        autoFocus
                    >
                        Register
                    </Button>
                </Hidden>
                <Hidden smUp>
                    <Button
                        className={classes.dialogRegisterButton}
                        color="secondary"
                        onClick={doRegister}
                        disabled={pending}
                        disableElevation
                        fullWidth
                        autoFocus
                    >
                        Register
                    </Button>
                </Hidden>
                <Link
                    classes={{ root: classes.dialogToLoginButton }}
                    component="button"
                    variant="body2"
                    onClick={handleOpenLogin}
                >
                    I already have an account
                </Link>
            </DialogActions>
        </Dialog>
    );
};

const mapMoxToProps = ({ register, login }) => ({
    openRegisterModal: register.openRegisterModal,
    registerForm: register.registerForm,
    registerFormErrors: register.registerFormErrors,
    registerSubmissionError: register.registerSubmissionError,
    pending: register.pending,
    setRegisterFormValue: register.setRegisterFormValue,
    setCaptchaToken: register.setCaptchaToken,
    doRegister: register.doRegister,
    setOpenRegisterModal: register.setOpenRegisterModal,
    setOpenLoginModal: login.setOpenLoginModal
});

export default inject(mapMoxToProps)(observer(RegisterDialog));
