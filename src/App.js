import React, { lazy ,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./component/Navbar";
import Body from "./component/Body";
// import About from "./component/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Cart from "./component/Cart";
import Error from "./component/Error";
import Contact from "./component/Contact";
import RestaurantMenu from "./component/RestaurantMenu";

//React Element
// const heading = <h1> Hello from JSX 🚀  </h1>

// //React functional component
// const HeadingComponent = () => (
//    <h1>Hello from functional component 🙏</h1>
// )

const About = lazy(()=> import("./component/About"));

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
