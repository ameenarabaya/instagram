import React, { useEffect, useState } from "react";
import Story from "./Story";
import { Box, Grid } from "@mui/material";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

export default function Home() {
  return (
    <Box sx={{ width: "100%", bgcolor: "black" }}>
      <Grid container rowSpacing={0} columnSpacing={0}>
        <Grid item xs={7}>
          <SectionOne />
        </Grid>
        <Grid item xs={3}>
          <SectionTwo />
        </Grid>
      </Grid>
    </Box>
  );
}
