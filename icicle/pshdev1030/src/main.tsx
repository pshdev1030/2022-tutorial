import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Global
      styles={css`
        ${emotionReset}
      `}
    />
    <App />
  </>
);
