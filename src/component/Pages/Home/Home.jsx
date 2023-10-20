import React, { useEffect, useState } from "react";
import Story from "./Story";
import { Box, Collapse, Grid } from "@mui/material";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

export default function Home() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={0} columnSpacing={0}>
        <Grid sx={{ width: "100%" }} item xs={7}>
          <SectionOne />
        </Grid>
        <Grid sx={{ width: "100%" }} item xs={3}>
          <SectionTwo />
        </Grid>
      </Grid>
    </Box>
  );
}
