import colors from "@/theme/colors";
import { Box, Divider, Typography } from "@mui/joy";
import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import Images from "@/assets/images";
import StatisticCard from "@/components/Ui/CustomLabel";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const VolumeService = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        label: "Reality Sales",
        data: [65, 59, 80, 81, 56, 55, 40, 70, 65, 59],
        backgroundColor: colors.seaGreen,
        borderRadius: 4,
        barThickness: 18,
      },
      {
        label: "Target Sales",
        data: [28, 48, 40, 19, 86, 27, 90, 60, 28, 48],
        borderRadius: 4,
        backgroundColor: colors.blue,
        barThickness: 18,
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
        display: false,
      },
    },
    scales: {
      y: {
        stacked: true, // Enable stacking on Y-axis
        ticks: { display: false },
        grid: { display: false },
        border: {
          display: false,
          color: "transparent",
          width: 0,
        },
      },
      x: {
        stacked: true, // Enable stacking on X-axis
        ticks: { display: false },
        grid: { display: false },
        border: {
          display: false,
          color: "transparent",
          width: 0,
        },
      },
    },
  };

  return (
    <Box
      sx={{
        bgcolor: colors.white,
        borderRadius: 12,
        py: 4,
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <Typography level="h4" sx={{ px: 4 }}>
        Volume vs Service Level
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Bar data={data} options={options} height={120} />
        <Divider sx={{ mx: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mt: 1 }}>
          <StatisticCard
            image={Images.blueCircle}
            label="Volume"
            value="1,135"
          />
          <Divider orientation="vertical" sx={{ height: 40 }} />
          <StatisticCard
            image={Images.greenCircle}
            label="Services"
            value="504"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default VolumeService;
