import colors from "@/theme/colors";
import { Box, Typography } from "@mui/joy";
import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function VisitorInsights() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Loyal Customers",
        data: [120, 150, 200, 180, 220, 260, 300, 280, 350, 330, 400],
        borderColor: colors.purple,
        fill: false,
        lineTension: 0.4,
        pointRadius: 1,
      },
      {
        label: "New Customers",
        data: [180, 140, 250, 190, 300, 260, 220, 280, 370, 310, 400],
        borderColor: colors.red,
        fill: false,
        lineTension: 0.4,
        pointRadius: 1,
      },
      {
        label: "Unique Customers",
        data: [200, 180, 150, 220, 240, 260, 280, 300, 320, 350, 400],
        borderColor: colors.green,
        fill: false,
        lineTension: 0.4,
        pointRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 400,
        ticks: { stepSize: 100 },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
          borderDash: [5, 5],
          lineWidth: 1,
        },
      },
      x: { grid: { display: false } },
    },
    elements: {
      line: { tension: 0.4, cubicInterpolationMode: "monotone" },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          generateLabels: (chart) => {
            return chart.data.datasets.map((dataset, index) => ({
              text: dataset.label,
              fillStyle: dataset.borderColor,
              strokeStyle: dataset.borderColor,
              pointStyle: "rectRounded",
              borderRadius: 4,
            }));
          },
        },
      },
      title: { display: false },
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
      <Typography level="h4">Visitor Insights</Typography>
      <Box sx={{ mt: 4 }}>
        <Line
          data={data}
          options={options}
          // height={135}
        />
      </Box>
    </Box>
  );
}

export default VisitorInsights;
