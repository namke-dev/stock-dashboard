import React from "react";
import Cart from "./cart";

export default function DashboardOverview({
  sympol,
  price,
  change,
  changePercent,
  currency,
}) {
  return (
    <Cart>
      <span
        className="absolute left-4 top-4
        text-neutral-400 text-lg xl:text-xl 2xl:text-2xl"
      >
        {sympol}
      </span>
      <div className="w-full h-full flex items-center justify-around">
        <span className="text-2xl xl:text-3xl 2xl:text-4xl flex items-center mt-5">
          ${price}{" "}
          <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
            {currency}
          </span>
        </span>

        <span
          className={`text-lg xl:text-xl 2xl:text-2xl
        ${change > 0 ? "text-lime-500" : "text-red-500"}`}
        >
          {change}
          <span>({changePercent}%)</span>
        </span>
      </div>
    </Cart>
  );
}
