import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
    palette: {
        background: {
            default: "#f8f8f8",
            light: "#2b2b2b",
            dark: "#131315"
        },
        primary: {
            main: "#1885ea"
        },
        text: {
            primary: "#7a7a81",
            secondary: "#131315",
            tertiary: "#e9e9e9",
            contrast: "#df5f18"
        },
        border: {
            main: "#e9e9e9"
        }
    },
    typography: {
        h1: {
            fontSize: "30px"
        },
        fontFamily: "Overpass"
    }
});
