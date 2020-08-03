import React from "react";
import { inject, observer } from "mobx-react";
import { Snackbar as BaseSnackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const Snackbar = ({ openSnackbar, setOpenSnackbar }) => {
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpenSnackbar(false);
    };

    return (
        <BaseSnackbar
            open={openSnackbar}
            onClose={handleClose}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
            <Alert
                onClose={handleClose}
                severity="success"
                elevation={6}
                variant="filled"
            >
                Your withdrawal request processed successfully
            </Alert>
        </BaseSnackbar>
    );
};

const mapMoxToProps = ({ userBalance }) => ({
    openSnackbar: userBalance.openSnackbar,
    setOpenSnackbar: userBalance.setOpenSnackbar
});

export default inject(mapMoxToProps)(observer(Snackbar));
