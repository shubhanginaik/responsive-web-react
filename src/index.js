import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

//ReactDOM.render(<App />, document.getElementById("root"));  // Depricated for above react17

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
