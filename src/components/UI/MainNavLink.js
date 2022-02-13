import React from 'react';
import { NavLink } from "react-router-dom";

const MainNavLink = ({ icon, path }) => {
  return (
    <li className="h-10 w-12">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "bg-neutral-700 h-full w-full flex items-center justify-center rounded-md"
                : "h-full w-full flex items-center justify-center rounded-md"
            }
            to={`${path}`}
          >
            {icon}
          </NavLink>
    </li>
  )
}

export default MainNavLink