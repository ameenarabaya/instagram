import styled from "@emotion/styled";
import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import image from "../../assets/assets/view.jpg";

export default function ProfilePosts() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 3 }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Box>
            <img src={image} style={{ width: "280px", height: "280px" }} />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <img src={image} style={{ width: "280px", height: "280px" }} />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <img src={image} style={{ width: "280px", height: "280px" }} />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <img src={image} style={{ width: "280px", height: "280px" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
