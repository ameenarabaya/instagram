import React from "react";
import Story from "./Story";
import Posts from "./Posts";
import { Box, Container } from "@mui/material";

export default function SectionOne() {
  return (
    <Container>
      <Box sx={{ marginLeft: 6 }}>
        <Box sx={{ width: 574 }}>
          <Story />
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#ffffff38",
              marginTop: "26px",
            }}
          ></div>
          <Posts />
        </Box>
      </Box>
    </Container>
  );
}
