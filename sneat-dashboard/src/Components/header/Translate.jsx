import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TranslateIcon from "@mui/icons-material/Translate";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Public Sans",
      "sans-serif",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default function Translate() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          disableRipple
          sx={{
            color: "gray",
            width: "100%",
            height: "100%",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <TranslateIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            marginTop: "18px",
          }}
        >
          <MenuItem
            onClick={handleClose}
            sx={{
              color: "rgb(105, 108, 255)",
              backgroundColor: "rgba(105, 108, 255, 0.08)",
              width: "120px",
            }}
          >
            English
          </MenuItem>
          <MenuItem onClick={handleClose}>French</MenuItem>
          <MenuItem onClick={handleClose}>Chinese</MenuItem>
          <MenuItem onClick={handleClose}>Spanish</MenuItem>
        </Menu>
      </div>
    </ThemeProvider>
  );
}
