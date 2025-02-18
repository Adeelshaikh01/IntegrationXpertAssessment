import { Box, Typography } from "@mui/joy";
import React from "react";

function CustomChip({ value, textColor, bgColor }) {
  return (
    <Box
      sx={{
        bgcolor: bgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 0.2,
        borderRadius: 8,
        border: `1px solid ${textColor}`,
      }}
    >
      <Typography sx={{ color: textColor }}>{value}</Typography>
    </Box>
  );
}

export default CustomChip;
