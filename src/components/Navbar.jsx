import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <li>
        <NavLink to={"/lodge"}>THE LODGE</NavLink>
      </li>
      <li>
        <NavLink to={"/ourskin"}>OUR SKI RUNS</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>THE SUMMIT</NavLink>
      </li>
      <li>
        <NavLink to={"/howto"}>HOW TO GET HERE</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>CONTACT</NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
