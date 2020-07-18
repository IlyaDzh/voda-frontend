import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
    palette: {
        primary: {
            main: "#1885ea"
        },
        secondary: {
            main: "#17e3b2"
        },
        text: {
            primary: "#071c2f",
            secondary: "#484d51"
        }
    },
    typography: {
        h1: {
            fontSize: "30px"
        },
        h2: {
            fontSize: "24px",
            fontWeight: 400
        },
        h3: {
            fontSize: "23px"
        },
        subtitle1: {
            fontWeight: "bold"
        },
        fontFamily: "Overpass"
    }
});
