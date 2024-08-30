// ** MUI Imports
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Custom Components Imports
import ReactApexcharts from "react-apexcharts";
import {
  ProfitSeries,
  ProfitData,
} from "../../../assets/data/DashboardEcommerce_data";

const series = ProfitSeries;

const EcommerceProfit = () => {
  // ** Hook
  const theme = useTheme();

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    grid: {
      padding: {
        top: -22,
        left: -1,
        right: 0,
        bottom: -3,
      },
      yaxis: {
        lines: { show: false },
      },
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: ["rgb(113, 221, 55)", "rgba(113, 221, 55,0.2)"],
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: "58%",
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    stroke: {
      width: 2,
      colors: [theme.palette.background.paper],
    },
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ["Jan", "Apr", "Jul", "Oct"],
      labels: {
        style: {
          fontSize: "14px",
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
        },
      },
    },
    yaxis: {
      labels: { show: false },
    },
    responsive: [
      {
        breakpoint: 1250,
        options: {
          plotOptions: {
            bar: { columnWidth: "65%" },
          },
        },
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          plotOptions: {
            bar: { columnWidth: "45%" },
          },
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          plotOptions: {
            bar: { columnWidth: "30%" },
          },
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: { columnWidth: "50%" },
          },
        },
      },
    ],
  };

  return (
    <Card>
      <CardContent
        sx={{ p: (theme) => `${theme.spacing(2, 3, 0)} !important` }}
      >
        <Typography sx={{ fontWeight: 600, color: "rgba(50, 71, 92, 0.6)" }}>
          Profit
        </Typography>
        <Typography variant="h5" sx={{ color: "rgba(50, 71, 92, 0.87)" }}>
          {ProfitData.profit}k
        </Typography>
      </CardContent>
      <ReactApexcharts
        type="bar"
        height={110}
        options={options}
        series={series}
        width={190}
      />
    </Card>
  );
};

export default EcommerceProfit;
