import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import AddProduct from "../pages/Add Product/AddProduct";
import MyCart from "../pages/My Cart/MyCart";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/addProduct',
            element: <AddProduct></AddProduct>,
        },
        {
            path: "/myCart",
            element: <MyCart></MyCart>,
        }

      ]
    },
  ]);

  export default router;