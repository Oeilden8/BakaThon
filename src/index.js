import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { PanierContextProvider } from "./contexts/PanierContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PanierContextProvider>
        <App />
      </PanierContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
