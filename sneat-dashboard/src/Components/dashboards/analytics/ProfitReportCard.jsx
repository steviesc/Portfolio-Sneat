// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Icon Import
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// ** Component Imports
import {
  ProfitReportSeries,
  ProfitReportData,
} from "../../../assets/data/DashboardAnalytics_data";
import ReactApexcharts from "react-apexcharts";

const series = ProfitReportSeries;

const ProfitReportCard = () => {
  // ** Hook
  const theme = useTheme();

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 12,
        blur: 4,
        left: 0,
        enabled: true,
        opacity: 0.12,
        color: theme.palette.warning.main,
      },
    },
    tooltip: { enabled: false },
    colors: ["rgb(255, 171, 0)"],
    stroke: {
      width: 4,
      curve: "smooth",
      lineCap: "round",
    },
    grid: {
      show: false,
      padding: {
        top: -21,
        left: -5,
        bottom: -8,
      },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      labels: { show: false },
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          chart: {
            height: 151,
            width: "100%",
          },
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          chart: {
            height: 131,
            width: "100%",
          },
        },
      },
    ],
  };

  return (
    <Box>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          flexDirection: ["column", "row"],
          //   p: `${theme.spacing(4, 5, 3.25)} !important`,
          padding: "4px",
        }}
      >
        <Box
          sx={{
            gap: 2,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: ["row", "column"],
            marginRight: "10px",
          }}
        >
          <div>
            <Typography
              noWrap
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "rgba(50, 71, 92, 0.87)",
                textAlign: "left",
                fontSize: "1.25rem",
              }}
            >
              Profit Report
            </Typography>
            <Typography
              noWrap
              variant="h6"
              sx={{
                fontWeight: 500,
                color: "rgba(50, 71, 92, 0.87)",
                textAlign: "left",
                fontSize: "0.85rem",
                backgroundColor: "rgba(255, 171, 0, 0.16)",
                color: "rgb(255, 171, 0)",
                height: "28px",
                lineHeight: "28px",
                width: "90px",
                textAlign: "center",
                borderRadius: "4px",
                marginTop: "5px",
              }}
            >
              YEAR 2024
            </Typography>
            {/* <CustomChip
              rounded
              skin="light"
              color="warning"
              sx={{ fontWeight: 500 }}
              label={`Year ${new Date().getFullYear()}`}
            /> */}
          </div>
          <div>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "rgb(113, 221, 55)",
              }}
            >
              <KeyboardArrowUpIcon />
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  color: "rgb(113, 221, 55)",
                  fontSize: "0.875rem",
                }}
              >
                {ProfitReportData.percentage}%
              </Typography>
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontSize: "1.5rem",
                fontWeight: "500",
                color: "rgba(50, 71, 92, 0.87)",
              }}
            >
              ${ProfitReportData.profit.toLocaleString()}k
            </Typography>
          </div>
        </Box>
        <ReactApexcharts
          type="line"
          height={131}
          width="100%"
          options={options}
          series={series}
        />
      </CardContent>
    </Box>
  );
};

export default ProfitReportCard;
