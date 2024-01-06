import React, { useContext, useEffect, useState } from "react";
import Header from "./dashboard-header";
import DashboardCompanyDetail from "./dashboard-company-detail";
import DashboardOverview from "./dashboard-overview";
import DashboardChart from "./dashboard-chart";
import ThemeContext from "../context/theme-context";
import StockContext from "../context/stock-context";
import { fetchQuote, fetchStockDetails } from "../api/stock-api";

export default function Dashboard() {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);

  const [stockDetail, setStockDetail] = useState({});
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const updateStockDetail = async () => {
      if (!stockSymbol) return;
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetail(result);
      } catch (error) {
        console.log(error);
      }
    };
    const updateStockOverview = async () => {
      if (!stockSymbol) return;
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        console.log(error);
      }
    };

    updateStockDetail();
    updateStockOverview();
  }, [stockSymbol]);

  return (
    // Dashboard container
    <div
      className={`h-screen
      grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
      grid-rows-8 md:grid-rows-7 xl:grid-rows-5
      auto-rows-fr
      gap-6 p-10
      font-quicksand
      
      ${darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"}
      `}
    >
      {/* Dashboard Header */}
      <div
        className="
          col-span-1 md:col-span-2 xl:col-span-3 row-span-1
          flex
          justify-start
          items-center"
      >
        <Header name={stockDetail.name} />
      </div>

      {/* Stock Chart */}
      <div className="md:col-span-2 row-span-4">
        <DashboardChart />
      </div>

      {/* Company Overview */}
      <div className="row-span-2  xl:row-span-1">
        <DashboardOverview
          sympol={stockSymbol}
          price={quote.pc}
          change={quote.d}
          changePercent={quote.dp}
          currency={stockDetail.currency}
        />
      </div>

      {/* Company detail */}
      <div className="row-span-5 md:row-span-4 xl:row-span-3">
        <DashboardCompanyDetail details={stockDetail} />
      </div>
    </div>
  );
}
