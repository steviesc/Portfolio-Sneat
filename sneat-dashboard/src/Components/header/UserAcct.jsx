import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HelpIcon from "@mui/icons-material/Help";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useNavigate } from "react-router-dom";

// ** React Imports
import { useState, Fragment } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

// ** Icon Imports
import man1 from "../../assets/avatars/1.png";

// ** Styled Components
const BadgeContentSpan = styled("span")(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: "rgb(113, 221, 55)",
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
}));

const UserAcct = (props) => {
  // ** States
  const [anchorEl, setAnchorEl] = useState(null);

  // ** Hooks
  const navigate = useNavigate();

  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = (url) => {
    setAnchorEl(null);
  };

  const styles = {
    py: 1,
    px: 4,
    width: "100%",
    display: "flex",
    alignItems: "center",
    color: "text.secondary",
    textDecoration: "none",
    "& svg": {
      mr: 2,
      fontSize: "1.25rem",
      color: "text.secondary",
    },
  };

  const handleLogout = () => {
    navigate("/login");
    handleDropdownClose();
  };

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

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Badge
          overlap="circular"
          onClick={handleDropdownOpen}
          sx={{ ml: 2, cursor: "pointer" }}
          badgeContent={<BadgeContentSpan />}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Avatar
            alt="John Doe"
            src={man1}
            onClick={handleDropdownOpen}
            sx={{ width: 40, height: 40 }}
          />
        </Badge>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleDropdownClose()}
          sx={{ "& .MuiMenu-paper": { width: 230, mt: 4 } }}
        >
          <Box sx={{ py: 2, px: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Badge
                overlap="circular"
                badgeContent={<BadgeContentSpan />}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <Avatar
                  alt="John Doe"
                  src={man1}
                  sx={{ width: "2.5rem", height: "2.5rem" }}
                />
              </Badge>
              <Box
                sx={{
                  ml: 3,
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ fontWeight: 500 }}>John Doe</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Admin
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ mt: "0 !important", height: "5px" }} />
          <MenuItem
            sx={{ p: 0 }}
            onClick={() => handleDropdownClose("/pages/user-profile/profile")}
          >
            <Box sx={styles}>
              <PersonIcon />
              Profile
            </Box>
          </MenuItem>
          <MenuItem
            sx={{ p: 0 }}
            onClick={() => handleDropdownClose("/apps/email")}
          >
            <Box sx={styles}>
              <MailIcon />
              Inbox
            </Box>
          </MenuItem>
          <MenuItem
            sx={{ p: 0 }}
            onClick={() => handleDropdownClose("/apps/chat")}
          >
            <Box sx={styles}>
              <ChatIcon />
              Chat
            </Box>
          </MenuItem>
          <Divider
            sx={{
              my: (theme) => `${theme.spacing(2)}`,
              height: "5px",
            }}
          />
          <MenuItem
            sx={{ p: 0 }}
            onClick={() =>
              handleDropdownClose("/pages/account-settings/account")
            }
          >
            <Box sx={styles}>
              <SettingsIcon />
              Settings
            </Box>
          </MenuItem>
          <MenuItem
            sx={{ p: 0 }}
            onClick={() => handleDropdownClose("/pages/pricing")}
          >
            <Box sx={styles}>
              <MonetizationOnIcon />
              Pricing
            </Box>
          </MenuItem>
          <MenuItem
            sx={{ p: 0 }}
            onClick={() => handleDropdownClose("/pages/faq")}
          >
            <Box sx={styles}>
              <HelpIcon />
              FAQ
            </Box>
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={handleLogout}
            sx={{
              py: 2,
              px: 4,
              color: "text.secondary",
              "& svg": { mr: 2, fontSize: "1.25rem", color: "text.secondary" },
            }}
          >
            <PowerSettingsNewIcon />
            Sign Out
          </MenuItem>
        </Menu>
      </Fragment>
    </ThemeProvider>
  );
};

export default UserAcct;
