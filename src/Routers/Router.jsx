import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Error from "../Pages/Error";

import Services from "../Pages/Services";
import Home from "../Pages/Home";
import Coverage from "../Pages/Coverage";
import axios from "axios";
import Spinner from "../Components/Spinner";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login";
import Registration from "../Pages/Auth/Registration";
import ForgetPass from "../Pages/Auth/ForgetPass";
import GuestRouter from "./Private/GuestRouter";
import PrivateRouter from "./Private/PrivateRouter";
import AboutUs from "../Pages/AboutUs";
import SendParcel from "../Pages/SendParcel";
import BeRider from "../Pages/BeRider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,

    children: [
      { index: "/", element: <Home></Home> },
      { path: "/service", element: <Services></Services> },
      {
        path: "/coverage",
        element: (
          <PrivateRouter>
            <Coverage></Coverage>
          </PrivateRouter>
        ),
        loader: () => axios("/warehouses.json"),
        hydrateFallbackElement: <Spinner></Spinner>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/send",
        element: <SendParcel></SendParcel>,
        loader: () => axios("/warehouses.json"),
        hydrateFallbackElement: <Spinner></Spinner>,
      },
      {
        path: "/be-a-rider",
        element: <BeRider></BeRider>,
        loader: () => axios("/warehouses.json"),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/login",
        element: (
          <GuestRouter>
            <Login></Login>
          </GuestRouter>
        ),
      },
      {
        path: "/registration",
        element: (
          <GuestRouter>
            <Registration></Registration>
          </GuestRouter>
        ),
      },
      {
        path: "forget",
        element: (
          <GuestRouter>
            <ForgetPass></ForgetPass>
          </GuestRouter>
        ),
      },
    ],
  },
]);

export { router };
