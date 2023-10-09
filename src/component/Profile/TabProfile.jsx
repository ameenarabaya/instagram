import { Box, Tabs } from "@mui/material";
import React from "react";
import Tab from "@mui/material/Tab";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AppsIcon from "@mui/icons-material/Apps";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
export default function TabProfile() {
  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tabs
        sx={{
          color: "white",
        }}
      >
        <Tab
          icon={<AppsIcon />}
          label="Posts"
          iconPosition="start"
          sx={{ color: "white" }}
        />
        <Tab
          icon={<BookmarkBorderIcon />}
          label="Reels"
          iconPosition="start"
          sx={{ color: "white" }}
        />
        <Tab
          icon={<AssignmentIndIcon />}
          label="Tags"
          iconPosition="start"
          sx={{ color: "white" }}
        />
      </Tabs>
    </Box>
  );
}
