// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Icon Import
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// ** Custom Components Imports
import CustomAvatar from "../../Components/apps/CustomAvatar";
import OptionsMenu from "../../Components/apps/OptionsMenu";

const CardStatsVertical = (props) => {
  // ** Props
  const {
    title,
    stats,
    avatarSrc,
    avatarIcon,
    trendNumber,
    optionsMenuProps,
    trend = "positive",
    avatarColor = "primary",
  } = props;

  return (
    <Card>
      <CardContent
        sx={{ p: (theme) => `${theme.spacing(2.5, 2.5, 2)} !important` }}
      >
        <Box
          sx={{
            display: "flex",
            mb: 2,
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <CustomAvatar
            skin="light"
            variant="rounded"
            color={avatarColor}
            src={avatarSrc ?? ""}
            sx={{ width: 42, height: 42 }}
          >
            {avatarIcon && !avatarSrc ? avatarIcon : null}
          </CustomAvatar>
          {optionsMenuProps ? (
            <OptionsMenu {...optionsMenuProps} />
          ) : (
            <OptionsMenu
              options={["Refresh", "Share", "Update"]}
              iconButtonProps={{
                size: "small",
                className: "card-more-options",
                sx: { color: "rgba(50, 71, 92, 0.87)" },
              }}
            />
          )}
        </Box>
        <Typography
          sx={{ mb: 0.5, fontWeight: 600, color: "rgba(50, 71, 92, 0.6)" }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          sx={{ mb: 1, color: "rgba(50, 71, 92, 0.87)" }}
        >
          {stats}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "& svg": {
              mr: 1,
              color: `${
                trend === "positive" ? "rgb(113, 221, 55)" : "rgb(255, 62, 29)"
              }`,
            },
          }}
        >
          {trend === "positive" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              color: `${
                trend === "positive" ? "rgb(113, 221, 55)" : "rgb(255, 62, 29)"
              }`,
            }}
          >
            {`${trendNumber}%`}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardStatsVertical;
