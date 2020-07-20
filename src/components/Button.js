import React from "react";
import { Button as BaseButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    btn: {
        textTransform: "unset",
        height: "30px",
        fontSize: "16px",
        lineHeight: "25px",
        color: "#fff"
    },
    btnSmall: {
        height: "24px",
        fontWeight: 300,
        fontSize: "10px",
        lineHeight: "15px"
    },
    btnLarge: {
        height: "42px",
        fontSize: "16px",
        lineHeight: "30px"
    },
    containedPrimary: {
        border: "1px solid #deeff7"
    },
    outlinedPrimary: {},
    outlinedSecondary: {
        color: theme.palette.secondary.main
    }
}));

const Button = props => {
    const classes = useStyles();
    const { variant = "contained", color = "primary", children, ...rest } = props;

    return (
        <BaseButton
            classes={{
                root: classes.btn,
                sizeSmall: classes.btnSmall,
                sizeLarge: classes.btnLarge,
                containedPrimary: classes.containedPrimary,
                outlined: classes.outlined,
                outlinedPrimary: classes.outlinedPrimary,
                outlinedSecondary: classes.outlinedSecondary
            }}
            variant={variant}
            color={color}
            {...rest}
        >
            {children}
        </BaseButton>
    );
};

export default Button;
