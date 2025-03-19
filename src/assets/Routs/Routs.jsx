import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Verification from "../Pages/Verifications/Verification";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[{

          path:"/",
          element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/verification",
        element:<Verification></Verification>
      }
      ]
    },
  ]);