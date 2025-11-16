import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Error from "../Pages/Error";

import Services from "../Pages/Services";
import Home from "../Pages/Home";
import Coverage from "../Pages/Coverage";
import axios from "axios";
import Spinner from "../Components/Spinner";

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
        element: <Coverage></Coverage>,
        loader: () => axios("/warehouses.json"),
        hydrateFallbackElement: <Spinner></Spinner>,
      },
    ],
  },
]);

export { router };
