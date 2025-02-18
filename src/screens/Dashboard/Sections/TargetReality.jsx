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
import { Box, Grid, Typography } from "@mui/joy";
import colors from "@/theme/colors";
import Images from "@/assets/images";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TargetReality = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
    datasets: [
      {
        label: "Reality Sales",
        data: [65, 59, 80, 81, 56, 55, 40, 70, 65, 59, 80],
        backgroundColor: colors.seaGreen,
        borderRadius: 4,
        barThickness: 18,
        borderWidth: 2,
        borderColor: "transparent",
      },
      {
        label: "Target Sales",
        data: [28, 48, 40, 19, 86, 27, 90, 60, 28, 48, 40],
        borderRadius: 4,
        backgroundColor: colors.yellow,
        barThickness: 18,
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
        display: false,
      },
    },
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
        p: 4,
        pb: 3,
        borderRadius: 12,
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <Typography level="h4">Target vs Reality</Typography>
      <Box sx={{ mt: 4, mb: 2 }}>
        <Bar data={data} options={options} />
      </Box>
      <Grid container spacing={1.5}>
        <Grid item xs={12}>
          <InfoCard
            title={"Reality Sales"}
            subTitle={"Global"}
            value={"8.823"}
            colorTheme={{
              bgcolor: colors.greenBg,
              textColor: colors.seaGreen,
            }}
            icon={Images.bag}
          />
        </Grid>
        <Grid item xs={12}>
          <InfoCard
            title={"Target Sales"}
            subTitle={"Commercial"}
            value={"12.122"}
            colorTheme={{
              bgcolor: colors.yellowBg,
              textColor: colors.yellow,
            }}
            icon={Images.ticketStar}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TargetReality;

const InfoCard = ({ title, subTitle, value, colorTheme, icon }) => {
  return (
    <Grid container columnGap={1} alignItems={"center"}>
      <Grid
        item
        xs={1.5}
        sx={{
          bgcolor: colorTheme?.bgcolor,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: 45,
          borderRadius: 8,
        }}
      >
        <img src={icon} className="menuFlag" />
      </Grid>
      <Grid item xs={5}>
        <Typography level="h5" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography sx={{ color: colors.grayShade, fontSize: 14 }}>
          {subTitle}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography level="h5" sx={{ color: colorTheme?.textColor }}>
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
};
