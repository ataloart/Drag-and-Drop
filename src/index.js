import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DragAndDrop } from "./DragAndDrop";
//import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DragAndDrop />
  </React.StrictMode>
);
