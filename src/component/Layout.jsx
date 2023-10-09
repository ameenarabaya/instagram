import React from "react";
import IconsSide from "./IconsSide";
import { Outlet } from "react-router-dom";
import { Box, Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Layout() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={0} columnSpacing={0}>
        <Grid sx={{ position: "relative" }} item xs={2}>
          <IconsSide />
        </Grid>
        <Grid item xs={10}>
          <Outlet></Outlet>
        </Grid>
      </Grid>
    </Box>
  );
}
