import React from "react";  // import thư viện react
import ReactDOM from "react-dom/client"; // import thư viện react-dom/client

function PostItem(){
    return <div className="post-item">
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
const tiket = () => {root.render(<PostItem/>)}
setInterval(tiket, 1000)