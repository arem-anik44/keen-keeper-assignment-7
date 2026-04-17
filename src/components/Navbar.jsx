import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#176AE5] font-semibold border-b-2 border-[#176AE5] pb-1"
      : "text-[#0F0F0F] font-medium";

  return (
    <div className="navbar bg-white-100 px-0 py-4">
      <div className="navbar-start">
        <a className="flex items-center gap-2">
          
          <span className="text-2xl font-bold text-[#0F0F0F]">Keen Keeper</span>
        </a>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/timeline" className={navLinkClass}>
              Timeline
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics" className={navLinkClass}>
              Analytics
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end md:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            Menu
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/timeline">Timeline</NavLink>
            </li>
            <li>
              <NavLink to="/analytics">Analytics</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;