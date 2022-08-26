import React from "react";  // import thư viện react
import ReactDOM from "react-dom/client"; // import thư viện react-dom/client

const name = "Duy DB";

// Render component App vào "root"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement('h1', {style: {
  textAlign: "center"
}}, name));