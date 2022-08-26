import React from "react";  // import thư viện react
import ReactDOM from "react-dom/client"; // import thư viện react-dom/client

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Apricot",
  "Black rowan",
  "Cranberry"
];


// Tạo component App
function App() {
  return (
    <div id="wrapper">
      <h1>List of fruits</h1>
      <ul>
        {fruits.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Render component App vào "root"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);