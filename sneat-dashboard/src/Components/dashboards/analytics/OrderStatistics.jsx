// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

// ** Custom Components Import
import OptionsMenu from "../../apps/OptionsMenu";
import ReactApexcharts from "react-apexcharts";
import CustomAvatar from "../../apps/CustomAvatar";
import { OrderData } from "../../../assets/data/DashboardAnalytics_data";

const data = OrderData;

const OrderStatistics = () => {
  // ** Hooks
  const theme = useTheme();

  const options = {
    chart: {
      sparkline: { enabled: true },
      animations: { enabled: false },
    },
    stroke: {
      width: 6,
      colors: [theme.palette.background.paper],
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    labels: ["Fashion", "Electronic", "Sports", "Decor"],
    colors: [
      "rgb(113, 221, 55)",
      "rgb(105, 108, 255)",
      "rgba(50, 71, 92, 0.6)",
      "rgb(3, 195, 236)",
    ],
    grid: {
      padding: {
        top: -15,
        bottom: 5,
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
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "75%",
          labels: {
            show: true,
            name: {
              offsetY: 17,
              fontSize: "14px",
              color: theme.palette.text.disabled,
              fontFamily: theme.typography.fontFamily,
            },
            value: {
              offsetY: -17,
              fontSize: "24px",
              color: "rgba(50, 71, 92, 0.87)",
              fontFamily: theme.typography.fontFamily,
            },
            total: {
              show: true,
              label: "Weekly",
              fontSize: "14px",
              formatter: () => "38%",
              color: "rgba(50, 71, 92, 0.38)",
              fontFamily: theme.typography.fontFamily,
            },
          },
        },
      },
    },
  };

  return (
    <Card>
      <CardHeader
        sx={{ pb: 0, pt: 3, ml: 1, mr: 1 }}
        title="Order Statistics"
        titleTypographyProps={{ sx: { color: "rgba(50, 71, 92, 0.87)" } }}
        subheader="42.82k Total Sales"
        subheaderTypographyProps={{
          sx: { color: "rgba(50, 71, 92, 0.6)", fontSize: "0.875rem" },
        }}
        action={
          <OptionsMenu
            iconButtonProps={{ size: "small" }}
            options={["Share", "Refresh", "Edit"]}
          />
        }
      />
      <CardContent>
        <Box
          sx={{
            mb: 2.5,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            ml: 1,
            mr: 1,
          }}
        >
          <Box sx={{ mt: 3, display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h4"
              sx={{ mb: 0, color: "rgba(50, 71, 92, 0.87)" }}
            >
              8,258
            </Typography>
            <Typography sx={{ color: "rgba(50, 71, 92, 0.6)" }}>
              Total Orders
            </Typography>
          </Box>
          <ReactApexcharts
            type="donut"
            width={130}
            height={145}
            options={options}
            series={[45, 80, 20, 40]}
          />
        </Box>
        {data.map((item, index) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: index !== data.length - 1 ? 2.5 : undefined,
              }}
            >
              <CustomAvatar
                skin="light"
                variant="rounded"
                // color={item.avatarColor}
                sx={{
                  mr: 3,
                  width: 38,
                  height: 38,
                  color: `${item.avatarColor}`,
                  backgroundColor: `${item.bgColor}`,
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
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, color: "rgba(50, 71, 92, 0.6)" }}
                >
                  {item.amount}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default OrderStatistics;
