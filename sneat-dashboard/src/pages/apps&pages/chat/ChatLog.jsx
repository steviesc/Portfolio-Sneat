// ** React Imports
import { useRef, useEffect, useState } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

// ** Icon Imports
import CheckIcon from "@mui/icons-material/Check";
import DoneAllIcon from "@mui/icons-material/DoneAll";

// ** Third Party Components
import PerfectScrollbarComponent from "react-perfect-scrollbar";
// import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

// ** Custom Components Imports
import CustomAvatar from "../../../Components/apps/CustomAvatar";

const PerfectScrollbar = styled(PerfectScrollbarComponent)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const ChatLog = (props) => {
  // ** Props
  // data={{
  //   ...selectedChat,
  //   userContact: chatsAll.profileUser,
  //   selectedChatContact,
  // }}
  const { data, hidden, getInitials, selectedChat, setSelectedChat } = props;
  console.log("data:", data);

  // ** Ref
  const chatArea = useRef(null);
  const [mouseClicked, setMouseClicked] = useState(false);

  // ** Scroll to chat bottom
  const scrollToBottom = () => {
    if (chatArea.current) {
      if (hidden) {
        chatArea.current.scrollTop = chatArea.current.scrollHeight;
      } else {
        chatArea.current._container.scrollTop =
          chatArea.current._container.scrollHeight;
      }
    }
  };

  // ** Formats chat data based on sender
  const formattedChatData = () => {
    let chatLog = [];
    if (data.chat) {
      chatLog = data.chat;
    }
    const formattedChatLog = [];
    let chatMessageSenderId = chatLog[0] ? chatLog[0].senderId : 11;

    let msgGroup = {
      senderId: chatMessageSenderId,
      messages: [],
    };
    chatLog.forEach((msg, index) => {
      if (chatMessageSenderId === msg.senderId) {
        msgGroup.messages.push({
          time: msg.time,
          msg: msg.message,
          feedback: msg.feedback,
        });
      } else {
        chatMessageSenderId = msg.senderId;
        formattedChatLog.push(msgGroup);
        msgGroup = {
          senderId: msg.senderId,
          messages: [
            {
              time: msg.time,
              msg: msg.message,
              feedback: msg.feedback,
            },
          ],
        };
      }
      if (index === chatLog.length - 1) formattedChatLog.push(msgGroup);
    });

    return formattedChatLog;
  };
  const renderMsgFeedback = (isSender, feedback) => {
    if (isSender) {
      if (feedback.isSent && !feedback.isDelivered) {
        return (
          <Box
            component="span"
            sx={{
              display: "inline-flex",
              "& svg": { mr: 1.5, color: "rgba(50, 71, 92, 0.6)" },
            }}
          >
            <CheckIcon />
          </Box>
        );
      } else if (feedback.isSent && feedback.isDelivered) {
        return (
          <Box
            component="span"
            sx={{
              display: "inline-flex",
              "& svg": {
                mr: 1.5,
                color: feedback.isSeen
                  ? "rgba(50, 71, 92, 0.6)"
                  : "rgba(50, 71, 92, 0.6)",
              },
            }}
          >
            <DoneAllIcon />
          </Box>
        );
      } else {
        return null;
      }
    }
  };
  useEffect(() => {
    if (data && data.chat && data.chat.length) {
      scrollToBottom();
    }
  }, [data]);

  // ** Renders user chat
  const renderChats = () => {
    return formattedChatData().map((item, index) => {
      const isSender = item.senderId === data.userContact.id;

      return (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: !isSender ? "row" : "row-reverse",
            mb: index !== formattedChatData().length - 1 ? 1 : undefined,
            // height: "45px",
          }}
        >
          <div>
            <CustomAvatar
              skin="light"
              color={
                data.contact.avatarColor ? data.contact.avatarColor : undefined
              }
              sx={{
                width: "2rem",
                height: "2rem",
                fontSize: "0.875rem",
                ml: isSender ? 2 : undefined,
                mr: !isSender ? 2 : undefined,
              }}
              {...(data.contact.avatar && !isSender
                ? {
                    src: data.contact.avatar,
                    alt: data.contact.fullName,
                  }
                : {})}
              {...(isSender
                ? {
                    src: data.userContact.avatar,
                    alt: data.userContact.fullName,
                  }
                : {})}
            >
              {data.contact.avatarColor
                ? getInitials(data.contact.fullName)
                : null}
            </CustomAvatar>
          </div>

          <Box
            className="chat-body"
            sx={{ maxWidth: ["calc(100% - 3rem)", "70%", "60%"] }}
          >
            {item.messages.map((chat, index, { length }) => {
              const time = new Date(chat.time);

              return (
                <Box
                  key={index}
                  sx={{
                    marginBottom: "5px",
                    "&:not(:last-of-type)": { mb: 1 },
                  }}
                >
                  <div>
                    <Typography
                      sx={{
                        boxShadow: 1,
                        borderRadius: 1,
                        maxWidth: "100%",
                        width: "fit-content",
                        fontSize: "0.875rem",
                        wordWrap: "break-word",
                        p: (theme) => theme.spacing(1.5, 3),
                        ml: isSender ? "auto" : undefined,
                        borderTopLeftRadius: !isSender ? 0 : undefined,
                        borderTopRightRadius: isSender ? 0 : undefined,
                        color: isSender
                          ? "common.white"
                          : "rgba(50, 71, 92, 0.87)",
                        backgroundColor: isSender
                          ? "rgb(105, 108, 255)"
                          : "rgb(255, 255, 255)",
                      }}
                    >
                      {chat.msg}
                    </Typography>
                  </div>
                  {index + 1 === length ? (
                    <Box
                      sx={{
                        mt: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: isSender ? "flex-end" : "flex-start",
                        color: "rgba(50, 71, 92, 0.6)",
                      }}
                    >
                      {renderMsgFeedback(isSender, chat.feedback)}
                      <Typography variant="caption">
                        {time
                          ? new Date(time).toLocaleString("en-US", {
                              hour: "numeric",
                              minute: "numeric",
                              hour12: true,
                            })
                          : null}
                      </Typography>
                    </Box>
                  ) : null}
                </Box>
              );
            })}
          </Box>
        </Box>
      );
    });
  };

  const ScrollWrapper = ({ children }) => {
    if (hidden) {
      return (
        <Box
          ref={chatArea}
          sx={{
            p: 5,
            height: "100%",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          {children}
        </Box>
      );
    } else {
      return (
        <PerfectScrollbar ref={chatArea} options={{ wheelPropagation: true }}>
          <Box
            sx={{
              height: "100%", // 确保容器占满父元素的高度
            }}
          >
            {children}
          </Box>
        </PerfectScrollbar>
      );
    }
  };

  return (
    <Box sx={{ height: "calc(100% - 8.4375rem)", overflow: "hidden" }}>
      <ScrollWrapper>{renderChats()}</ScrollWrapper>
    </Box>
  );
};

export default ChatLog;
