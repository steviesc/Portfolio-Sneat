import React, { useEffect, useState } from "react";

/* MUI Imports */
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
/* MUI Icon Imports */
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SendIcon from "@mui/icons-material/Send";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useLocation, useNavigate } from "react-router-dom";

// ** Styled Components
const ListItemStyled = styled(ListItem)(({ theme }) => ({
  borderLeftWidth: "4px",
  borderLeftStyle: "solid",
  cursor: "pointer",
  padding: theme.spacing(0, 3),
  marginBottom: theme.spacing(1),
  listStyle: "none",
}));

export default function EmailSidebar({
  emails,
  allEmails,
  setAllEmails,
  mailDetailsOpen,
  setMailDetailsOpen,
  toggleComposeOpen,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const handleListItemClick = (path) => {
    setMailDetailsOpen(false);
    navigate(path);
  };

  const RenderBadge = (folder, color, bgcolor) => {
    if (!Array.isArray(allEmails)) return null;
    const unreadCount = allEmails.filter(
      (email) => email.folder === folder && !email.isRead
    ).length;
    if (unreadCount > 0) {
      return (
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            backgroundColor: `${bgcolor}`,
            color: `${color}`,
            width: 18,
            height: 18,
            marginLeft: "auto",
            fontSize: "12px",
            fontWeight: "500",
          }}
        >
          {unreadCount}
        </Box>
      );
    } else {
      return null;
    }
  };

  return (
    <Box
      sx={{
        zIndex: 9,
        display: "block",
        width: "350px",
        backgroundColor: "rgb(255, 255, 255)",
        color: "rgba(50, 71, 92, 0.87)",
        height: "100%",
      }}
    >
      <Box sx={{ p: 3, overflowY: "hidden" }}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "rgb(105, 108, 255)",
            boxShadow: "rgba(105, 108, 255, 0.4) 0px 2px 4px 0px",
            "&:hover": {
              backgroundColor: "rgb(105, 108, 255)",
              transform: "translateY(-2px)",
              transition: "all 0.2s ease-in-out 0s",
            },
          }}
          onClick={toggleComposeOpen}
        >
          Compose
        </Button>
      </Box>

      <Box sx={{ pt: 0, overflowY: "hidden" }}>
        <List component="div">
          <ListItemStyled
            onClick={() => handleListItemClick("/apps/email/inbox")}
            sx={{
              borderLeftColor:
                location.pathname === "/apps/email/inbox"
                  ? "rgb(105, 108, 255)"
                  : "transparent",
            }}
          >
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <MailOutlineIcon
                sx={{
                  color:
                    location.pathname === "/apps/email/inbox"
                      ? "rgb(105, 108, 255)"
                      : "rgba(50, 71, 92, 0.6)",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Inbox"
              primaryTypographyProps={{
                noWrap: true,
                sx: {
                  fontWeight: 500,
                  ...(location.pathname === "/apps/email/inbox"
                    ? {
                        color: "rgb(105, 108, 255)",
                      }
                    : { color: "rgba(50, 71, 92, 0.6)" }),
                },
              }}
            />
            {RenderBadge(
              "inbox",
              "rgb(105, 108, 255)",
              "rgba(105, 108, 255, 0.16)"
            )}
          </ListItemStyled>
          <ListItemStyled
            onClick={() => handleListItemClick("/apps/email/sent")}
            sx={{
              borderLeftColor:
                location.pathname === "/apps/email/sent"
                  ? "rgb(105, 108, 255)"
                  : "transparent",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "40px",
              }}
            >
              <SendIcon
                sx={{
                  color:
                    location.pathname === "/apps/email/sent"
                      ? "rgb(105, 108, 255)"
                      : "rgba(50, 71, 92, 0.6)",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Sent"
              primaryTypographyProps={{
                noWrap: true,
                sx: {
                  fontWeight: 500,
                  ...(location.pathname === "/apps/email/sent"
                    ? {
                        color: "rgb(105, 108, 255)",
                      }
                    : { color: "rgba(50, 71, 92, 0.6)" }),
                },
              }}
            />
          </ListItemStyled>
          <ListItemStyled
            onClick={() => handleListItemClick("/apps/email/draft")}
            sx={{
              borderLeftColor:
                location.pathname === "/apps/email/draft"
                  ? "rgb(105, 108, 255)"
                  : "transparent",
            }}
          >
            <ListItemIcon
              sx={{
                color:
                  location.pathname === "/apps/email/draft"
                    ? "rgb(105, 108, 255)"
                    : "rgba(50, 71, 92, 0.6)",
                minWidth: "40px",
              }}
            >
              <ModeEditIcon />
            </ListItemIcon>
            <ListItemText
              primary="Draft"
              primaryTypographyProps={{
                noWrap: true,
                sx: {
                  fontWeight: 500,
                  ...(location.pathname === "/apps/email/draft"
                    ? {
                        color: "rgb(105, 108, 255)",
                      }
                    : { color: "rgba(50, 71, 92, 0.6)" }),
                },
              }}
            />
            {RenderBadge(
              "draft",
              "rgb(255, 171, 0)",
              "rgba(255, 171, 0, 0.16)"
            )}
          </ListItemStyled>
          <ListItemStyled
            onClick={() => handleListItemClick("/apps/email/starred")}
            sx={{
              borderLeftColor:
                location.pathname === "/apps/email/starred"
                  ? "rgb(105, 108, 255)"
                  : "transparent",
            }}
          >
            <ListItemIcon
              sx={{
                color:
                  location.pathname === "/apps/email/starred"
                    ? "rgb(105, 108, 255)"
                    : "rgba(50, 71, 92, 0.6)",
                minWidth: "40px",
              }}
            >
              <StarBorderIcon />
            </ListItemIcon>
            <ListItemText
              primary="Starred"
              primaryTypographyProps={{
                noWrap: true,
                sx: {
                  fontWeight: 500,
                  ...(location.pathname === "/apps/email/starred"
                    ? {
                        color: "rgb(105, 108, 255)",
                      }
                    : { color: "rgba(50, 71, 92, 0.6)" }),
                },
              }}
            />
          </ListItemStyled>
          <ListItemStyled
            onClick={() => handleListItemClick("/apps/email/spam")}
            sx={{
              borderLeftColor:
                location.pathname === "/apps/email/spam"
                  ? "rgb(105, 108, 255)"
                  : "transparent",
            }}
          >
            <ListItemIcon
              sx={{
                color:
                  location.pathname === "/apps/email/spam"
                    ? "rgb(105, 108, 255)"
                    : "rgba(50, 71, 92, 0.6)",
                minWidth: "40px",
              }}
            >
              <ReportGmailerrorredIcon />
            </ListItemIcon>
            <ListItemText
              primary="Spam"
              primaryTypographyProps={{
                noWrap: true,
                sx: {
                  fontWeight: 500,
                  ...(location.pathname === "/apps/email/spam"
                    ? {
                        color: "rgb(105, 108, 255)",
                      }
                    : { color: "rgba(50, 71, 92, 0.6)" }),
                },
              }}
            />
            {RenderBadge("spam", "rgb(255, 62, 29)", "rgba(255, 62, 29, 0.16)")}
          </ListItemStyled>
          <ListItemStyled
            onClick={() => handleListItemClick("/apps/email/trash")}
            sx={{
              borderLeftColor:
                location.pathname === "/apps/email/trash"
                  ? "rgb(105, 108, 255)"
                  : "transparent",
            }}
          >
            <ListItemIcon
              sx={{
                color:
                  location.pathname === "/apps/email/trash"
                    ? "rgb(105, 108, 255)"
                    : "rgba(50, 71, 92, 0.6)",
                minWidth: "40px",
              }}
            >
              <DeleteOutlineIcon />
            </ListItemIcon>
            <ListItemText
              primary="Trash"
              primaryTypographyProps={{
                noWrap: true,
                sx: {
                  fontWeight: 500,
                  ...(location.pathname === "/apps/email/trash"
                    ? {
                        color: "rgb(105, 108, 255)",
                      }
                    : { color: "rgba(50, 71, 92, 0.6)" }),
                },
              }}
            />
          </ListItemStyled>
        </List>
        <Typography
          component="h6"
          variant="caption"
          sx={{
            mx: 6,
            mt: 4,
            mb: 0,
            color: "text.disabled",
            letterSpacing: "0.21px",
            textTransform: "uppercase",
            marginLeft: "28px",
          }}
        >
          Labels
        </Typography>
        <List component="div">
          <ListItemStyled
            onClick={() => handleListItemClick("/apps/email/label/personal")}
            sx={{
              borderLeftColor:
                location.pathname === "/apps/email/label/personal"
                  ? "rgb(105, 108, 255)"
                  : "transparent",
            }}
          >
            <ListItemIcon
              sx={{
                mr: 3.5,
                "& svg": { color: "rgb(113, 221, 55)" },
                minWidth: "35px",
                marginRight: "0px",
              }}
            >
              <FiberManualRecordIcon fontSize="0.75rem" />
            </ListItemIcon>
            <ListItemText
              primary="Personal"
              primaryTypographyProps={{
                noWrap: true,
                sx: {
                  fontWeight: 500,
                  ...(location.pathname === "/apps/email/label/personal"
                    ? {
                        color: "rgb(105, 108, 255)",
                      }
                    : { color: "rgba(50, 71, 92, 0.6)" }),
                },
              }}
            />
          </ListItemStyled>
          <ListItemStyled
            onClick={() => handleListItemClick("/apps/email/label/company")}
            sx={{
              borderLeftColor:
                location.pathname === "/apps/email/label/company"
                  ? "rgb(105, 108, 255)"
                  : "transparent",
            }}
          >
            <ListItemIcon
              sx={{
                mr: 3.5,
                "& svg": { color: "rgb(105, 108, 255)" },
                minWidth: "35px",
                marginRight: "0px",
              }}
            >
              <FiberManualRecordIcon fontSize="0.75rem" />
            </ListItemIcon>
            <ListItemText
              primary="Company"
              primaryTypographyProps={{
                noWrap: true,
                sx: {
                  fontWeight: 500,
                  ...(location.pathname === "/apps/email/label/company"
                    ? {
                        color: "rgb(105, 108, 255)",
                      }
                    : { color: "rgba(50, 71, 92, 0.6)" }),
                },
              }}
            />
          </ListItemStyled>
          <ListItemStyled
            onClick={() => handleListItemClick("/apps/email/label/important")}
            sx={{
              borderLeftColor:
                location.pathname === "/apps/email/label/important"
                  ? "rgb(105, 108, 255)"
                  : "transparent",
            }}
          >
            <ListItemIcon
              sx={{
                mr: 3.5,
                "& svg": { color: "rgb(255, 171, 0)" },
                minWidth: "35px",
                marginRight: "0px",
              }}
            >
              <FiberManualRecordIcon fontSize="0.75rem" />
            </ListItemIcon>
            <ListItemText
              primary="Important"
              primaryTypographyProps={{
                noWrap: true,
                sx: {
                  fontWeight: 500,
                  ...(location.pathname === "/apps/email/label/important"
                    ? {
                        color: "rgb(105, 108, 255)",
                      }
                    : { color: "rgba(50, 71, 92, 0.6)" }),
                },
              }}
            />
          </ListItemStyled>
          <ListItemStyled
            onClick={() => handleListItemClick("/apps/email/label/private")}
            sx={{
              borderLeftColor:
                location.pathname === "/apps/email/label/private"
                  ? "rgb(105, 108, 255)"
                  : "transparent",
            }}
          >
            <ListItemIcon
              sx={{
                mr: 3.5,
                "& svg": { color: "rgb(255, 62, 29)" },
                minWidth: "35px",
                marginRight: "0px",
              }}
            >
              <FiberManualRecordIcon fontSize="0.75rem" />
            </ListItemIcon>
            <ListItemText
              primary="Private"
              primaryTypographyProps={{
                noWrap: true,
                sx: {
                  fontWeight: 500,
                  ...(location.pathname === "/apps/email/label/private"
                    ? {
                        color: "rgb(105, 108, 255)",
                      }
                    : { color: "rgba(50, 71, 92, 0.6)" }),
                },
              }}
            />
          </ListItemStyled>
        </List>
      </Box>
    </Box>
  );
}
