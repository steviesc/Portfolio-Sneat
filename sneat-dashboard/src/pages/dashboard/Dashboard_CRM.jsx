// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Demo Component Imports
import CrmOrderCard from "../../Components/dashboards/crm/CrmOrderCard";
// import CrmTable from "src/views/dashboards/crm/CrmTable";
import CrmSessions from "../../Components/dashboards/crm/CrmSessions";
// import CrmSalesStats from "src/views/dashboards/crm/CrmSalesStats";
import CrmTopProducts from "../../Components/dashboards/crm/CrmTopProducts";
// import CrmTeamMembers from "src/views/dashboards/crm/CrmTeamMembers";
import CrmSalesActivity from "../../Components/dashboards/crm/CrmSalesActivity";
import CrmEarningReport from "../../Components/dashboards/crm/CrmEarningReport";
import CrmCustomerRating from "../../Components/dashboards/crm/CrmCustomerRating";
import CrmGeneratedLeads from "../../Components/dashboards/crm/CrmGeneratedLeads";
import CrmSalesAnalytics from "../../Components/dashboards/crm/CrmSalesAnalytics";
// import CrmSalesByCountries from "src/views/dashboards/crm/CrmSalesByCountries";

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

const Dashboard_CRM = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApexChartWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <CrmCustomerRating />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CrmSalesActivity />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={6} md={3} lg={6}>
                <CrmSessions />
              </Grid>
              <Grid item xs={6} md={3} lg={6}>
                <CrmOrderCard />
              </Grid>
              <Grid item xs={12} md={6} lg={12}>
                <CrmGeneratedLeads />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={8}>
            <CrmTopProducts />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CrmEarningReport />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            {/* <CrmSalesAnalytics /> */}
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            {/* <CrmSalesByCountries /> */}
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            {/* <CrmSalesStats /> */}
          </Grid>
          <Grid item xs={12} md={5}>
            {/* <CrmTeamMembers /> */}
          </Grid>
          <Grid item xs={12} md={7}>
            {/* <CrmTable /> */}
          </Grid>
        </Grid>
      </ApexChartWrapper>
    </ThemeProvider>
  );
};

export default Dashboard_CRM;
