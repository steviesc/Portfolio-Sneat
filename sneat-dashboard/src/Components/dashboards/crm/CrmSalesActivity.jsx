// ** MUI Import
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import ReactApexcharts from "react-apexcharts";
import { SalesActivitiesSeries } from "../../../assets/data/DashboardCRM_data";

const series = SalesActivitiesSeries;

const CrmSalesActivity = () => {
  // ** Hook
  const theme = useTheme();

  const options = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "52%",
        borderRadiusWhenStacked: "all",
        borderRadiusApplication: "around",
        barHeight: "85%",
      },
    },
    legend: { show: false },
    tooltip: {
      shared: false,
      x: {
        formatter: function (val) {
          return val;
        },
      },
      y: {
        formatter: function (val) {
          return Math.abs(val) + "%";
        },
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      width: 9,
      lineCap: "round",
      colors: [theme.palette.background.paper],
    },
    colors: ["rgb(255, 62, 29)", "rgb(133, 146, 163)"],
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    grid: {
      show: false,
      padding: {
        left: 8,
        top: -55,
        right: 6,
        bottom: 10,
      },
    },

    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      tickPlacement: "on",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      labels: {
        style: {
          fontSize: "14px",
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
        },
      },
    },
    yaxis: { show: false },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        options: {
          plotOptions: {
            bar: { columnWidth: "55%" },
          },
        },
      },
      {
        breakpoint: 1300,
        options: {
          plotOptions: {
            bar: { columnWidth: "56%" },
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
            bar: { columnWidth: "35%" },
          },
        },
      },
      {
        breakpoint: 700,
        options: {
          plotOptions: {
            bar: { columnWidth: "40%" },
          },
        },
      },
      {
        breakpoint: 550,
        options: {
          plotOptions: {
            bar: { columnWidth: "50%" },
          },
        },
      },
      {
        breakpoint: 400,
        options: {
          plotOptions: {
            bar: { columnWidth: "55%" },
          },
        },
      },
      {
        breakpoint: 375,
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
      <CardHeader
        title={
          <Typography
            sx={{
              color: "rgba(50, 71, 92, 0.87) !important",
              fontWeight: 500,
              fontSize: "1.2rem",
            }}
          >
            Overview & Sales Activity
          </Typography>
        }
        subheader="Check out each column for more details"
        subheaderTypographyProps={{
          sx: {
            mt: `${theme.spacing(1.5)} !important`,
            color: "rgba(50, 71, 92, 0.6)",
            fontSize: "0.9rem",
          },
        }}
      />
      <ReactApexcharts
        type="bar"
        height={315}
        options={options}
        series={series}
      />
    </Card>
  );
};

export default CrmSalesActivity;
