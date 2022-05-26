import React from "react";
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";

const activeStyle = {
  color: "purple"
}

export default function Header() {

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              <img alt="Carved Rock Fitness" src="/images/logo.png" />
            </Link>
          </li>
          <li>
            <NavLink to='/shoes' style={({ isActive }) => ({ color: isActive ? 'purple' : '' })}>
              Shoes
            </NavLink>
          </li>
          <li>
            <NavLink to='/cart' style={({ isActive }) => ({ color: isActive ? 'purple' : '' })}>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
