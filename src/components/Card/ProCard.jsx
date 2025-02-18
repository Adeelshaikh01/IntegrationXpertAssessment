import * as React from "react";
import { Card, Typography, Button, Box } from "@mui/joy";
import colors from "@/theme/colors";
import Images from "@/assets/images";

function ProCard() {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.backgroundCircle1} />
      <Box sx={styles.backgroundCircle2} />

      <Box sx={styles.iconContainer}>
        <img src={Images.world} alt="World Icon" className="worldIcon" />
      </Box>

      <Typography sx={styles.title}>Get access to all features</Typography>

      <Button sx={styles.button}>
        <Typography sx={styles.buttonText}>Get Pro</Typography>
      </Button>
    </Box>
  );
}

export default ProCard;

const commonCircleStyles = {
  width: 250,
  height: 220,
  borderRadius: "50%",
  position: "absolute",
  opacity: 0.3,
  backgroundImage:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.1))",
};

const styles = {
  card: {
    bgcolor: colors.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    flexDirection: "column",
    textAlign: "center",
    borderRadius: 22,
    py: 4,
    my: 10,
    position: "relative",
    overflow: "hidden",
  },
  backgroundCircle1: {
    ...commonCircleStyles,
    right: -110,
    top: -110,
  },
  backgroundCircle2: {
    ...commonCircleStyles,
    left: -130,
    bottom: -130,
    opacity: 0.2,
  },
  iconContainer: {
    bgcolor: "white",
    display: "flex",
    alignItems: "center",
    borderRadius: 16,
    overflow: "hidden",
    p: 0.8,
    zIndex: 2,
  },
  title: {
    color: colors.white,
    mt: 1,
    zIndex: 2,
  },
  button: {
    bgcolor: colors.white,
    mt: 5,
  },
  buttonText: {
    color: colors.primary,
  },
};
