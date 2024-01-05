import React, { useState } from "react";
import Cart from "./cart";
import { mockHistorialData } from "../constants/mock-data";
import { convertUnixTimestampToDate } from "../helper/date-helper";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function DashboardChart() {
  const [data, setData] = useState(mockHistorialData);
  const [, setFilter] = useState("1W");

  const formData = () => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestampToDate(data.t[index]),
      };
    });
  };
  return (
    <Cart>
      <ResponsiveContainer>
        <AreaChart data={formData(data)}>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fillOpacity={1}
            strokeWidth={0.5}
          />
          <Tooltip />
          <XAxis dataKey={"date"} />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Cart>
  );
}
