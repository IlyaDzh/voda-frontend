import React from "react";
import { Backdrop as BaseBackdrop, useTheme, makeStyles } from "@material-ui/core";
import { HashLoader } from "react-spinners";

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1
    }
}));

const Backdrop = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <BaseBackdrop className={classes.backdrop} transitionDuration={500} open>
            <HashLoader color={theme.palette.secondary.main} />
        </BaseBackdrop>
    );
};

export default Backdrop;
