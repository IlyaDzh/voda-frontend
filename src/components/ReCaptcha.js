import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    captcha: {
        [theme.breakpoints.down("xs")]: {
            transform: 'scale(0.7)',
            marginLeft: -40,
        }
    }
}));

const ReCaptcha = ({ onChange }) => {
    const classes = useStyles();
    return (
    <ReCAPTCHA
        sitekey="6Lfd2rIZAAAAABxdf5bcSUAU24FNjVpcv1u3oBs2"
        onChange={onChange}
        hl="en"
        className={classes.captcha}
    />
)};

export default ReCaptcha;
