// ** React Imports
import { useState } from "react";

// ** MUI Import
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

// ** Icons Imports
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// ** Custom Components Imports
import ReactApexcharts from "react-apexcharts";
import { SalesAnalyticsSeries } from "../../../assets/data/DashboardCRM_data";

const yearOptions = [
  new Date().getFullYear() - 1,
  new Date().getFullYear() - 2,
  new Date().getFullYear() - 3,
];

const series = SalesAnalyticsSeries;

const CrmSalesAnalytics = () => {
  // ** State
  const [anchorEl, setAnchorEl] = useState(null);

  // ** Hooks & Var
  const theme = useTheme();
  //   const { settings } = useSettings();
  //   const { direction } = settings;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = {
    chart: {
      offsetX: 3,
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    stroke: {
      width: 5,
      colors: [theme.palette.background.paper],
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: ["rgba(105, 108, 255, 0.6)"],
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    grid: {
      padding: {
        top: 5,
        right: 25,
        bottom: 3,
      },
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      crosshairs: {
        stroke: { color: "transparent" },
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
      labels: {
        style: {
          fontSize: "14px",
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
        },
      },
    },
    plotOptions: {
      heatmap: {
        radius: 6,
        enableShades: false,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 1000,
              name: "1K",
              color: "rgba(105, 108, 255, 0.2)",
            },
            {
              from: 1001,
              to: 2000,
              name: "2K",
              color: "rgba(105, 108, 255, 0.4)",
            },
            {
              from: 2001,
              to: 3000,
              name: "3K",
              color: "rgba(105, 108, 255, 0.6)",
            },
            {
              from: 3001,
              to: 4000,
              name: "4K",
              color: "rgb(105, 108, 255)",
            },
          ],
        },
      },
    },
  };

  return (
    <Card>
      <CardHeader
        title="Sales Analytics"
        subheader={
          <>
            <Box
              sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
            >
              {/* <CustomChip
                rounded
                size="small"
                skin="light"
                label="+42.6%"
                color="success"
                sx={{ mr: 1.5 }}
              /> */}
              <Typography sx={{ color: "text.secondary" }}>
                Than last year
              </Typography>
            </Box>
          </>
        }
        action={
          <>
            <Button
              size="small"
              variant="outlined"
              aria-haspopup="true"
              onClick={handleClick}
              sx={{ "& svg": { ml: 0.5 } }}
            >
              {new Date().getFullYear()}
              <ArrowDownwardIcon />
            </Button>
            <Menu
              keepMounted
              anchorEl={anchorEl}
              onClose={handleClose}
              open={Boolean(anchorEl)}
              anchorOrigin={{
                vertical: "bottom",
                // horizontal: direction === "ltr" ? "right" : "left",
              }}
              transformOrigin={{
                vertical: "top",
                // horizontal: direction === "ltr" ? "right" : "left",
              }}
            >
              {yearOptions.map((year) => (
                <MenuItem key={year} onClick={handleClose}>
                  {year}
                </MenuItem>
              ))}
            </Menu>
          </>
        }
      />
      <ReactApexcharts
        type="heatmap"
        height={370}
        options={options}
        series={series}
      />
    </Card>
  );
};

export default CrmSalesAnalytics;
