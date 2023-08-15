import React from "react";

import SidebarLogo from "./SidebarLogo";
import SidebarTweetButton from "./SidebarTweetButton";
import SidebarClientItems from "./SidebarClientItems";

const Sidebar = async () => {
  return (
    <div className=" col-span-1 h-full px-6  md:pr-6 pt-4">
      <div className=" flex flex-col fixed top-0 items-center">
        <div className=" space-y-2 lg:w-[230px]">
          <SidebarLogo />

          <SidebarClientItems />

          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
