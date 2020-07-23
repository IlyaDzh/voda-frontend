import React from "react";
import { Box, useTheme, makeStyles } from "@material-ui/core";
import { HashLoader } from "react-spinners";

const useStyles = makeStyles(() => ({
    loader: {
        display: "flex",
        justifyContent: "center"
    }
}));

const Loader = ({ mt, mb, ...props }) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Box className={classes.loader} mt={mt / 8} mb={mb / 8}>
            <HashLoader size={40} color={theme.palette.secondary.main} {...props} />
        </Box>
    );
};

export default Loader;
