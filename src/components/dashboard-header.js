import React from "react";
import DashBoardSearchBar from "./dashboard-search-bar";
import ThemeIcon from "./theme-icon";

export default function DashboardHeader({ name }) {
  return (
    <>
      <div>
        <h1 className="text-5xl">{name}</h1>
        <DashBoardSearchBar />
      </div>
      <ThemeIcon />
    </>
  );
}
