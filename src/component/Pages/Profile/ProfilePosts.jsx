import styled from "@emotion/styled";
import { Box, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./profilepost.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";
export default function ProfilePosts() {
  let [MyAccount, setMyAccount] = useState(null);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
 
  useEffect(() => {
    axios
      .get(`http://16.170.173.197/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMyAccount(response.data.posts);
      })
      .catch((error) => {
        console.log("Error Fedching memories", error);
      });
  }, [MyAccount]);

  function handledelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://16.170.173.197/posts/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .catch((error) => {
            console.log("Error Fedching memories", error);
          });
      }
    });
  }
  async function handleEdit(id) {
    const { value: Data } = await Swal.fire({
      input: "text",
      inputLabel: "title",
      inputValue: "",
      inputPlaceholder: "Enter new Title",
      inputAttributes: {},
    });
    if (Data) {
      await axios.put(
        `http://16.170.173.197/posts/${id}`,
        { description: Data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }
  }
  return (
    <Box sx={{ flexGrow: 1, marginTop: 3 }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {MyAccount ? (
          MyAccount.map((post, index) => {
            return (
              <Grid key={index} item xs={4}>
                <div
                  className="profileBox"
                  style={{ width: "280px", height: "300px" }}
                >
                  <div className="Layout">
                    <FontAwesomeIcon
                      style={{ fontSize: "25px" }}
                      icon={faPenToSquare}
                      onClick={() => handleEdit(post.id)}
                    />
                    <DeleteIcon
                      sx={{ cursor: "pointer", fontSize: "30px" }}
                      onClick={() => handledelete(post.id)}
                    />
                  </div>
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
