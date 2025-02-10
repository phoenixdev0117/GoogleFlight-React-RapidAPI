import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../assets/Pages/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/", element: <Home/>},
        

    ],
    },

  ]);

  export default router;
