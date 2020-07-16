import React from "react";
import { Button as BaseButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
    outlinedPrimary: {

    },
    outlinedSecondary: {
        
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
