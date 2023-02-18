import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./layout/Router";

import "aos/dist/aos.css";

function App() {
  return (
    <div className="max-w-[1050px] mx-auto border">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
