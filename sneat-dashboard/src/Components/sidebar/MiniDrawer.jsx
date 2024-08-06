import * as React from "react";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import ChatIcon from "@mui/icons-material/Chat";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PeopleIcon from "@mui/icons-material/People";
import SecurityIcon from "@mui/icons-material/Security";
import PagesIcon from "@mui/icons-material/Pages";
import LockIcon from "@mui/icons-material/Lock";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import ForumIcon from "@mui/icons-material/Forum";
import sneatIcon from "../.././assets/sneat logo.png";
import { useLocation, useNavigate } from "react-router-dom";

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

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SidebarItems = [
  {
    text: "Dashboards",
    icon: <HomeIcon />,
    subItems: [
      { text: "Analytics", dot: true, path: "/dashboards/analytics" },
      { text: "CRM", dot: true, path: "/dashboards/crm" },
      { text: "eCommerce", dot: true, path: "/dashboards/ecommerce" },
    ],
  },
  { text: "Email", icon: <EmailIcon />, path: "/apps/email" },
  { text: "Chat", icon: <ChatIcon />, path: "/apps/chat" },
  { text: "Calendar", icon: <CalendarTodayIcon /> },
  { text: "Invoice", icon: <ReceiptIcon /> },
  { text: "User", icon: <PeopleIcon /> },
  { text: "Roles & Permissions", icon: <SecurityIcon /> },
  { text: "Pages", icon: <PagesIcon /> },
  { text: "Auth Pages", icon: <LockIcon /> },
  { text: "Wizard Examples", icon: <FormatListNumberedIcon /> },
  { text: "Dialog Examples", icon: <ForumIcon /> },
];

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const [fixedOpen, setFixedOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setFixedOpen(!fixedOpen);
    setOpen(!fixedOpen);
  };
  const handleNavigation = (path) => {
    if (path) navigate(path);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          fontFamily: `"Public Sans", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
        }}
      >
        <CssBaseline />
        <Drawer
          variant="permanent"
          open={open || fixedOpen}
          onMouseEnter={() => {
            if (!fixedOpen) setOpen(true);
          }}
          onMouseLeave={() => {
            if (!fixedOpen) setOpen(false);
          }}
        >
          <DrawerHeader>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "0 3px",
              }}
            >
              <img
                src={sneatIcon}
                alt="sneat icon"
                style={{ height: 44, marginRight: open ? 5 : 0 }}
              />
              {(open || fixedOpen) && (
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "rgba(50, 71, 92, 0.87)",
                    marginRight: 8,
                  }}
                >
                  sneat
                </Typography>
              )}
            </Box>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                width: "35px",
                height: "35px",
                backgroundColor: "rgb(105, 108, 255)",
                color: "white",
                borderRadius: "50%",
                margin: "10px",
              }}
            >
              {fixedOpen ? (
                theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )
              ) : theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {SidebarItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem
                  disablePadding
                  sx={{
                    display: "block",
                    backgroundColor: location.pathname.includes(
                      `/${item.text.toLowerCase()}`
                    )
                      ? "rgba(105, 108, 255, 0.16)"
                      : null,
                  }}
                  onClick={() => handleNavigation(item.path)}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: location.pathname.includes(
                          `/${item.text.toLowerCase()}`
                        )
                          ? "rgb(105, 108, 255)"
                          : "rgba(50, 71, 92, 0.6)",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        opacity: open ? 1 : 0,
                        // color: "rgba(50, 71, 92, 0.6)",
                        color: location.pathname.includes(
                          `/${item.text.toLowerCase()}`
                        )
                          ? "rgb(105, 108, 255)"
                          : "rgba(50, 71, 92, 0.6)",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                {item.subItems && (open || fixedOpen) && (
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem, subIndex) => (
                      <ListItem
                        key={subIndex}
                        disablePadding
                        sx={{ display: "block", pl: 4 }}
                        onClick={() => handleNavigation(subItem.path)}
                      >
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                          }}
                        >
                          {subItem.dot && (
                            <Box
                              sx={{
                                width: 6,
                                height: 6,

                                backgroundColor:
                                  location.pathname === subItem.path
                                    ? "rgb(105, 108, 255)"
                                    : "rgba(50, 71, 92, 0.6)",
                                borderRadius: "50%",
                                marginRight: 2,
                                transform:
                                  location.pathname === subItem.path
                                    ? "scale(1.35)"
                                    : "none",
                                filter:
                                  location.pathname === subItem.path
                                    ? "drop-shadow(rgb(105, 108, 255) 0px 0px 2px)"
                                    : "none",
                              }}
                            />
                          )}

                          <ListItemText
                            primary={subItem.text}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              opacity: open ? 1 : 0,
                              color:
                                location.pathname === subItem.path
                                  ? "rgba(50, 71, 92, 0.87)"
                                  : "rgba(50, 71, 92, 0.6)",
                              fontWeight:
                                location.pathname === subItem.path ? 600 : 400,
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                )}
              </React.Fragment>
            ))}
          </List>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
