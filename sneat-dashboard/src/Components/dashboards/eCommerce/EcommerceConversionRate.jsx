// ** MUI Import
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Icons Imports
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// ** Custom Components Imports
import OptionsMenu from "../../apps/OptionsMenu";
import ReactApexcharts from "react-apexcharts";
import {
  ConversionRateSeries,
  ConversionRateData,
} from "../../../assets/data/DashboardEcommerce_data";

const data = ConversionRateData;
const series = ConversionRateSeries;

const EcommerceConversionRate = () => {
  // ** Hooks
  const theme = useTheme();

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 8,
        blur: 3,
        left: 3,
        enabled: true,
        opacity: 0.14,
        color: "rgb(105, 108, 255)",
      },
    },
    grid: {
      show: false,
      padding: {
        top: -21,
        left: -5,
        bottom: -8,
      },
    },
    tooltip: { enabled: false },
    colors: ["rgb(105, 108, 255)"],
    markers: {
      size: 6,
      offsetX: -2,
      offsetY: -1,
      strokeWidth: 5,
      strokeOpacity: 1,
      colors: ["transparent"],
      strokeColors: "transparent",
      discrete: [
        {
          size: 7,
          seriesIndex: 0,
          strokeColor: "rgb(105, 108, 255)",
          fillColor: theme.palette.background.paper,
          dataPointIndex: series[0].data.length - 1,
        },
      ],
    },
    stroke: {
      width: 5,
      curve: "smooth",
      lineCap: "round",
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      labels: { show: false },
    },
  };

  return (
    <Card>
      <CardHeader
        // sx={{ pb: 2 }}
        title="Conversion Rate"
        titleTypographyProps={{
          sx: { color: "rgba(50, 71, 92, 0.87)", fontSize: "1.25rem" },
        }}
        subheader="Compared To Last Month"
        subheaderTypographyProps={{
          sx: { color: "text.disabled", fontSize: "0.875rem" },
        }}
        action={
          <OptionsMenu
            iconButtonProps={{ size: "small" }}
            options={["Share", "Refresh", "Update"]}
          />
        }
      />
      <CardContent sx={{ pt: `${theme.spacing(0)} !important` }}>
        <Box
          sx={{
            mb: 3.25,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& svg": { color: "rgb(113, 221, 55)" },
            }}
          >
            <Typography
              variant="h4"
              sx={{ mr: 1, color: "rgba(50, 71, 92, 0.87)" }}
            >
              8.72%
            </Typography>
            <KeyboardArrowUpIcon />
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, color: "rgb(113, 221, 55)" }}
            >
              4.8%
            </Typography>
          </Box>
          <ReactApexcharts
            type="line"
            width={140}
            height={70}
            options={options}
            series={series}
          />
        </Box>
        {data.map((row, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              mb: index !== data.length - 1 ? 2 : undefined,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  mb: 0.25,
                  fontWeight: 500,
                  color: "rgba(50, 71, 92, 0.87)",
                }}
              >
                {row.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.disabled" }}>
                {row.subtitle}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& svg": {
                  mr: 1.5,
                  color:
                    row.change === "positive"
                      ? "rgb(113, 221, 55)"
                      : "rgb(255, 62, 29)",
                },
              }}
            >
              {row.change === "positive" ? (
                <ArrowUpwardIcon />
              ) : (
                <ArrowDownwardIcon />
              )}
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, color: "rgba(50, 71, 92, 0.6)" }}
              >
                {`${row.change === "negative" ? "-" : ""}${row.changePercent}%`}
              </Typography>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default EcommerceConversionRate;
