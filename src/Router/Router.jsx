import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import AddProduct from "../pages/Add Product/AddProduct";
import MyCart from "../pages/My Cart/MyCart";
import LoginPage from "../pages/LogiPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";


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
        },
       {
        path: '/login',
        element:<LoginPage></LoginPage>,
       },
       {
        path: '/Registration',
        element: <RegistrationPage></RegistrationPage>,
       }

      ]
    },
  ]);

  export default router;