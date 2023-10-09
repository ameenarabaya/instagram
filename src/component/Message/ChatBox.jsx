import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import image from "../../assets/assets/Avatars/steward.png";
export default function ChatBox() {
  return (
    <Stack
      sx={{ marginBottom: 2, alignItems: "center" }}
      spacing={1}
      direction={"row"}
    >
      <Avatar sx={{ width: "55px", height: "55px" }} src={image}></Avatar>
      <Stack direction={"column"}>
        <Typography component={"h6"}>Ameena</Typography>
        <Typography
          component={"h6"}
          sx={{ fontSize: "14px", color: "#969696" }}
        >
          hello sara ??.2h
        </Typography>
      </Stack>
    </Stack>
  );
}
