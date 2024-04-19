import styled from "@emotion/styled";
import { Box, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";
export default function UserProfilePosts({ posts }) {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 3 }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {posts ? (
          posts.map((post, index) => {
            return (
              <Grid key={index} item xs={4}>
                <div
                  className="profileBox"
                  style={{ width: "280px", height: "300px" }}
                >
                  <img
                    className="profile"
                    src={post.image}
                    style={{ width: "100%", height: "100%" }}
                    alt=""
                  />
                </div>
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
