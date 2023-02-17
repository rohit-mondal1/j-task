import { createBrowserRouter } from "react-router-dom";
import Login from "../Autancition/Login";
import Signup from "../Autancition/Signup";
import About from "../components/AC/About";
import ContuctsUs from "../components/AC/ContuctsUs";
import Apply from "../components/Apply/Apply";
import Home from "../components/Home/Home";
import Experienced_Jobs from "../components/Page/Experienced_Jobs/Experienced_Jobs";
import Fresher_Jobs from "../components/Page/Fresher_Jobs/Fresher_Jobs";
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
      { path: "/apllay", element: <Private> <Apply /></Private>  },
    ],
  },
]);