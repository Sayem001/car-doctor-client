import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/Home/About";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Survices from "../Pages/Home/Survices";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/checkOut/:id',
          element:<CheckOut/>,
          loader:({params})=>fetch(`http://localhost:5000/survices/${params.id}`)
        },
        {
          path:'/survices',
          element:<Survices></Survices>
        },
   
      ],
    },
  ]);

  export default router;