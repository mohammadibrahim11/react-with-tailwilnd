import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { LoadData } from "./loaders/LoadData";



const router= createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: LoadData,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/cart',
        element:<Cart></Cart>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
