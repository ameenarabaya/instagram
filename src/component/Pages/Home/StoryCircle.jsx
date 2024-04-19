import { Avatar, Box } from "@mui/material";
import React, { useEffect } from "react";
export default function StoryCircle({ name, images }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "90px",
        marginTop: "10px",
      }}
    >
      <div className="storyBorder">
        <Avatar
          className="avatar"
          sx={{
            width: 60,
            height: 60,
            border: "3px solid #E4E4E4",
          }}
          alt="Remy Sharp"
          src={images}
        ></Avatar>
      </div>
      {name ? <div style={{ color: "white" }}>{name}</div> : <></>}
    </div>
  );
}
