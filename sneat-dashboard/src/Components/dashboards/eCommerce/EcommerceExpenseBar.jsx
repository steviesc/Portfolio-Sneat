// ** MUI Import
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Icon Import
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// ** Custom Component Imports
import ReactApexcharts from "react-apexcharts";

const series = [
  {
    name: `${new Date().getFullYear() - 1}`,
    data: [12, 32, 12, 27, 39, 27, 17, 9, 12, 20],
  },
  {
    name: `${new Date().getFullYear() - 2}`,
    data: [-28, -20, -27, -15, -21, -17, -19, -12, -30, -18],
  },
];

const EcommerceExpensesBar = () => {
  // ** Hook
  const theme = useTheme();

  const options = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false },
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
      width: 2,
      lineCap: "round",
      colors: [theme.palette.background.paper],
    },
    colors: ["rgb(105, 108, 255)", "rgb(255, 171, 0)"],
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    // plotOptions: {
    //   bar: {
    //     borderRadius: 6,
    //     columnWidth: "40%",
    //     endingShape: "flat",
    //     startingShape: "rounded",
    //   },
    // },
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: "42%",
        borderRadiusWhenStacked: "all",
        borderRadiusApplication: "around",
        barHeight: "85%",
      },
    },
    grid: {
      show: false,
      padding: {
        top: -10,
        right: 2,
        bottom: 0,
      },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      crosshairs: { opacity: 0 },
      axisBorder: { show: false },
    },
    yaxis: { show: false },
    responsive: [
      {
        breakpoint: 1400,
        options: {
          plotOptions: {
            bar: { columnWidth: "60%" },
          },
        },
      },
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
          chart: { height: 146 },
          plotOptions: {
            bar: { columnWidth: "40%" },
          },
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          chart: { height: 191 },
        },
      },
      {
        breakpoint: 420,
        options: {
          plotOptions: {
            bar: { columnWidth: "55%" },
          },
        },
      },
    ],
  };

  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          p: `${theme.spacing(2, 2.5, 2)} !important`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "rgba(50, 71, 92, 0.87)",
          }}
        >
          <Typography variant="h6">Expenses</Typography>
          <div>
            <Typography variant="h5" sx={{ mb: 1 }}>
              $84.7k
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& svg": { color: "rgb(255, 62, 29)" },
              }}
            >
              <ArrowDownwardIcon />
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, color: "rgb(255, 62, 29)" }}
              >
                8.2%
              </Typography>
            </Box>
          </div>
          {/* <CustomChip
            rounded
            skin="light"
            color="secondary"
            sx={{ fontWeight: 500 }}
            label={`July ${new Date().getFullYear()}`}
          /> */}
          <Typography
            noWrap
            variant="h6"
            sx={{
              fontWeight: 500,
              color: "rgba(50, 71, 92, 0.87)",
              textAlign: "left",
              fontSize: "0.85rem",
              backgroundColor: "rgba(133, 146, 163, 0.16)",
              color: "rgb(133, 146, 163)",
              height: "30px",
              lineHeight: "30px",
              width: "90px",
              textAlign: "center",
              borderRadius: "4px",
              marginRight: "10px",
            }}
          >
            {`July ${new Date().getFullYear()}`}
          </Typography>
        </Box>
        <ReactApexcharts
          type="bar"
          width="90%"
          height={191}
          options={options}
          series={series}
        />
      </CardContent>
    </Card>
  );
};

export default EcommerceExpensesBar;
