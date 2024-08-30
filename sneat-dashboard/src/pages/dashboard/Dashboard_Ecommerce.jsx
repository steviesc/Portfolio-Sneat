// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Demo Component Imports
import EcommerceAward from "../../Components/dashboards/eCommerce/EcommerceAward";
import EcommerceProfit from "../../Components/dashboards/eCommerce/EcommerceProfit";
import EcommerceNewVisitor from "../../Components/dashboards/eCommerce/EcommerceNewVisitor";
import EcommerceTotalIncome from "../../Components/dashboards/eCommerce/EcommerceTotalIncome";
import EcommercePerformance from "../../Components/dashboards/eCommerce/EcommercePerformance";
import EcommerceSalesTarget from "../../Components/dashboards/eCommerce/EcommerceSalesTarget";
import EcommerceConversionRate from "../../Components/dashboards/eCommerce/EcommerceConversionRate";
import EcommerceExpensesRadialBar from "../../Components/dashboards/eCommerce/EcommerceExpenseRadialBar";
import CardTemplate from "../../Components/dashboards/CardTemplate";
import EcommerceExpensesBar from "../../Components/dashboards/eCommerce/EcommerceExpenseBar";

// ** Styled Component Import
import ApexChartWrapper from "../../Components/dashboards/ApexChartWrapper";
import { createTheme, ThemeProvider } from "@mui/material";

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

const Dashboard_Ecommerce = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApexChartWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <EcommerceAward />
          </Grid>
          <Grid item xs={12} md={8}>
            <EcommerceNewVisitor />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={6} md={3} lg={6}>
                <CardTemplate
                  title="Sales"
                  stats="$4,679"
                  trendNumber={28.14}
                  avatarSrc="	https://greakproject.vercel.app/images/cards/stats-vertical-wallet.png"
                />
              </Grid>
              <Grid item xs={6} md={3} lg={6}>
                <EcommerceProfit />
              </Grid>
              <Grid item xs={6} md={3} lg={6}>
                <EcommerceExpensesRadialBar />
              </Grid>
              <Grid item xs={6} md={3} lg={6}>
                <CardTemplate
                  stats="$14,854"
                  title="Transactions"
                  trendNumber={17.53}
                  avatarSrc="https://greakproject.vercel.app/images/cards/stats-vertical-card.png"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={8}>
            <EcommerceTotalIncome />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <EcommercePerformance />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <EcommerceConversionRate />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={6} md={3} lg={6}>
                <CardTemplate
                  stats="$42,389"
                  title="Revenue"
                  trendNumber={52.76}
                  avatarSrc="	https://greakproject.vercel.app/images/cards/stats-vertical-desktop.png"
                />
              </Grid>
              <Grid item xs={6} md={3} lg={6}>
                <EcommerceSalesTarget />
              </Grid>
              <Grid item xs={12} md={6} lg={12}>
                <EcommerceExpensesBar />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            {/* <EcommerceTable /> */}
          </Grid>
          <Grid item xs={12} md={4}>
            {/* <EcommerceTotalBalance /> */}
          </Grid>
        </Grid>
      </ApexChartWrapper>
    </ThemeProvider>
  );
};

export default Dashboard_Ecommerce;
