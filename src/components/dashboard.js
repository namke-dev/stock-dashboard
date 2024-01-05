import React from "react";
import Cart from "./cart";

export default function Dashboard() {
  return (
    <div
      className="h-screen
        grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
        grid-rows-8 md:grid-rows-7 xl:grid-rows-5

        auto-rows-fr
        gap-6 p-10
        font-quicksand"
    >
      <div
        className="col-span-1 md:col-span-2 xl:col-span-3 
        row-span-1"
      >
        <Cart>Header</Cart>
      </div>
      <div className="md:col-span-2 row-span-4">
        <Cart>Chart</Cart>
      </div>
      <div>
        <Cart>Overview</Cart>
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Cart>Details</Cart>
      </div>
    </div>
  );
}
