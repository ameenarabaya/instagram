import React, { useContext, useEffect } from "react";
import IconsSide from "./IconsSide";
import { Outlet } from "react-router-dom";
import { Box, Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";
import axios from "axios";
import { PostContext } from "./context";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Layout() {
  const token = localStorage.getItem("token");
  let { setMyUser } = useContext(PostContext);
  let myid = localStorage.getItem("id");
  useEffect(() => {
    axios
      .get("http://16.170.173.197/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMyUser(response.data.users.filter((e) => e.id == myid)[0]);
      })
      .catch((error) => console.log(error));
  }, []);
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
