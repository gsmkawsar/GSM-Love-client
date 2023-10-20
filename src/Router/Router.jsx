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
import PrivateRoute from "./PrivateRoute";
import Samsung from "../components/Brands/Samsung/Samsung";
import Vivo from "../components/Brands/Vivo/Vivo";
import Oppo from "../components/Brands/Oppo/Oppo";
import OnePlus from "../components/Brands/OnePlus/OnePlus";
import Xiaomi from "../components/Brands/Xiaomi/Xiaomi";
import Apple from "../components/Brands/Apple/Apple";
import Product from "../pages/Product/Product";


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
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: '/product/:id',
        element: <Product></Product>,
        loader: () => fetch('http://localhost:5000/product')

      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>,
      },
      {
        path: '/Registration',
        element: <RegistrationPage></RegistrationPage>,
      },
      {
        path: '/Samsung',
        element: <Samsung></Samsung>,
      },
      {
        path: '/Vivo',
        element: <Vivo></Vivo>,
      },
      {
        path: '/Oppo',
        element: <Oppo></Oppo>,
      },
      {
        path: '/OnePlus',
        element: <OnePlus></OnePlus>,
      },
      {
        path: '/Xiaomi',
        element: <Xiaomi></Xiaomi>,
      },
      {
        path: '/Apple',
        element: <Apple></Apple>,
        loader: () => fetch('http://localhost:5000/product')
      },

    ]
  },
]);

export default router;