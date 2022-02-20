import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
} from "chart.js";
import { Line } from "react-chartjs-2";
import { tokenDetailOptions } from "../../helpers/config";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;

const TokenChart = ({ uuid, name }) => {
  const [btcData, setBtcData] = useState("");
  const [timeStamps, setTimestamps] = useState("");
  const [sortBy, setSortBy] = useState("7d");
  const [isLower, setIsLower] = useState(null)

  const sortHandler = (e) => {
    if (e.target.textContent === "7D"){
      setSortBy("7d");
    } else if (e.target.textContent === "1M"){
      setSortBy("30d");
    } else if (e.target.textContent === "1Y") {
      setSortBy("1y");
    };
  }

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://coinranking1.p.rapidapi.com/coin/${uuid.tokenDetails}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${sortBy}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "coinranking1.p.rapidapi.com",
            "x-rapidapi-key": RAPID_API_KEY,
          },
        }
      );
      const data = await res.json();
      const dataPoints = await data.data.history.map((point) => parseFloat(point.price)).reverse()
      setBtcData(
        await dataPoints
      );
      setTimestamps(
        await data.data.history.map((point) =>
          new Date(point.timestamp * 1000).toLocaleString("default", {
            month: "short",
          }) + ' ' + new Date(point.timestamp * 1000).getDate()
        ).reverse()
      );
      setIsLower(dataPoints[dataPoints.length-1] < dataPoints[0])
    };
    getData();
  }, [sortBy, uuid.tokenDetails]);

  const borderColor = isLower ? "rgb(220, 38, 38)" : "rgb(74, 222, 128)";
  const backgroundColor = isLower ? "rgba(220, 38, 38, 0.1)" : "rgba(74, 222, 128, 0.1)";

  const data = {
    labels: timeStamps,
    datasets: [
      {
        data: btcData,
        borderColor,
        backgroundColor,
        fill: true,
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="mt-3 border w-full border-gray-600 rounded md:w-full md:mt-0 bg-zinc-900">
      <div className="w-full px-2 py-2 flex items-center justify-between">
        <h1 className="flex justify-center items-center h-9 border rounded-md border-black w-32 text-sm font-bold bg-zinc-800 text-stone-200">
          {name.split(" ")[0]} / USD
        </h1>

        <div className="w-28 flex justify-between">
          <button className={`h-9 w-9  ${sortBy === "7d" ? "border border-stone-300" : ""} rounded-md text-xs font-bold bg-zinc-800 text-stone-200`} onClick={sortHandler}>
            7D
          </button>
          <button className={`h-9 w-9 ${sortBy === "30d" ? "border border-stone-300" : ""} rounded-md text-xs font-bold bg-zinc-800 text-stone-200`} onClick={sortHandler}>
            1M
          </button>
          <button className={`h-9 w-9 ${sortBy === "1y" ? "border border-stone-300" : ""} rounded-md text-xs font-bold bg-zinc-800 text-stone-200`} onClick={sortHandler}>
            1Y
          </button>
        </div>
      </div>

      <Line options={tokenDetailOptions} data={data} className="mb-2 lg:pb-7" />
    </div>
  );
};

export default TokenChart;