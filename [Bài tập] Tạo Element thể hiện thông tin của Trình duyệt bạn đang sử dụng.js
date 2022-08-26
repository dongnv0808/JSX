import React from "react";  // import thư viện react
import ReactDOM from "react-dom/client"; // import thư viện react-dom/client

function App(){
  return <div>
    <h4>Browser's details: {navigator.userAgent}</h4>
  </div>
}

// Render component App vào "root"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);