import NotificationsIcon from "@mui/icons-material/NotificationsNoneOutlined";
import * as React from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Popover,
  Typography,
  Box,
  Divider,
} from "@mui/material";

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

const notifications = [
  {
    avatar: "https://via.placeholder.com/40", // Replace with actual avatar URL
    title: "Congratulation Flora! 🎉",
    subtitle: "Won the monthly best seller badge",
    time: "Today",
  },
  {
    avatar: "RA",
    title: "New user registered.",
    subtitle: "5 hours ago",
    time: "Yesterday",
  },
  {
    avatar: "https://via.placeholder.com/40", // Replace with actual avatar URL
    title: "New message received 👋🏻",
    subtitle: "You have 10 unread messages",
    time: "11 Aug",
  },
  {
    avatar: "https://via.placeholder.com/40", // Replace with actual avatar URL
    title: "Paypal",
    subtitle: "Received Payment",
    time: "25 May",
  },
  {
    avatar: "https://via.placeholder.com/40", // Replace with actual avatar URL
    title: "Received Order 📦",
    subtitle: "New order received from John",
    time: "19 Mar",
  },
];

const NotificationItem = ({ avatar, title, subtitle, time }) => {
  return (
    <Box>
      <Grid container spacing={2} alignItems="center" sx={{ padding: 2 }}>
        <Grid item>
          {avatar.startsWith("http") ? (
            <Avatar src={avatar} />
          ) : (
            <Avatar>{avatar}</Avatar>
          )}
        </Grid>
        <Grid item xs>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {subtitle}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="textSecondary">
            {time}
          </Typography>
        </Grid>
        <Divider />
      </Grid>
    </Box>
  );
};

export default function Notifications() {
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
          id="notification-button"
          aria-describedby={open ? "notification-popover" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          disableRipple
          sx={{
            color: "gray",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <NotificationsIcon />
        </Button>
        <Popover
          id="notification-popover"
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
          <Card sx={{ width: 450 }}>
            <CardContent>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6" color="rgba(50, 71, 92, 0.87)">
                  Notifications
                </Typography>

                <Typography
                  variant="body2"
                  color="rgb(105, 108, 255)"
                  borderRadius="4px"
                  backgroundColor="rgba(105, 108, 255, 0.16)"
                  width="60px"
                  height="25px"
                  lineHeight="25px"
                  textAlign="center"
                  fontSize="12px"
                >
                  6 NEW
                </Typography>
              </Grid>
              <Divider sx={{ marginY: 1 }} />
              <Box sx={{ maxHeight: 400, overflowY: "auto" }}>
                
                {notifications.map((notification, index) => (
                  <React.Fragment key={index}>
                    <NotificationItem {...notification} />
               
                    <Divider />
                  </React.Fragment>
                ))}
              </Box>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  marginTop: 2,
                  backgroundColor: "rgb(105, 108, 255)",
                  "&:hover": {
                    backgroundColor: "rgb(105, 108, 255)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                READ ALL NOTIFICATIONS
              </Button>
            </CardContent>
          </Card>
        </Popover>
      </div>
    </ThemeProvider>
  );
}
