// ** React Imports
import { useState } from "react";

// ** MUI Import
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import TabPanel from "@mui/lab/TabPanel";
import Avatar from "@mui/material/Avatar";
import TabContext from "@mui/lab/TabContext";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { styled, useTheme } from "@mui/material/styles";
import MuiTabList from "@mui/lab/TabList";
import CircularProgress from "@mui/material/CircularProgress";

// ** Icons Imports
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// ** Custom Components Imports
import ReactApexcharts from "react-apexcharts";

const series = [{ data: [24, 21, 30, 22, 42, 26, 35, 29] }];

const data = {
  income: {
    difference: 39,
    title: "Income",
    stats: "$459.1k",
    trendNumber: 42.9,
    progressValue: 6.5,
    avatarSrc:
      "https://greakproject.vercel.app/images/cards/wallet-with-bg.png",
    series: [{ name: "Income", data: [24, 21, 30, 22, 42, 26, 35, 29] }],
  },
  expenses: {
    difference: 16,
    stats: "$316.5k",
    title: "Expenses",
    trend: "negative",
    trendNumber: 27.8,
    progressValue: 7.2,
    avatarSrc:
      "https://greakproject.vercel.app/images/cards/wallet-with-bg.png",
    series: [{ name: "Expenses", data: [24, 21, 30, 22, 42, 26, 35, 29] }],
  },
  profit: {
    difference: 28,
    title: "Profit",
    stats: "$147.9k",
    trendNumber: 35.1,
    progressValue: 4.2,
    avatarSrc: "https://greakproject.vercel.app/images/cards/chart.png",
    series: [{ name: "Profit", data: [24, 21, 30, 22, 42, 26, 35, 29] }],
  },
};

// Styled TabList component
const TabList = styled(MuiTabList)(({ theme }) => ({
  minHeight: 20,
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTab-root": {
    minHeight: 20,
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    borderRadius: theme.shape.borderRadius,
    "&.Mui-selected": {
      color: theme.palette.common.white,
      backgroundColor: "rgb(105, 108, 255)",
    },
  },
}));

const IncomeStatistics = () => {
  // ** State
  const [value, setValue] = useState("income");

  // ** Hook
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    grid: {
      strokeDashArray: 4.5,
      borderColor: theme.palette.divider,
      padding: {
        left: 0,
        top: -18,
        right: 11,
        bottom: 7,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityTo: 0.25,
        opacityFrom: 0.5,
        stops: [0, 95, 100],
        shadeIntensity: 0.6,
        colorStops: [
          [
            {
              offset: 0,
              opacity: 0.4,
              color: "rgb(105, 108, 255)",
            },
            {
              offset: 100,
              opacity: 0.2,
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
        color: "rgb(105, 108, 255)",
      },
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      crosshairs: {
        stroke: { color: `rgba(105, 108, 255, 0.2)` },
      },
      labels: {
        style: {
          fontSize: "14px",
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
        },
      },
    },
    yaxis: {
      min: 10,
      max: 50,
      show: false,
      tickAmount: 4,
    },
    markers: {
      size: 8,
      strokeWidth: 6,
      strokeOpacity: 1,
      hover: { size: 8 },
      colors: ["transparent"],
      strokeColors: "transparent",
      discrete: [
        {
          size: 8,
          seriesIndex: 0,
          fillColor: theme.palette.common.white,
          strokeColor: "rgb(105, 108, 255)",
          dataPointIndex: series[0].data.length - 1,
        },
      ],
    },
  };

  return (
    <Card>
      <TabContext value={value}>
        <CardContent
          sx={{
            p: `${theme.spacing(2)} !important`,
            borderBottom: `1px solid ${theme.palette.divider}`,
            color: "rgba(50, 71, 92, 0.87)",
          }}
        >
          <TabList
            variant="scrollable"
            scrollButtons="auto"
            onChange={handleChange}
            aria-label="tab widget card"
          >
            <Tab value="income" label="Income" />
            <Tab value="expenses" label="Expenses" />
            <Tab value="profit" label="Profit" />
          </TabList>
        </CardContent>
        <TabPanel
          value={value}
          sx={{
            border: 0,
            boxShadow: 0,
            p: "0 !important",
            backgroundColor: "transparent",
          }}
        >
          <Box sx={{ p: 2.5, display: "flex", alignItems: "center" }}>
            <Avatar
              variant="rounded"
              src={data[value].avatarSrc}
              sx={{ mr: 1.5, width: 46, height: 46 }}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{ color: "rgba(50, 71, 92, 0.6)" }}
              >{`Total ${data[value].title}`}</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& svg": { color: "rgb(113, 221, 55)" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ mr: 0.5, color: "rgba(50, 71, 92, 0.87)" }}
                >
                  {data[value].stats}
                </Typography>
                <KeyboardArrowUpIcon sx={{ color: "rgb(113, 221, 55)" }} />
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, color: "rgb(113, 221, 55)" }}
                >
                  {`${data[value].trendNumber}%`}
                </Typography>
              </Box>
            </Box>
          </Box>
          <ReactApexcharts
            type="area"
            height={222}
            options={options}
            series={series}
          />
          <Box
            sx={{
              p: 5,
              pt: 2.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ mr: 2, position: "relative" }}>
              <CircularProgress
                size={50}
                value={100}
                thickness={2}
                variant="determinate"
                sx={{
                  position: "absolute",
                  color: "rgba(50, 71, 92, 0.18)",
                  "& .MuiCircularProgress-circle": { strokeWidth: 2 },
                }}
              />
              <CircularProgress
                size={50}
                thickness={4}
                // color="primary"
                variant="determinate"
                value={data[value].progressValue * 10}
                sx={{
                  "& .MuiCircularProgress-circle": {
                    strokeWidth: 4,
                    strokeLinecap: "round",
                  },
                  color: "rgb(105, 108, 255)",
                }}
              />
              <Box
                sx={{
                  mt: -1,
                  top: "50%",
                  left: "50%",
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                  color: "rgba(50, 71, 92, 0.87)",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    color: "rgba(50, 71, 92, 0.87)",
                    marginTop: "8px",
                  }}
                >
                  {`${data[value].progressValue}k`}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{ color: "rgba(50, 71, 92, 0.6)" }}
              >{`${data[value].title} this week`}</Typography>
              <Typography variant="body2" sx={{ color: "text.disabled" }}>
                {`$${data[value].difference}k less than last week`}
              </Typography>
            </Box>
          </Box>
        </TabPanel>
      </TabContext>
    </Card>
  );
};

export default IncomeStatistics;
