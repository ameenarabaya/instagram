import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import image from "../../assets/assets/Avatars/steward.png";
import ChatBox from "./ChatBox";
const Chats = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        color: "white",
      }}
    >
      <Stack
        sx={{
          color: "white",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid #ffffff38",
          padding: 2,
        }}
        spacing={18}
        direction={"row"}
      >
        <Typography component={"h6"}>
          ameena <FontAwesomeIcon icon={faChevronDown} />
        </Typography>
        <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faPenToSquare} />
      </Stack>
      <Stack
        spacing={20}
        sx={{ justifyContent: "center", marginBottom: 1, marginTop: 1 }}
        direction={"row"}
      >
        <Typography component={"h6"}>Message</Typography>
        <Typography component={"h6"} sx={{ color: "#969696" }}>
          requests
        </Typography>
      </Stack>
      <ChatBox />
      <ChatBox />
      <ChatBox />
      <ChatBox />
      <ChatBox />
    </Box>
  );
};

export default Chats;
