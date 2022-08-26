import React from "react";  // import thư viện react
import ReactDOM from "react-dom/client"; // import thư viện react-dom/client

const students = [
  {
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany'
  },
  {
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico'
  },
  {
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria'
  },
  {
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK'
  },
  {
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada'
  },
  {
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy'
  }
]
// Tạo component App
function App() {
  return (
    students.map((student) => (
      <tr>
        <td>{student.company}</td>
        <td>{student.contact}</td>
        <td>{student.country}</td>
      </tr>
    ))
  );
}

// Render component App vào "root"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);