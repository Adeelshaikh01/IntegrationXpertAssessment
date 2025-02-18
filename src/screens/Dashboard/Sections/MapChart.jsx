import React, { memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import feature from "../../../consts/feature.json";
import colors from "@/theme/colors";
import { Box, Typography } from "@mui/joy";

const data = [
  {
    name: "Australia",
    projects: 1,
    color: colors.blue,
  },
  {
    name: "Egypt",
    projects: 5,
    color: colors.green,
  },
  {
    name: "United Arab Emirates",
    projects: 10,
    color: colors.purple,
  },
  {
    name: "Sweden",
    projects: 15,
    color: colors.yellow,
  },
  {
    name: "Brazil",
    projects: 25,
    color: colors.red,
  },

  {
    name: "United States",
    projects: 30,
    color: colors.seaGreen,
  },
];

const fillColor = (geo) => {
  const country = data.find((d) => d.name === geo.properties.name);

  if (country) {
    return country.color;
  }

  return "#D6D6DA";
};

const MapChart = () => {
  return (
    <Box
      sx={{
        bgcolor: colors.white,
        borderRadius: 12,
        pt: 4,
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <Typography level="h4" sx={{ px: 4 }}>
        Sales Mapping by Country
      </Typography>
      <ComposableMap
        style={{
          width: "100%",
          height: 290,
        }}
      >
        <Geographies geography={feature}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: fillColor(geo),
                    outline: "none",
                  },
                  hover: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </Box>
  );
};

export default memo(MapChart);
