import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: roboto;
  box-sizing: border-box;
}
`;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </React.StrictMode>
);
