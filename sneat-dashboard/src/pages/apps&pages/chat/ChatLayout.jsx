import React, { useEffect, useState } from "react";
import { Box, createTheme } from "@mui/material";
import { Group } from "@mui/icons-material";
import { ThemeProvider } from "@emotion/react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../../request";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ChatSidebar from "./ChatSidebar";
import ChatContent from "./ChatContent";

const customTheme = createTheme({
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

const getInitials = (string) => {
  if (!string) return ""; // 检查 string 是否为 undefined 或 null
  return string
    .split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), "");
};

export default function ChatLayout() {
  const location = useLocation();
  // ** States
  const [userStatus, setUserStatus] = useState("online");
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [userProfileLeftOpen, setUserProfileLeftOpen] = useState(false);
  const [userProfileRightOpen, setUserProfileRightOpen] = useState(false);
  const [chatsAll, setChatsAll] = useState([]);
  const [selectedChat, setSelectedChat] = useState();
  const [selectedChatContact, setSelectedChatContact] = useState();

  // ** Hooks
  const theme = useTheme();
  const hidden = useMediaQuery(theme.breakpoints.down("lg"));

  // ** Vars

  const mdAbove = useMediaQuery(theme.breakpoints.up("md"));
  const smAbove = useMediaQuery(theme.breakpoints.up("sm"));

  const isToday = (date) => {
    const today = new Date();

    return (
      new Date(date).getDate() === today.getDate() &&
      new Date(date).getMonth() === today.getMonth() &&
      new Date(date).getFullYear() === today.getFullYear()
    );
  };
  const formatDateToMonthShort = (value, toTimeForCurrentDay = true) => {
    const date = new Date(value);
    let formatting = { month: "short", day: "numeric" };
    if (toTimeForCurrentDay && isToday(date)) {
      formatting = { hour: "numeric", minute: "numeric" };
    }

    return new Intl.DateTimeFormat("en-US", formatting).format(new Date(value));
  };

  const statusObj = {
    busy: "rgb(255, 62, 29)",
    away: "rgb(255, 171, 0)",
    online: "rgb(113, 221, 55)",
    offline: "rgb(133, 146, 163)",
  };
  const sidebarWidth = smAbove ? 370 : 300;

  useEffect(() => {
    // console.log("useEffect executed");
    axiosInstance
      .get("/chats")
      .then((res) => {
        // console.log(res.data);
        setChatsAll(res.data[0]);
      })
      .catch((err) => {
        console.error("Error: ", err.message);
      });
  }, [location.pathname]);
  console.log(chatsAll);

  const handleLeftSidebarToggle = () => setLeftSidebarOpen(!leftSidebarOpen);
  const handleUserProfileLeftSidebarToggle = () =>
    setUserProfileLeftOpen(!userProfileLeftOpen);
  const handleUserProfileRightSidebarToggle = () =>
    setUserProfileRightOpen(!userProfileRightOpen);

  if (typeof window !== "undefined") {
    const resizeObserverErr = (e) => {
      if (
        e.message ===
        "ResizeObserver loop completed with undelivered notifications."
      ) {
        e.stopImmediatePropagation();
      }
    };
    window.addEventListener("error", resizeObserverErr);
    window.addEventListener("unhandledrejection", resizeObserverErr);
  }

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexGrow: 1,
          borderRadius: "6px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "rgba(50, 71, 92, 0.1) 0px 2px 10px 0px",
          // padding: "1.5rem",
          height: "840px",
        }}
      >
        <ChatSidebar
          hidden={hidden}
          mdAbove={mdAbove}
          sidebarWidth={sidebarWidth}
          getInitials={getInitials}
          statusObj={statusObj}
          userStatus={userStatus}
          setUserStatus={setUserStatus}
          leftSidebarOpen={leftSidebarOpen}
          userProfileLeftOpen={userProfileLeftOpen}
          handleLeftSidebarToggle={handleLeftSidebarToggle}
          handleUserProfileLeftSidebarToggle={
            handleUserProfileLeftSidebarToggle
          }
          chatsAll={chatsAll}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
          selectedChatContact={selectedChatContact}
          setSelectedChatContact={setSelectedChatContact}
          formatDateToMonthShort={formatDateToMonthShort}
        />
        <ChatContent
          hidden={hidden}
          mdAbove={mdAbove}
          statusObj={statusObj}
          getInitials={getInitials}
          sidebarWidth={sidebarWidth}
          userProfileRightOpen={userProfileRightOpen}
          handleLeftSidebarToggle={handleLeftSidebarToggle}
          handleUserProfileRightSidebarToggle={
            handleUserProfileRightSidebarToggle
          }
          chatsAll={chatsAll}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
          selectedChatContact={selectedChatContact}
          setSelectedChatContact={setSelectedChatContact}
        />
      </Box>
    </ThemeProvider>
  );
}
ChatLayout.contentHeightFixed = true;
