import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function DetailsMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ minWidth: "20px" }}
      >
        <MoreVertIcon sx={{ color: "rgba(50, 71, 92, 0.54)" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        // sx={{ left: "1100px" }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{ color: "rgba(50, 71, 92, 0.87)" }}
        >
          Reply
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ color: "rgba(50, 71, 92, 0.87)" }}
        >
          Forward
        </MenuItem>
      </Menu>
    </div>
  );
}
