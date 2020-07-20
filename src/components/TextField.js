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
    textFieldInput: {
        padding: "14px 14px 11px 14px"
    }
}));

const TextField = props => {
    const classes = useStyles();
    const { ...rest } = props;

    return (
        <BaseTextField
            InputProps={{ classes: { input: classes.textFieldInput } }}
            classes={{ root: classes.textField }}
            {...rest}
        />
    );
};

export default TextField;
