import React from "react";
import { SearchBar } from "./SearchBar";
import { HeaderIcons } from "./HeaderIcons";
import { UserAvatar } from "./UserAvatar";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm w-full">
      <div className="px-6 py-4 flex items-center justify-between">
        <SearchBar />
        <div className="flex items-center gap-4">
          <HeaderIcons />
          <UserAvatar />
        </div>
      </div>
    </header>
  );
};
