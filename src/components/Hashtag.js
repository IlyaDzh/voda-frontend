import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    hashtag: {
        color: theme.palette.primary.main
    }
}));

const Hashtag = ({ hashtagName, hashtagClick, disabled }) => {
    const classes = useStyles();

    return (
        <Typography
            display="inline"
            classes={{ root: classes.hashtag }}
            style={{ cursor: disabled ? "default" : "pointer" }}
            onClick={hashtagClick}
        >
            #{hashtagName}{" "}
        </Typography>
    );
};

export default Hashtag;
