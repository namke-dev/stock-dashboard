import React from "react";
import { mockCompanyDetails } from "../constants/mock-data";
import Header from "./dashboard-header";
import CompanyDetail from "./company-detail";
import DashboardOverview from "./dashboard-overview";
import DashboardChart from "./dashboard-chart";

export default function Dashboard() {
  return (
    // Dashboard container
    <div
      className="h-screen
        grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
        grid-rows-8 md:grid-rows-7 xl:grid-rows-5
        auto-rows-fr
        gap-6 p-10
        font-quicksand
        bg-neutral-100"
    >
      {/* Dashboard Header */}
      <div
        className="
          col-span-1 md:col-span-2 xl:col-span-3 row-span-1
          flex
          justify-start
          items-center"
      >
        <Header name={mockCompanyDetails.name} />
      </div>

      {/* Stock Chart */}
      <div className="md:col-span-2 row-span-4">
        <DashboardChart />
      </div>

      {/* Company Overview */}
      <div>
        <DashboardOverview
          sympol={mockCompanyDetails.sympol}
          price={300}
          change={30}
          changePercent={10.0}
          currency={"USD"}
        />
      </div>

      {/* Company detail */}
      <div className="row-span-2 xl:row-span-3">
        <CompanyDetail details={mockCompanyDetails} />
      </div>
    </div>
  );
}
