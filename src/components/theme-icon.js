import { MoonIcon } from "@heroicons/react/solid";
import React, { useContext } from "react";
import ThemeContext from "../context/theme-context";

export default function ThemeIcon() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <button
      className={`rounded-lg border-1 border-neutral-200 p-1.5
      absolute right-8 xl:right-32 shadow-lg
      ${darkMode ? "shadow-gray-800" : null}`}
      onClick={toggleDarkMode}
    >
      <MoonIcon
        className={`h-7 w-8 cursor-pointer stroke-1
        ${
          darkMode
            ? "fill-yellow-400 stroke-yellow-400"
            : " stroke-neutral-400 fill-none"
        }`}
      />
    </button>
  );
}
