// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import ReactApexcharts from "react-apexcharts";

// ** Icons Imports
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// ** Custom Components Imports
import CustomAvatar from "../../apps/CustomAvatar";
import OptionsMenu from "../../apps/OptionsMenu";

const data = [
  {
    amount: "$1,619",
    percentage: 18.6,
    title: "Net Profit",
    avatarColor: "rgb(105, 108, 255)",
    subtitle: "12.4k Sales",
    avatarIcon: <TrendingUpIcon />,
  },
  {
    amount: "$3,571",
    percentage: 39.6,
    title: "Total Income",
    avatarColor: "rgb(113, 221, 55)",
    subtitle: "Sales, Affiliation",
    avatarIcon: <AttachMoneyIcon />,
  },
  {
    amount: "$430",
    percentage: 52.8,
    title: "Total Expenses",
    avatarColor: "rgb(133, 146, 163)",
    subtitle: "ADVT, Marketing",
    avatarIcon: <CreditCardIcon />,
  },
];

const CrmEarningReport = () => {
  // ** Hooks
  const theme = useTheme();

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        distributed: true,
        columnWidth: "52%",
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [
      "rgba(105, 108, 255, 0.1)",
      "rgba(105, 108, 255, 0.1)",
      "rgba(105, 108, 255, 0.1)",
      "rgba(105, 108, 255, 0.1)",
      "rgba(105, 108, 255, 0.85)",
      "rgba(105, 108, 255, 0.1)",
      "rgba(105, 108, 255, 0.1)",
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
          fontSize: "15px",
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
        },
      },
    },
    yaxis: { show: false },
    grid: {
      show: false,
      padding: {
        top: -5,
        left: -14,
        right: -16,
        bottom: -15,
      },
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          chart: { height: 208 },
        },
      },
    ],
  };

  return (
    <Card sx={{ fontSize: "1.25rem" }}>
      <CardHeader
        title="Earning Report"
        sx={{
          p: theme.spacing(2, 3, 0.5),
          color: "rgba(50, 71, 92, 0.87)",
        }}
        titleTypographyProps={{ sx: { fontSize: "1.25rem" } }} // 这里设置标题字体大小
        subheader="Weekly Earnings Overview"
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
      <CardContent sx={{ pb: `${theme.spacing(2)} !important` }}>
        {data.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                mb: index !== data.length - 1 ? 2 : 0,
                ml: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <CustomAvatar
                skin="light"
                variant="rounded"
                sx={{
                  mr: 3,
                  width: 38,
                  height: 38,
                  color: `${item.avatarColor}`,
                }}
              >
                {item.avatarIcon}
              </CustomAvatar>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ mr: 2, display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{ fontWeight: 500, color: "rgba(50, 71, 92, 0.87)" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.disabled" }}>
                    {item.subtitle}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    "& svg": { mr: 0.5, color: "success.main" },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      mr: 0.5,
                      fontWeight: 500,
                      color: "rgba(50, 71, 92, 0.6)",
                    }}
                  >
                    {item.amount}
                  </Typography>
                  <KeyboardArrowUpIcon
                    sx={{ color: "rgb(113, 221, 55) !important" }}
                  />
                  <Typography variant="body2" sx={{ color: "text.disabled" }}>
                    {`${item.percentage}%`}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
        <ReactApexcharts
          type="bar"
          height={157}
          options={options}
          series={[{ data: [32, 98, 61, 41, 88, 47, 71] }]}
        />
      </CardContent>
    </Card>
  );
};

export default CrmEarningReport;
