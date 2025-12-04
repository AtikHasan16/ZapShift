import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";

const Registration = () => {
  const { emailRegistration, updateUser, googleLogin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxios();
  console.log(errors);

  const handleRegistration = (data) => {
    console.log(data);
    emailRegistration(data.email, data.password)
      .then(() => {
        // console.log(result);
        toast.success("Created Profile ");

        const profileInfo = {
          email: data.email,
          displayName: data.name,
          photoURL: data.photoURL,
          signInWith: "UserInfo",
        };
        // Send user info to the server
        axiosSecure.post("/users", profileInfo).then(() => {
          // console.log("user created in the database", res.data);
        });

        updateUser({
          displayName: data.name,
          photoURL: data.photoURL,
        })
          .then(() => {
            // console.log(res);
            toast.success("Profile Updated Successfully");
          })
          .catch((error) => {
            toast.error(error.code);
          });
      })
      .catch((error) => {
        toast.error(error.code);
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
              type="text"
              className="input rounded-xl input-lg w-full"
              placeholder="Name"
              {...register("name", {
                required: true,
                minLength: { value: 4, message: "minimum 4 character needed" },
              })}
            />
            <p className="text-rose-500">{errors?.name?.message}</p>
          </div>
          {/* Image input field */}
          <div>
            <label className=" text-xl">Upload Image</label>
            <fieldset className="fieldset">
              <input
                type="file"
                className="file-input file-input-primary rounded-xl input-lg w-full"
                {...register("photo", { required: true })}
              />
              <label className="label">Max size 2MB</label>
            </fieldset>
            <p className="text-rose-500">
              {errors?.photo?.type === "required" && "Upload your photo"}
            </p>
          </div>
          <div>
            <label className=" text-xl">Email</label>
            <input
              type="email"
              className="input rounded-xl input-lg w-full"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <label className=" text-xl">Password</label>
            <input
              type="password"
              className="input rounded-xl input-lg w-full"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message:
                    "minimum 8 character including uppercase, lowercase and number",
                },
              })}
            />
            <p className="text-red-500">{errors?.password?.message}</p>
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

export default Registration;
