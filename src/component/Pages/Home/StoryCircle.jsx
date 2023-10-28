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
      }}
    >
      <Avatar
        className="avatar"
        sx={{
          width: 70,
          height: 70,
          border: "2px solid white",
        }}
        alt="Remy Sharp"
        src={images}
      ></Avatar>
      {name ? <span>{name}</span> : <></>}
    </Box>
  );
}
