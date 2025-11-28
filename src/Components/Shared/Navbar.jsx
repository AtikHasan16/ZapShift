import { BiMenu } from "react-icons/bi";
import { Link, NavLink } from "react-router";
import logo from "../../assets/images/logo.png";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const hover = "hover:bg-primary hover:rounded-xl";
  const links = (
    <>
      <li>
        {" "}
        <NavLink to={"/service"} className={hover}>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to={"/coverage"} className={hover}>
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about"} className={hover}>
          About Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/dashboard"} className={hover}>
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to={"/pricing"} className={hover}>
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink to={"/send"} className={hover}>
          Send Parcel
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-white rounded-2xl shadow-sm urbanist md:p-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" btn btn-ghost lg:hidden"
            >
              <BiMenu size={30}></BiMenu>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow text-primary-content text-lg font-semibold"
            >
              {links}
            </ul>
          </div>

          <Link
            to={"/"}
            className="flex items-end justify-center text-2xl font-bold"
          >
            <figure className="w-8">
              <img src={logo} alt="" />
            </figure>
            ZapShift
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <button
              onClick={() => logOutUser()}
              className="btn text-primary-content border-2 border-gray-400"
            >
              Logout
            </button>
          ) : (
            <Link
              to={"/login"}
              className="btn text-primary-content border-2 border-gray-400"
            >
              Sign In
            </Link>
          )}
          <div className="hidden md:block">
            <Link to={"/rider"} className="btn  bg-primary">
              Be a rider
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
