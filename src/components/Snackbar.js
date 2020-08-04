import React from "react";
import { inject, observer } from "mobx-react";
import { Snackbar as BaseSnackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const Snackbar = ({ snackbarOpen, snackbarText, setSnackbarOpen }) => {
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setSnackbarOpen(false);
    };

    return (
        <BaseSnackbar
            open={snackbarOpen}
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
                {snackbarText}
            </Alert>
        </BaseSnackbar>
    );
};

const mapMoxToProps = ({ snackbar }) => ({
    snackbarOpen: snackbar.snackbarOpen,
    snackbarText: snackbar.snackbarText,
    setSnackbarOpen: snackbar.setSnackbarOpen
});

export default inject(mapMoxToProps)(observer(Snackbar));
