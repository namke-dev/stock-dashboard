import React from "react";

export default function Cart({ children }) {
  return (
    <div
      className="h-full w-full rounded-md relative p8
        border-2 bg-gray-300"
    >
      {children}
    </div>
  );
}
