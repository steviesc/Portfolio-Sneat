import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  styled,
} from "@mui/material";
import congratulationsImage from "../../../assets/illustration-john-light.png";
import { CongradsData } from "../../../assets/data/DashboardAnalytics_data";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
  borderRadius: theme.shape.borderRadius,
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flex: 1,
}));

const CongratulationsCard = () => {
  return (
    <StyledCard
      sx={{
        padding: "4px",
        // justifyContent: "space-between",
        position: "relative",
      }}
    >
      <StyledCardContent sx={{ textAlign: "left", flex: "0.9" }}>
        <Typography
          variant="h5"
          sx={{ color: "rgb(105, 108, 255)", fontWeight: "500" }}
        >
          Congratulations John! 🎉
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "rgba(50, 71, 92, 0.6)", paddingTop: "5px" }}
        >
          You have done {CongradsData.sales}% more sales today. Check your new
          badge in your profile.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            mt: 2,
            color: "rgb(105, 108, 255)",
            border: "1px solid rgba(105, 108, 255, 0.5)",
          }}
        >
          VIEW BADGES
        </Button>
      </StyledCardContent>
      <Box sx={{ marginLeft: "50px" }}>
        <img
          src={congratulationsImage}
          alt="Congratulations"
          width={210}
          height="100%"
          style={{}}
        />
      </Box>
    </StyledCard>
  );
};

export default CongratulationsCard;
