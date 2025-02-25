"use client";

import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const data = {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: "rgba(150, 150, 150, 0.2)", // Light grey fill
        borderColor: "rgb(120, 120, 120)", // Medium grey border
        borderWidth: 1, // Thin line
        pointBackgroundColor: "rgb(120, 120, 120)", // Darker grey points
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(120, 120, 120)",
      },
      {
        label: "My Second Dataset",
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: "rgba(180, 180, 180, 0.2)", // Slightly darker grey fill
        borderColor: "rgb(140, 140, 140)", // Dark grey border
        borderWidth: 1, // Thin line
        pointBackgroundColor: "rgb(140, 140, 140)", // Darker grey points
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(140, 140, 140)",
      },
    ],
  };
  

const options = {
  responsive: true,
  maintainAspectRatio: false, // Allows resizing
  scales: {
    r: {
      ticks: {
        display: false, // Hide 100, 80, 60, etc.
      },
      grid: {
        color: "rgba(150, 150, 150, 0.2)", // Light grey grid lines
      },
      angleLines: {
        color: "rgba(120, 120, 120, 0.5)", // Light grey angle lines
      },
    },
  },
  plugins: {
    legend: { display: false },
    title: { display: false, text: "Athlete Performance (Radar Chart)" },
  },
};

export default function RadarChart({ width = 350, height = 350 }) {
  return (
    <div className="w-full" style={{ width, height }}>
      <Radar data={data} options={options} />
    </div>
  );
}
