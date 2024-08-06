import AppsIcon from "@mui/icons-material/WidgetsOutlined";
import * as React from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PeopleIcon from "@mui/icons-material/People";
import SecurityIcon from "@mui/icons-material/Security";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import { createTheme, Divider } from "@mui/material";
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

const ShortcutCard = () => {
  return (
    <Card sx={{ width: 450, padding: 2 }}>
      <CardContent sx={{ padding: "0px" }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Typography variant="h6" color="rgba(50, 71, 92, 0.6)">
            Shortcuts
          </Typography>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Grid>
        <Divider sx={{ marginY: 1 }} />
        <Grid container spacing={2} sx={{ marginTop: "0px" }}>
          <Grid item xs={6}>
            <ShortcutItem
              icon={<CalendarTodayIcon />}
              title="Calendar"
              subtitle="Appointments"
            />
          </Grid>
          <Grid item xs={6}>
            <ShortcutItem
              icon={<ReceiptIcon />}
              title="Invoice App"
              subtitle="Manage Accounts"
            />
          </Grid>
          <Grid item xs={6}>
            <ShortcutItem
              icon={<PeopleIcon />}
              title="Users"
              subtitle="Manage Users"
            />
          </Grid>
          <Grid item xs={6}>
            <ShortcutItem
              icon={<SecurityIcon />}
              title="Role Management"
              subtitle="Permissions"
            />
          </Grid>
          <Grid item xs={6}>
            <ShortcutItem
              icon={<DashboardIcon />}
              title="Dashboard"
              subtitle="User Dashboard"
            />
          </Grid>
          <Grid item xs={6}>
            <ShortcutItem
              icon={<SettingsIcon />}
              title="Settings"
              subtitle="Account Settings"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const ShortcutItem = ({ icon, title, subtitle }) => {
  return (
    <Card
      sx={{
        padding: 2,
        textAlign: "center",
        boxShadow: "none",
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      }}
    >
      <IconButton size="large" disabled>
        {icon}
      </IconButton>
      <Typography variant="body1">{title}</Typography>
      <Typography variant="body2" color="textSecondary">
        {subtitle}
      </Typography>
    </Card>
  );
};

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
          aria-describedby={open ? "basic-popover" : undefined}
          aria-haspopup="true"
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
          <AppsIcon />
        </Button>
        <Popover
          id="basic-popover"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          sx={{ top: "20px" }}
        >
          <ShortcutCard />
        </Popover>
      </div>
    </ThemeProvider>
  );
}
