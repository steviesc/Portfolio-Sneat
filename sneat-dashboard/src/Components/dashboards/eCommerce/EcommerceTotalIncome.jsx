// ** MUI Import
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { styled, useTheme } from "@mui/material/styles";

// ** Custom Components Imports
import OptionsMenu from "../../apps/OptionsMenu";
import ReactApexcharts from "react-apexcharts";
import {
  TotalIncomeSeries,
  TotalIncomeData,
} from "../../../assets/data/DashboardEcommerce_data";

const series = TotalIncomeSeries;

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  [theme.breakpoints.up("md")]: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const data = TotalIncomeData.data;

const EcommerceTotalIncome = () => {
  // ** Hook
  const theme = useTheme();

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 14,
        left: 0,
        blur: 4,
        opacity: 0.15,
        enabled: true,
        color: "rgb(105, 108, 255)",
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      width: 4,
      curve: "straight",
    },
    grid: {
      borderColor: theme.palette.divider,
      padding: {
        top: 5,
        right: 6,
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
              opacity: 0.2,
              color: "rgb(105, 108, 255)",
            },
            {
              opacity: 0,
              offset: 100,
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
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      crosshairs: {
        stroke: { color: "rgba(50, 71, 92, 0.38)" },
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
        formatter: (value) => `$${value / 1000}k`,
        style: {
          fontSize: "14px",
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
        },
      },
    },
  };

  return (
    <Card>
      <Grid container>
        <StyledGrid item xs={12} md={8}>
          <CardHeader
            sx={{ p: 3, pb: 0, color: "rgba(50, 71, 92, 0.87)" }}
            title="Total Income"
            titleTypographyProps={{
              sx: {
                fontSize: "1.25rem !important",
                color: "rgba(50, 71, 92, 0.87)",
              },
            }}
            subheader="Yearly report overview"
            subheaderTypographyProps={{
              sx: { fontSize: "1rem !important", color: "text.disabled" },
            }}
          />
          <ReactApexcharts
            type="area"
            height={315}
            options={options}
            series={series}
          />
        </StyledGrid>
        <Grid item xs={12} md={4}>
          <CardHeader
            title="Report"
            sx={{ p: 2.5, pt: 2, color: "rgba(50, 71, 92, 0.87)" }}
            titleTypographyProps={{
              sx: {
                fontSize: "1.25rem !important",
                color: "rgba(50, 71, 92, 0.87)",
              },
            }}
            subheader="Monthly Avg. $45.578k"
            subheaderTypographyProps={{
              sx: {
                fontSize: "1rem !important",
                color: "text.disabled",
                paddingTop: "5px",
              },
            }}
            action={
              <OptionsMenu
                iconButtonProps={{ size: "small" }}
                options={["Last Week", "Last Month", "Last Year"]}
              />
            }
          />
          <CardContent sx={{ pt: `${theme.spacing(2)} !important` }}>
            {data.map((item, index) => (
              <Box
                key={index}
                sx={{
                  py: 1,
                  px: 2,
                  display: "flex",
                  borderRadius: 1,
                  alignItems: "center",
                  backgroundColor: "rgb(245, 245, 249)",
                  mb: index !== data.length - 1 ? 3 : undefined,
                }}
              >
                <Avatar
                  variant="rounded"
                  sx={{
                    mr: 3,
                    width: 44,
                    height: 44,
                    boxShadow: 6,
                    backgroundColor: "background.paper",
                  }}
                >
                  <img
                    alt="avatar image"
                    src={item.avatarSrc}
                    width={item.avatarWidth}
                    height={item.avatarHeight}
                  />
                </Avatar>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ mr: 2, display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ color: "rgba(50, 71, 92, 0.6)" }}>
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: "1.125rem",
                        color: "rgba(50, 71, 92, 0.87)",
                      }}
                    >
                      {item.stats}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 0.5,
                      fontWeight: 500,
                      color: `${
                        item.trend === "negative"
                          ? "rgb(255, 62, 29)"
                          : "rgb(113, 221, 55)"
                      }`,
                    }}
                  >
                    {`${item.trend === "negative" ? "-" : "+"}${
                      item.trendNumber
                    }k`}
                  </Typography>
                </Box>
              </Box>
            ))}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default EcommerceTotalIncome;
