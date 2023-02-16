import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  const manu = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/'>Jobs</Link>
      </li>
      <li>
        <Link to='/'>Contact Us</Link>
      </li>

      <li>
        <Link to='/'>Log In</Link>
      </li>
      <li>
        <Link to='/'>Sign Up</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1  font-medium">{manu}</ul>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <GiHamburgerMenu className="text-2xl" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact text-xl dropdown-content mt-3 p-2 font-medium shadow bg-base-100 rounded-box w-52"
            >
              {manu}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
