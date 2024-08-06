// ** MUI Imports
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const SalesCard = () => {
  // ** Hook
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <CardContent
        sx={{ padding: "4px", marginBottom: "12px" }} /* sx={{ */
        /*      padding: "18px",
          backgroundColor: "#fff",
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          borderRadius: "8px",
          height: "182px", */
        /*  }} */
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <img
            src="https://greakproject.vercel.app/images/cards/stats-vertical-wallet.png"
            alt=""
            width="45px"
            padding="10px"
          />
          <IconButton
            aria-label="settings"
            aria-controls="settings-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="settings-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{ color: "rgba(50, 71, 92, 0.87)" }}
          >
            <MenuItem onClick={handleClose}>Refresh</MenuItem>
            <MenuItem onClick={handleClose}>Share</MenuItem>
            <MenuItem onClick={handleClose}>Update</MenuItem>
          </Menu>
        </Box>

        <Typography
          sx={{
            fontWeight: 600,
            color: "rgba(50, 71, 92, 0.6)",
            textAlign: "left",
            margin: "2px",
          }}
        >
          Sales
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            color: "rgba(50, 71, 92, 0.87)",
            textAlign: "left",
            marginTop: "8px",
          }}
        >
          $4,679
        </Typography>
        <ArrowUpwardIcon
          sx={{ color: "#71DD37", fontSize: "1.25rem", paddingTop: "6px" }}
        />
        <Typography
          color="#71DD37"
          fontWeight={500}
          fontSize="0.875rem"
          textAlign="left"
          marginTop="7px"
          display="inline"
        >
          28.14%
        </Typography>
      </CardContent>
    </Box>
  );
};

export default SalesCard;
