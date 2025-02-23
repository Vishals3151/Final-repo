import React, { useEffect, useState } from "react";
import { User } from "lucide-react"; // Profile icon

function Nav() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Career Openings</a></li>
      <li><a href="https://chatting-app-nhrh.onrender.com/">Community Buzz</a></li>
      <li><a href="/uploads">Creative Corner</a></li>
      <li><a href="https://forms.visme.co/formsPlayer/mx04n48j-contact-form">Contact Us</a></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 max-w-screen-2xl container mx-auto md:px-20 px-4 fixed z-50 dark:bg-slate-900 dark:text-white">
      {/* Left Section - Logo & Name */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navItems}
          </ul>
        </div>
        
        <a className="w-14">
          <img src="logo.png" alt="Logo" />
        </a>
        <a href="/" className="font-bold ml-3 text-2xl">DataDiscovery</a>
      </div>

      {/* Center - Navbar Items (SHIFTED EVEN MORE RIGHT) */}
      <div className="navbar-center hidden lg:flex translate-x-[200px]">
        <ul className="menu menu-horizontal px-1 font-semibold">
          {navItems}
        </ul>
      </div>

      {/* Right Section - Theme Toggle, Profile, Logout */}
      <div className="navbar-end">
        {/* Theme Toggle */}
        <label className="hidden md:swap swap-rotate mx-3">
          <input type="checkbox" className="theme-controller" value="synthwave" />
          
          {/* Fixed Sun Icon with Proper Rays */}
          <svg
            className="swap-off h-9 w-9 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
            <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
            <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
          </svg>

          {/* Moon Icon */}
          <svg
            className="swap-on h-9 w-9 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <path d="M21.64 13A10 10 0 0 1 11 3.36 8 8 0 1 0 20.64 14 1 1 0 0 0 21.64 13Z" />
          </svg>
        </label>

        {/* Profile Icon + Logout */}
        <div className="flex items-center bg-black text-white px-4 py-2 ml-3 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">
          <User className="w-5 h-5 mr-2" />
          <a>Logout</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
