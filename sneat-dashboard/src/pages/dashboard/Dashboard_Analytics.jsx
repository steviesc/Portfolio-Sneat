import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Select,
  MenuItem,
  Paper,
  styled,
  Divider,
  createTheme,
} from "@mui/material";
import RevenueChart from "../../Components/dashboards/analytics/RevenueChart"; // 确保这个组件已经实现
import CongratulationsCard from "../../Components/dashboards/analytics/CongratulationsCard";
import { ThemeProvider } from "@emotion/react";
import OrderCard from "../../Components/dashboards/analytics/OrderCard";
import SalesCard from "../../Components/dashboards/analytics/SalesCard";
import PaymentsCard from "../../Components/dashboards/analytics/PaymentsCard";
import RevenueCard from "../../Components/dashboards/analytics/RevenueCard";
import ProfitReportCard from "../../Components/dashboards/analytics/ProfitReportCard";
import TotalRevenueCard from "../../Components/dashboards/analytics/TotalRevenueCard";
import OrderStatistics from "../../Components/dashboards/analytics/OrderStatistics";
import IncomeStatistics from "../../Components/dashboards/analytics/IncomeStatistics";
import Transactions from "../../Components/dashboards/analytics/Transactions";

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
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textAlign: "left",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textAlign: "left",
        },
      },
    },
  },
});
const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
  // borderRadius: theme.shape.borderRadius,
  height: "100%",
  borderRadius: "8px",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  // borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  height: "100%",
  borderRadius: "8px",
}));

export default function Dashboard_Analytics() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3}>
        {/* Congratulations John! */}
        <Grid item xs={12} md={8}>
          <StyledCard>
            <CongratulationsCard />
          </StyledCard>
        </Grid>

        {/* Orders, Sales, Revenue, Payments */}
        <Grid item xs={12} sm={2} md={2} sx={{ height: "210px" }}>
          <StyledPaper>
            <OrderCard />
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={2} md={2} sx={{ height: "210px" }}>
          <StyledPaper>
            <SalesCard />
          </StyledPaper>
        </Grid>
        {/* Total Revenue Chart and Growth Info */}
        <Grid item xs={12} md={8} sx={{ height: "412px" }}>
          <StyledCard>
            <CardContent>
              <Grid container sx={{ display: "inline-block" }}>
                <TotalRevenueCard />
              </Grid>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Revenue, Payments and Profit Report */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} sx={{ height: "206px" }}>
              <StyledPaper>
                <RevenueCard />
              </StyledPaper>
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ height: "206px" }}>
              <StyledPaper>
                <PaymentsCard />
              </StyledPaper>
            </Grid>
            <Grid item xs={12} md={12} sx={{ height: "206px" }}>
              <StyledPaper>
                <ProfitReportCard />
              </StyledPaper>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{ height: "520px", marginBottom: "30px" }}
        >
          <StyledCard>
            <OrderStatistics />
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={4} sx={{ height: "520px" }}>
          <StyledCard>
            <IncomeStatistics />
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={4} sx={{ height: "520px" }}>
          {/* <StyledCard> */}
          <Transactions />
          {/* </StyledCard> */}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
