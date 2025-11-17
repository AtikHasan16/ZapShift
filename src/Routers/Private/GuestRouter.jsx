import React, { useContext } from "react";
import AuthContext from "../../Contexts/Context/AuthContext";
import { Navigate } from "react-router";
import Spinner from "../../Components/Spinner";

const GuestRouter = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default GuestRouter;
