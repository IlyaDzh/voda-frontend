import React from "react";
import { inject, observer } from "mobx-react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    IconButton,
    Link,
    Hidden,
    makeStyles
} from "@material-ui/core";

import { Button, TextField, ReCaptcha } from "@/components";
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
        paddingBottom: "32px"
    },
    dialogInput: {
        marginBottom: "16px",
        "&:last-child": {
            marginBottom: "40px"
        }
    },
    submissionErrorTitle: {
        color: theme.palette.error.main,
        marginBottom: "10px"
    },
    dialogActions: {
        flexDirection: "column",
        paddingRight: "24px",
        paddingLeft: "24px",
        paddingBottom: "54px"
    },
    dialogLoginButton: {
        marginBottom: "16px"
    },
    dialogToRegisterButton: {
        fontSize: "16px",
        lineHeight: "25px"
    }
}));

const LoginDialog = ({
    openLoginModal,
    setOpenLoginModal,
    setOpenRegisterModal,
    loginForm,
    loginSubmissionError,
    setLoginFormValue,
    setCaptchaToken,
    doLogin
}) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpenLoginModal(false);
    };

    const handleOpenRegister = () => {
        setOpenLoginModal(false);
        setOpenRegisterModal(true);
    };

    const getLabelFromSubmissionError = error => {
        if (error.response) {
            if (error.response.status === 401) {
                return "Unknown combination of wallet address and password";
            }
            return `Unknown error occurred when tried to log in. Server responded with ${error.response.status} status`;
        }
        return "No response from server";
    };

    return (
        <Dialog
            classes={{ paper: classes.dialogPaper }}
            open={openLoginModal}
            onClose={handleClose}
        >
            <DialogTitle
                classes={{ root: classes.dialogTitleWrapper }}
                disableTypography
            >
                <Typography classes={{ root: classes.dialogTitle }} variant="h2">
                    Authorization
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
                <div>
                    <TextField
                        className={classes.dialogInput}
                        placeholder="Wallet ID"
                        variant="outlined"
                        value={loginForm.wallet}
                        onChange={event =>
                            setLoginFormValue("wallet", event.target.value)
                        }
                        fullWidth
                    />
                    <TextField
                        className={classes.dialogInput}
                        placeholder="Password"
                        type="password"
                        variant="outlined"
                        value={loginForm.password}
                        onChange={event =>
                            setLoginFormValue("password", event.target.value)
                        }
                        fullWidth
                    />
                </div>
                <ReCaptcha onChange={setCaptchaToken} />
            </DialogContent>
            <DialogActions classes={{ root: classes.dialogActions }} disableSpacing>
                {loginSubmissionError && (
                    <Typography
                        variant="body2"
                        className={classes.submissionErrorTitle}
                        align="center"
                    >
                        {getLabelFromSubmissionError(loginSubmissionError)}
                    </Typography>
                )}
                <Hidden xsDown>
                    <Button
                        className={classes.dialogLoginButton}
                        color="secondary"
                        size="large"
                        onClick={doLogin}
                        fullWidth
                        autoFocus
                    >
                        Log in
                    </Button>
                </Hidden>
                <Hidden smUp>
                    <Button
                        className={classes.dialogLoginButton}
                        color="secondary"
                        onClick={doLogin}
                        disableElevation
                        fullWidth
                        autoFocus
                    >
                        Log in
                    </Button>
                </Hidden>
                <Link
                    classes={{ root: classes.dialogToRegisterButton }}
                    component="button"
                    variant="body2"
                    onClick={handleOpenRegister}
                >
                    I don't have an account yet
                </Link>
            </DialogActions>
        </Dialog>
    );
};

const mapMoxToProps = ({ login, register }) => ({
    openLoginModal: login.openLoginModal,
    loginForm: login.loginForm,
    loginSubmissionError: login.loginSubmissionError,
    setLoginFormValue: login.setLoginFormValue,
    setCaptchaToken: login.setCaptchaToken,
    doLogin: login.doLogin,
    setOpenLoginModal: login.setOpenLoginModal,
    setOpenRegisterModal: register.setOpenRegisterModal
});

export default inject(mapMoxToProps)(observer(LoginDialog));
