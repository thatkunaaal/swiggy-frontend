import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./component/Navbar";
import Body from "./component/Body";
import About from "./component/About";
import {createBrowserRouter, Outlet, RouterProvider} from  "react-router-dom"
import Cart from "./component/Cart";
import Error from "./component/Error";
import Contact from "./component/Contact";

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
      <Outlet />
    </>
  );
};


const appRouter = createBrowserRouter([
  {path: "/",
    element: <App />,
    children: [
      {
        path : "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },{
        path : "/cart",
        element : <Cart />
      },{
        path: "/contact",
        element : <Contact />
      }
    ],
    errorElement: <Error />
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
