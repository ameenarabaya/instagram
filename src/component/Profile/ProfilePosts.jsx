import styled from "@emotion/styled";
import { Box, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import image from "../../assets/assets/view.jpg";
import axios from "axios";

export default function ProfilePosts() {
  let [MyAccount, setMyAccount] = useState(null);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  useEffect(() => {
    axios
      .get("http://16.170.173.197/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        let myobject = response.data.users.filter((e) => {
          return e.id === id;
        });
        // console.log(myobject[0].posts[0]);
        setMyAccount(myobject);
        // console.log(MyAccount[0].posts[0]);
      })
      .catch((error) => {
        console.log("Error Fedching memories", error);
      });
  }, []);
  return (
    <Box sx={{ flexGrow: 1, marginTop: 3 }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {MyAccount ? (
          MyAccount[0].posts.map((post, index) => {
            return (
              <Grid key={index} item xs={4}>
                <Box>
                  <img
                    src={post.image}
                    style={{ width: "280px", height: "280px" }}
                    alt=""
                  />
                </Box>
              </Grid>
            );
          })
        ) : (
          <></>
        )}
      </Grid>
    </Box>
  );
}
