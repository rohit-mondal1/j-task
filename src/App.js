import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./layout/Router";

function App() {
  return (
    <div className="max-w-[1050px] mx-auto border">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
