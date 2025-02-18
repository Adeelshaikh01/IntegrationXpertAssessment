import colors from "@/theme/colors";
import { Input } from "@mui/joy";
import React from "react";

function CustomInput({
  label,
  endIcon,
  startIcon,
  type,
  disable,
  customStyles,
  size = "md",
}) {
  return (
    <Input
      disabled={disable}
      sx={{
        ...customStyles,
        bgcolor: colors.fieldShade,
        border: "none", // Removes the border
        fontSize: 14,
      }}
      size={size}
      variant={"outlined"}
      placeholder={label}
      endDecorator={endIcon}
      startDecorator={startIcon}
      type={type}
    />
  );
}

export default CustomInput;
