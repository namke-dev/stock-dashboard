import React from "react";

export default function Cart({ children }) {
  return (
    <div
      className="h-full w-full rounded-md relative p-8
        border-2 
        border-neutral-200
        bg-white "
    >
      {children}
    </div>
  );
}
