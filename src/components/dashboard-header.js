import React from "react";
import Search from "./dashboard-search-bar";

export default function DashboardHeader({ name }) {
  return (
    <>
      <div>
        <h1 className="text-5xl">{name}</h1>
        <Search />
      </div>
      {/* <ThemeIcon/> */}
    </>
  );
}
