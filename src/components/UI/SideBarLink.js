import React from 'react';
import { NavLink } from "react-router-dom";

const SideBarLink = ({ icon, path, name }) => {
  return (
    <li className="h-20 w-20">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "bg-neutral-700 h-full w-full flex items-center justify-center rounded-md md:flex-col"
                : "h-full w-full flex items-center justify-center rounded-md md:flex-col"
            }
            to={`${path}`}
          >
            {icon}
            <span className='hidden md:block md:mt-1'>{name}</span>
          </NavLink>
    </li>
  )
}

export default SideBarLink