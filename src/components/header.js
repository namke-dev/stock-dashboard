import React from "react";
import Search from "./search";

export default function Header({ name }) {
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
