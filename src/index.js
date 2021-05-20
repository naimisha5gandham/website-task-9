import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
//import Header from "./header";
import Body from "./body";
//import Body1 from "./body1";
//import Body2 from "./body2";
//import Body3 from "./body3";
//import Body4 from "./body4";
//import Body5 from "./body5";
//import Footer from "./footer";
//import Testimonial from "./testimonial";
//import Client from "./client";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Body />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
