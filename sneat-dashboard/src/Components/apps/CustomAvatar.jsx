// ** React Imports
import { forwardRef } from "react";

// ** MUI Imports
import MuiAvatar from "@mui/material/Avatar";
import { lighten, useTheme } from "@mui/material/styles";

const hexToRGBA = (hexCode, opacity) => {
  let hex = hexCode.replace("#", "");
  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const UseBgColor = () => {
  // ** Hooks
  const theme = useTheme();

  return {
    primaryFilled: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
    },
    primaryLight: {
      // color: theme.palette.primary.main,
      color: "rgb(105, 108, 255)",
      backgroundColor: "rgba(105, 108, 255, 0.16)",
    },
    secondaryFilled: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
    },
    secondaryLight: {
      color: theme.palette.secondary.main,
      backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.16),
    },
    successFilled: {
      color: theme.palette.success.contrastText,
      backgroundColor: theme.palette.success.main,
    },
    successLight: {
      color: "rgb(113, 221, 55)",
      // backgroundColor: hexToRGBA(theme.palette.success.main, 0.16),
      backgroundColor: "rgb(237, 250, 231)",
    },
    errorFilled: {
      color: theme.palette.error.contrastText,
      backgroundColor: theme.palette.error.main,
    },
    errorLight: {
      // color: theme.palette.error.main,
      color: "rgb(255, 62, 29)",
      // backgroundColor: hexToRGBA(theme.palette.error.main, 0.16),
      backgroundColor: "rgba(255, 62, 29, 0.16)",
    },
    warningFilled: {
      color: theme.palette.warning.contrastText,
      backgroundColor: theme.palette.warning.main,
    },
    warningLight: {
      // color: theme.palette.warning.main,
      color: "rgb(255, 171, 0)",
      // backgroundColor: hexToRGBA(theme.palette.warning.main, 0.16),
      backgroundColor: "rgba(255, 171, 0, 0.16)",
    },
    infoFilled: {
      color: theme.palette.info.contrastText,
      backgroundColor: theme.palette.info.main,
    },
    infoLight: {
      color: theme.palette.info.main,
      backgroundColor: hexToRGBA(theme.palette.info.main, 0.16),
    },
  };
};

const CustomAvatar = forwardRef((props, ref) => {
  // ** Props
  const { sx, src, skin, color } = props;

  // ** Hook
  const theme = useTheme();
  const bgColors = UseBgColor();

  const getAvatarStyles = (skin, skinColor) => {
    let avatarStyles;
    if (skin === "light") {
      avatarStyles = { ...bgColors[`${skinColor}Light`] };
    } else if (skin === "light-static") {
      avatarStyles = {
        color: bgColors[`${skinColor}Light`].color,
        backgroundColor: lighten(theme.palette[skinColor].main, 0.88),
      };
    } else {
      avatarStyles = { ...bgColors[`${skinColor}Filled`] };
    }

    return avatarStyles;
  };

  const colors = {
    primary: getAvatarStyles(skin, "primary"),
    secondary: getAvatarStyles(skin, "secondary"),
    success: getAvatarStyles(skin, "success"),
    error: getAvatarStyles(skin, "error"),
    warning: getAvatarStyles(skin, "warning"),
    info: getAvatarStyles(skin, "info"),
  };

  return (
    <MuiAvatar
      ref={ref}
      {...props}
      sx={!src && skin && color ? Object.assign(colors[color], sx) : sx}
    />
  );
});
CustomAvatar.defaultProps = {
  skin: "filled",
  color: "primary",
};

export default CustomAvatar;
