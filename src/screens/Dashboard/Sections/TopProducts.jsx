import colors from "@/theme/colors";
import { Box, Typography } from "@mui/joy";
import React from "react";
import Table from "@mui/joy/Table";
import CustomChip from "@/components/Ui/CustomChip";

function TopProducts() {
  function createData(id, name, popularity, sales, colorTheme) {
    return { id, name, popularity, sales, colorTheme };
  }

  const rows = [
    createData("01", "Home Decor Range", "50%", "15%", {
      lightBG: colors.blueShade,
      darkBG: colors.blue,
    }),
    createData("02", "Disney Princess Pink Bag 18'", "50%", "45%", {
      lightBG: colors.greenBg,
      darkBG: colors.seaGreen,
    }),
    createData("03", "Bathroom Essentials", "50%", "80%", {
      lightBG: colors.purpleShade,
      darkBG: colors.purple,
    }),
    createData("04", "Apple Smartwatches", "50%", "35%", {
      lightBG: colors.orangeShade,
      darkBG: colors.orange,
    }),
  ];
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
        Top Products
      </Typography>
      <Table sx={{ p: 2 }}>
        <thead>
          <tr>
            {["#", "Name", "Popularity", "Sales"].map((heading, index) => (
              <th
                key={index}
                style={{
                  backgroundColor: "transparent",
                  fontWeight: 100,
                  color: colors.grayShade,
                  width: index === 0 ? 40 : index === 3 ? 60 : "auto",
                }}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>
                <Box
                  sx={{
                    ...styles.barStyle,
                    bgcolor: row?.colorTheme?.lightBG,
                  }}
                >
                  <Box
                    sx={{
                      ...styles.barStyle,
                      bgcolor: row?.colorTheme?.darkBG,
                      width: row?.sales,
                    }}
                  />
                </Box>
              </td>
              <td>
                <CustomChip
                  value={row?.sales}
                  bgColor={row?.colorTheme?.lightBG}
                  textColor={row?.colorTheme?.darkBG}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
}

export default TopProducts;

const styles = {
  barStyle: {
    width: "100%",
    height: 4,
    borderRadius: 12,
  },
};
