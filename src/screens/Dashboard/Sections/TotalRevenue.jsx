import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box, Typography } from "@mui/joy";
import colors from "@/theme/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TotalRevenue = () => {
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Online Sales",
        data: [65, 59, 80, 81, 56, 55, 40, 70, 65, 59, 80],
        backgroundColor: colors.primary,
        borderRadius: 4,
        barThickness: 14,
        borderWidth: 2,
        borderColor: "transparent",
      },
      {
        label: "Offline Sales",
        data: [28, 48, 40, 19, 86, 27, 90, 60, 28, 48, 40],
        borderRadius: 4,
        backgroundColor: colors.seaGreen,
        barThickness: 14,
        borderWidth: 2,
        borderColor: "transparent",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
          callback: (value) => (value > 0 ? `${value}K` : value),
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
          borderDash: [5, 5],
          lineWidth: 1,
        },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return (
    <Box
      sx={{
        bgcolor: colors.white,
        p: 4,
        borderRadius: 12,
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <Typography level="h4">Total Revenue</Typography>
      <Box sx={{ mt: 4 }}>
        <Bar data={data} options={options} />
      </Box>
    </Box>
  );
};

export default TotalRevenue;
