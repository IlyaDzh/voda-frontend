import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    captcha: {
      [theme.breakpoints.down(420)]: {
        transform: 'scale(0.98)',
        marginLeft: 0,
      },
      [theme.breakpoints.down(400)]: {
        transform: 'scale(0.94)',
        marginLeft: -10,
      },
      [theme.breakpoints.down(380)]: {
        transform: 'scale(0.88)',
        marginLeft: -18,
      },
      [theme.breakpoints.down(360)]: {
        transform: 'scale(0.82)',
        marginLeft: -25,
      },
      [theme.breakpoints.down(340)]: {
        transform: 'scale(0.7)',
        marginLeft: -32,
      },
      [theme.breakpoints.down(321)]: {
        transform: 'scale(0.68)',
        marginLeft: -38,
      },
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
