import colors from "@/theme/colors";
import { Box, Divider, Typography } from "@mui/joy";
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

const CustomerSatisfaction = () => {
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
        data: [120, 150, 200, 180, 340, 260, 300, 280, 350, 330, 20],
        borderColor: colors.primary,
        fill: true,
        lineTension: 0.4,
        backgroundColor: "rgba(21, 89, 237, 0.2)",
      },
      {
        label: "New Customers",
        data: [180, 140, 250, 190, 300, 260, 220, 280, 370, 310, 400],
        borderColor: colors.seaGreen,
        fill: true,
        lineTension: 0.4,
        backgroundColor: "rgba(0, 224, 150, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: { display: false },
        grid: { display: false },
        border: {
          display: false,
          color: "transparent",
          width: 0,
        },
      },
      x: {
        ticks: { display: false },
        grid: { display: false },
        border: {
          display: false,
          color: "transparent",
          width: 0,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
        cubicInterpolationMode: "monotone",
      },
    },
    plugins: {
      legend: { display: false },
      title: { display: false },
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
        Customer Satisfaction
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Line data={data} options={options} />
        <Divider sx={{ mx: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mt: 1 }}>
          <StatisticCard
            image={Images.blueBar}
            label="Last Month"
            value="$3,004"
          />
          <Divider orientation="vertical" sx={{ height: 40 }} />
          <StatisticCard
            image={Images.greenBar}
            label="This Month"
            value="$4,504"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerSatisfaction;
