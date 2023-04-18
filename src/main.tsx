import React from "react";
import ReactDOM from "react-dom/client";

import "shared/lib/i18n";
import { ThemeProvider } from "shared/theme/useContext";

import App from "./app";

import "./app/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
