// ** React Imports
import React from "react";
import { useState, useRef, useEffect, Suspense } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import Menu from "@mui/material/Menu";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import MenuItem from "@mui/material/MenuItem";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import ButtonGroup from "@mui/material/ButtonGroup";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

// ** Icon Imports
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AttachmentIcon from "@mui/icons-material/Attachment";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// ** Third Party Components
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
// ** Custom Components Imports
import OptionsMenu from "../../Components/apps/OptionsMenu";
import CustomAvatar from "../../Components/apps/CustomAvatar";
// import ReactDraftWysiwyg from 'src/@core/components/react-draft-wysiwyg'

// ** Styled Component Imports
import { EditorWrapper } from "../../Components/apps/EditorWrapper";
import styled from "styled-components";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// ** Styles
const CustomToolbar = styled.div`
  padding: 6px 5px 0;
  border-radius: 2px;
  border: 1px solid #f1f1f1;
  display: flex;
  justify-content: flex-start;
  background: #fff;
  flex-wrap: wrap;
  font-size: 15px;
  margin-bottom: 5px;
  user-select: none;
`;
const getInitials = (string) =>
  string
    .split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), "");

const menuItemsArr = [
  {
    name: "Ross Geller",
    value: "ross",
    src: "/images/avatars/1.png",
  },
  {
    name: "Pheobe Buffay",
    value: "pheobe",
    src: "/images/avatars/2.png",
  },
  {
    name: "Joey Tribbiani",
    value: "joey",
    src: "/images/avatars/3.png",
  },
  {
    name: "Rachel Green",
    value: "rachel",
    src: "/images/avatars/4.png",
  },
  {
    name: "Chandler Bing",
    value: "chandler",
    src: "/images/avatars/5.png",
  },
  {
    name: "Monica Geller",
    value: "monica",
    src: "/images/avatars/8.png",
  },
];
const filter = createFilterOptions();

const EmailCompose = (props) => {
  // ** Props
  const { mdAbove, composeOpen, composePopupWidth, toggleComposeOpen } = props;

  // ** States
  const [emailTo, setEmailTo] = useState([]);
  const [ccValue, setccValue] = useState([]);
  const [subjectValue, setSubjectValue] = useState("");
  const [bccValue, setbccValue] = useState([]);
  const [sendBtnOpen, setSendBtnOpen] = useState(false);
  const [messageValue, setMessageValue] = useState(EditorState.createEmpty());
  const [text, setText] = useState();
  const [visibility, setVisibility] = useState({
    cc: false,
    bcc: false,
  });

  // ** Ref

  const anchorRefSendBtn = useRef(null);

  const onEditorStateChange = function (messageValue) {
    setMessageValue(messageValue);
    let text = messageValue.getCurrentContent().getPlainText("\u0001");
    setText(text);
  };

  const toggleVisibility = (value) =>
    setVisibility({ ...visibility, [value]: !visibility[value] });

  const handleSendMenuItemClick = () => {
    setSendBtnOpen(false);
  };

  const handleSendBtnToggle = () => {
    setSendBtnOpen((prevOpen) => !prevOpen);
  };

  const handleMailDelete = (value, state, setState) => {
    const arr = state;
    const index = arr.findIndex((i) => i.value === value);
    arr.splice(index, 1);
    setState([...arr]);
  };

  const handlePopupClose = () => {
    toggleComposeOpen();
    setEmailTo([]);
    setccValue([]);
    setbccValue([]);
    setSubjectValue("");
    setMessageValue(EditorState.createEmpty());
    setVisibility({
      cc: false,
      bcc: false,
    });
  };

  const handleMinimize = () => {
    toggleComposeOpen();
    setEmailTo(emailTo);
    setccValue(ccValue);
    setbccValue(bccValue);
    setVisibility(visibility);
    setMessageValue(messageValue);
    setSubjectValue(subjectValue);
  };

  const renderListItem = (props, option, array, setState) => {
    return (
      <ListItem
        key={option.value}
        sx={{ cursor: "pointer" }}
        onClick={() => setState([...array, option])}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {option.src.length ? (
            <CustomAvatar
              src={option.src}
              alt={option.name}
              sx={{ mr: 3, width: 22, height: 22 }}
            />
          ) : (
            <CustomAvatar
              skin="light"
              color="primary"
              sx={{ mr: 3, width: 22, height: 22, fontSize: ".75rem" }}
            >
              {getInitials(option.name)}
            </CustomAvatar>
          )}
          <Typography sx={{ fontSize: "0.875rem" }}>{option.name}</Typography>
        </Box>
      </ListItem>
    );
  };

  const addNewOption = (options, params) => {
    const filtered = filter(options, params);
    const { inputValue } = params;
    const isExisting = options.some((option) => inputValue === option.name);
    if (inputValue !== "" && !isExisting) {
      filtered.push({
        name: inputValue,
        value: inputValue,
        src: "",
      });
    }
    return filtered;
  };

  return (
    <Drawer
      hideBackdrop
      anchor="bottom"
      open={composeOpen}
      variant="temporary"
      onClose={toggleComposeOpen}
      sx={{
        top: "auto",
        left: "auto",
        right: mdAbove ? "1.5rem" : "1rem",
        bottom: "1.5rem",
        display: "block",
        zIndex: (theme) => `${theme.zIndex.drawer} + 1`,
        "& .MuiDrawer-paper": {
          borderRadius: 1,
          position: "static",
          width: composePopupWidth,
          height: "450px",
        },
      }}
    >
      <Box
        sx={{
          px: 2.5,
          py: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgba(50, 71, 92, 0.08)",
        }}
      >
        <Typography sx={{ fontWeight: 500, color: "rgba(50, 71, 92, 0.87)" }}>
          Compose Mail
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ p: 1, mr: 2 }} onClick={handleMinimize}>
            <RemoveIcon />
          </IconButton>
          <IconButton sx={{ p: 1 }} onClick={handlePopupClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          py: 0.5,
          px: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          <div>
            <InputLabel
              sx={{ mr: 3, fontSize: "0.875rem" }}
              htmlFor="email-to-select"
            >
              To:
            </InputLabel>
          </div>
          <Autocomplete
            multiple
            freeSolo
            value={emailTo}
            clearIcon={false}
            id="email-to-select"
            filterSelectedOptions
            options={menuItemsArr}
            ListboxComponent={List}
            filterOptions={addNewOption}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) =>
              renderListItem(props, option, emailTo, setEmailTo)
            }
            renderTags={(array, getTagProps) =>
              array.map((item, index) => (
                <Chip
                  size="small"
                  key={item.value}
                  label={item.name}
                  {...getTagProps({ index })}
                  deleteIcon={<CloseIcon />}
                  onDelete={() =>
                    handleMailDelete(item.value, emailTo, setEmailTo)
                  }
                />
              ))
            }
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": { p: 2 },
              "& .MuiInputBase-root.Mui-focused": { boxShadow: 0 },
              "& .MuiAutocomplete-endAdornment": { display: "none" },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                autoComplete="new-password"
                sx={{
                  border: 0,
                  "& fieldset": { border: "0 !important" },
                  "& .MuiOutlinedInput-root": { p: "0 !important" },
                }}
              />
            )}
          />
        </Box>
        <Typography>
          <Box
            component="span"
            sx={{ cursor: "pointer", color: "rgba(50, 71, 92, 0.87)" }}
            onClick={() => toggleVisibility("cc")}
          >
            Cc
          </Box>
          <Box component="span" sx={{ mx: 2 }}>
            |
          </Box>
          <Box
            component="span"
            sx={{ cursor: "pointer", color: "rgba(50, 71, 92, 0.87)" }}
            onClick={() => toggleVisibility("bcc")}
          >
            Bcc
          </Box>
        </Typography>
      </Box>
      {visibility.cc ? (
        <Box
          sx={{
            py: 1,
            px: 4,
            display: "flex",
            alignItems: "center",
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <div>
            <InputLabel
              sx={{ mr: 3, fontSize: "0.875rem" }}
              htmlFor="email-cc-select"
            >
              Cc:
            </InputLabel>
          </div>
          <TextField
            fullWidth
            size="small"
            sx={{
              border: 0,
              "& fieldset": { border: "0 !important" },
              "& .MuiOutlinedInput-root": { p: "0 !important" },
            }}
          />
        </Box>
      ) : null}
      {visibility.bcc ? (
        <Box
          sx={{
            py: 1,
            px: 4,
            display: "flex",
            alignItems: "center",
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <div>
            <InputLabel
              sx={{ mr: 3, fontSize: "0.875rem" }}
              htmlFor="email-bcc-select"
            >
              Bcc:
            </InputLabel>
          </div>
          <TextField
            fullWidth
            size="small"
            sx={{
              border: 0,
              "& fieldset": { border: "0 !important" },
              "& .MuiOutlinedInput-root": { p: "0 !important" },
            }}
          />
        </Box>
      ) : null}
      <Box
        sx={{
          py: 0.5,
          px: 2.5,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <InputLabel
            sx={{ mr: 3, fontSize: "0.875rem" }}
            htmlFor="email-subject-input"
          >
            Subject:
          </InputLabel>
        </div>
        <Input
          fullWidth
          value={subjectValue}
          id="email-subject-input"
          onChange={(e) => setSubjectValue(e.target.value)}
          sx={{
            "&:before, &:after": { display: "none" },
            "& .MuiInput-input": { py: 1 },
            color: "rgba(50, 71, 92, 0.87)",
          }}
        />
      </Box>
      <Editor
        editorState={messageValue}
        editorClassName="MessageEditor"
        onEditorStateChange={onEditorStateChange}
        editorStyle={{
          height: "150px",
          color: "rgba(50, 71, 92, 0.87)",
          margin: "0 1em",
          overflow: "hidden",
        }}
      />
      <Box
        sx={{
          py: 1,
          px: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ButtonGroup
            variant="contained"
            ref={anchorRefSendBtn}
            aria-label="split button"
            sx={{
              backgroundColor: "rgb(96, 98, 232) !important",
            }}
          >
            <Button
              onClick={handlePopupClose}
              sx={{
                backgroundColor: "rgb(96, 98, 232) !important",
                borderColor: "rgba(96, 98, 232,0.1) !important",
              }}
            >
              Send
            </Button>
            <Button
              size="small"
              aria-haspopup="true"
              onClick={handleSendBtnToggle}
              aria-label="select merge strategy"
              aria-expanded={sendBtnOpen ? "true" : undefined}
              aria-controls={sendBtnOpen ? "email-send-menu" : undefined}
              sx={{
                backgroundColor: "rgb(96, 98, 232) !important",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <KeyboardArrowUpIcon />
            </Button>
          </ButtonGroup>
          <Menu
            keepMounted
            open={sendBtnOpen}
            id="email-send-menu"
            onClose={handleSendMenuItemClick}
            anchorEl={anchorRefSendBtn.current}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleSendMenuItemClick}>Schedule Send</MenuItem>
            <MenuItem onClick={handleSendMenuItemClick}>Save as Draft</MenuItem>
          </Menu>
          <IconButton
            size="small"
            sx={{ ml: 3, color: "rgba(50, 71, 92, 0.54)" }}
          >
            <AttachmentIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <OptionsMenu
            iconButtonProps={{ size: "small" }}
            options={["Print", "Check spelling", "Plain text mode"]}
            menuProps={{
              anchorOrigin: { vertical: "top", horizontal: "right" },
              transformOrigin: { vertical: "bottom", horizontal: "right" },
            }}
          />
          <IconButton size="small" onClick={handlePopupClose}>
            <DeleteOutlineIcon sx={{ color: "rgba(50, 71, 92, 0.54)" }} />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default EmailCompose;
