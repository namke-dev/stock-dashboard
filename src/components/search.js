import React, { useState } from "react";
import { mockSearchResult } from "../constants/mock";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
export default function Search() {
  const [input, setInput] = useState();
  const [bestMatches, setBestMatches] = useState(mockSearchResult.result);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = () => {
    setBestMatches(mockSearchResult.result);
  };

  return (
    <div
      className="flex items-center
        my-4 border-2
        rounded-md
        relative
        z-50
        w-96
        bg-white
        border-neutral-200"
    >
      <input
        type="text"
        value={input}
        className=" w-full px-4 py-2 focus:outline-none rounded-md"
        placeholder="Search stock..."
        onChange={(event) => {
          if (event.key === "Enter") {
            updateBestMatches();
          }
        }}
      />

      <button>
        <XIcon className="h-4 w-4 fill-gray-500" />
      </button>
    </div>
  );
}
