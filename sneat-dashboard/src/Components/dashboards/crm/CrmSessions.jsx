// ** MUI Imports
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Custom Components Imports
import ReactApexcharts from "react-apexcharts";
import {
  SessionsSeries,
  Sessions,
} from "../../../assets/data/DashboardCRM_data";

const series = SessionsSeries;

const CrmSessions = () => {
  // ** Hook
  const theme = useTheme();

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 2,
      curve: "straight",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        top: -20,
        right: 16,
        bottom: 15,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityTo: 0.7,
        opacityFrom: 0.5,
        shadeIntensity: 1,
        stops: [0, 90, 100],
        colorStops: [
          [
            {
              offset: 0,
              opacity: 0.6,
              color: "rgb(255, 171, 0)",
            },
            {
              offset: 100,
              opacity: 0.1,
              color: theme.palette.background.paper,
            },
          ],
        ],
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: "light",
        shadeIntensity: 1,
        color: "rgb(255, 171, 0)",
      },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { show: false },
    markers: {
      size: 1,
      offsetY: 4,
      offsetX: -4,
      strokeWidth: 4,
      strokeOpacity: 1,
      colors: ["transparent"],
      strokeColors: "transparent",
      discrete: [
        {
          size: 6,
          seriesIndex: 0,
          fillColor: theme.palette.common.white,
          strokeColor: "rgb(255, 171, 0)",
          dataPointIndex: series[0].data.length - 1,
        },
      ],
    },
  };

  return (
    <Card>
      <CardContent
        sx={{ p: (theme) => `${theme.spacing(2, 3, 0)} !important` }}
      >
        <Typography sx={{ fontWeight: 600, color: "rgba(50, 71, 92, 0.6)" }}>
          Sessions
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "rgba(50, 71, 92, 0.87) !important",
          }}
        >
          {Sessions}
        </Typography>
      </CardContent>
      <ReactApexcharts
        type="area"
        height={110}
        options={options}
        series={series}
      />
    </Card>
  );
};

export default CrmSessions;
