import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/Navbar";
import Body from "./src/Body";

//React Element
// const heading = <h1> Hello from JSX 🚀  </h1>

// //React functional component
// const HeadingComponent = () => (
//    <h1>Hello from functional component 🙏</h1>
// )

const App = () => {
  return (
    <>
      <Navbar />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
