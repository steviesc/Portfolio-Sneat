// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import ReactApexcharts from "react-apexcharts";

// ** Icons Imports
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { GeneratedLeadsSeries } from "../../../assets/data/DashboardCRM_data";

const series = GeneratedLeadsSeries;

const CrmGeneratedLeads = () => {
  // ** Hook
  const theme = useTheme();

  const options = {
    colors: [
      "rgba(113, 221, 55, 0.75)",
      "rgba(113, 221, 55, 0.5)",
      "rgba(113, 221, 55, 0.25)",
      "rgba(113, 221, 55)",
    ],
    stroke: { width: 0 },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    labels: ["1st Week", "2nd Week", "3rd Week", "4th Week"],
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    grid: {
      padding: { top: 15 },
    },
    plotOptions: {
      pie: {
        customScale: 1,
        expandOnClick: false,
        donut: {
          size: "73%",
          labels: {
            show: true,
            name: {
              offsetY: 22,
              color: theme.palette.text.secondary,
              fontFamily: theme.typography.fontFamily,
            },
            value: {
              offsetY: -17,
              fontWeight: 500,
              fontSize: "22px",
              formatter: (val) => `${val}%`,
              color: "rgba(50, 71, 92, 0.87)",
              fontFamily: theme.typography.fontFamily,
            },
            total: {
              show: true,
              label: "Average",
              fontSize: "13px",
              color: "rgba(50, 71, 92, 0.6)",
              fontFamily: theme.typography.fontFamily,
              formatter: () =>
                `${series.reduce((a, b) => a + b, 0) / series.length}%`,
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          chart: { height: 155 },
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          chart: { height: 171 },
        },
      },
    ],
  };

  return (
    <Card>
      <CardContent sx={{ p: `${theme.spacing(2, 3)} !important` }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography variant="h6" sx={{ color: "rgba(50, 71, 92, 0.87)" }}>
                Generated Leads
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(50, 71, 92, 0.6)" }}
              >
                Monthly Report
              </Typography>
            </div>
            <div>
              <Typography
                variant="h5"
                sx={{ mb: 2, mt: 5, color: "rgba(50, 71, 92, 0.87)" }}
              >
                4,234
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
                  12.8%
                </Typography>
              </Box>
            </div>
          </Box>
          <ReactApexcharts
            type="donut"
            width={170}
            height={191}
            series={series}
            options={options}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CrmGeneratedLeads;
