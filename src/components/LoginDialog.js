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
    useMediaQuery,
    useTheme,
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
    dialogInput: {
        marginBottom: "16px",
        "&:last-child": {
            marginBottom: "40px"
        }
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

export const LoginDialog = ({
    openLoginModal,
    setOpenLoginModal,
    setOpenRegisterModal
}) => {
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

    const handleClose = () => {
        setOpenLoginModal(false);
    };

    const handleOpenRegister = () => {
        setOpenLoginModal(false);
        setOpenRegisterModal(true);
    };

    return (
        <Dialog
            classes={{ paper: classes.dialogPaper }}
            fullScreen={fullScreen}
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
            <DialogContent>
                <TextField
                    className={classes.dialogInput}
                    placeholder="Wallet ID"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    className={classes.dialogInput}
                    placeholder="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                />
            </DialogContent>
            <DialogActions classes={{ root: classes.dialogActions }}>
                <Button
                    className={classes.dialogLoginButton}
                    color="secondary"
                    size="large"
                    onClick={handleClose}
                    fullWidth
                    autoFocus
                >
                    Log in
                </Button>
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

const mapMoxToProps = ({ authorization }) => ({
    openLoginModal: authorization.openLoginModal,
    setOpenLoginModal: authorization.setOpenLoginModal,
    setOpenRegisterModal: authorization.setOpenRegisterModal
});

export default inject(mapMoxToProps)(observer(LoginDialog));
