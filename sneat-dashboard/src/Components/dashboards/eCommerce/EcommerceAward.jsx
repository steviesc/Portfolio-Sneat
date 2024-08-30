// ** MUI Imports
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { AwardData } from "../../../assets/data/DashboardEcommerce_data";

// Styled component for the trophy image
const TrophyImg = styled("img")({
  right: 36,
  bottom: -2,
  height: 155,
  position: "absolute",
});

const EcommerceAward = () => {
  return (
    <Card sx={{ position: "relative" }}>
      <CardContent sx={{ py: (theme) => `${theme.spacing(2.5)} !important` }}>
        <Typography
          sx={{ mb: 1.25, fontWeight: 500, color: "rgba(50, 71, 92, 0.87)" }}
        >
          Congratulations Katie!
        </Typography>
        <Typography
          variant="body2"
          sx={{ mb: 2, color: "rgba(50, 71, 92, 0.6)" }}
        >
          Best seller of the month
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: "rgb(105, 108, 255)", fontSize: "1.625rem !important" }}
        >
          ${AwardData.sales}k
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5, color: "text.disabled" }}>
          {AwardData.percentage}% of target
        </Typography>
        <Button
          size="small"
          variant="contained"
          sx={{
            backgroundColor: "rgb(105, 108, 255)",
            "&:hover": {
              backgroundColor: "rgb(85, 87, 255)",
            },
          }}
        >
          View Sales
        </Button>
        <TrophyImg
          alt="trophy"
          src="https://greakproject.vercel.app/images/misc/trophy.png"
          sx={{ right: "15px" }}
        />
      </CardContent>
    </Card>
  );
};

export default EcommerceAward;
