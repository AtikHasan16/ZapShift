import React, { useContext } from "react";
import AuthContext from "../../Contexts/Context/AuthContext";
import { Navigate } from "react-router";
import Spinner from "../../Components/Spinner";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner></Spinner>;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRouter;
