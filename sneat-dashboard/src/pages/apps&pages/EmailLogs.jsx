// ** React Imports
import { Fragment, useEffect, useState } from "react";
import EmailDetails from "./EmailDetails";
import { Menu, MenuItem } from "@mui/material";

// ** MUI Imports
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Input from "@mui/material/Input";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import ListItem from "@mui/material/ListItem";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

/* MUI Icon Imports */
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SendIcon from "@mui/icons-material/Send";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import DraftsIcon from "@mui/icons-material/Drafts";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import axiosInstance from "../../request";

// ** Email App Component Imports
// import { setTimeout } from "timers";
// import EmailDetails from "./EmailDetails";
import { useLocation, useParams } from "react-router-dom";
import { Login } from "@mui/icons-material";
import axios from "axios";

const MailItem = styled(ListItem)(({ theme }) => ({
  cursor: "pointer",
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  justifyContent: "space-between",
  transition:
    "border 0.15s ease-in-out, transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
  "&:not(:first-child)": {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  "&:hover": {
    zIndex: 2,
    boxShadow: theme.shadows[3],
    transform: "translateY(-2px)",
    "& .mail-actions": { display: "flex" },
    "& .mail-info-right": { display: "none" },
    "& + .MuiListItem-root": { borderColor: "transparent" },
  },
  [theme.breakpoints.up("xs")]: {
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
  },
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
}));

const labelColors = {
  private: "rgb(255, 62, 29)",
  personal: "rgb(113, 221, 55)",
  company: "rgb(105, 108, 255)",
  important: "rgb(255, 171, 0)",
};

const EmailLogs = (props) => {
  // ** Props
  const {
    emails,
    pathToEmails,
    mailDetailsOpen,
    setMailDetailsOpen,
    allEmails,
    setAllEmails,
  } = props;

  // ** State
  const [refresh, setRefresh] = useState(false);
  const routeParams = useParams();
  let [currentMail, setCurrentMail] = useState();
  const [query, setQuery] = useState("");
  // const [mailDetailsOpen, setMailDetailsOpen] = useState(false);

  // ** Vars
  const folders = [
    {
      name: "draft",
      icon: (
        <Box component="span" sx={{ mr: 2, display: "flex" }}>
          <ModeEditIcon fontSize={20} />
        </Box>
      ),
    },
    {
      name: "spam",
      icon: (
        <Box component="span" sx={{ mr: 2, display: "flex" }}>
          <ReportGmailerrorredIcon fontSize={20} />
        </Box>
      ),
    },
    {
      name: "trash",
      icon: (
        <Box component="span" sx={{ mr: 2, display: "flex" }}>
          <DeleteOutlineIcon fontSize={20} />
        </Box>
      ),
    },
    {
      name: "inbox",
      icon: (
        <Box component="span" sx={{ mr: 2, display: "flex" }}>
          <MailOutlineIcon fontSize={20} />
        </Box>
      ),
    },
  ];

  const foldersConfig = {
    draft: {
      name: "draft",
      icon: (
        <Box component="span" sx={{ mr: 2, display: "flex" }}>
          <ModeEditIcon />
        </Box>
      ),
    },
    spam: {
      name: "spam",
      icon: (
        <Box component="span" sx={{ mr: 2, display: "flex" }}>
          <ReportGmailerrorredIcon />
        </Box>
      ),
    },
    trash: {
      name: "trash",
      icon: (
        <Box component="span" sx={{ mr: 2, display: "flex" }}>
          <DeleteOutlineIcon />
        </Box>
      ),
    },
    inbox: {
      name: "inbox",
      icon: (
        <Box component="span" sx={{ mr: 2, display: "flex" }}>
          <MailOutlineIcon />
        </Box>
      ),
    },
  };

  const foldersObj = {
    inbox: [foldersConfig.spam, foldersConfig.trash],
    sent: [foldersConfig.trash],
    draft: [foldersConfig.trash],
    spam: [foldersConfig.inbox, foldersConfig.trash],
    trash: [foldersConfig.inbox, foldersConfig.spam],
  };

  const [emailsSelected, setEmailsSelected] = useState(props.emails);
  useEffect(() => {
    setEmailsSelected(props.emails);
  }, [props.emails]);

  //刷新方面怎么写？？
  // useEffect(() => {
  //   console.log("useEffect executed");

  //   const resetDatabase = async () => {
  //     try {
  //       const response = await axios.get(baseUrl + "/reset");
  //       console.log(response); // 检查 response.data 是否存在
  //     } catch (error) {
  //       console.error("Error resetting database:", error.message);
  //     }
  //   };
  //   resetDatabase();
  //   return () => {
  //     console.log("Cleanup function called");
  //   };
  //   // 如果有需要清理的内容，在这里进行清理
  // }, [emailsSelected]);

  const handleStarMail = async (e, id, value) => {
    e.stopPropagation();
    try {
      await axiosInstance.post("/updateMail", {
        emailIds: [id],
        dataToUpdate: { isStarred: value },
      });
      await pathToEmails();
    } catch (error) {
      console.error("Error updating mail star status:", error);
    }
    await axiosInstance
      .get(`/id/${id}`)
      .then((res) => {
        console.log(res.data[0]);
        setCurrentMail(res.data[0]);
      })
      .catch((err) => {
        console.error("Error: ", err.message);
      });
  };

  const handleReadMail = async (e, ids, value) => {
    e.stopPropagation();
    console.log(ids, value);
    // 确保 ids 是一个数组
    const emailIds = Array.isArray(ids) ? ids : [ids];
    try {
      await axiosInstance.post("/updateMail", {
        emailIds: emailIds,
        dataToUpdate: { isRead: value, isSelected: false },
      });
      await pathToEmails();
    } catch (error) {
      console.error("Error updating mail read status:", error);
    }
    await axiosInstance
      .get("/")
      .then((res) => {
        console.log(res.data);
        setAllEmails(res.data);
      })
      .catch((err) => {
        console.error("Error: ", err.message);
      });
  };
  const handleDelete = async (e, id, folderValue) => {
    e.stopPropagation();
    try {
      await axiosInstance.post("/updateMail", {
        emailIds: [id],
        dataToUpdate: { folder: folderValue },
      });
      await pathToEmails();
    } catch (error) {
      console.error("Error updating mail star status:", error);
    }
  };
  const handleLabelUpdate = async (emailIds, label) => {
    try {
      const ids = Array.isArray(emailIds) ? emailIds : [emailIds];
      // 检查标签是否已经存在
      const emailsToUpdate = emailsSelected.filter((email) =>
        ids.includes(email.id)
      );
      const labelExists = emailsToUpdate.every(
        (email) => email.labels && email.labels.includes(label)
      );

      const dataToUpdate = labelExists
        ? { labels: emailsToUpdate[0].labels.filter((l) => l !== label) }
        : {
            labels: emailsToUpdate[0].labels
              ? [...emailsToUpdate[0].labels, label]
              : [label],
          };
      // 调用后端接口更新数据库中的邮件标签
      await axiosInstance.post("/updateMail", {
        emailIds: ids,
        dataToUpdate: { labels: dataToUpdate.labels }, // 直接设置更新的标签数组
      });
      await pathToEmails();
    } catch (error) {
      console.error("Error updating mail label:", error);
    }
  };

  const handleFolderUpdate = async (e, id, folderValue) => {
    e.stopPropagation();
    try {
      await axiosInstance.post("/updateMail", {
        emailIds: [id],
        dataToUpdate: { folder: folderValue },
      });
      await pathToEmails();
    } catch (error) {
      console.error("Error updating mail star status:", error);
    }
  };
  const handleSelectMail = async (id, value) => {
    try {
      await axiosInstance.post("/updateMail", {
        emailIds: [id],
        dataToUpdate: { isSelected: value },
      });
      await pathToEmails();
    } catch (error) {
      console.error("Error updating mail star status:", error);
    }
  };
  const handleSelectAllMail = async () => {
    try {
      // 判断当前是否有未选中的邮件
      const isSelecting = emailsSelected.some((email) => !email.isSelected);

      // 获取所有邮件的ID
      const emailIds = emailsSelected.map((email) => email.id);

      // 更新数据库中的 `isSelected` 字段
      await axiosInstance.post("/updateMail", {
        emailIds: emailIds,
        dataToUpdate: { isSelected: isSelecting },
      });
      await pathToEmails();
    } catch (error) {
      console.error("Error updating mail star status:", error);
    }
  };

  const handleMoveToTrash = async () => {
    try {
      // 获取所有选中的邮件的 ID
      const selectedEmailIds = emailsSelected
        .filter((email) => email.isSelected)
        .map((email) => email.id);

      if (selectedEmailIds.length > 0) {
        // 更新数据库
        await axiosInstance.post("/updateMail", {
          emailIds: selectedEmailIds,
          dataToUpdate: { folder: "trash", isSelected: false },
        });
        await pathToEmails();

        console.log("选中的邮件已移至垃圾箱");
      }
    } catch (error) {
      console.error("Error moving mails to trash:", error);
    }
  };
  const handleRefreshMailsClick = () => {
    setRefresh(true);
    setTimeout(() => setRefresh(false), 1000);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleLabelsMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMailLabels = (arr) => {
    return arr.map((label, index) => {
      return (
        <Box
          key={index}
          component="span"
          sx={{ mr: 2, color: `${labelColors[label]}` }}
        >
          <FiberManualRecordIcon sx={{ width: "15px" }} />
        </Box>
      );
    });
  };
  const handleMailDetail = (mail) => {
    setCurrentMail(mail);
    setMailDetailsOpen(true);
    console.log(mailDetailsOpen);
  };

  useEffect(() => {
    const endpoint = routeParams.folder
      ? `/query/${routeParams.folder}/${query}`
      : `/query/${routeParams.label}/${query}`;
    axiosInstance
      .get(endpoint)
      .then((res) => {
        console.log(res.data);
        setEmailsSelected(res.data);
      })
      .catch((err) => {
        console.error("Error: ", err.message);
      });
  }, [query]);

  const emailDetailsProps = {
    handleStarMail,
    handleFolderUpdate,
    handleLabelUpdate,
    labelColors,
    foldersObj,
    currentMail,
    setCurrentMail,
    mailDetailsOpen,
    setMailDetailsOpen,
    routeParams,
    pathToEmails,
    emailsSelected,
  };
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        "& .ps__rail-y": { zIndex: 5 },
        borderLeft: "1px solid rgba(50, 71, 92, 0.12)", // 添加竖线
      }}
    >
      <Box sx={{ height: "100%", backgroundColor: "background.paper" }}>
        <Box sx={{ px: 2, py: 1.8 }}>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <SearchIcon
              sx={{
                width: "1em",
                height: "1em",
                color: "rgba(50, 71, 92, 0.38)",
                marginRight: "10px",
              }}
            />
            <Input
              value={query}
              placeholder="Search mail"
              onChange={(e) => setQuery(e.target.value)}
              sx={{ width: "100%", "&:before, &:after": { display: "none" } }}
            />
          </Box>
        </Box>
        <Divider sx={{ m: "0 !important" }} />
        <Box sx={{ py: 1.8, px: { xs: 2.5, sm: 1 } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {emailsSelected && emailsSelected.length ? (
                <Checkbox
                  onClick={(e) => e.stopPropagation()}
                  onChange={() => handleSelectAllMail()}
                  checked={emailsSelected.every((email) => email.isSelected)}
                  indeterminate={
                    emailsSelected.some((email) => email.isSelected) &&
                    !emailsSelected.every((email) => email.isSelected)
                  }
                  sx={{
                    color: "rgba(50, 71, 92, 0.3)",
                    border: "0px",
                    margin: "0px",
                    borderRadius: "50%",
                    padding: "0px",
                    marginLeft: "15px",
                    marginRight: "10px",
                    "&.Mui-checked": {
                      color: "rgb(105, 108, 255)",
                    },
                    "&.MuiCheckbox-indeterminate": {
                      color: "rgb(105, 108, 255)",
                    },
                  }}
                />
              ) : null}
              {emailsSelected &&
              emailsSelected.length &&
              emailsSelected.some((email) => email.isSelected) ? (
                <Fragment>
                  {routeParams && routeParams.folder !== "trash" ? (
                    <IconButton onClick={handleMoveToTrash}>
                      <DeleteOutlineIcon
                        sx={{ color: "rgba(50, 71, 92, 0.54)" }}
                      />{" "}
                    </IconButton>
                  ) : null}

                  <IconButton
                    onClick={(e) => {
                      const selectedEmails = emailsSelected.filter(
                        (email) => email.isSelected
                      );
                      const selectedEmailIds = selectedEmails.map(
                        (email) => email.id
                      );
                      const toggleReadValue = !selectedEmails.every(
                        (email) => email.isRead
                      );
                      handleReadMail(e, selectedEmailIds, toggleReadValue);
                    }}
                  >
                    <MailOutlineIcon sx={{ color: "rgba(50, 71, 92, 0.54)" }} />
                  </IconButton>
                  <IconButton>
                    <FolderOpenIcon sx={{ color: "rgba(50, 71, 92, 0.54)" }} />
                  </IconButton>
                  <Box>
                    <IconButton onClick={handleLabelsMenu}>
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
                            const selectedEmails = emailsSelected.filter(
                              (email) => email.isSelected
                            );
                            const selectedEmailIds = selectedEmails.map(
                              (email) => email.id
                            );
                            handleLabelUpdate(selectedEmailIds, label);
                            handleClose();
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
                  {/* <OptionsMenu
                    leftAlignMenu
                    // options={handleFoldersMenu()}
                    icon={<FolderOpenIcon />}
                  />
                  <OptionsMenu
                    leftAlignMenu
                    // options={handleLabelsMenu()}
                    icon={<LabelImportantIcon />}
                  /> */}
                </Fragment>
              ) : null}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton size="small" onClick={handleRefreshMailsClick}>
                <RestartAltIcon sx={{ color: "rgba(50, 71, 92, 0.54)" }} />
              </IconButton>
              <Box>
                <IconButton size="small">
                  <MoreVertIcon sx={{ color: "rgba(50, 71, 92, 0.54)" }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ m: "0 !important" }} />
        <Box
          sx={{
            p: 0,
            position: "relative",
            overflowX: "hidden",
            height: "calc(100% - 7.25rem)",
          }}
        >
          {emailsSelected && emailsSelected.length ? (
            <List sx={{ p: 0 }}>
              {emailsSelected.map((mail) => {
                return (
                  <MailItem
                    key={mail.id}
                    sx={{
                      backgroundColor: mail.isRead
                        ? "action.hover"
                        : "background.paper",
                      padding: "10px 0px  !important",
                      paddingRight: "30px !important",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      // setMailDetailsOpen(true);
                      //   dispatch(getCurrentMail(mail.id));
                      handleMailDetail(mail);
                      // console.log("mailDetailsOpen:", mailDetailsOpen);
                      handleReadMail(e, mail.id, true);
                      //   setTimeout(() => {
                      //     dispatch(handleSelectAllMail(false));
                      //   }, 600);
                      // console.log("Mail item clicked:", mail); // 调试输出
                      // setCurrentMail(mail); // 设置当前邮件
                      // setMailDetailsOpen(true); // 打开邮件详情
                      // handleReadMail(e, mail.id, true); // 将邮件标记为已读
                      // console.log(mailDetailsOpen);
                    }}
                  >
                    <Box
                      sx={{
                        mr: 4,
                        display: "flex",
                        overflow: "hidden",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox
                        onClick={(e) => e.stopPropagation()}
                        onChange={() =>
                          handleSelectMail(mail.id, !mail.isSelected)
                        }
                        checked={mail.isSelected || false}
                        sx={{
                          marginLeft: "15px",
                          color: "rgba(50, 71, 92, 0.3)",
                          "&.Mui-checked": {
                            color: "rgb(105, 108, 255)",
                          },
                        }}
                      />
                      <IconButton
                        size="small"
                        onClick={(e) =>
                          handleStarMail(e, mail.id, !mail.isStarred)
                        }
                        sx={{
                          mr: { xs: 0, sm: 3 },
                          color: mail.isStarred
                            ? "rgb(255, 171, 0)"
                            : "rgba(50, 71, 92, 0.6)",
                          "& svg": {
                            display: { xs: "none", sm: "block" },
                          },
                        }}
                      >
                        <StarBorderIcon />
                      </IconButton>
                      <Avatar
                        alt={mail.from.name}
                        src={mail.from.avatar}
                        sx={{
                          mr: 3,
                          width: "2rem",
                          height: "2rem",
                        }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          overflow: "hidden",
                          flexDirection: { xs: "column", sm: "row" },
                          alignItems: { xs: "flex-start", sm: "center" },
                        }}
                      >
                        <Typography
                          sx={{
                            mr: 4,
                            fontWeight: 500,
                            whiteSpace: "nowrap",

                            color: "rgba(50, 71, 92, 0.87)",
                            width: {
                              xs: "100%",
                              sm: "auto",
                            },
                            overflow: {
                              xs: "hidden",
                              sm: "unset",
                            },
                            textOverflow: {
                              xs: "ellipsis",
                              sm: "unset",
                            },
                          }}
                        >
                          {mail.from.name}
                        </Typography>
                        <Typography
                          noWrap
                          variant="body2"
                          sx={{ width: "100%", color: "rgba(50, 71, 92, 0.6)" }}
                        >
                          {mail.subject}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      className="mail-actions"
                      sx={{
                        display: "none",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      {mail.folder !== "trash" ? (
                        <Tooltip placement="top" title="Delete Mail">
                          <IconButton
                            onClick={(e) => {
                              handleDelete(e, mail.id, "trash");
                            }}
                          >
                            <DeleteOutlineIcon
                              sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                            />
                          </IconButton>
                        </Tooltip>
                      ) : null}

                      <Tooltip
                        placement="top"
                        title={mail.isRead ? "Unread Mail" : "Read Mail"}
                      >
                        <IconButton
                          onClick={(e) => {
                            handleReadMail(e, mail.id, !mail.isRead);
                          }}
                        >
                          {mail.isRead ? (
                            <MailOutlineIcon
                              sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                            />
                          ) : (
                            <DraftsIcon
                              sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                            />
                          )}
                        </IconButton>
                      </Tooltip>
                      {mail.folder !== "spam" ? (
                        <Tooltip placement="top" title="Move to Spam">
                          <IconButton
                            onClick={(e) => {
                              handleFolderUpdate(e, mail.id, "spam");
                            }}
                          >
                            <ReportGmailerrorredIcon
                              sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                            />
                          </IconButton>
                        </Tooltip>
                      ) : null}
                    </Box>
                    <Box
                      className="mail-info-right"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                        {renderMailLabels(mail.labels)}
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          minWidth: "50px",
                          textAlign: "right",
                          whiteSpace: "nowrap",
                          color: "text.disabled",
                        }}
                      >
                        {new Date(mail.time).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </Typography>
                    </Box>
                  </MailItem>
                );
              })}
            </List>
          ) : (
            <Box
              sx={{
                mt: 6,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "& svg": { mr: 2 },
              }}
            >
              <ErrorOutlineIcon />
              <Typography>No Mails Found</Typography>
            </Box>
          )}
          <Backdrop
            open={refresh}
            onClick={() => setRefresh(false)}
            sx={{
              zIndex: 5,
              position: "absolute",
              color: "common.white",
              backgroundColor: "action.disabledBackground",
            }}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Box>
      </Box>

      <EmailDetails {...emailDetailsProps} />
    </Box>
  );
};

export default EmailLogs;
