import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from 'react-chartjs-2';
import faker from '@faker-js/faker';
import { mainChartOptions } from "../../helpers/config";
    
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BtcUsdMainChart = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = { 
        labels,
        datasets: [
            {
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: '000',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

  return (
    <div className="mt-3 border border-black rounded">
        <h1>BTC/USD</h1>
        <Line options={mainChartOptions} data={data} />
    </div>
  );
};

export default BtcUsdMainChart;
