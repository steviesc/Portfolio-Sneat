// ** MUI Imports
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Custom Components Imports
import ReactApexcharts from "react-apexcharts";
import { ExpenseRadialBarData } from "../../../assets/data/DashboardEcommerce_data";

const EcommerceExpensesRadialBar = () => {
  const theme = useTheme();

  const options = {
    chart: {
      sparkline: { enabled: true },
    },
    stroke: { lineCap: "round" },
    colors: ["rgb(105, 108, 255)"],
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    plotOptions: {
      radialBar: {
        endAngle: 90,
        startAngle: -90,
        hollow: { size: "64%" },
        track: {
          background: "rgba(105, 108, 255, 0.16",
        },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 3,
            fontWeight: 500,
            fontSize: "22px",
            color: "rgba(50, 71, 92, 0.87)",
          },
        },
      },
    },
  };

  return (
    <Card>
      <CardContent
        sx={{ p: (theme) => `${theme.spacing(2, 2.5, 2)} !important` }}
      >
        <Typography sx={{ fontWeight: 600, color: "rgba(50, 71, 92, 0.6)" }}>
          Expenses
        </Typography>
        <ReactApexcharts
          type="radialBar"
          height={138}
          options={options}
          series={[ExpenseRadialBarData.percentage]}
        />
        <Typography
          variant="body2"
          sx={{ mt: 2, textAlign: "center", color: "text.disabled" }}
        >
          ${ExpenseRadialBarData.expensediff}k Expenses more
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", color: "text.disabled" }}
        >
          than last month
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EcommerceExpensesRadialBar;
