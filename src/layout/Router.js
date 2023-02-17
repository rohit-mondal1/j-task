import { createBrowserRouter } from "react-router-dom";
import Login from "../Autancition/Login";
import Signup from "../Autancition/Signup";
import About from "../components/AC/About";
import ContuctsUs from "../components/AC/ContuctsUs";
import Apply from "../components/Apply/Apply";
import Home from "../components/Home/Home";
import Experienced_Jobs from "../components/Page/Experienced_Jobs/Experienced_Jobs";
import Fresher_Jobs from "../components/Page/Fresher_Jobs/Fresher_Jobs";
import All_detls from "../components/Page/Top_IT_Companie/All_detls";
import Details from "../components/Page/Top_IT_Companie/Details";
import Private from "../context/Private";

import MainLayout from "./MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contacts_Us", element: <ContuctsUs /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/Fresher_Jobs", element:  <Fresher_Jobs /> },
      { path: "/Experienced_Jobs", element: <Experienced_Jobs /> },
      { path: "/Details", element: <Details /> },
      { path: "/All_Details", element: <All_detls /> },
      { path: "/apllay", element: <Private> <Apply /></Private>  },
    ],
  },
]);