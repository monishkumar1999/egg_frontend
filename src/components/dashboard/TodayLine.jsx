import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const TodayLine = () => {
  // Get the current month and year
  const today = new Date();
  const currentMonth = today.getMonth(); // Current month (0-11)
  const currentYear = today.getFullYear(); // Current year

  // Generate the days of the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Number of days in current month

  // Generate day-wise labels and data points (simulate prices for demonstration)
  const labels = [];
  const dataPoints = [];
  for (let day = 1; day <= daysInMonth; day++) {
    labels.push(`${day}`);
    dataPoints.push(Math.floor(Math.random() * 20) + 50); // Simulate prices for each day (50-70 INR range)
  }

  // Chart data and options
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Egg Price (INR)",
        data: dataPoints,
        fill: true, // Make the area under the line colorful
        backgroundColor: "rgba(255, 159, 64, 0.2)", // Soft orange fill under the line
        borderColor: "rgba(255, 159, 64, 1)", // Line color
        tension: 0.3,
        pointBackgroundColor: "rgba(255, 159, 64, 1)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 5,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Egg Price Day-wise for the Current Month",
        font: {
          size: 24,
          weight: "bold",
        },
        color: "#333", // Dark text for title
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark background for tooltips
        titleColor: "#fff", // White title in tooltips
        bodyColor: "#fff", // White body text in tooltips
        borderColor: "#ccc",
        borderWidth: 1,
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ₹${context.raw}`; // Custom tooltip format
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Day of the Month",
          font: {
            size: 16,
          },
        },
        grid: {
          display: false, // Hide the gridlines for a cleaner look
        },
        ticks: {
          font: {
            size: 14,
            color: "#555", // Dark color for ticks
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Price (INR)",
          font: {
            size: 16,
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Light gray gridlines for the Y-axis
        },
        ticks: {
          font: {
            size: 14,
            color: "#555", // Dark color for ticks
          },
        },
      },
    },
    layout: {
      padding: 20,
    },
    elements: {
      point: {
        radius: 5,
        hoverRadius: 7,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full shadow-2xl rounded-lg mt-6 h-96 bg-transparent p-4 bg-blue-50">
      <Line data={data} options={options} />
    </div>
  );
};

export default TodayLine;
