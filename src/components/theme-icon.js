import { MoonIcon } from "@heroicons/react/solid";
import React from "react";

export default function ThemeIcon() {
  return (
    <button
      className="rounded-lg border-1 border-neutral-200 p-0
        absolute right-8 xl:right-32 shadow-lg"
    >
      <MoonIcon className="h-8 w-8 cursor-pointer stroke-1 stroke-neutral-400 fill-none"></MoonIcon>
    </button>
  );
}
