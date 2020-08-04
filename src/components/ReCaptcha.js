import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    captcha: {
        [theme.breakpoints.down(420)]: {
            transform: "scale(0.87)",
            marginLeft: "-13px"
        }
    }
}));

const ReCaptcha = ({ onChange }) => {
    const classes = useStyles();

    return (
        <ReCAPTCHA
            className={classes.captcha}
            sitekey="6Lfd2rIZAAAAABxdf5bcSUAU24FNjVpcv1u3oBs2"
            onChange={onChange}
            hl="en"
        />
    );
};

export default ReCaptcha;
