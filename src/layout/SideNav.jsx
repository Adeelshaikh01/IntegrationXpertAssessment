import Images from "@/assets/images";
import colors from "@/theme/colors";
import {
  Box,
  List,
  ListItemButton,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import React, { memo } from "react";
import { VscPieChart } from "react-icons/vsc";
import { FiBarChart2, FiLogOut } from "react-icons/fi";
import { BsCart, BsHandbag } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { LuMessageSquareText, LuSettings } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import ProCard from "@/components/Card/ProCard";

const drawerWidth = 280;

const Navigation = [
  {
    path: "/",
    pathName: "Dashboard",
    icon: <VscPieChart size={24} />,
  },
  {
    path: "",
    pathName: "Leaderboard",
    icon: <FiBarChart2 size={24} />,
  },
  {
    path: "",
    pathName: "Order",
    icon: <BsCart size={24} />,
  },
  {
    path: "",
    pathName: "Products",
    icon: <BsHandbag size={24} />,
  },
  {
    path: "",
    pathName: "Sales Report",
    icon: <GoGraph size={24} />,
  },
  {
    path: "",
    pathName: "Messages",
    icon: <LuMessageSquareText size={24} />,
  },
  {
    path: "",
    pathName: "Settings",
    icon: <LuSettings size={24} />,
  },
  {
    path: "",
    pathName: "Sign Out",
    icon: <FiLogOut size={24} />,
  },
];

function SideNav() {
  const { pathname } = useLocation();

  return (
    <Box sx={styles.drawerBox}>
      <Box sx={{ display: "flex", p: 1, justifyContent: "center", mb: 1 }}>
        <img src={Images.logo} alt="Takseem" width="60%" />
      </Box>
      <List component="nav" sx={{ px: 2, mt: 5 }}>
        {Navigation.map((item, index) => (
          <ListItemButton
            key={index}
            sx={[
              styles.itemBtnContainer,
              {
                bgcolor: pathname === item.path ? colors.primary : colors.white,
                boxShadow:
                  pathname === item.path
                    ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    : "",
              },
            ]}
          >
            <ListItemDecorator>
              {React.cloneElement(item.icon, {
                color: pathname === item.path ? colors.white : colors.grayShade,
              })}
            </ListItemDecorator>
            <Typography
              sx={{
                fontSize: 14,
                color: pathname === item.path ? colors.white : colors.grayShade,
              }}
            >
              {item.pathName}
            </Typography>
          </ListItemButton>
        ))}
      </List>

      <ProCard />
    </Box>
  );
}

export default memo(SideNav);

const styles = {
  drawerBox: {
    width: drawerWidth,
    bgcolor: colors.white,
    padding: 3,
    boxSizing: "border-box",
  },
  itemBtnContainer: {
    py: 1,
    alignItems: "end",
    borderRadius: 8,
    mb: 3,
  },
};
