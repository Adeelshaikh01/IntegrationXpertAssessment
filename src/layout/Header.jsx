import Images from "@/assets/images";
import CustomInput from "@/components/TextField/CustomInput";
import colors from "@/theme/colors";
import { Badge, Box, Dropdown, Grid, MenuButton, Typography } from "@mui/joy";
import React from "react";
import { CgSearch } from "react-icons/cg";
import { GoChevronDown } from "react-icons/go";
import { FiBell } from "react-icons/fi";

function Header() {
  return (
    <Box sx={styles.header}>
      <Grid container sx={styles.gridContainer}>
        <Grid item xs={12} md={3}>
          <Typography level="h2">Dashboard</Typography>
        </Grid>

        {/* Right Section */}
        <Grid
          item
          xs={12}
          md={9}
          container
          spacing={2}
          sx={styles.rightSectionGrid}
        >
          <Grid item xs={12} md={6} sx={styles.searchSection}>
            <CustomInput
              size="lg"
              startIcon={<CgSearch size={24} color={colors.primary} />}
              label={"Search here..."}
              customStyles={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={4} md={2.5} sx={{ display: "flex" }}>
            <Dropdown>
              <MenuButton sx={styles.menuButton}>
                <img src={Images.usaflag} className="menuFlag" />
                <Typography sx={styles.menuText}>Eng (US)</Typography>
                <GoChevronDown size={14} color={colors.grayShade} />
              </MenuButton>
            </Dropdown>
          </Grid>
          <Grid item xs={2} md={1}>
            <Dropdown>
              <MenuButton sx={styles.notificationButton}>
                <Badge size="sm" color="danger" sx={styles.badge} />
                <FiBell size={22} color={colors.orange} />
              </MenuButton>
            </Dropdown>
          </Grid>
          <Grid item xs={4} md={2}>
            <Dropdown>
              <MenuButton sx={styles.userMenuButton}>
                <img src={Images.user} className="userIcon" />
                <Box sx={styles.userTextBox}>
                  <Typography sx={styles.userName}>Musfiq</Typography>
                  <Typography sx={styles.userRole}>Admin</Typography>
                </Box>
                <GoChevronDown size={14} color={colors.black} />
              </MenuButton>
            </Dropdown>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;

const styles = {
  header: {
    minHeight: 100,
    bgcolor: colors.white,
    display: "flex",
    paddingX: 3,
    boxSizing: "border-box",
    alignItems: "center",
    width: "100%",
  },
  gridContainer: {
    flex: 1,
    alignItems: "center",
  },
  searchSection: {
    display: "flex",
    justifyContent: "center",
  },
  menuButton: {
    border: "none",
  },
  menuText: {
    paddingX: 2,
    fontSize: 14,
  },
  notificationButton: {
    border: "none",
    bgcolor: colors.orangeShade,
    paddingY: 2,
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: 10,
    right: 12,
  },
  userMenuButton: {
    border: "none",
    alignItems: "start",
  },
  userTextBox: {
    paddingRight: 4,
    paddingLeft: 1,
  },
  userName: {
    fontSize: 14,
  },
  userRole: {
    fontSize: 12,
    fontWeight: "100",
    color: colors.grayShade,
    textAlign: "left",
  },
};
