import React from "react";
import { TextField as BaseTextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    textField: {
        "& .MuiOutlinedInput-root": {
            borderRadius: "5px",
            "& input": {
                padding: "14px 14px 11px 14px"
            },
            "&:hover fieldset": {
                borderColor: "#1885EA"
            }
        }
    },
    textFieldSmall: {
        "& .MuiOutlinedInput-root": {
            "& input": {
                padding: "7px 14px 6px 14px"
            }
        }
    },
    textFieldSelect: {
        padding: "12px 32px 11px 14px"
    },
    inputLabel: {
        transform: "translate(14px, 15px) scale(1)"
    }
}));

const TextField = props => {
    const classes = useStyles();
    const { size, ...rest } = props;

    return (
        <BaseTextField
            classes={{
                root: [
                    classes.textField,
                    size === "small" ? classes.textFieldSmall : undefined
                ].join(" ")
            }}
            InputLabelProps={{
                classes: { root: classes.inputLabel }
            }}
            SelectProps={{
                classes: { root: classes.textFieldSelect }
            }}
            {...rest}
        />
    );
};

export default TextField;
