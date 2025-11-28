import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";

const Login = () => {
  const { emailLogin, googleLogin } = useAuth();
  const axiosSecure = useAxios();
  const { handleSubmit, register } = useForm();
  const handleLogin = (data) => {
    console.log(data);

    emailLogin(data.email, data.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        // Create user info object to send to the server
        const profileInfo = {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          signInWith: "Google",
        };
        axiosSecure.post("/users", profileInfo).then((res) => {
          console.log("Server Message", res.data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="m-6 md:m-20 ">
      <title>Login | ZapShift</title>
      <div className="space-y-4">
        <h1 className="text-4xl font-black ">Welcome Back</h1>
        <p>Login with ZapShift</p>
      </div>
      <div className="mt-5">
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          <div>
            <label className=" text-xl">Email</label>
            <input
              type="email"
              className="input rounded-xl input-lg w-full"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <div>
            <label className=" text-xl">Password</label>
            <input
              type="password"
              className="input rounded-xl input-lg w-full"
              placeholder="Password"
              {...register("password")}
            />
          </div>
          <Link to={"/forget"} className="link link-hover">
            Forgot password?
          </Link>
          <button className="btn btn-primary btn-block text-black mt-4">
            Login
          </button>
        </form>

        <p className="mt-4">
          Don't have an account?{" "}
          <Link
            to={"/registration"}
            className="text-primary font-medium hover:underline ml-1"
          >
            Create Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="btn btn-block"
        >
          {" "}
          <FcGoogle></FcGoogle> Login with google
        </button>
      </div>
    </div>
  );
};

export default Login;
