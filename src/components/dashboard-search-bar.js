import React, { useContext, useState } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import SearchResults from "./dashboard-search-results";
import ThemeContext from "../context/theme-context";
import { searchSymbols } from "../api/stock-api";

export default function DashBoardSearchBar() {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);

  const { darkMode } = useContext(ThemeContext);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = async () => {
    try {
      if (input) {
        const searchResult = await searchSymbols(input);
        const result = searchResult.result;
        setBestMatches(result);
      }
    } catch (error) {
      setBestMatches([]);
      console.log(error);
    }
  };

  return (
    <div
      className={`flex items-center
      my-4 border-2
      rounded-md
      relative
      z-50
      w-96
      ${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
      }`}
    >
      {/* input search term */}
      <input
        type="text"
        value={input}
        className={`w-full px-4 py-2 focus:outline-none rounded-md
        ${darkMode ? "bg-gray-800" : ""}
        `}
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
        <button onClick={clear} className="m-1">
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
