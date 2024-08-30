// ** MUI Imports
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Custom Components Imports
import ReactApexcharts from "react-apexcharts";
import { Box } from "@mui/material";
import { OrderSeries } from "../../../assets/data/DashboardAnalytics_data";

const OrderCard = () => {
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
      width: 3,
      curve: "smooth",
      lineCap: "round",
      colors: ["#71DD37"],
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        top: -25,
        right: 17,
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
              color: "#71DD37", // 更浅的绿色
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
        color: "#71DD37", // 浅绿色
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
      offsetY: 2,
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
          strokeColor: "#71DD37",
          dataPointIndex: OrderSeries[0].data.length - 1,
        },
      ],
    },
  };

  return (
    <Box>
      <CardContent
        sx={{ padding: "4px", marginBottom: "12px" }}
        // sx={{ p: (theme) => `${theme.spacing(3.5, 5, 0)} !important` }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            color: "rgba(50, 71, 92, 0.6)",
            textAlign: "left",
          }}
        >
          Order
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            color: "rgba(50, 71, 92, 0.87)",
            textAlign: "left",
          }}
        >
          276k
        </Typography>
      </CardContent>{" "}
      <ReactApexcharts
        type="area"
        height={90}
        width="100%"
        options={options}
        series={OrderSeries}
        // overflow="hidden"
      />
    </Box>
  );
};

export default OrderCard;
