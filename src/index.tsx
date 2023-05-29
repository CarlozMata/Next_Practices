import React from "react";
import ReactDOM from "react-dom/client";
import PracticesPages from "./pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PracticesPages />
  </React.StrictMode>
);
