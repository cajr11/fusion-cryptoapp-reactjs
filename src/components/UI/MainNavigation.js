import React from "react";
import {
  HomeIcon,
  CurrencyDollarIcon,
  SwitchHorizontalIcon,
  ClockIcon,
  FolderOpenIcon,
} from "@heroicons/react/outline";
import { FireIcon } from "@heroicons/react/solid";
import MainNavLink from "./MainNavLink";

const MainNavigation = () => {
  return (
    <nav className="flex absolute bottom-0 w-full bg-neutral-900 text-stone-300">
      {/* App Logo - display only md screens and up */}
      <div className="hidden">
        <FireIcon className="h-5" />
      </div>

      {/* Main nav links */}
      <ul className="flex justify-evenly items-center w-full h-16 px-2">
          <MainNavLink icon={<HomeIcon className="h-7 stroke-thin" />} path="/" />
          <MainNavLink icon={<CurrencyDollarIcon className="h-7 stroke-thin" />} path="/tokens" />
          <MainNavLink icon={<SwitchHorizontalIcon className="h-7 stroke-thin" />} path="/swap" />
          <MainNavLink icon={<ClockIcon className="h-7 stroke-thin" />} path="/watchlist" />
          <MainNavLink icon={<FolderOpenIcon className="h-7 stroke-thin"  />} path="/wallet"/>
      </ul>
    </nav>
  );
};

export default MainNavigation;
