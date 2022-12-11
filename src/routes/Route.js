import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Admin from "../pages/Admin/Admin";
import Allproduct from "../pages/allProduct/Allproduct";
// import Category from "../pages/allProduct/Allproduct";
import CheckOut from "../pages/CheckOut/CheckOut";
import Error from "../pages/error/Error";
import Home from "../pages/Home/Home";
// import BannerData from "../pages/Home/BannerData";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";



const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/admin',
                element: <Admin></Admin>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout',
                element: <CheckOut></CheckOut>
            },
            {
                path: '/allproduct/:id',
                element: <Allproduct></Allproduct>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])

export default router;