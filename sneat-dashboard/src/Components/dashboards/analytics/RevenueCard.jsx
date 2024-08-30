// ** MUI Imports
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import ReactApexcharts from "react-apexcharts";
import { Box } from "@mui/material";
import {
  RevenueSeries,
  RevenueData,
} from "../../../assets/data/DashboardAnalytics_data";

const RevenueCard = () => {
  // ** Hook
  const theme = useTheme();

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        distributed: true,
        columnWidth: "75%",
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [
      "rgba(105, 108, 255, 0.16)",
      "rgba(105, 108, 255, 0.16)",
      "rgba(105, 108, 255, 0.16)",
      "rgba(105, 108, 255, 0.16)",
      "rgba(105, 108, 255, 0.85)",
      "rgba(105, 108, 255, 0.16)",
      "rgba(105, 108, 255, 0.16)",
    ],
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    xaxis: {
      categories: ["M", "T", "W", "T", "F", "S", "S"],
      axisTicks: { show: false },
      axisBorder: { show: false },
      tickPlacement: "on",
      labels: {
        style: {
          fontSize: "14px",
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
        },
      },
    },
    yaxis: { show: false },
    grid: {
      show: false,
      padding: {
        left: 0,
        top: -20,
        right: -10,
        bottom: -3,
      },
    },
  };

  return (
    <Box>
      <CardContent sx={{ padding: "3px" }}>
        <Typography
          sx={{
            fontWeight: 600,
            color: "rgba(50, 71, 92, 0.6)",
            textAlign: "left",
          }}
        >
          Revenue
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            color: "rgba(50, 71, 92, 0.87)",
            textAlign: "left",
          }}
        >
          {RevenueData.revenue}k
        </Typography>
      </CardContent>
      <ReactApexcharts
        type="bar"
        height={100}
        width="100%"
        options={options}
        series={RevenueSeries}
        padding="0px"
      />
    </Box>
  );
};

export default RevenueCard;
