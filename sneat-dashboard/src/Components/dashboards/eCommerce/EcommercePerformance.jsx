// ** MUI Import
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Custom Components Imports
import OptionsMenu from "../../apps/OptionsMenu";
import ReactApexcharts from "react-apexcharts";
import {
  PerformanceSeries,
  PerformanceData,
} from "../../../assets/data/DashboardEcommerce_data";

const series = PerformanceSeries;

const EcommercePerformance = () => {
  // ** Hook
  const theme = useTheme();

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 0,
        blur: 6,
        left: 0,
        opacity: 0.14,
        enabled: true,
        color: theme.palette.common.black,
      },
    },
    markers: { size: 0, color: "rgba(50, 71, 92, 0.6)" },
    stroke: { show: false },
    fill: { opacity: [1, 0.85] },
    colors: ["rgb(105, 108, 255)", "rgba(3, 195, 236,0.85)"],
    legend: {
      show: true,
      fontSize: "14px",
      markers: { offsetX: -5 },
      itemMargin: { horizontal: 15 },
      fontFamily: theme.typography.fontFamily,
      labels: { color: "rgba(50, 71, 92, 0.6)" },
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: theme.palette.divider,
          connectorColors: theme.palette.divider,
        },
      },
    },
    yaxis: { show: false },
    grid: {
      show: false,
      padding: {
        bottom: -10,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        style: {
          fontSize: "14px",
          fontFamily: theme.typography.fontFamily,
          colors: [
            theme.palette.text.disabled,
            theme.palette.text.disabled,
            theme.palette.text.disabled,
            theme.palette.text.disabled,
            theme.palette.text.disabled,
            theme.palette.text.disabled,
          ],
        },
      },
    },
  };

  return (
    <Card>
      <CardHeader
        title="Performance"
        action={
          <OptionsMenu
            iconButtonProps={{ size: "small" }}
            options={["Last Week", "Last Month", "Last Year"]}
          />
        }
        titleTypographyProps={{
          color: "rgba(50, 71, 92, 0.87)",
          fontSize: "1.25rem",
        }}
      />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <Typography variant="body2" sx={{ color: "rgba(50, 71, 92, 0.6)" }}>
              <Box component="span" sx={{ mr: 1.5 }}>
                Earning:
              </Box>
              <Box
                component="span"
                sx={{ fontWeight: 500, display: "inline-block" }}
              >
                ${PerformanceData.earning}
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" sx={{ color: "rgba(50, 71, 92, 0.6)" }}>
              <Box component="span" sx={{ mr: 1.5 }}>
                Sales:
              </Box>
              <Box
                component="span"
                sx={{ fontWeight: 500, display: "inline-block" }}
              >
                {PerformanceData.sales}M
              </Box>
            </Typography>
          </Grid>
        </Grid>
        <ReactApexcharts
          options={options}
          series={series}
          type="radar"
          height={313}
        />
      </CardContent>
    </Card>
  );
};

export default EcommercePerformance;
