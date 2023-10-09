import { Avatar, Box } from "@mui/material";
import React from "react";
import image from "../../assets/assets/images.jpg";
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
        sx={{ width: 52, height: 52, border: "2px solid white" }}
        alt="Remy Sharp"
        src={images}
      ></Avatar>
      {name ? <span>{name}</span> : <></>}
    </Box>
  );
}
