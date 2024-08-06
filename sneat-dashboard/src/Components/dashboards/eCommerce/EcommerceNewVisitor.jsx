// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { styled, useTheme } from "@mui/material/styles";

// ** Icons Imports
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// ** Custom Components Imports
import ReactApexcharts from "react-apexcharts";

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingBottom: theme.spacing(4),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  [theme.breakpoints.up("sm")]: {
    paddingRight: theme.spacing(5),
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const StyledGrid2 = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(4),
  },
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(5),
  },
}));

const EcommerceNewVisitor = () => {
  // ** Hook
  const theme = useTheme();

  const barOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 7,
        distributed: true,
        columnWidth: "42%",
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
      "rgba(105, 108, 255, 0.16)",
      "rgba(105, 108, 255,0.85)",
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
      categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
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
        top: -10,
        left: 0,
        right: -10,
        bottom: -9,
      },
    },
    responsive: [
      {
        breakpoint: 1050,
        options: {
          chart: { width: 150 },
        },
      },
      {
        breakpoint: 900,
        options: {
          chart: { width: 190 },
        },
      },
      {
        breakpoint: 700,
        options: {
          chart: { width: 150 },
        },
      },
      {
        breakpoint: 370,
        options: {
          chart: { width: 170 },
        },
      },
    ],
  };

  const areaOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 2,
      curve: "smooth",
    },
    grid: {
      show: false,
      padding: {
        top: -10,
        bottom: -9,
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
              color: "rgb(113, 221, 55)",
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
        color: "rgb(113, 221, 55)",
      },
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
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
        breakpoint: 1050,
        options: {
          chart: { width: 150 },
        },
      },
      {
        breakpoint: 900,
        options: {
          chart: { width: 190 },
        },
      },
      {
        breakpoint: 700,
        options: {
          chart: { width: 150 },
        },
      },
      {
        breakpoint: 370,
        options: {
          chart: { width: 170 },
        },
      },
    ],
  };

  return (
    <Card>
      <CardContent sx={{ p: `${theme.spacing(2, 2.5)} !important` }}>
        <Grid container>
          <StyledGrid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" sx={{ color: "rgba(50, 71, 92, 0.87)" }}>
                New Visitors
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(50, 71, 92, 0.6)" }}
              >
                Last Week
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ mr: 2, display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h4"
                  sx={{ mb: 2, color: "rgba(50, 71, 92, 0.87)" }}
                >
                  23%
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& svg": { mr: 1, color: "rgb(255, 62, 29)" },
                  }}
                >
                  <ArrowDownwardIcon />
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, color: "rgb(255, 62, 29)" }}
                  >
                    8.75%
                  </Typography>
                </Box>
              </Box>
              <ReactApexcharts
                type="bar"
                width={190}
                height={140}
                options={barOptions}
                series={[{ data: [20, 60, 53, 25, 42, 86, 55] }]}
              />
            </Box>
          </StyledGrid>
          <StyledGrid2
            item
            xs={12}
            sm={6}
            sx={{ paddingLeft: "20px !Important" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" sx={{ color: "rgba(50, 71, 92, 0.87)" }}>
                Activity
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(50, 71, 92, 0.6)" }}
              >
                Last Week
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ mr: 2, display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h4"
                  sx={{ mb: 2, color: "rgba(50, 71, 92, 0.87)" }}
                >
                  82%
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& svg": { mr: 1, color: "rgb(113, 221, 55)" },
                  }}
                >
                  <ArrowUpwardIcon />
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, color: "rgb(113, 221, 55)" }}
                  >
                    19.6%
                  </Typography>
                </Box>
              </Box>
              <ReactApexcharts
                type="area"
                width={190}
                height={140}
                options={areaOptions}
                series={[{ data: [14, 22, 17, 40, 12, 35, 25] }]}
              />
            </Box>
          </StyledGrid2>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EcommerceNewVisitor;
