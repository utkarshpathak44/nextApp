"use client";

import { Line } from "react-chartjs-2";
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

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  datasets: [
    {
      label: "Sales",
      data: [67, 34, 75, 80, 90, 95, 98, 80, 87, 99],
      borderColor: "rgba(75, 75, 75, 1)", // Line color
      backgroundColor: "rgba(75, 75, 75, 0.2)", // Fill under the line
      borderWidth: 2,
      pointRadius: 2,
      pointBackgroundColor: "rgba(75, 75, 75, 1)", // Point color
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: { display: false, text: "ATS scores over iterations" },
  },
};

export default function Chart() {
  return <Line data={data} options={options} />;
}
