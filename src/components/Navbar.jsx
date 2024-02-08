import { useState } from "react";
import { NavLink } from "react-router-dom";
//react-icons
import { FaShoppingCart, FaGithub } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const {amount} = useSelector((state)=>state.basket)
  const dispatch = useDispatch()
  return (
    <div className="bg-slate-400">
      <div className="flex items-center justify-between py-5 max-container">
        <NavLink className="text-2xl md:text-3xl font-medium hoverEl" to="/">
          React shop
        </NavLink>
        <div className="flex items-center gap-5">
          <NavLink className="border px-1 py-1 md:px-3 md:py-2 rounded-md" to="/cart">
            <div className="indicator">
            <span className="indicator-item badge badge-secondary">{amount}</span>
              <button className="px-2 py-1 md:px-3 md:py-2 rounded-md hoverEl">
              <FaShoppingCart className="text-xl"/>
              </button>
            </div>
          </NavLink>
          <button className="border px-2 py-1 md:px-3 md:py-2 rounded-md">
            <IoMdSunny className="text-2xl hoverEl" />
          </button>
          <NavLink
            className="border px-2 py-1 md:px-3 md:py-2 rounded-md"
            to="https://youtube.com"
          >
            <FaGithub className="text-2xl hoverEl" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
