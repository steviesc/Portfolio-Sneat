// ** React Imports
import { useState, useEffect } from "react";
import axiosInstance from "../../../request";

// ** MUI Imports
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Chip from "@mui/material/Chip";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import MuiAvatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import InputAdornment from "@mui/material/InputAdornment";
import CloseIcon from "@mui/icons-material/Close";

// ** Third Party Components
import PerfectScrollbar from "react-perfect-scrollbar";

// ** Icon Imports
import SearchIcon from "@mui/icons-material/Search";

// ** Custom Components Import
import CustomAvatar from "../../../Components/apps/CustomAvatar";
import "react-perfect-scrollbar/dist/css/styles.css";

// ** Chat App Components Imports
import UserProfileLeft from "./UserProfileLeft";
import { useLocation } from "react-router-dom";

const ScrollWrapper = ({ children, hidden }) => {
  if (hidden) {
    return <Box sx={{ height: "100%", overflow: "auto" }}>{children}</Box>;
  } else {
    return (
      <PerfectScrollbar options={{ wheelPropagation: true }}>
        <Box
          sx={{
            height: "100%",
          }}
        >
          {children}
        </Box>
      </PerfectScrollbar>
    );
  }
};

const ChatSidebar = (props) => {
  // ** Props
  const {
    hidden,
    mdAbove,
    chatsAll,
    // contacts,
    statusObj,
    userStatus,
    // selectChat,
    getInitials,
    sidebarWidth,
    setUserStatus,
    leftSidebarOpen,
    // removeSelectedChat,
    userProfileLeftOpen,
    formatDateToMonthShort,
    handleLeftSidebarToggle,
    handleUserProfileLeftSidebarToggle,
    setSelectedChat,
    setSelectedChatContact,
  } = props;

  // ** States
  const [query, setQuery] = useState("");
  const [filteredChat, setFilteredChat] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [active, setActive] = useState(null);
  const [userProfile, setUserProfile] = useState("");

  // ** Hooks
  const location = useLocation();
  //   const router = useRouter();

  const handleChatClick = (type, id) => {
    if (type == "chat") {
      let setChat = chatsAll.chats.find((i) => i.id === id);
      if (setChat && setChat.unseenMsgs > 0) {
        setChat.unseenMsgs -= 1;
      }
      setSelectedChat(setChat);
      setSelectedChatContact(chatsAll.contacts.find((i) => i.id === id));
    } else {
      setSelectedChatContact(chatsAll.contacts.find((i) => i.id === id));
      setSelectedChat();
    }
    setActive({ type, id });
    if (!mdAbove) {
      handleLeftSidebarToggle();
    }
  };
  useEffect(() => {
    // console.log("useEffect executed");
    axiosInstance
      .get("/profileuser")
      .then((res) => {
        // console.log(res.data);
        setUserProfile(res.data.profileUser);
      })
      .catch((err) => {
        console.error("Error: ", err.message);
      });
  }, [location.pathname]);

  const hasActiveId = (id) => {
    if (chatsAll !== null) {
      const arr = chatsAll.chats.filter((i) => i.id === id);
      return !!arr.length;
    }
  };

  const renderContacts = () => {
    let contacts = chatsAll.contacts;
    let filteredContactsNew = filteredContacts;
    let filteredContactsNn = filteredContacts;

    if (chatsAll.chats) {
      for (let chat of chatsAll.chats) {
        contacts = contacts.filter((i) => i.id !== chat.id);
        filteredContactsNew = filteredContactsNew.filter(
          (i) => i.id !== chat.id
        );
      }
    }
    if (contacts && contacts.length) {
      if (query.length && !filteredContactsNew.length) {
        return (
          <ListItem>
            <Typography sx={{ color: "text.secondary" }}>
              No Contacts Found
            </Typography>
          </ListItem>
        );
      } else {
        const arrToMap =
          query.length && filteredContactsNew.length
            ? filteredContactsNew
            : contacts;

        return arrToMap !== null
          ? arrToMap.map((contact, index) => {
              const activeCondition =
                active !== null &&
                active.id === contact.id &&
                active.type === "contact" &&
                !hasActiveId(contact.id);

              return (
                <ListItem
                  key={index}
                  disablePadding
                  sx={{ "&:not(:last-child)": { mb: 0 } }}
                >
                  <ListItemButton
                    disableRipple
                    onClick={() =>
                      handleChatClick(
                        hasActiveId(contact.id) ? "chat" : "contact",
                        contact.id
                      )
                    }
                    sx={{
                      // px: 3,
                      py: 2,
                      width: "100%",
                      borderRadius: 1,
                      ...(activeCondition && {
                        backgroundColor: "rgb(105, 108, 255) !important",
                      }),
                    }}
                  >
                    <ListItemAvatar sx={{ m: 0 }}>
                      {contact.avatar ? (
                        <MuiAvatar
                          alt={contact.fullName}
                          src={contact.avatar}
                          sx={{
                            width: 38,
                            height: 38,
                            outline: (theme) =>
                              `2px solid ${
                                activeCondition
                                  ? theme.palette.common.white
                                  : "transparent"
                              }`,
                          }}
                        />
                      ) : (
                        <CustomAvatar
                          color={contact.avatarColor}
                          skin={activeCondition ? "light-static" : "light"}
                          sx={{
                            width: 38,
                            height: 38,
                            fontSize: "1rem",
                            outline: (theme) =>
                              `2px solid ${
                                activeCondition
                                  ? theme.palette.common.white
                                  : "transparent"
                              }`,
                          }}
                        >
                          {getInitials(contact.fullName)}
                        </CustomAvatar>
                      )}
                    </ListItemAvatar>
                    <ListItemText
                      sx={{
                        my: 0,
                        ml: 0,
                        ...(activeCondition && {
                          "& .MuiTypography-root": { color: "common.white" },
                          // color: "rgba(50, 71, 92, 0.87)",
                        }),
                      }}
                      primary={
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "0.875rem",
                            color: "rgba(50, 71, 92, 0.87)",
                          }}
                        >
                          {contact.fullName}
                        </Typography>
                      }
                      secondary={
                        <Typography
                          noWrap
                          variant="body2"
                          sx={{
                            ...(!activeCondition && { color: "text.disabled" }),
                          }}
                        >
                          {contact.about}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              );
            })
          : null;
      }
    }
  };

  const renderChats = () => {
    if (chatsAll.chats && chatsAll.chats.length) {
      if (query.length && !filteredChat.length) {
        return (
          <ListItem>
            <Typography sx={{ color: "text.secondary" }}>
              No Chats Found
            </Typography>
          </ListItem>
        );
      } else {
        const arrToMap =
          query.length && filteredChat.length ? filteredChat : chatsAll.chats;

        return arrToMap.map((chat, index) => {
          const lastMessage = chat.chat[chat.chat.length - 1];
          // console.log("last message:", lastMessage);
          const activeCondition =
            active !== null && active.id === chat.id && active.type === "chat";
          const contactChat = chatsAll.contacts.find(
            (item) => item.id === chat.id
          );

          return (
            <ListItem
              key={index}
              disablePadding
              sx={{ "&:not(:last-child)": { mb: 1 } }}
            >
              <ListItemButton
                disableRipple
                onClick={() => handleChatClick("chat", chat.id)}
                sx={{
                  px: 2,
                  py: 1,
                  width: "100%",
                  borderRadius: 1,
                  alignItems: "flex-start",
                  ...(activeCondition && {
                    backgroundColor: "rgb(105, 108, 255) !important",
                  }),
                }}
              >
                <ListItemAvatar sx={{ m: 0 }}>
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
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          color: `${statusObj[contactChat.status]}`,
                          backgroundColor: `${statusObj[contactChat.status]}`,
                          boxShadow: (theme) =>
                            `0 0 0 2px ${
                              !activeCondition
                                ? theme.palette.background.paper
                                : theme.palette.common.white
                            }`,
                        }}
                      />
                    }
                  >
                    {contactChat.avatar ? (
                      <MuiAvatar
                        src={contactChat.avatar}
                        alt={contactChat.fullName}
                        sx={{
                          width: 38,
                          height: 38,
                          marginTop: "7px",
                          outline: (theme) =>
                            `2px solid ${
                              activeCondition
                                ? theme.palette.common.white
                                : "transparent"
                            }`,
                        }}
                      />
                    ) : (
                      <CustomAvatar
                        color={contactChat.avatarColor}
                        skin={activeCondition ? "light-static" : "light"}
                        sx={{
                          width: 38,
                          height: 38,
                          fontSize: "1rem",
                          marginTop: "7px",
                          outline: (theme) =>
                            `2px solid ${
                              activeCondition
                                ? theme.palette.common.white
                                : "transparent"
                            }`,
                        }}
                      >
                        {getInitials(contactChat.fullName)}
                      </CustomAvatar>
                    )}
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    // my: 0,
                    // ml: 1,
                    // mr: 1,
                    color: "rgba(50, 71, 92, 0.87)",
                    "& .MuiTypography-root": {
                      ...(activeCondition && { color: "common.white" }),
                    },
                  }}
                  primary={
                    <Typography
                      noWrap
                      sx={{ fontWeight: 500, fontSize: "0.875rem" }}
                    >
                      {contactChat.fullName}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      noWrap
                      variant="body2"
                      sx={{
                        ...(!activeCondition && { color: "text.disabled" }),
                      }}
                    >
                      {lastMessage ? lastMessage.message : null}
                    </Typography>
                  }
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      whiteSpace: "nowrap",
                      color: activeCondition ? "common.white" : "text.disabled",
                    }}
                  >
                    <>
                      {lastMessage
                        ? formatDateToMonthShort(lastMessage.time, true)
                        : new Date()}
                    </>
                  </Typography>
                  {chat.unseenMsgs && chat.unseenMsgs > 0 ? (
                    <Chip
                      color="error"
                      label={chat.unseenMsgs}
                      sx={{
                        mt: 0.5,
                        height: 18,
                        width: 18,
                        fontWeight: 600,
                        fontSize: "0.75rem",
                        "& .MuiChip-label": { pt: 0.2, paddingLeft: "7px" },
                        "&.MuiChip-root": {
                          backgroundColor: "rgb(255, 62, 29)",
                        },
                      }}
                    />
                  ) : null}
                </Box>
              </ListItemButton>
            </ListItem>
          );
        });
      }
    }
  };

  const handleFilter = (e) => {
    setQuery(e.target.value);
    if (chatsAll !== null && chatsAll.contacts !== null) {
      const searchFilterFunction = (contact) =>
        contact.fullName.toLowerCase().includes(e.target.value.toLowerCase());
      // filter contacts
      const filteredContactsArr =
        chatsAll.contacts.filter(searchFilterFunction);
      setFilteredContacts(filteredContactsArr);
      // filter chats
      const filteredChatsArr = chatsAll.chats.filter((chat) => {
        const contact = chatsAll.contacts.find((c) => c.id === chat.id);
        return contact && searchFilterFunction(contact);
      });
      setFilteredChat(filteredChatsArr);
    }
  };

  return (
    <div>
      <Drawer
        open={leftSidebarOpen}
        onClose={handleLeftSidebarToggle}
        variant={mdAbove ? "permanent" : "temporary"}
        ModalProps={{
          disablePortal: true,
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          // zIndex: 7,
          height: "100%",
          display: "block",
          position: mdAbove ? "static" : "absolute",
          "& .MuiDrawer-paper": {
            boxShadow: "none",
            width: sidebarWidth,
            position: mdAbove ? "static" : "absolute",
            borderTopLeftRadius: (theme) => theme.shape.borderRadius,
            borderBottomLeftRadius: (theme) => theme.shape.borderRadius,
          },
          "& > .MuiBackdrop-root": {
            borderRadius: 1,
            position: "absolute",
            zIndex: (theme) => theme.zIndex.drawer - 1,
          },
        }}
      >
        <Box
          sx={{
            px: 3,
            py: 1.5,
            display: "flex",
            alignItems: "center",
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            position: "sticky",
            top: 0,
            backgroundColor: "#fff",
            zIndex: 7,
          }}
        >
          {userProfile ? (
            <Badge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              sx={{ mr: 2.5 }}
              onClick={handleUserProfileLeftSidebarToggle}
              badgeContent={
                <Box
                  component="span"
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    color: `${statusObj[userStatus]}`,
                    backgroundColor: `${statusObj[userStatus]}`,
                    boxShadow: (theme) =>
                      `0 0 0 2px ${theme.palette.background.paper}`,
                  }}
                />
              }
            >
              <MuiAvatar
                src={userProfile.avatar}
                alt={userProfile.fullName}
                sx={{
                  width: "2.375rem",
                  height: "2.375rem",
                  cursor: "pointer",
                }}
              />
            </Badge>
          ) : null}
          <TextField
            fullWidth
            size="small"
            value={query}
            onChange={handleFilter}
            placeholder="Search for contact..."
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: 5,
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgb(105, 108, 255)",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{ color: "rgba(50, 71, 92, 0.6)" }}
                >
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          {!mdAbove ? (
            <IconButton sx={{ p: 1, ml: 1 }} onClick={handleLeftSidebarToggle}>
              <CloseIcon />
            </IconButton>
          ) : null}
        </Box>

        <Box sx={{ height: `calc(100%- 8.5rem)`, overflow: "hidden" }}>
          <ScrollWrapper hidden={hidden}>
            <Box sx={{ p: (theme) => theme.spacing(3, 1.5, 3) }}>
              <Typography
                variant="h6"
                sx={{ ml: 2, mb: 2, color: "rgb(105, 108, 255)" }}
              >
                Chats
              </Typography>
              <List sx={{ mb: 4, p: 0 }}>{renderChats()}</List>
              <Typography
                variant="h6"
                sx={{ ml: 2, mb: 2, color: "rgb(105, 108, 255)" }}
              >
                Contacts
              </Typography>
              <List sx={{ p: 0 }}>{renderContacts()}</List>
            </Box>
          </ScrollWrapper>
        </Box>
      </Drawer>

      <UserProfileLeft
        hidden={hidden}
        statusObj={statusObj}
        userStatus={userStatus}
        userProfile={userProfile}
        sidebarWidth={sidebarWidth}
        setUserStatus={setUserStatus}
        userProfileLeftOpen={userProfileLeftOpen}
        handleUserProfileLeftSidebarToggle={handleUserProfileLeftSidebarToggle}
      />
    </div>
  );
};

export default ChatSidebar;
