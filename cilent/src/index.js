import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App'
import Home from "./page/Home/Home";
import Add from "./page/Add/Add";





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {
        path: "/",
        element: <Home />,
      },
      {
        path: "add",
        element: <Add />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <RouterProvider router={router} />

);

