import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Verification from "../Pages/Verifications/Verification";
import SetNewPassword from "../Pages/SetNewPassword/SetNewPassword";
import Congratulations from "../Pages/Congratulations/Congratulations";



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
      },
      {
        path:"/newPassword",
        element:<SetNewPassword></SetNewPassword>
      },
      {
        path:"/congratulation",
        element:<Congratulations></Congratulations>
      }
      ]
    },
  ]);