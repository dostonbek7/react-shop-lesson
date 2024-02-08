import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-slate-300">
      <div className="py-5">
        <h1 className="text-xl font-medium text-center">
          Made with <span className="text-cyan-600">❤</span> by
          <NavLink className='ml-1 text-cyan-600' to="https://github.com/dostonbek7">Dostonbek</NavLink>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
