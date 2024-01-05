import React, { useContext } from "react";
import ThemeContext from "../context/theme-context";

export default function Cart({ children }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`h-full w-full rounded-md relative p-8
      border-2 

      ${
        darkMode ? "bg-gray-800 border-gray-900" : "border-neutral-200 bg-white"
      }
      `}
    >
      {children}
    </div>
  );
}
