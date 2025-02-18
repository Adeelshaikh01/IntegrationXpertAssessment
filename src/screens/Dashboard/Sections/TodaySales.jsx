import Images from "@/assets/images";
import colors from "@/theme/colors";
import { Box, Dropdown, Grid, MenuButton, Typography } from "@mui/joy";
import React from "react";
import { PiExportBold } from "react-icons/pi";

function TodaySales() {
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography level="h4">Today's Sales</Typography>
          <Typography sx={{ fontSize: 14, color: colors.grayShade, mt: 1 }}>
            Sales Summery
          </Typography>
        </Box>

        <Dropdown>
          <MenuButton sx={{ py: 1.5, borderRadius: 8 }}>
            <PiExportBold />
            <Typography sx={{ fontSize: 12, pl: 1 }}>Export</Typography>
          </MenuButton>
        </Dropdown>
      </Box>

      <Grid container spacing={4} sx={{ mt: 7 }}>
        <Grid item xs={12} md={3}>
          <InnerCard
            detail={"+8% from yesterday"}
            icon={Images.signal}
            label={"Total Sales"}
            value={"$1k"}
            colorScheme={{
              bgcolor: colors.pinkShade,
              iconBg: colors.pink,
            }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <InnerCard
            detail={"+5% from yesterday"}
            icon={Images.file}
            label={"Total Orders"}
            value={"300"}
            colorScheme={{
              bgcolor: colors.orangeShade,
              iconBg: colors.orange,
            }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <InnerCard
            detail={"+1.2% from yesterday"}
            icon={Images.tag}
            label={"Product Sold"}
            value={"5"}
            colorScheme={{
              bgcolor: colors.greenShade,
              iconBg: colors.green,
            }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <InnerCard
            detail={"+0.5% from yesterday"}
            icon={Images.userAdd}
            label={"New Customers"}
            value={"8"}
            colorScheme={{
              bgcolor: colors.purpleShade,
              iconBg: colors.purple,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default TodaySales;

const InnerCard = ({ label, icon, detail, value, colorScheme }) => {
  return (
    <Box
      sx={{
        bgcolor: colorScheme?.bgcolor,
        borderRadius: 12,
        p: 3,
        height: 145,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          bgcolor: colorScheme?.iconBg,
          width: 35,
          height: 35,
          borderRadius: 35,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={icon} className="commonIcon" />
      </Box>
      <Typography level="h3">{value}</Typography>
      <Typography
        sx={{ color: colors.textBlackShade, fontWeight: 600, fontSize: 14 }}
      >
        {label}
      </Typography>
      <Typography sx={{ color: colors.primary, fontSize: 12 }}>
        {detail}
      </Typography>
    </Box>
  );
};
