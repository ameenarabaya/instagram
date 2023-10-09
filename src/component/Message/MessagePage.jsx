import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Chats from "./Chats";
import image from "../../assets/assets/messengar-logo.png";
export default function MessagePage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={0} columnSpacing={0}>
        <Grid sx={{ borderRight: "1px solid #ffffff38" }} item xs={3}>
          <Chats />
        </Grid>
        <Grid sx={{ color: "white" }} item xs={9}>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
            direction={"column"}
          >
            <img style={{ width: "130px", marginBottom: "10px" }} src={image} />
            <Typography sx={{ marginBottom: 1 }} variant={"h4"}>
              Your Message
            </Typography>
            <Typography sx={{ marginBottom: 1 }} variant={"h6"}>
              Send private photos and messages to a friend or group
            </Typography>
            <Button
              sx={{ textTransform: "lowercase", borderRadius: "20px" }}
              variant="contained"
            >
              Send message
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
