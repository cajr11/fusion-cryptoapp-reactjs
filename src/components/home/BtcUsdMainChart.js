import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "@faker-js/faker";
import { mainChartOptions } from "../../helpers/config";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const BtcUsdMainChart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(74 222 128)",
        backgroundColor: "rgb(74 222 128)",
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="mt-3 border w-full border-black rounded md:max-w-lg md:w-96 md:h-64 md:mt-0 bg-zinc-900">
      <div className="w-full px-2 py-2 flex items-center justify-between">
        <h1 className="flex justify-center items-center h-9 border rounded-md border-black w-20 text-xs font-bold bg-zinc-800 text-stone-200">
          BTC / USD
        </h1>

        <div className="w-28 flex justify-between">
          <button className="h-9 w-9 border border-stone-300 rounded-md text-xs font-bold bg-zinc-800 text-stone-200 ">7D</button>
          <button className="h-9 w-9 border border-black rounded-md text-xs font-bold bg-zinc-800 text-stone-200">1M</button>
          <button className="h-9 w-9 border border-black rounded-md text-xs font-bold bg-zinc-800 text-stone-200">1Y</button>
        </div>
      </div>

      <Line options={mainChartOptions} data={data} />
    </div>
  );
};

export default BtcUsdMainChart;
