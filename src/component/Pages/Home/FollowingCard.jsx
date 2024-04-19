import { Avatar, Box, Button, Stack, Tooltip } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import image from "../../../assets/assets/Avatars/nurse.png";
import axios from "axios";
import { PostContext } from "../../context.jsx";
export default function FollowingCard({ avatar, name }) {
  let [users, setUser] = useState([]);
  let { myUser } = useContext(PostContext);
  useEffect(() => {
    axios
      .get("https://instagram-cloneapi.onrender.com/users")
      .then((response) => {
        setUser(response.data.users);
      })
      .catch((error) => console.log("error"));
  }, []);
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 3,
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        <Avatar
          sx={{ border: "1px solid white", width: 50, height: 50 }}
          alt="Remy Sharp"
          src={avatar}
        />
        <Box sx={{ marginRight: 4 }}>
          <div>{name}</div>
          <div style={{ color: "#969696", width: "200px" }}>
            followed by {myUser.userName}
          </div>
        </Box>
      </Box>
      <Tooltip title="Add" arrow>
        <Button sx={{ textTransform: "lowercase" }}>follow</Button>
      </Tooltip>
    </Stack>
  );
}
