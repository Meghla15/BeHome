import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import UpdateProfile from "../Pages/UpdateProfile";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CardDetails from "../DetailsPage/CardDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
        {
          path: "/aboutUs",
          element:<AboutUs></AboutUs>,
        },
        {
          path: "/contact",
          element:<Contact></Contact>,
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/register",
          element:<Register></Register>
        },
        {
          path: "/card-details/:id",
          element:<CardDetails></CardDetails>
        },
       {
          path: "/updateProfile",
          element:<UpdateProfile></UpdateProfile>,
       },
     
    ]
    },
  ]);
  export default router;