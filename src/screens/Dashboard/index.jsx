import { Grid } from "@mui/joy";
import React from "react";
import TodaySales from "./Sections/TodaySales";
import VisitorInsights from "./Sections/VisitorInsights";
import TotalRevenue from "./Sections/TotalRevenue";
import CustomerSatisfaction from "./Sections/CustomerSatisfaction";
import TargetReality from "./Sections/TargetReality";
import TopProducts from "./Sections/TopProducts";
import VolumeService from "./Sections/VolumeService";
import MapChart from "./Sections/MapChart";

function Dashboard() {
  return (
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={12} lg={7}>
        <TodaySales />
      </Grid>
      <Grid item xs={12} lg={5}>
        <VisitorInsights />
      </Grid>
      <Grid item xs={12} lg={5}>
        <TotalRevenue />
      </Grid>
      <Grid item xs={12} lg={3.5}>
        <CustomerSatisfaction />
      </Grid>
      <Grid item xs={12} lg={3.5}>
        <TargetReality />
      </Grid>
      <Grid item xs={12} lg={5}>
        <TopProducts />
      </Grid>
      <Grid item xs={12} lg={3.5}>
        <MapChart />
      </Grid>
      <Grid item xs={12} lg={3.5}>
        <VolumeService />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
