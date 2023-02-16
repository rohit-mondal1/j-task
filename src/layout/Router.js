import { createBrowserRouter } from "react-router-dom";
import Login from "../Autancition/Login";
import Signup from "../Autancition/Signup";
import Home from "../components/Home/Home";

import MainLayout from "./MainLayout";

export const router = createBrowserRouter([
    {path:'/' , element: <MainLayout/> , children: ([
        {path:'/' , element:<Home/>},
       
        {path:'/About_Us' , element:<Home/>},
        {path:'/login' , element:<Login/>},
        {path:'/signup' , element:<Signup/>},
    ]) }
])