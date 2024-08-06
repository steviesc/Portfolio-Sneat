// ** React Imports
import { Fragment } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Badge from "@mui/material/Badge";
import MuiAvatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import FormGroup from "@mui/material/FormGroup";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

// ** Icon Imports
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import FilterIcon from "@mui/icons-material/Filter";
import BlockIcon from "@mui/icons-material/Block";

// ** Third Party Components
import PerfectScrollbar from "react-perfect-scrollbar";

// ** Custom Component Imports
import Sidebar from "../../../Components/apps/Sidebar";
import CustomAvatar from "../../../Components/apps/CustomAvatar";

const UserProfileRight = (props) => {
  const {
    hidden,
    statusObj,
    sidebarWidth,
    userProfileRightOpen,
    handleUserProfileRightSidebarToggle,
    selectedChatContact,
    getInitials,
  } = props;

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
      direction="right"
      show={userProfileRightOpen}
      backDropClick={handleUserProfileRightSidebarToggle}
      sx={{
        zIndex: 9,
        height: "100%",
        width: sidebarWidth,
        borderTopRightRadius: (theme) => theme.shape.borderRadius,
        borderBottomRightRadius: (theme) => theme.shape.borderRadius,
        "& + .MuiBackdrop-root": {
          zIndex: 8,
          borderRadius: 1,
        },
      }}
    >
      {selectedChatContact ? (
        <Fragment>
          <Box sx={{ position: "relative" }}>
            <IconButton
              size="small"
              onClick={handleUserProfileRightSidebarToggle}
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
                        color: `${statusObj[selectedChatContact.status]}.main`,
                        boxShadow: (theme) =>
                          `0 0 0 2px ${theme.palette.background.paper}`,
                        backgroundColor: `${
                          statusObj[selectedChatContact.status]
                        }`,
                      }}
                    />
                  }
                >
                  {selectedChatContact.avatar ? (
                    <MuiAvatar
                      sx={{ width: "5rem", height: "5rem" }}
                      src={selectedChatContact.avatar}
                      alt={selectedChatContact.fullName}
                    />
                  ) : (
                    <CustomAvatar
                      skin="light"
                      color={selectedChatContact.avatarColor}
                      sx={{
                        width: "5rem",
                        height: "5rem",
                        fontWeight: 500,
                        fontSize: "2rem",
                      }}
                    >
                      {getInitials(selectedChatContact.fullName)}
                    </CustomAvatar>
                  )}
                </Badge>
              </Box>
              <Typography
                sx={{
                  mb: 0.5,
                  fontWeight: 500,
                  textAlign: "center",
                  color: "rgba(50, 71, 92, 0.87)",
                }}
              >
                {selectedChatContact.fullName}
              </Typography>
              <Typography
                variant="body2"
                sx={{ textAlign: "center", color: "rgba(50, 71, 92, 0.6)" }}
              >
                {selectedChatContact.role}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ height: "calc(100% - 11.8125rem)" }}>
            <ScrollWrapper>
              <Box sx={{ p: 2.5 }}>
                <FormGroup sx={{ mb: 5.5 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1.5,
                      textTransform: "uppercase",
                      color: "rgba(50, 71, 92, 0.6)",
                    }}
                  >
                    About
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      color: "rgba(50, 71, 92, 0.87)",
                    }}
                  >
                    {selectedChatContact.about}
                  </Typography>
                </FormGroup>

                <Box sx={{ mb: 5.5 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1.5,
                      textTransform: "uppercase",
                      color: "rgba(50, 71, 92, 0.6)",
                    }}
                  >
                    Personal Information
                  </Typography>
                  <List dense sx={{ p: 0 }}>
                    <ListItem sx={{ px: 1 }}>
                      <ListItemIcon
                        sx={{
                          color: "rgba(50, 71, 92, 0.87)",
                          minWidth: "35px",
                        }}
                      >
                        <MailOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          textTransform: "lowercase",
                          color: "rgba(50, 71, 92, 0.87)",
                        }}
                        primary={`${selectedChatContact.fullName.replace(
                          /\s/g,
                          "_"
                        )}@email.com`}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 1 }}>
                      <ListItemIcon
                        sx={{
                          color: "rgba(50, 71, 92, 0.87)",
                          minWidth: "35px",
                        }}
                      >
                        <LocalPhoneIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="+1(123) 456 - 7890"
                        sx={{
                          color: "rgba(50, 71, 92, 0.87)",
                        }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 1 }}>
                      <ListItemIcon
                        sx={{
                          color: "rgba(50, 71, 92, 0.87)",
                          minWidth: "35px",
                        }}
                      >
                        <AccessTimeIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Mon - Fri 10AM - 8PM"
                        sx={{
                          color: "rgba(50, 71, 92, 0.87)",
                        }}
                      />
                    </ListItem>
                  </List>
                </Box>

                <div>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1.5,
                      textTransform: "uppercase",
                      color: "rgba(50, 71, 92, 0.6)",
                    }}
                  >
                    Options
                  </Typography>
                  <List dense sx={{ p: 0 }}>
                    <ListItem disablePadding>
                      <ListItemButton sx={{ px: 1 }}>
                        <ListItemIcon
                          sx={{
                            color: "rgba(50, 71, 92, 0.87)",
                            minWidth: "35px",
                          }}
                        >
                          <BookmarkBorderIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Add Tag"
                          sx={{
                            color: "rgba(50, 71, 92, 0.87)",
                          }}
                        />
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
                          <StarOutlineIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Important Contact"
                          sx={{
                            color: "rgba(50, 71, 92, 0.87)",
                          }}
                        />
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
                          <FilterIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Shared Media"
                          sx={{
                            color: "rgba(50, 71, 92, 0.87)",
                          }}
                        />
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
                        <ListItemText
                          primary="Delete Contact"
                          sx={{
                            color: "rgba(50, 71, 92, 0.87)",
                          }}
                        />
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
                          <BlockIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Block Contact"
                          sx={{
                            color: "rgba(50, 71, 92, 0.87)",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </div>
              </Box>
            </ScrollWrapper>
          </Box>
        </Fragment>
      ) : null}
    </Sidebar>
  );
};

export default UserProfileRight;
