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
import UpdateProduct from "../pages/Update Product/UpdateProduct";


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
        element: <PrivateRoute><Product></Product></PrivateRoute>,
        loader: () => fetch('https://assignment-10-server-sigma-nine.vercel.app/product')

      },
      {
        path: "/myCart",
        element: <PrivateRoute><MyCart></MyCart>,</PrivateRoute>,
        loader: () => fetch('https://assignment-10-server-sigma-nine.vercel.app/myCard'),
      },
      {
        path: '/update/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`https://assignment-10-server-sigma-nine.vercel.app/product/${params.id}`)

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
        loader: () => fetch('https://assignment-10-server-sigma-nine.vercel.app/product')
      },
      {
        path: '/Vivo',
        element: <Vivo></Vivo>,
        loader: () => fetch('https://assignment-10-server-sigma-nine.vercel.app/product')
      },
      {
        path: '/Oppo',
        element: <Oppo></Oppo>,
        loader: () => fetch('https://assignment-10-server-sigma-nine.vercel.app/product')
      },
      {
        path: '/OnePlus',
        element: <OnePlus></OnePlus>,
        loader: () => fetch('https://assignment-10-server-sigma-nine.vercel.app/product')
      },
      {
        path: '/Xiaomi',
        element: <Xiaomi></Xiaomi>,
        loader: () => fetch('https://assignment-10-server-sigma-nine.vercel.app/product')
      },
      {
        path: '/Apple',
        element: <Apple></Apple>,
        loader: () => fetch('https://assignment-10-server-sigma-nine.vercel.app/product')
      },

    ]
  },
]);

export default router;