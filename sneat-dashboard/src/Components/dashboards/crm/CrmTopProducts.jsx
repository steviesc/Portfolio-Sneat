// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import MuiDivider from "@mui/material/Divider";

// ** Custom Components Import
import OptionsMenu from "../../apps/OptionsMenu";
import { VolumeData, SalesData } from "../../../assets/data/DashboardCRM_data";

const salesData = SalesData;
const volumeData = VolumeData;

// Styled Divider component
const Divider = styled(MuiDivider)(({ theme }) => ({
  margin: 0,
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down("md")]: {
    borderRight: "none",
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const CrmTopProducts = () => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: ["column", "column", "row"],
      }}
    >
      <Box sx={{ width: "100%" }}>
        <CardHeader
          sx={{ p: (theme) => theme.spacing(2, 3) }}
          title={
            <Typography
              variant="h6"
              sx={{ mr: 1.5, color: "rgba(50, 71, 92, 0.87)" }}
            >
              Top Products by
              <Typography
                variant="h6"
                component="span"
                sx={{ ml: 1.5, color: "rgb(105, 108, 255)" }}
              >
                Sales
              </Typography>
            </Typography>
          }
          action={
            <OptionsMenu
              iconButtonProps={{ size: "small" }}
              options={["Share", "Refresh", "Update"]}
            />
          }
        />
        <CardContent sx={{ pt: (theme) => `${theme.spacing(2)} !important` }}>
          {salesData.map((item, index) => {
            const { title, amount, subtitle, avatarSrc } = item;

            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: index !== salesData.length - 1 ? 2.5 : 0,
                }}
              >
                <Avatar
                  alt={title}
                  variant="rounded"
                  src={avatarSrc}
                  sx={{ mr: 3, width: 38, height: 38 }}
                />
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
                    <Typography sx={{ color: "rgba(50, 71, 92, 0.6)" }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.disabled" }}>
                      {subtitle}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{ fontWeight: 600, color: "rgba(50, 71, 92, 0.6)" }}
                  >
                    {amount}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </CardContent>
      </Box>

      <Divider flexItem />

      <Box sx={{ width: "100%" }}>
        <CardHeader
          sx={{ p: (theme) => theme.spacing(2, 3) }}
          title={
            <Typography
              variant="h6"
              sx={{ mr: 1.5, color: "rgba(50, 71, 92, 0.87)" }}
            >
              Top Products by
              <Typography
                variant="h6"
                component="span"
                sx={{ ml: 1.5, color: "rgb(105, 108, 255)" }}
              >
                Volume
              </Typography>
            </Typography>
          }
          action={
            <OptionsMenu
              iconButtonProps={{ size: "small" }}
              options={["Share", "Refresh", "Update"]}
            />
          }
        />
        <CardContent sx={{ pt: (theme) => `${theme.spacing(2)} !important` }}>
          {volumeData.map((item, index) => {
            const {
              title,
              amount,
              subtitle,
              avatarSrc,
              difference = "positive",
              differenceNumber,
            } = item;

            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: index !== volumeData.length - 1 ? 2.5 : 0,
                }}
              >
                <Avatar
                  alt={title}
                  variant="rounded"
                  src={avatarSrc}
                  sx={{ mr: 3, width: 38, height: 38 }}
                />
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
                    <Typography sx={{ color: "rgba(50, 71, 92, 0.6)" }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.disabled" }}>
                      {subtitle}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        mr: 3.5,
                        fontWeight: 600,
                        color: "rgba(50, 71, 92, 0.6)",
                      }}
                    >
                      {amount}
                    </Typography>
                    <Typography
                      noWrap
                      variant="h6"
                      sx={{
                        fontWeight: 500,
                        color: "rgba(50, 71, 92, 0.87)",
                        textAlign: "left",
                        fontSize: "0.85rem",
                        backgroundColor: `${
                          difference === "positive"
                            ? "rgba(113, 221, 55, 0.16)"
                            : "rgba(255, 62, 29, 0.16)"
                        }`,
                        color: `${
                          difference === "positive"
                            ? "rgb(113, 221, 55)"
                            : "rgb(255, 62, 29)"
                        }`,
                        height: "25px",
                        lineHeight: "25px",
                        width: "65px",
                        textAlign: "center",
                        borderRadius: "4px",
                        marginRight: "10px",
                      }}
                    >
                      {difference === "positive" ? "+" : "-"}
                      {differenceNumber}%
                    </Typography>
                    {/* <CustomChip
                    /> */}
                  </Box>
                </Box>
              </Box>
            );
          })}
        </CardContent>
      </Box>
    </Card>
  );
};

export default CrmTopProducts;
