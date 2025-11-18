import React, { useContext } from "react";
import AuthContext from "../Contexts/Context/AuthContext";

const useAuth = () => {
  const authInfo = useContext(AuthContext);
  return authInfo;
};

export default useAuth;
