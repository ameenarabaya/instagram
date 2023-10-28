import { Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "awesomplete";
import axios from "axios";

export default function Search() {
  let token = localStorage.getItem("token");
  let [Users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://16.170.173.197/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.log("Error Fedching memories", error);
      });
  }, []);
  return (
    <Container
      sx={{
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      maxWidth={"lg"}
    >
      <input
        style={{
          width: "500px",
          backgroundColor: "black",
          marginTop: "30px",
          outline: "none",
          borderBottom: "1px solid rgb(149 149 149 / 76%)",
          borderRight: "none",
          borderTop: "none",
          borderLeft: "none",
          height: "30px",
          color: "white",
          position: "relative",
        }}
        class="awesomplete"
        list="mylist"
      />
      <datalist style={{ width: "500px" }} id="mylist">
        {Users.map((user) => {
          return <option>{user.userName}</option>;
        })}
      </datalist>
    </Container>
  );
}
