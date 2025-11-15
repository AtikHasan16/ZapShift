import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Error from "../Pages/Error";

import Services from "../Pages/Services";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      { index: "/", element: <Home></Home> },
      { path: "service", element: <Services></Services> },
    ],
  },
]);

export { router };
