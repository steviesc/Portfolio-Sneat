// ** React Imports
import { Fragment, useEffect, useState } from "react";
import axiosInstance from "../../../request";

// ** MUI Imports
import Badge from "@mui/material/Badge";
import MuiAvatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

// ** Icon Imports
import SearchIcon from "@mui/icons-material/Search";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MenuIcon from "@mui/icons-material/Menu";

// ** Custom Components Import
import ChatLog from "./ChatLog";
import SendMsgForm from "./SendMsgForm";
import CustomAvatar from "../../../Components/apps/CustomAvatar";
import OptionsMenu from "./../../../Components/apps/OptionsMenu";
import UserProfileRight from "./UserProfileRight";
import { useLocation } from "react-router-dom";
import { colors } from "@mui/material";

// ** Styled Components
const ChatWrapperStartChat = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  height: "100%",
  display: "flex",
  borderRadius: 1,
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: theme.palette.action.hover,
}));

const ChatContent = (props) => {
  // ** Props
  const {
    hidden,
    // sendMsg,
    mdAbove,
    // dispatch,
    statusObj,
    getInitials,
    sidebarWidth,
    userProfileRightOpen,
    handleLeftSidebarToggle,
    handleUserProfileRightSidebarToggle,
    selectedChat,
    setSelectedChat,
    selectedChatContact,
    setSelectedChatContact,
    chatsAll,
    setChatsAll,
  } = props;

  //state

  const location = useLocation();

  const handleStartConversation = () => {
    if (!mdAbove) {
      handleLeftSidebarToggle();
    }
  };

  useEffect(() => {
    // console.log("useEffect executed");
    axiosInstance
      .get("/chats")
      .then((res) => {
        // console.log(res.data);
        setChatsAll(res.data[0]);
      })
      .catch((err) => {
        console.error("Error: ", err.message);
      });
    console.log(selectedChat, selectedChatContact);
  }, [location.pathname]);
  console.log(chatsAll);
  console.log(selectedChat, selectedChatContact);

  const renderContent = () => {
    if (chatsAll) {
      if (!selectedChat && !selectedChatContact) {
        return (
          <ChatWrapperStartChat
            sx={{
              ...(mdAbove
                ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
                : {}),
              backgroundColor: "rgba(50, 71, 92, 0.04)",
            }}
          >
            <MuiAvatar
              sx={{
                mb: 3,
                pt: 8,
                pb: 7,
                px: 7.5,
                width: 100,
                height: 100,
                boxShadow: 3,
                backgroundColor: "background.paper",
                color: "rgba(50, 71, 92, 0.6)",
              }}
            >
              <ChatBubbleOutlineIcon sx={{ width: "50px", height: "50px" }} />
            </MuiAvatar>
            <Box
              onClick={handleStartConversation}
              sx={{
                py: 1,
                px: 3,
                boxShadow: 3,
                borderRadius: 5,
                backgroundColor: "background.paper",
                cursor: mdAbove ? "default" : "pointer",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "1.125rem",
                  lineHeight: "normal",
                  color: "rgba(50, 71, 92, 0.87)",
                }}
              >
                Start Conversation
              </Typography>
            </Box>
          </ChatWrapperStartChat>
        );
      } else {
        return (
          <Box
            sx={{
              width: 0,
              // flexGrow: 1,
              height: "100%",
              backgroundColor: "action.hover",
              flex: 1,
            }}
          >
            <Box
              sx={{
                py: 1.5,
                px: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                paddingBottom: "11px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {mdAbove ? null : (
                  <IconButton onClick={handleLeftSidebarToggle} sx={{ mr: 2 }}>
                    <MenuIcon />
                  </IconButton>
                )}
                <Box
                  onClick={handleUserProfileRightSidebarToggle}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <Badge
                    overlap="circular"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    sx={{ mr: 3 }}
                    badgeContent={
                      <Box
                        component="span"
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          color: `${statusObj[selectedChatContact.status]}`,
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
                        src={selectedChatContact.avatar}
                        alt={selectedChatContact.fullName}
                        sx={{ width: "2.375rem", height: "2.375rem" }}
                      />
                    ) : (
                      <CustomAvatar
                        skin="light"
                        color={selectedChatContact.avatarColor}
                        sx={{
                          width: "2.375rem",
                          height: "2.375rem",
                          fontSize: "1rem",
                        }}
                      >
                        {getInitials(selectedChatContact.fullName)}
                      </CustomAvatar>
                    )}
                  </Badge>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      color: "rgba(50, 71, 92, 0.87)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: "0.875rem",
                        color: "rgba(50, 71, 92, 0.87)",
                      }}
                    >
                      {selectedChatContact.fullName}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.disabled" }}
                    >
                      {selectedChatContact.role}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                {mdAbove ? (
                  <Fragment>
                    <IconButton
                      size="small"
                      sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                    >
                      <LocalPhoneIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                    >
                      <VideoChatIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                    >
                      <SearchIcon />
                    </IconButton>
                  </Fragment>
                ) : null}

                <OptionsMenu
                  menuProps={{ sx: { mt: 2 } }}
                  icon={<MoreVertIcon />}
                  iconButtonProps={{
                    size: "small",
                    sx: { color: "rgba(50, 71, 92, 0.87) !important" },
                  }}
                  options={[
                    "View Contact",
                    "Mute Notifications",
                    "Block Contact",
                    "Clear Chat",
                    "Report",
                  ]}
                />
              </Box>
            </Box>

            {selectedChat && chatsAll.profileUser ? (
              <ChatLog
                hidden={hidden}
                getInitials={getInitials}
                data={{
                  ...selectedChat,
                  userContact: chatsAll.profileUser,
                  contact: selectedChatContact,
                }}
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
              />
            ) : (
              <Box
                sx={{ height: "calc(100% - 8.4375rem)", overflow: "hidden" }}
              ></Box>
            )}

            <SendMsgForm
              selectedChat={selectedChat}
              setSelectedChat={setSelectedChat}
              selectedChatContact={selectedChatContact}
              setSelectedChatContact={setSelectedChatContact}
            />

            <UserProfileRight
              hidden={hidden}
              statusObj={statusObj}
              getInitials={getInitials}
              sidebarWidth={sidebarWidth}
              userProfileRightOpen={userProfileRightOpen}
              handleUserProfileRightSidebarToggle={
                handleUserProfileRightSidebarToggle
              }
              selectedChatContact={selectedChatContact}
              chatsAll={chatsAll}
              setChatsAll={setChatsAll}
            />
          </Box>
        );
      }
    } else {
      return null;
    }
  };

  return renderContent();
};

export default ChatContent;
