import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  InputBase,
  Modal,
  Paper,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  CssBaseline,
  Button,
  Backdrop,
  createTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TranslateIcon from "@mui/icons-material/Translate";
import NightsStayIcon from "@mui/icons-material/BedtimeOutlined";
import AppsIcon from "@mui/icons-material/WidgetsOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AnalyticsIcon from "@mui/icons-material/BarChart";
import CRMIcon from "@mui/icons-material/AccountCircle";
import ECommerceIcon from "@mui/icons-material/ShoppingCart";
import UserListIcon from "@mui/icons-material/People";
import CalendarIcon from "@mui/icons-material/CalendarToday";
import InvoiceListIcon from "@mui/icons-material/Receipt";
import PricingIcon from "@mui/icons-material/AttachMoney";
import AccountSettingsIcon from "@mui/icons-material/Settings";
import TypographyIcon from "@mui/icons-material/TextFields";
import TabsIcon from "@mui/icons-material/Tab";
import ButtonsIcon from "@mui/icons-material/TouchApp";
import AdvancedCardsIcon from "@mui/icons-material/ViewCarousel";
import SelectIcon from "@mui/icons-material/List";
import AutocompleteIcon from "@mui/icons-material/Autorenew";
import TableIcon from "@mui/icons-material/TableChart";
import DatePickersIcon from "@mui/icons-material/DateRange";
import Translate from "./Translate";
import Shortcuts from "./Shortcuts";
import Notifications from "./Notifications";
import { ThemeProvider } from "@emotion/react";
import UserAcct from "./UserAcct";

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
  // overrides: {
  //   MuiAppBar: {
  //     root: {
  //       position: "sticky",
  //       top: 0,
  //     },
  //   },
  // },
  // MuiToolbar: {
  //   root: {
  //     position: "sticky",
  //     top: 0,
  //   },
  // },
});

const SearchModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SearchBox = styled(Paper)(({ theme }) => ({
  position: "absolute",
  width: "650px",
  height: "60%",
  padding: theme.spacing(2),
  outline: "none",
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const SearchField = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  backgroundColor: "#f1f3f4",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  paddingLeft: theme.spacing(3),
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1),
  },
}));

const Header = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto",
          width: "100%",
          position: "sticky",
          display: "absolute",
          top: 0,
          zIndex: 15,
          backgroundColor: "#f5f5f9",
        }}
      >
        <CssBaseline />
        <AppBar
          position="static"
          sx={{
            backgroundColor: "white",
            boxShadow: "none",
            borderBottom: "1px solid #e0e0e0",
            marginTop: "15px",
            borderRadius: 2.5,
          }}
        >
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 1,
                  padding: "2px 10px",
                  width: "100%",
                  // maxWidth: 800,
                }}
              >
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleOpen}
                >
                  <SearchIcon
                    sx={{ color: "gray", width: "30px", height: "30px" }}
                  />
                </IconButton>
                <StyledInputBase
                  placeholder="Search (Ctrl+/)"
                  inputProps={{ "aria-label": "search" }}
                  disabled
                  sx={{ width: "100%" }}
                />
              </Box>
            </Box>
            <IconButton sx={{ color: "gray", width: "50px" }}>
              {/* <TranslateIcon /> */}
              <Translate />
            </IconButton>
            <IconButton sx={{ color: "gray" }}>
              <NightsStayIcon />
            </IconButton>
            <IconButton sx={{ color: "gray", width: "50px" }}>
              {/* <AppsIcon /> */}
              <Shortcuts />
            </IconButton>
            <IconButton sx={{ color: "gray", width: "50px" }}>
              {/* <NotificationsIcon /> */}
              <Notifications />
            </IconButton>
            <IconButton disableRipple sx={{ color: "gray", width: "50px" }}>
              <UserAcct />
            </IconButton>
          </Toolbar>
        </AppBar>
        <SearchModal
          open={open}
          onClose={handleClose}
          aria-labelledby="search-modal-title"
          aria-describedby="search-modal-description"
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          sx={{}}
        >
          <SearchBox onClick={(e) => e.stopPropagation()}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <SearchField
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchQuery}
                onChange={handleSearchChange}
                startAdornment={<SearchIcon sx={{ marginRight: 1 }} />}
              />
              <Button
                sx={{ color: "rgba(50, 71, 92, 0.38)" }}
                onClick={handleClose}
              >
                [esc]
              </Button>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                padding: (theme) => theme.spacing(3),
              }}
            >
              <Box sx={{ width: 220, height: 200 }}>
                <Typography
                  variant="h7"
                  style={{ fontSize: 12, color: "lightgrey" }}
                >
                  POPULAR SEARCHES
                </Typography>
                <List>
                  <ListItem button sx={{ height: "35px" }}>
                    <ListItemIcon>
                      <AnalyticsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Analytics" />
                  </ListItem>
                  <ListItem button sx={{ height: "35px" }}>
                    <ListItemIcon>
                      <CRMIcon />
                    </ListItemIcon>
                    <ListItemText primary="CRM" />
                  </ListItem>
                  <ListItem button sx={{ height: "35px" }}>
                    <ListItemIcon>
                      <ECommerceIcon />
                    </ListItemIcon>
                    <ListItemText primary="eCommerce" />
                  </ListItem>
                  <ListItem button sx={{ height: "35px" }}>
                    <ListItemIcon>
                      <UserListIcon />
                    </ListItemIcon>
                    <ListItemText primary="User List" />
                  </ListItem>
                </List>
              </Box>
              <Box sx={{ width: 220, height: 200 }}>
                <Typography
                  variant="h7"
                  style={{ fontSize: 12, color: "lightgrey" }}
                >
                  APPS & PAGES
                </Typography>
                <List>
                  <ListItem button sx={{ height: "35px" }}>
                    <ListItemIcon>
                      <CalendarIcon />
                    </ListItemIcon>
                    <ListItemText primary="Calendar" />
                  </ListItem>
                  <ListItem button sx={{ height: "35px" }}>
                    <ListItemIcon>
                      <InvoiceListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Invoice List" />
                  </ListItem>
                  <ListItem button sx={{ height: "35px" }}>
                    <ListItemIcon>
                      <PricingIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pricing" />
                  </ListItem>
                  <ListItem button sx={{ height: "35px" }}>
                    <ListItemIcon>
                      <AccountSettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Account Settings" />
                  </ListItem>
                </List>
              </Box>
              <Box sx={{ width: 220, height: 200 }}>
                <Typography
                  variant="h7"
                  style={{ fontSize: 12, color: "lightgrey" }}
                >
                  USER INTERFACE
                </Typography>
                <List>
                  <ListItem button sx={{ height: "35px" }}>
                    <ListItemIcon>
                      <TypographyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Typography" />
                  </ListItem>
                  <ListItem button sx={{ height: "35px" }}>
                    <ListItemIcon>
                      <TabsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tabs" />
                  </ListItem>
                  <ListItem button sx={{ height: "35px" }}>
                    <ListItemIcon>
                      <ButtonsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Buttons" />
                  </ListItem>
                  <ListItem button sx={{ height: "35px" }}>
                    <ListItemIcon>
                      <AdvancedCardsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Advanced Cards" />
                  </ListItem>
                </List>
              </Box>
              <Box sx={{ width: 220, height: 200 }}>
                <Typography
                  variant="h7"
                  style={{ fontSize: 12, color: "lightgrey" }}
                >
                  FORMS & TABLES
                </Typography>
                <List>
                  <ListItem button sx={{ height: "35px" }}>
                    <ListItemIcon>
                      <SelectIcon />
                    </ListItemIcon>
                    <ListItemText primary="Select" />
                  </ListItem>
                  <ListItem button sx={{ height: "35px" }}>
                    <ListItemIcon>
                      <AutocompleteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Autocomplete" />
                  </ListItem>
                  <ListItem button sx={{ height: "35px" }}>
                    <ListItemIcon>
                      <TableIcon />
                    </ListItemIcon>
                    <ListItemText primary="Table" />
                  </ListItem>
                  <ListItem button sx={{ height: "35px" }}>
                    <ListItemIcon>
                      <DatePickersIcon />
                    </ListItemIcon>
                    <ListItemText primary="Date Pickers" />
                  </ListItem>
                </List>
              </Box>
            </Box>
          </SearchBox>
        </SearchModal>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
