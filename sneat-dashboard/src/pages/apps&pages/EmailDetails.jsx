// ** React Imports
import { Fragment, useState } from "react";
import axiosInstance from "../../request";

// ** MUI Imports
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";

// ** Icon Imports
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandIcon from "@mui/icons-material/Expand";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import AttachmentIcon from "@mui/icons-material/Attachment";
import DetailsMenu from "../../Components/apps/DetailsMenu";
import { Menu, MenuItem } from "@mui/material";

// ** CSS styles for animation
const emailDetailsStyle = {
  transition: "transform 0.5s ease-in-out", // smooth slide animation
  transform: "translateX(100%)", // start off-screen to the right
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
};

const emailDetailsOpenStyle = {
  transform: "translateX(0)", // slide into view
  width: "100%",
  overflow: "auto",
  display: "block",
};

const HiddenReplyBack = styled(Box)(({ theme }) => ({
  height: 11,
  width: "90%",
  opacity: 0.5,
  borderWidth: 1,
  borderBottom: 0,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  borderStyle: "solid",
  borderColor: theme.palette.divider,
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

const HiddenReplyFront = styled(Box)(({ theme }) => ({
  height: 12,
  width: "95%",
  opacity: 0.75,
  borderWidth: 1,
  borderBottom: 0,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  borderStyle: "solid",
  borderColor: theme.palette.divider,
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

const EmailDetails = (props) => {
  // ** Props
  const {
    pathToEmails,
    currentMail,
    setCurrentMail,
    emailsSelected,
    foldersObj,
    labelColors,
    routeParams,
    handleStarMail,
    handleLabelUpdate,
    handleFolderUpdate,
    mailDetailsOpen,
    setMailDetailsOpen,
  } = props;

  // ** State
  const [showReplies, setShowReplies] = useState(false);

  const handleMoveToTrash = async () => {
    try {
      await axiosInstance.post("/updateMail", {
        emailIds: [currentMail.id],
        dataToUpdate: { folder: "trash" },
      });
      await pathToEmails();
    } catch (error) {
      console.error("Error updating mail star status:", error);
    }
    setMailDetailsOpen(false);
  };

  const handleReadMail = async () => {
    try {
      await axiosInstance.post("/updateMail", {
        emailIds: [currentMail.id],
        dataToUpdate: { isRead: !currentMail.isRead },
      });
      await pathToEmails();
    } catch (error) {
      console.error("Error updating mail star status:", error);
    }
    setMailDetailsOpen(false);
  };
  const paginateMail = (orient, id) => {
    const index = emailsSelected.findIndex((v) => v.id === id);
    if (index !== -1) {
      // 确保找到了正确的索引
      if (orient === "next" && index < emailsSelected.length - 1) {
        setCurrentMail(emailsSelected[index + 1]);
      } else if (orient === "previous" && index > 0) {
        setCurrentMail(emailsSelected[index - 1]);
      }
    }
  };

  // Helper function to convert hex color to rgba with transparency
  const rgbToRgba = (rgb, alpha) => {
    const [r, g, b] = rgb.match(/\d+/g);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };
  const CustomListItemIcon = styled(ListItemIcon)(({ theme }) => ({
    minWidth: "32px", // 在这里设置minWidth
  }));

  const [anchorEl, setAnchorEl] = useState(null);
  const handleLabelsMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      hideBackdrop
      direction="right"
      // show={mailDetailsOpen}
      // sx={{ zIndex: 3, width: "100%", overflow: "hidden" }}
      sx={{
        zIndex: 3,
        ...emailDetailsStyle, // Apply initial animation style
        ...(mailDetailsOpen ? emailDetailsOpenStyle : {}), // Apply open animation style if open
      }}
      onClose={() => {
        setMailDetailsOpen(false);
        setShowReplies(false);
      }}
    >
      {currentMail ? (
        <Fragment>
          <Box
            sx={{
              px: 2.6,
              py: [2.25, 2],
              backgroundColor: "background.paper",
              borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
              color: "rgba(50, 71, 92, 0.87)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: ["flex-start", "center"],
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  overflow: "hidden",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                <IconButton
                  size="small"
                  sx={{ mr: 3.5 }}
                  onClick={() => {
                    setMailDetailsOpen(false);
                    setShowReplies(false);
                  }}
                >
                  <ArrowBackIosNewIcon fontSize="2rem" />
                </IconButton>
                <Box
                  sx={{
                    display: "flex",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    flexDirection: ["column", "row"],
                  }}
                >
                  <Typography noWrap sx={{ mr: 2, fontWeight: 500 }}>
                    {currentMail.subject}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      // justifyContent: "space-between",
                    }}
                  >
                    {currentMail.labels && currentMail.labels.length
                      ? currentMail.labels.map((label) => {
                          const backgroundColor = rgbToRgba(
                            labelColors[label],
                            0.16
                          );
                          const fontColor = labelColors[label];
                          return (
                            <Box
                              key={label}
                              sx={{
                                backgroundColor: backgroundColor,
                                padding: 0.5,
                                borderRadius: 1,
                                margin: "0px 5px",
                              }}
                            >
                              <Typography
                                sx={{
                                  color: fontColor,
                                  fontSize: "13px",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                }}
                              >
                                {label.toUpperCase()}
                              </Typography>
                            </Box>
                          );
                        })
                      : null}
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <IconButton
                  size="small"
                  disabled={
                    emailsSelected.findIndex((v) => v.id === currentMail.id) ==
                    0
                  }
                  sx={{
                    color: currentMail.hasPreviousMail
                      ? "text.primary"
                      : "text.secondary",
                  }}
                  onClick={() => paginateMail("previous", currentMail.id)}
                >
                  <ChevronLeftIcon />
                </IconButton>
                <IconButton
                  size="small"
                  disabled={
                    emailsSelected.findIndex((v) => v.id === currentMail.id) ===
                    emailsSelected.length - 1
                  }
                  sx={{
                    color: currentMail.hasNextMail
                      ? "text.primary"
                      : "text.secondary",
                  }}
                  onClick={() => paginateMail("next", currentMail.id)}
                >
                  <ChevronRightIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "background.paper",
              p: (theme) => theme.spacing(1.5, 2, 1.5, 2),
              borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {routeParams && routeParams.folder !== "trash" ? (
                  <IconButton size="small" onClick={handleMoveToTrash}>
                    <DeleteOutlineIcon
                      sx={{ color: "rgba(50, 71, 92, 0.54)" }}
                    />
                  </IconButton>
                ) : null}

                <IconButton size="small" onClick={handleReadMail}>
                  <MailOutlineIcon sx={{ color: "rgba(50, 71, 92, 0.54)" }} />
                </IconButton>
                <IconButton size="small">
                  <FolderOpenIcon sx={{ color: "rgba(50, 71, 92, 0.54)" }} />
                </IconButton>
                <Box>
                  <IconButton size="small" onClick={handleLabelsMenu}>
                    <LabelOutlinedIcon
                      sx={{ color: "rgba(50, 71, 92, 0.54)" }}
                    />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    {Object.entries(labelColors).map(([label, color]) => (
                      <MenuItem
                        key={label}
                        onClick={() => {
                          handleLabelUpdate(currentMail.id, label);
                          handleClose();
                          setMailDetailsOpen(false);
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <FiberManualRecordIcon
                            sx={{ color, marginRight: 1, width: "0.9rem" }}
                          />
                          <Typography>
                            {label.charAt(0).toUpperCase() + label.slice(1)}
                          </Typography>
                        </Box>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
              <div>
                <IconButton
                  size="small"
                  onClick={(e) => {
                    handleStarMail(e, currentMail.id, !currentMail.isStarred);
                  }}
                  sx={{
                    color: currentMail.isStarred
                      ? "rgb(255, 171, 0)"
                      : "rgba(50, 71, 92, 0.6)",
                  }}
                >
                  <StarBorderIcon />
                </IconButton>
                {currentMail.replies?.length ? (
                  <IconButton
                    size="small"
                    onClick={() =>
                      showReplies ? setShowReplies(false) : setShowReplies(true)
                    }
                  >
                    {showReplies ? <UnfoldLessIcon /> : <ExpandIcon />}
                  </IconButton>
                ) : null}
                <IconButton size="small">
                  <MoreVertIcon sx={{ color: "rgba(50, 71, 92, 0.54)" }} />
                </IconButton>
              </div>
            </Box>
          </Box>
          <Box
            sx={{
              height: "calc(100% - 7.75rem)",
              backgroundColor: "#f5f5f9",
            }}
          >
            {/* <ScrollWrapper> */}
            <Box
              sx={{
                py: 2,
                px: 2.5,
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                color: "rgba(50, 71, 92, 0.87)",
                backgroundColor: "#f5f5f9",
              }}
            >
              {currentMail.replies?.length && !showReplies ? (
                <Typography
                  onClick={() => setShowReplies(true)}
                  sx={{ mt: 1.5, mb: 5, cursor: "pointer" }}
                >
                  {currentMail.replies.length} Earlier Messages
                </Typography>
              ) : null}

              {showReplies
                ? currentMail.replies?.map((reply, index) => {
                    return (
                      <Box
                        key={index}
                        sx={{
                          mb: 4,
                          boxShadow: 6,
                          width: "100%",
                          borderRadius: 1,
                          backgroundColor: "#f5f5f9",
                          border: (theme) =>
                            `1px solid ${theme.palette.divider}`,
                        }}
                      >
                        <Box sx={{ padding: "20px !important" }}>
                          <Box
                            sx={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Avatar
                                alt={reply.from.name}
                                src={reply.from.avatar}
                                sx={{
                                  width: "2.375rem",
                                  height: "2.375rem",
                                  mr: 3,
                                }}
                              />
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <Typography sx={{ fontWeight: 500 }}>
                                  {reply.from.name}
                                </Typography>
                                <Typography variant="body2">
                                  {reply.from.email}
                                </Typography>
                              </Box>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Typography variant="caption" sx={{ mr: 3 }}>
                                {new Date(reply.time).toDateString()}{" "}
                                {new Date(reply.time).toLocaleTimeString(
                                  "en-US",
                                  {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: true,
                                  }
                                )}
                              </Typography>
                              {currentMail.attachments.length ? (
                                <IconButton>
                                  <AttachmentIcon
                                    sx={{ color: "rgba(50, 71, 92, 0.54)" }}
                                  />
                                </IconButton>
                              ) : null}
                            </Box>
                          </Box>
                        </Box>
                        <Divider sx={{ m: "0 !important" }} />
                        <Box sx={{ p: 2.5, pt: 0 }}>
                          <Box
                            dangerouslySetInnerHTML={{
                              __html: reply.message,
                            }}
                          />
                        </Box>
                        {reply.attachments.length ? (
                          <Fragment>
                            <Divider sx={{ m: "0 !important" }} />
                            <Box sx={{ p: 2.5 }}>
                              <Typography variant="body2">
                                Attachments
                              </Typography>
                              <List>
                                {reply.attachments.map((item) => {
                                  return (
                                    <ListItem
                                      disableGutters
                                      key={item.fileName}
                                    >
                                      <CustomListItemIcon>
                                        <img
                                          src={item.thumbnail}
                                          alt={item.fileName}
                                          width="24"
                                          height="24"
                                        />
                                      </CustomListItemIcon>
                                      <Typography variant="caption">
                                        {item.fileName}
                                      </Typography>
                                    </ListItem>
                                  );
                                })}
                              </List>
                            </Box>
                          </Fragment>
                        ) : null}
                      </Box>
                    );
                  })
                : null}

              {currentMail.replies?.length && !showReplies ? (
                <Fragment>
                  <HiddenReplyBack
                    sx={{ cursor: "pointer" }}
                    onClick={() => setShowReplies(true)}
                  />
                  <HiddenReplyFront
                    sx={{ cursor: "pointer" }}
                    onClick={() => setShowReplies(true)}
                  />
                </Fragment>
              ) : null}

              <Box
                sx={{
                  mb: 2.5,
                  width: "100%",
                  borderRadius: 1,
                  overflow: "visible",
                  position: "relative",
                  backgroundColor: "background.paper",
                  // boxShadow: settings.skin === "bordered" ? 0 : 6,
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                }}
              >
                <Box sx={{ p: 2.5 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        alt={currentMail.from.name}
                        src={currentMail.from.avatar}
                        sx={{ width: "2.375rem", height: "2.375rem", mr: 3 }}
                      />
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography sx={{ fontWeight: 500 }}>
                          {currentMail.from.name}
                        </Typography>
                        <Typography variant="body2">
                          {currentMail.from.email}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography variant="caption" sx={{ mr: 3 }}>
                        {new Date(currentMail.time).toDateString()}{" "}
                        {new Date(currentMail.time).toLocaleTimeString(
                          "en-US",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          }
                        )}
                      </Typography>
                      {currentMail.attachments.length ? (
                        <IconButton size="small">
                          <AttachmentIcon
                            sx={{ color: "rgba(50, 71, 92, 0.54)" }}
                          />
                        </IconButton>
                      ) : null}
                      <DetailsMenu />
                      {/* <OptionsMenu
                        iconButtonProps={{ size: "small" }}
                        options={[
                          {
                            text: "Reply",
                            menuItemProps: { sx: { "& svg": { mr: 2 } } },
                            icon: <Icon icon="bx:share" fontSize={20} />,
                          },
                          {
                            text: "Forward",
                            menuItemProps: { sx: { "& svg": { mr: 2 } } },
                            icon: (
                              <Icon icon="mdi:reply-outline" fontSize={20} />
                            ),
                          },
                        ]}
                      /> */}
                    </Box>
                  </Box>
                </Box>
                <Divider sx={{ m: "0 !important" }} />
                <Box sx={{ p: 2.5, pt: 0 }}>
                  <Box
                    dangerouslySetInnerHTML={{ __html: currentMail.message }}
                  />
                </Box>
                {currentMail.attachments.length ? (
                  <Fragment>
                    <Divider sx={{ m: "0 !important" }} />
                    <Box sx={{ p: 2.5 }}>
                      <Typography variant="body2">Attachments</Typography>
                      <List>
                        {currentMail.attachments.map((item) => {
                          return (
                            <ListItem disableGutters key={item.fileName}>
                              <CustomListItemIcon>
                                <img
                                  src={item.thumbnail}
                                  alt={item.fileName}
                                  width="24"
                                  height="24"
                                />
                              </CustomListItemIcon>
                              <Typography variant="caption">
                                {item.fileName}
                              </Typography>
                            </ListItem>
                          );
                        })}
                      </List>
                    </Box>
                  </Fragment>
                ) : null}
              </Box>

              <Box
                sx={{
                  p: 2.5,
                  width: "100%",
                  borderRadius: 1,
                  border: "1px solid",
                  borderColor: "divider",
                  backgroundColor: "background.paper",
                  // boxShadow: settings.skin === "bordered" ? 0 : 6,
                }}
              >
                <Typography sx={{ fontWeight: 500 }}>
                  Click here to{" "}
                  <Typography
                    component="span"
                    sx={{
                      cursor: "pointer",
                      color: "rgb(105, 108, 255)",
                      fontWeight: "inherit",
                    }}
                  >
                    Reply
                  </Typography>{" "}
                  or{" "}
                  <Typography
                    component="span"
                    sx={{
                      cursor: "pointer",
                      color: "rgb(105, 108, 255)",
                      fontWeight: "inherit",
                    }}
                  >
                    Forward
                  </Typography>
                </Typography>
              </Box>
            </Box>
            {/* </ScrollWrapper> */}
          </Box>
        </Fragment>
      ) : null}
    </Box>
  );
};

export default EmailDetails;
