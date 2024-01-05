import React, { useState } from "react";
import { mockSearchResult } from "../constants/mock";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import SearchResults from "./search-results";
export default function Search() {
  const [input, setInput] = useState("");
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
      {/* input search term */}
      <input
        type="text"
        value={input}
        className=" w-full px-4 py-2 focus:outline-none rounded-md"
        placeholder="Search stock..."
        onChange={(event) => {
          setInput(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            updateBestMatches();
          }
        }}
      />

      {/* Clear button */}
      {input && (
        <button onClick={clear}>
          <XIcon className="h-4 w-4 fill-gray-500" />
        </button>
      )}

      {/* Search button */}
      <button
        onClick={updateBestMatches}
        className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2"
      >
        <SearchIcon className="h-4 w-4 fill-gray-200" />
      </button>

      {/* Search result */}
      {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} />
      ) : (
        ""
      )}
    </div>
  );
}
