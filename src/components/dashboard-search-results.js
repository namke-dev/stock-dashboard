import React, { useContext } from "react";
import ThemeContext from "../context/theme-context";
import StockContext from "../context/stock-context";

export default function SearchResults({ results }) {
  const { darkMode } = useContext(ThemeContext);
  const { setStockSymbol } = useContext(StockContext);

  return (
    <ul
      className={`absolute top-12 rounded-md 
      h-64  w-full
      overflow-y-scroll 
      border-2
      custom-scrollbar
      ${
        darkMode
          ? "bg-gray-900 border-gray-800 custom-scrollbar-dark"
          : "bg-white  border-neutral-300"
      }`}
    >
      {results &&
        results.map((item) => {
          return (
            <li
              key={item.symbol}
              className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md
            ${darkMode ? "hover:bg-indigo-600" : "hover:bg-indigo-200"}`}
              onClick={() => {
                console.log(item.symbol);
                setStockSymbol(item.symbol);
              }}
            >
              <span>{item.symbol}</span>
              <span>{item.description}</span>
              {/* <span>{item.type}</span> */}
            </li>
          );
        })}
    </ul>
  );
}
