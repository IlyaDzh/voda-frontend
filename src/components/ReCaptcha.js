import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = ({ onChange }) => (
    <ReCAPTCHA
        sitekey="6Lfd2rIZAAAAABxdf5bcSUAU24FNjVpcv1u3oBs2"
        onChange={onChange}
        hl="en"
    />
);

export default ReCaptcha;
