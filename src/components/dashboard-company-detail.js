import React, { useContext } from "react";
import Cart from "./cart";
import ThemeContext from "../context/theme-context";

export default function DashboardCompanyDetail({ details }) {
  const detailListType = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
    // shareOutstanding: 4375.47998046875,
    // ticker: "AAPL",
    // weburl: "https://www.apple.com/",
    // logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
  };

  const { darkMode } = useContext(ThemeContext);

  const converMillionToBillion = (number) => {
    return (number / 1000).toFixed(2);
  };
  return (
    <Cart>
      <ul
        className={`w-full h-full flex flex-col justify-between divide-y-1
      ${darkMode ? "divide-gray-800" : ""}`}
      >
        {Object.keys(detailListType).map((item) => {
          return (
            <li key={item} className="flex-1 flex justify-between items-center">
              <span>{detailListType[item]}</span>
              <span>
                {item === "marketCapitalization"
                  ? `${converMillionToBillion(details[item])}B`
                  : details[item]}
              </span>
            </li>
          );
        })}
      </ul>
    </Cart>
  );
}
