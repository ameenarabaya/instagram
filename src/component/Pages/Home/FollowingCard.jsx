import { Avatar, Box, Button, Stack, Tooltip } from "@mui/material";
import React from "react";
import image from "../../../assets/assets/Avatars/nurse.png";
export default function FollowingCard() {
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
          src={image}
        />
        <Box sx={{ marginRight: 4 }}>
          <div>ameena</div>
          <div style={{ color: "#969696" }}>follow by tymaa</div>
        </Box>
      </Box>
      <Tooltip title="Add" arrow>
        <Button sx={{ textTransform: "lowercase" }}>follow</Button>
      </Tooltip>
    </Stack>
  );
}
