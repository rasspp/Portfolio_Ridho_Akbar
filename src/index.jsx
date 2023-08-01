/* eslint-disable no-undef */
// import React from "react";
// import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
reportWebVitals();
