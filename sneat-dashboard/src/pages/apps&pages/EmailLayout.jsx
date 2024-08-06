import React, { useEffect, useState } from "react";
import EmailLogs from "./EmailLogs";
import EmailCompose from "./EmailCompose";
import EmailSidebar from "./EmailSidebar";
import { Box, createTheme } from "@mui/material";
import { Group } from "@mui/icons-material";
import { ThemeProvider } from "@emotion/react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../request";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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

export default function EmailLayout() {
  const location = useLocation();
  // ** States
  const [emails, setEmails] = useState([]);
  const [allEmails, setAllEmails] = useState();
  const [mailDetailsOpen, setMailDetailsOpen] = useState(false);
  const [composeOpen, setComposeOpen] = useState(false);

  // ** Hooks
  const theme = useTheme();
  const lgAbove = useMediaQuery(theme.breakpoints.up("lg"));
  const mdAbove = useMediaQuery(theme.breakpoints.up("md"));
  const smAbove = useMediaQuery(theme.breakpoints.up("sm"));

  // ** Vars
  const composePopupWidth = mdAbove ? 780 : smAbove ? 520 : "100%";
  const toggleComposeOpen = () => setComposeOpen(!composeOpen);

  const pathToEmails = () => {
    const parts = location.pathname.split("/");
    let lastPart = parts[parts.length - 1];
    let secondLastPart = parts[parts.length - 2];
    if (lastPart === "email") {
      lastPart = "inbox";
    }
    console.log(lastPart, secondLastPart);
    if (secondLastPart === "label") {
      axiosInstance
        .get(`/label/${lastPart}`)
        .then((res) => {
          console.log(res.data);
          setEmails(res.data);
        })
        .catch((err) => {
          console.error("Error: ", err.message);
        });
    } else {
      console.log(lastPart);
      axiosInstance
        .get(`folder/${lastPart}`)
        .then((res) => {
          console.log(res.data);
          setEmails(res.data);
        })
        .catch((err) => {
          console.error("Error: ", err.message);
        });
    }
  };
  useEffect(() => {
    console.log("useEffect executed");

    // const resetDatabase = async () => {
    //   try {
    //     const response = await axiosInstance.get("/reset");
    //     console.log(response.data.message);
    //   } catch (error) {
    //     console.error("Error resetting database:", error.message);
    //   }
    // };
    // resetDatabase();

    axiosInstance
      .get("/")
      .then((res) => {
        console.log(res.data);
        setAllEmails(res.data);
      })
      .catch((err) => {
        console.error("Error: ", err.message);
      });
    pathToEmails();
  }, [location.pathname]);

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
        <EmailSidebar
          emails={emails}
          allEmails={allEmails}
          setAllEmails={setAllEmails}
          mailDetailsOpen={mailDetailsOpen}
          setMailDetailsOpen={setMailDetailsOpen}
          pathToEmails={pathToEmails}
          toggleComposeOpen={toggleComposeOpen}
        />
        <EmailLogs
          lgAbove={lgAbove}
          emails={emails}
          allEmails={allEmails}
          setAllEmails={setAllEmails}
          pathToEmails={pathToEmails}
          mailDetailsOpen={mailDetailsOpen}
          setMailDetailsOpen={setMailDetailsOpen}
        />

        <EmailCompose
          mdAbove={mdAbove}
          composeOpen={composeOpen}
          toggleComposeOpen={toggleComposeOpen}
          composePopupWidth={composePopupWidth}
        />
      </Box>
    </ThemeProvider>
  );
}
