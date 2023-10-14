import { Avatar, Box } from "@mui/material";
import React, { useEffect } from "react";
export default function StoryCircle({ name, images }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Avatar
        className="avatar"
        sx={{ width: 60, height: 60, border: "2px solid white" }}
        alt="Remy Sharp"
        src={images}
      ></Avatar>
      {name ? <span>{name}</span> : <></>}
    </Box>
  );
}
