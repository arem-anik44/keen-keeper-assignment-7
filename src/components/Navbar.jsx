import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiHome, HiClock, HiChartPie, HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-2 text-[#176AE5] font-semibold border-b-2 border-[#176AE5] pb-1"
      : "flex items-center gap-2 text-[#0F0F0F] font-medium hover:text-[#176AE5] transition-colors duration-200";

  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-3 px-4 py-3 rounded-xl bg-[#EEF4FF] text-[#176AE5] font-semibold"
      : "flex items-center gap-3 px-4 py-3 rounded-xl text-[#0F0F0F] font-medium hover:bg-[#F4F7FF] hover:text-[#176AE5] transition-colors duration-200";

  const navLinks = [
    { to: "/", label: "Home", icon: <HiHome size={18} /> },
    { to: "/timeline", label: "Timeline", icon: <HiClock size={18} /> },
    { to: "/analytics", label: "Analytics", icon: <HiChartPie size={18} /> },
  ];

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Keen Keeper" className="h-9 w-auto object-contain" />
            
          </NavLink>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label, icon }) => (
              <li key={to}>
                <NavLink to={to} className={navLinkClass}>
                  {icon}
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 rounded-lg text-[#0F0F0F] hover:bg-[#F4F7FF] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-[#E5E7EB] shadow-lg">
          <ul className="flex flex-col gap-1 p-3">
            {navLinks.map(({ to, label, icon }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={mobileNavLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-[#176AE5]">{icon}</span>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;