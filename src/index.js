import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // Import the App component
import { BrowserRouter as Router } from "react-router-dom"; // Import Router

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router> {/* Wrap your entire app with Router here */}
      <App />
    </Router>
  </React.StrictMode>
);
