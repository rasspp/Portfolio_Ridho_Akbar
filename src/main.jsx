/* eslint-disable no-undef */
// import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StrictMode } from "react";

// ReactDOM.createRoot(document.getElementById("root")).render(
//    <React.StrictMode>
//       <App />
//    </React.StrictMode>
// );

const root = createRoot(document.getElementById("root"));
root.render(
   <StrictMode>
      <App />
   </StrictMode>
);

reportWebVitals();
