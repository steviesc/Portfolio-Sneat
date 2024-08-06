// ** React Imports
import { Fragment } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Badge from "@mui/material/Badge";
import Radio from "@mui/material/Radio";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import RadioGroup from "@mui/material/RadioGroup";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import FormControlLabel from "@mui/material/FormControlLabel";

// ** Icon Imports
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// ** Third Party Components
import PerfectScrollbar from "react-perfect-scrollbar";

// ** Custom Component Imports
import Sidebar from "../../../Components/apps/Sidebar";

const UserProfileLeft = (props) => {
  const {
    hidden,
    statusObj,
    userStatus,
    sidebarWidth,
    setUserStatus,
    userProfileLeftOpen,
    handleUserProfileLeftSidebarToggle,
    userProfile,
  } = props;

  const handleUserStatus = (e) => {
    setUserStatus(e.target.value);
  };

  const ScrollWrapper = ({ children }) => {
    if (hidden) {
      return (
        <Box sx={{ height: "100%", overflowY: "auto", overflowX: "hidden" }}>
          {children}
        </Box>
      );
    } else {
      return (
        <PerfectScrollbar options={{ wheelPropagation: false }}>
          {children}
        </PerfectScrollbar>
      );
    }
  };

  return (
    <Sidebar
      show={userProfileLeftOpen}
      backDropClick={handleUserProfileLeftSidebarToggle}
      sx={{
        zIndex: 9,
        height: "100%",
        width: sidebarWidth,
        borderTopLeftRadius: (theme) => theme.shape.borderRadius,
        borderBottomLeftRadius: (theme) => theme.shape.borderRadius,
        "& + .MuiBackdrop-root": {
          zIndex: 8,
          borderRadius: 1,
        },
        color: "rgba(50, 71, 92, 0.87)",
      }}
    >
      {userProfile ? (
        <Fragment>
          <IconButton
            size="small"
            onClick={handleUserProfileLeftSidebarToggle}
            sx={{
              top: "0.5rem",
              right: "0.5rem",
              position: "absolute",
              color: "rgba(50, 71, 92, 0.6)",
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box sx={{ p: 3, display: "flex", flexDirection: "column" }}>
            <Box sx={{ mb: 3.5, display: "flex", justifyContent: "center" }}>
              <Badge
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                badgeContent={
                  <Box
                    component="span"
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      color: `${statusObj[userStatus]}`,
                      backgroundColor: `${statusObj[userStatus]}`,
                      boxShadow: (theme) =>
                        `0 0 0 2px ${theme.palette.background.paper}`,
                    }}
                  />
                }
              >
                <Avatar
                  sx={{ width: 80, height: 80 }}
                  src={userProfile.avatar}
                  alt={userProfile.fullName}
                />
              </Badge>
            </Box>
            <Typography sx={{ mb: 0, fontWeight: 500, textAlign: "center" }}>
              {userProfile.fullName}
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "center", textTransform: "capitalize" }}
            >
              {userProfile.role}
            </Typography>
          </Box>

          <Box sx={{ height: "calc(100% - 11.8125rem)" }}>
            <ScrollWrapper>
              <Box sx={{ p: 2.5 }}>
                <Typography
                  variant="body2"
                  sx={{ mb: 2, textTransform: "uppercase" }}
                >
                  About
                </Typography>
                <TextField
                  minRows={3}
                  multiline
                  fullWidth
                  sx={{
                    mb: 2,
                    "& .MuiInputBase-input": {
                      color: "rgba(50, 71, 92, 0.87)",
                    },
                  }}
                  defaultValue={userProfile.about}
                />
                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    textTransform: "uppercase",
                  }}
                >
                  Status
                </Typography>
                <RadioGroup
                  value={userStatus}
                  sx={{ mb: 2, ml: 0.8 }}
                  onChange={handleUserStatus}
                >
                  <div>
                    <FormControlLabel
                      value="online"
                      label="Online"
                      control={
                        <Radio
                          sx={{
                            p: 1,
                            color: "rgba(50, 71, 92, 0.38)",
                            "&.Mui-checked": {
                              color: "rgb(113, 221, 55)",
                            },
                          }}
                        />
                      }
                    />
                  </div>
                  <div>
                    <FormControlLabel
                      value="away"
                      label="Away"
                      control={
                        <Radio
                          sx={{
                            p: 1,
                            color: "rgba(50, 71, 92, 0.38)",
                            "&.Mui-checked": {
                              color: "rgb(255, 171, 0)",
                            },
                          }}
                        />
                      }
                    />
                  </div>
                  <div>
                    <FormControlLabel
                      value="busy"
                      label="Do not Disturb"
                      control={
                        <Radio
                          sx={{
                            p: 1,
                            color: "rgba(50, 71, 92, 0.38)",
                            "&.Mui-checked": {
                              color: "rgb(255, 62, 29)",
                            },
                          }}
                        />
                      }
                    />
                  </div>
                  <div>
                    <FormControlLabel
                      value="offline"
                      label="Offline"
                      control={
                        <Radio
                          sx={{
                            p: 1,
                            color: "rgba(50, 71, 92, 0.38)",
                            "&.Mui-checked": {
                              color: "rgb(133, 146, 163)",
                            },
                          }}
                        />
                      }
                    />
                  </div>
                </RadioGroup>
                <Typography
                  variant="body2"
                  sx={{ mb: 2, textTransform: "uppercase" }}
                >
                  Settings
                </Typography>
                <List dense sx={{ p: 0, mb: 2 }}>
                  <ListItem
                    disablePadding
                    secondaryAction={
                      <Switch
                        defaultChecked
                        sx={{
                          "& .MuiSwitch-switchBase.Mui-checked": {
                            color: "rgb(105, 108, 255)", // 修改开关按钮颜色
                            "&:hover": {
                              backgroundColor: "rgba(105, 108, 255, 0.08)", // 修改开关按钮悬停时的背景颜色
                            },
                          },
                          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                            {
                              backgroundColor: "rgb(105, 108, 255)", // 修改轨道颜色
                            },
                        }}
                      />
                    }
                  >
                    <ListItemButton sx={{ px: 1 }}>
                      <ListItemIcon
                        sx={{
                          color: "rgba(50, 71, 92, 0.87)",
                          minWidth: "35px",
                        }}
                      >
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText primary="Two-step Verification" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    secondaryAction={
                      <Switch
                        defaultChecked
                        sx={{
                          "& .MuiSwitch-switchBase.Mui-checked": {
                            color: "rgb(105, 108, 255)", // 修改开关按钮颜色
                            "&:hover": {
                              backgroundColor: "rgba(105, 108, 255, 0.08)", // 修改开关按钮悬停时的背景颜色
                            },
                          },
                          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                            {
                              backgroundColor: "rgb(105, 108, 255)", // 修改轨道颜色
                            },
                        }}
                      />
                    }
                  >
                    <ListItemButton sx={{ px: 1 }}>
                      <ListItemIcon
                        sx={{
                          color: "rgba(50, 71, 92, 0.87)",
                          minWidth: "35px",
                        }}
                      >
                        <NotificationsNoneIcon />
                      </ListItemIcon>
                      <ListItemText primary="Notification" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ px: 1 }}>
                      <ListItemIcon
                        sx={{
                          color: "rgba(50, 71, 92, 0.87)",
                          minWidth: "35px",
                        }}
                      >
                        <PersonOutlineIcon />
                      </ListItemIcon>
                      <ListItemText primary="Invite Friends" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ px: 1 }}>
                      <ListItemIcon
                        sx={{
                          color: "rgba(50, 71, 92, 0.87)",
                          minWidth: "35px",
                        }}
                      >
                        <DeleteOutlineIcon />
                      </ListItemIcon>
                      <ListItemText primary="Delete Account" />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgb(105, 108, 255)",
                    "&:hover": {
                      backgroundColor: "rgb(84, 87, 255)",
                    },
                  }}
                >
                  Logout
                </Button>
              </Box>
            </ScrollWrapper>
          </Box>
        </Fragment>
      ) : null}
    </Sidebar>
  );
};

export default UserProfileLeft;
