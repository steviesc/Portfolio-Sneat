// ** React Import
import { useState } from "react";
import ReactApexcharts from "react-apexcharts";

// ** MUI Import
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import { useTheme } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Icons Imports
import StarOutlineIcon from "@mui/icons-material/StarOutline";

// ** Custom Components Imports
import OptionsMenu from "../../apps/OptionsMenu";
import {
  CustomerRatingsSeries,
  CustomerRatingsData,
} from "../../../assets/data/DashboardCRM_data";

const series = CustomerRatingsSeries;

const CrmCustomerRating = () => {
  // ** State
  const [value] = useState(CustomerRatingsData.rating);

  // ** Hook
  const theme = useTheme();

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 14,
        blur: 4,
        left: 0,
        enabled: true,
        opacity: 0.04,
        enabledOnSeries: [1],
        color: theme.palette.common.black,
      },
    },
    grid: {
      show: false,
      padding: {
        left: -7,
        top: -20,
        right: 34,
        bottom: 8,
      },
    },
    legend: { show: false },
    colors: [theme.palette.action.selected, "rgb(105, 108, 255)"],
    markers: {
      size: 6,
      strokeWidth: 5,
      strokeOpacity: 1,
      hover: { size: 6 },
      colors: ["transparent"],
      strokeColors: "transparent",
      discrete: [
        {
          size: 6,
          seriesIndex: 1,
          fillColor: theme.palette.common.white,
          strokeColor: "rgb(105, 108, 255)",
          dataPointIndex: series[0].data.length - 1,
        },
        {
          size: 6,
          seriesIndex: 1,
          dataPointIndex: 3,
          fillColor: theme.palette.common.white,
          strokeColor: theme.palette.common.black,
        },
      ],
    },
    stroke: {
      width: [3, 5],
      curve: "smooth",
      lineCap: "round",
      dashArray: [8, 0],
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      crosshairs: {
        stroke: { color: "rgba(50, 71, 92, 0.87)" },
      },
      labels: {
        style: {
          fontSize: "1rem",
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
        },
      },
    },
    yaxis: {
      labels: { show: false },
    },
  };

  return (
    <Card>
      <CardHeader
        title={
          <Typography
            sx={{
              color: "rgba(50, 71, 92, 0.87) !important",
              fontWeight: 500,
              fontSize: "1.2rem",
            }}
          >
            Customer Ratings
          </Typography>
        }
        action={
          <OptionsMenu
            iconButtonProps={{ size: "small" }}
            options={["Share", "Refresh", "Update"]}
            sx={{ color: "rgba(50, 71, 92, 0.87) !important" }}
          />
        }
      />
      <CardContent>
        <Box sx={{ mb: 3, display: "flex", alignItems: "center" }}>
          <Typography
            variant="h3"
            sx={{ mr: 4.5, color: "rgba(50, 71, 92, 0.87)" }}
          >
            {value.toFixed(1)}
          </Typography>
          <Rating readOnly value={value} emptyIcon={<StarOutlineIcon />} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            noWrap
            variant="h6"
            sx={{
              fontWeight: 500,
              color: "rgba(50, 71, 92, 0.87)",
              textAlign: "left",
              fontSize: "0.85rem",
              backgroundColor: "rgba(105, 108, 255, 0.16)",
              color: "rgb(105, 108, 255)",
              height: "25px",
              lineHeight: "25px",
              width: "50px",
              textAlign: "center",
              borderRadius: "4px",
              marginRight: "10px",
            }}
          >
            +{CustomerRatingsData.points}.0
          </Typography>
          {/* <CustomChip
          /> */}
          <Typography sx={{ color: "rgba(50, 71, 92, 0.6)" }}>
            Points from last month
          </Typography>
        </Box>
      </CardContent>
      <ReactApexcharts
        type="line"
        height={206}
        options={options}
        series={series}
      />
    </Card>
  );
};

export default CrmCustomerRating;
