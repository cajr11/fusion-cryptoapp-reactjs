import React from "react";
import {
  HomeIcon,
  CurrencyDollarIcon,
  SwitchHorizontalIcon,
  ClockIcon,
  CreditCardIcon,
} from "@heroicons/react/outline";
import { FireIcon } from "@heroicons/react/solid";
import SideBarLink from "./SideBarLink";

const SideBar = () => {
  return (
    <aside className="absolute bottom-0 w-full bg-neutral-900 flex items-center text-stone-300 md:top-28 md:w-40 md:nav-md">
      {/* SideBar links */}
      <ul className="flex justify-evenly items-center w-full h-20 px-2 md:flex-col md:top-16 md:h-full">
          <SideBarLink icon={<HomeIcon className="h-7 stroke-thin" />} path="/" name="Home" />
          <SideBarLink icon={<CurrencyDollarIcon className="h-7 stroke-thin" />} path="/tokens" name="Tokens" />
          <SideBarLink icon={<SwitchHorizontalIcon className="h-7 stroke-thin" />} path="/swap" name="Swap" />
          <SideBarLink icon={<ClockIcon className="h-7 stroke-thin" />} path="/watchlist"  name="Watchlist"/>
          <SideBarLink icon={<CreditCardIcon className="h-7 stroke-thin"  />} path="/wallet" name="Wallet"/>
      </ul>
    </aside>
  );
};

export default SideBar;
