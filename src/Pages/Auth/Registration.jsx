import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";
const Registration = () => {
  const { emailRegistration, googleLogin } = useAuth();
  const { register, handleSubmit } = useForm();

  const handleRegistration = (data) => {
    console.log(data);
    emailRegistration(data.email, data.password)
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
     })
     .catch((error) => {
       console.log(error);
     });
 };
  return (
    <div className="m-6 md:m-20 ">
      <title>Registration | ZapShift</title>
      <div className="space-y-4">
        <h1 className="text-4xl font-black ">Create an Account</h1>
        <p>Register with ZapShift</p>
      </div>
      <div className="mt-5">
        <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">
          <div>
            <label className=" text-xl">Name</label>
            <input
              type="email"
              className="input rounded-xl input-lg w-full"
              placeholder="Name"
              {...register("name")}
            />
          </div>
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

          <button className="btn btn-primary btn-block text-black mt-4">
            Registration
          </button>
        </form>
        <p className="mt-4">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-primary font-medium hover:underline ml-1"
          >
            Login here
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} type="button" className="btn btn-block">
          {" "}
          <FcGoogle></FcGoogle> Login with google
        </button>
      </div>
    </div>
  );
};

export default Registration;
