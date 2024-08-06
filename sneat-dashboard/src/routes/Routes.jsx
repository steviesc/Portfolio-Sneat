import { Route } from "@mui/icons-material";
import React from "react";
import Dashboard_Analytics from "../pages/dashboard/Dashboard_Analytics";
import { Navigate } from "react-router-dom";
import NotFound from "./NotFound";
import { Outlet } from "react-router-dom";
import Dashboard_CRM from "../pages/dashboard/Dashboard_CRM";
import Dashboard_Ecommerce from "../pages/dashboard/Dashboard_Ecommerce";
import EmailLayout from "../pages/apps&pages/EmailLayout";
import EmailLogs from "../pages/apps&pages/EmailLogs";
import ChatLayout from "../pages/apps&pages/chat/ChatLayout";
// import Email from "../pages/apps&pages/EmailView";

export default [
  {
    path: "/",
    element: <Navigate to={{ pathname: "/login" }} />,
  },
  {
    path: "/dashboards/analytics",
    element: <Dashboard_Analytics />,
  },
  {
    path: "/dashboards/crm",
    element: <Dashboard_CRM />,
  },
  {
    path: "/dashboards/ecommerce",
    element: <Dashboard_Ecommerce />,
  },
  {
    path: "/apps/email",
    element: <EmailLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="inbox" />, // Redirect to /apps/email/inbox
      },
      {
        path: ":folder",
        element: <EmailLayout />,
      },
      {
        path: "label/:label",
        element: <EmailLogs />,
      },
    ],
  },
  { path: "/apps/chat", element: <ChatLayout /> },
  { path: "*", element: <NotFound /> },
];
