// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";

const EcommerceSalesTarget = () => {
  return (
    <Card>
      <CardContent sx={{ p: (theme) => `${theme.spacing(2, 2.5)} !important` }}>
        <Typography
          sx={{ mb: 1, fontWeight: 600, color: "rgba(50, 71, 92, 0.6)" }}
        >
          Sales
        </Typography>
        <Typography
          variant="h5"
          sx={{ mb: 1, color: "rgba(50, 71, 92, 0.87)" }}
        >
          482k
        </Typography>
        {/* <CustomChip
          rounded
          size="small"
          skin="light"
          color="info"
          label="+34%"
          sx={{ mb: 3.5, fontWeight: 500 }}
        /> */}
        <Typography
          noWrap
          variant="h6"
          sx={{
            fontWeight: 500,
            color: "rgba(50, 71, 92, 0.87)",
            textAlign: "left",
            fontSize: "0.85rem",
            backgroundColor: "rgba(3, 195, 236, 0.16)",
            color: "rgb(3, 195, 236)",
            height: "25px",
            lineHeight: "25px",
            width: "50px",
            textAlign: "center",
            borderRadius: "4px",
            marginRight: "10px",
          }}
        >
          +34%
        </Typography>
        <Typography variant="body2" sx={{ color: "text.disabled", mt: 2 }}>
          Sales Target
        </Typography>
        <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          <LinearProgress
            value={78}
            variant="determinate"
            sx={{
              mr: 1,
              height: 8,
              width: "100%",
              backgroundColor: "rgba(50, 71, 92, 0.16)",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "rgb(3, 195, 236)",
                borderRadius: 4,
              },
              borderRadius: 4,
            }}
          />
          <Typography variant="body2" sx={{ color: "rgba(50, 71, 92, 0.6)" }}>
            78%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EcommerceSalesTarget;
