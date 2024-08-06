// ** React Imports
import { useState } from "react";

// ** MUI Import
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { styled, useTheme } from "@mui/material/styles";

// ** Icons Imports
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WalletIcon from "@mui/icons-material/Wallet";

// ** Components Imports
import MuiAvatar from "@mui/material/Avatar";
import ReactApexcharts from "react-apexcharts";

const yearOptions = [
  new Date().getFullYear() - 1,
  new Date().getFullYear() - 2,
  new Date().getFullYear() - 3,
];

const series = [
  { name: `${new Date().getFullYear() - 1}`, data: [18, 7, 15, 29, 18, 12, 9] },
  {
    name: `${new Date().getFullYear() - 2}`,
    data: [-13, -18, -9, -14, -5, -17, -15],
  },
];

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  [theme.breakpoints.up("sm")]: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const TotalRevenueCard = () => {
  // ** State
  const [anchorEl, setAnchorEl] = useState(null);

  // ** Hooks & Var
  const theme = useTheme();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const barOptions = {
    chart: {
      // type: "bar",
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    stroke: {
      width: 5,
      // lineCap: "round",
      colors: [theme.palette.background.paper],
    },
    colors: ["rgb(105, 108, 255)", "rgb(3, 195, 236)"],
    legend: {
      // offsetX: -10,
      position: "top",
      fontSize: "14px",
      horizontalAlign: "left",
      fontFamily: theme.typography.fontFamily,
      labels: {
        colors: theme.palette.text.secondary,
      },
      itemMargin: {
        // vertical: 4,
        horizontal: 10,
      },
      markers: {
        width: 10,
        height: 10,
        radius: 5,
        offsetX: -5,
      },
    },
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    grid: {
      borderColor: theme.palette.divider,
      padding: {
        bottom: 5,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: "40%",
        borderRadiusWhenStacked: "all",
        borderRadiusApplication: "around",
        barHeight: "80%",
      },
    },
    xaxis: {
      axisTicks: { show: false },
      crosshairs: { opacity: 0 },
      axisBorder: { show: false },
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      labels: {
        style: {
          fontSize: "14px",
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
        },
      },
    },
    yaxis: {
      stepSize: 10,
      labels: {
        style: {
          fontSize: "15px",
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
        },
      },
    },
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
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        options: {
          plotOptions: {
            bar: { columnWidth: "20px" },
          },
        },
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          plotOptions: {
            bar: { columnWidth: "20px" },
          },
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          plotOptions: {
            bar: { columnWidth: "20px" },
          },
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: { columnWidth: "20px" },
          },
        },
      },
    ],
  };

  const radialBarOptions = {
    chart: {
      sparkline: { enabled: true },
    },
    labels: ["Growth"],
    stroke: { dashArray: 5 },
    colors: ["rgb(105, 108, 255)"],
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityTo: 0.6,
        opacityFrom: 1,
        shadeIntensity: 0.5,
        stops: [30, 70, 100],
        inverseColors: false,
        gradientToColors: [theme.palette.primary.main],
      },
    },
    plotOptions: {
      radialBar: {
        endAngle: 150,
        startAngle: -140,
        hollow: { size: "55%" },
        track: { background: "transparent" },
        dataLabels: {
          name: {
            offsetY: 25,
            fontWeight: 600,
            fontSize: "16px",
            color: "rgba(50, 71, 92, 0.6)",
            fontFamily: theme.typography.fontFamily,
          },
          value: {
            offsetY: -15,
            fontWeight: 500,
            fontSize: "24px",
            color: "rgba(50, 71, 92, 0.87)",
            fontFamily: theme.typography.fontFamily,
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 900,
        options: {
          chart: { height: 200 },
        },
      },
      {
        breakpoint: 735,
        options: {
          chart: { height: 200 },
        },
      },
      {
        breakpoint: 660,
        options: {
          chart: { height: 200 },
        },
      },
      {
        breakpoint: 600,
        options: {
          chart: { height: 280 },
        },
      },
    ],
  };

  return (
    <Box>
      <Grid container>
        <StyledGrid
          item
          sm={7}
          xl={7}
          xs={12}
          sx={
            {
              // '& .apexcharts-series[rel="2"]': { transform: "translateY(-10px)" },
            }
          }
        >
          {/* <CardContent> */}
          <Typography
            variant="h6"
            sx={{ color: "rgba(50, 71, 92, 0.87)", padding: "5px" }}
          >
            Total Revenue
          </Typography>
          {/* </CardContent> */}
          <ReactApexcharts
            type="bar"
            height={300}
            width="92%"
            options={barOptions}
            series={series}
          />
        </StyledGrid>
        <Grid item xs={12} sm={5} xl={5}>
          <CardContent>
            <Box sx={{ textAlign: "center" }}>
              <Button
                size="small"
                variant="outlined"
                aria-haspopup="true"
                onClick={handleClick}
                sx={{
                  "& svg": { ml: 0.5 },
                  color: "rgb(105, 108, 255)",
                  border: "1px solid rgb(105, 108, 255)",
                }}
              >
                {new Date().getFullYear()}
                <ExpandMoreIcon />
              </Button>
              <Menu
                keepMounted
                anchorEl={anchorEl}
                onClose={handleClose}
                open={Boolean(anchorEl)}
              >
                {yearOptions.map((year) => (
                  <MenuItem key={year} onClick={handleClose}>
                    {year}
                  </MenuItem>
                ))}
              </Menu>
              <ReactApexcharts
                type="radialBar"
                height={200}
                series={[78]}
                options={radialBarOptions}
              />
              <Typography
                sx={{
                  mb: 7.5,
                  fontWeight: 600,
                  color: "rgba(50, 71, 92, 0.6)",
                  marginBottom: "30px",
                }}
              >
                62% Company Growth
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Box sx={{ mr: 4, display: "flex", alignItems: "center" }}>
                <MuiAvatar
                  skin="light"
                  variant="rounded"
                  sx={{
                    mr: 2.5,
                    width: 38,
                    height: 38,
                    backgroundColor: "rgba(105, 108, 255, 0.16)",
                  }}
                >
                  <AttachMoneyIcon
                    sx={{
                      color: "rgb(105, 108, 255)",
                    }}
                  />
                </MuiAvatar>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                  >
                    {new Date().getFullYear()}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      color: "rgba(50, 71, 92, 0.87)",
                    }}
                  >
                    $32.5k
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", width: "80px" }}
              >
                <MuiAvatar
                  skin="light"
                  color="info"
                  variant="rounded"
                  sx={{
                    mr: 2.5,
                    width: 38,
                    height: 38,
                    backgroundColor: "rgba(3, 195, 236, 0.16)",
                  }}
                >
                  <WalletIcon sx={{ color: "rgb(3, 195, 236)" }} />
                </MuiAvatar>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                  >
                    {new Date().getFullYear() - 1}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      color: "rgba(50, 71, 92, 0.87)",
                    }}
                  >
                    $41.2k
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TotalRevenueCard;
