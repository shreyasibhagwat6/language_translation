//Import react and reactDOM libraries (reactDOM knows how get a component and show up in the browser)
import React from "react";
import ReactDOM from "react-dom/client";

//get a reference to the div with ID root
const el = document.getElementById('root');

//tell react to take control of that element
const root = ReactDOM.createRoot(el);

//create a component
function App() {
    return <h1>Hi there!</h1>
}

//show the component on the screen
root.render(<App />);