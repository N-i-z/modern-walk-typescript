import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from "@clerk/clerk-react";

const clerkPubKey =
  "pk_test_Y2hhbXBpb24tZmVycmV0LTEyLmNsZXJrLmFjY291bnRzLmRldiQ";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ClerkProvider publishableKey={clerkPubKey}>
        <App />
      </ClerkProvider>
    </React.StrictMode>
  );

  // reportWebVitals();
} else {
  console.error(
    'Root element not found. Please check your HTML file for an element with id="root".'
  );
}
