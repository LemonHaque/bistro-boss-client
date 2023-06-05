import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Oder/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Layout/DashBoard/MyCart/MyCart";
import AllUsers from "../Layout/DashBoard/AllUsers/AllUsers";
import AddItem from "../Layout/DashBoard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Layout/DashBoard/MangeItems/ManageItems";
import Payment from "../Layout/DashBoard/Payment/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "menu",
                element: <Menu></Menu>
            },
            {
                path: "order/:category",
                element: <Order></Order>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            },
            {
                path: "secret",
                element: <PrivateRoute> <Secret></Secret></PrivateRoute>
            }
        ],
      
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children:[
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'additem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manageitems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            }
        ]
    }
]);