// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

// ** Icon Imports
import MicNoneIcon from "@mui/icons-material/MicNone";
import AttachFileIcon from "@mui/icons-material/AttachFile";

// ** Styled Components
const ChatFormWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  boxShadow: theme.shadows[1],
  padding: theme.spacing(0.75, 2),
  justifyContent: "space-between",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  height: "55px",
}));

const Form = styled("form")(({ theme }) => ({
  padding: theme.spacing(0, 3, 3),
}));

const SendMsgForm = (props) => {
  // ** Props
  const {
    selectedChat,
    setSelectedChat,
    selectedChatContact,
    setSelectedChatContact,
    chatsAll,
    setChatsAll,
  } = props;

  // ** State
  const [msg, setMsg] = useState("");

  const handleSendMsg = (e) => {
    e.preventDefault();
    let chatLogNew = {
      message: msg,
      time: new Date().toString(),
      senderId: 11,
      feedback: {
        isSent: true,
        isDelivered: true,
        isSeen: true,
      },
    };
    if (selectedChat && msg.trim().length) {
      let newChat = {
        ...selectedChat,
        chat: [...selectedChat.chat, chatLogNew],
        //Immutability: By creating a new chat array with [...selectedChat.chat, chatLogNew] and updating the selectedChat object with a new reference newChat, React will detect the state change and re-render the ChatLog component.
      };
      setSelectedChat(newChat);
    }
    if (selectedChatContact && msg.trim().length && !selectedChat) {
      let chatNew = {
        id: selectedChatContact.id,
        userId: selectedChatContact.id,
        unseenMsgs: 0,
        chat: [chatLogNew],
      };
      setSelectedChat(chatNew);
    }
    setMsg("");
    console.log(selectedChat);
  };

  return (
    <Form onSubmit={handleSendMsg}>
      <ChatFormWrapper>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgb(255, 255, 255)",
            padding: "3px 20px",
          }}
        >
          <TextField
            fullWidth
            value={msg}
            size="small"
            placeholder="Type your message here…"
            onChange={(e) => setMsg(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-input": { pl: 0 },
              "& fieldset": { border: "0 !important" },
              "& .Mui-focused": { boxShadow: "none !important" },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton size="small" sx={{ color: "rgba(50, 71, 92, 0.87)" }}>
            <MicNoneIcon sx={{ width: "26px", height: "26px" }} />
          </IconButton>
          <IconButton
            size="small"
            component="label"
            htmlFor="upload-img"
            sx={{ mr: 4, color: "rgba(50, 71, 92, 0.87)" }}
          >
            <AttachFileIcon sx={{ width: "23px", height: "23px" }} />
            <input hidden type="file" id="upload-img" />
          </IconButton>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "rgb(105, 108, 255)",
              "&:hover": {
                backgroundColor: "rgb(85, 88, 255)",
              },
            }}
          >
            Send
          </Button>
        </Box>
      </ChatFormWrapper>
    </Form>
  );
};

export default SendMsgForm;
