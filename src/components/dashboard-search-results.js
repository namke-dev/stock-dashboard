import React from "react";

export default function SearchResults({ results }) {
  return (
    <ul
      className="absolute top-12 rounded-md 
      h-64  w-full
      overflow-y-scroll 
      bg-white border-2 border-neutral-300
      custom-scrollbar"
    >
      {results.map((item) => {
        return (
          <li
            key={item.symbol}
            className="cursor-pointer p-4 m-2 flex items-center justify-between rounded-md hover:bg-indigo-200"
          >
            <span>{item.symbol}</span>
            <span>{item.description}</span>
            <span>{item.type}</span>
          </li>
        );
      })}
    </ul>
  );
}
