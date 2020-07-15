import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import 'mobx-react-lite/batchingForReactDom'

import * as serviceWorker from "@/serviceWorker";
import { store } from "@/stores";
import { App } from "@/App";
import { main } from "@/styles/material";
import "@/styles/index.scss";

ReactDOM.render(
    <Provider {...store}>
        <BrowserRouter>
            <MuiThemeProvider theme={main}>
                <App />
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

if (localStorage.getItem("accessToken")) {
    store.authorization.fetchUser();
}

serviceWorker.unregister();
