import React, { useEffect } from "react";
import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxios = () => {
  const { user, logOutUser } = useAuth(); // Ensure name matches your AuthProvider
  const navigate = useNavigate();

  useEffect(() => {
    const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
      // 1. Use Optional Chaining for safety
      const token = user?.accessToken;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    const resInterceptor = axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
        // 2. Use the CORRECT path to status code
        const statusCode = error.response ? error.response.status : null;
        console.log(statusCode);

        if (statusCode === 401 || statusCode === 403) {
          logOutUser()
            .then((res) => {
              console.log(res);

              navigate("/login");
            })
            .catch((err) => console.log(err));
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user, logOutUser, navigate]); // 3. Keep the dependency array!

  return axiosSecure;
};

export default useAxios;
