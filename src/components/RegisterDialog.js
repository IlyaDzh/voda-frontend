import React, { useState } from "react";
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
    dialogRegisterButton: {
        marginBottom: "16px"
    },
    dialogToLoginButton: {
        fontSize: "16px",
        lineHeight: "25px"
    }
}));

export const RegisterDialog = ({
    openRegisterModal,
    setOpenRegisterModal,
    setOpenLoginModal
}) => {
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
    const [radioValue, setRadioValue] = useState("purchaser");

    const handleClose = () => {
        setOpenRegisterModal(false);
    };

    const handleOpenLogin = () => {
        setOpenRegisterModal(false);
        setOpenLoginModal(true);
    };

    const handleChangeRadio = event => {
        setRadioValue(event.target.value);
    };

    return (
        <Dialog
            classes={{ paper: classes.dialogPaper }}
            fullScreen={fullScreen}
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
            <DialogContent>
                <RadioGroup
                    classes={{ root: classes.dialogRadioGroup }}
                    aria-label="gender"
                    name="gender"
                    value={radioValue}
                    onChange={handleChangeRadio}
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
                <TextField
                    className={classes.dialogInput}
                    placeholder="Repeat password"
                    type="password"
                    variant="outlined"
                    fullWidth
                />
            </DialogContent>
            <DialogActions classes={{ root: classes.dialogActions }}>
                <Button
                    className={classes.dialogRegisterButton}
                    color="secondary"
                    size="large"
                    onClick={handleClose}
                    fullWidth
                    autoFocus
                >
                    Register
                </Button>
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

const mapMoxToProps = ({ authorization }) => ({
    openRegisterModal: authorization.openRegisterModal,
    setOpenRegisterModal: authorization.setOpenRegisterModal,
    setOpenLoginModal: authorization.setOpenLoginModal
});

export default inject(mapMoxToProps)(observer(RegisterDialog));
