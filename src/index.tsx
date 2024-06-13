import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import reportWebVitals from "./reportWebVitals.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // reportWebVitals();
} else {
  console.error(
    'Root element not found. Please check your HTML file for an element with id="root".'
  );
}
