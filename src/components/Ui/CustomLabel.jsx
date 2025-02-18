import colors from "@/theme/colors";
import { Box, Typography } from "@mui/joy";
import React from "react";

const StatisticCard = ({ image, label, value }) => (
  <Box sx={{ display: "flex", gap: 1.4 }}>
    <Box>
      <img src={image} alt={label} className="iconStyle" />
    </Box>
    <Box>
      <Typography sx={{ color: colors.grayShade, fontSize: 14 }}>
        {label}
      </Typography>
      <Typography level="h4">{value}</Typography>
    </Box>
  </Box>
);

export default StatisticCard;
