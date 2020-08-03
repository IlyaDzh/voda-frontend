import React from "react";
import { Typography, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    tableNotFound: {
        padding: "4px",
        marginBottom: "4px"
    }
}));

const NotFoundPaper = () => {
    const classes = useStyles();

    return (
        <Paper classes={{ root: classes.tableNotFound }} elevation={3}>
            <Typography color="primary" variant="h6" align="center">
                Not Found
            </Typography>
        </Paper>
    );
};

export default NotFoundPaper;
