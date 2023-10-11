import styled from "@emotion/styled";
import { Box, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import image from "../../assets/assets/view.jpg";
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
      .get("http://16.170.173.197/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        let myobject = response.data.users.filter((e) => {
          return e.id === id;
        });
        setMyAccount(myobject);
      })
      .catch((error) => {
        console.log("Error Fedching memories", error);
      });
  }, [MyAccount]);
  function handledelete(id) {
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
  async function handleEdit(id) {
    const { value: Data } = await Swal.fire({
      input: "text",
      inputLabel: "title",
      inputValue: "",
      inputPlaceholder: "Enter new Title",
      inputAttributes: {
        style: {
          backgroundColor: "black",
          color: "red",
        },
      },
    });
    if (Data) {
      await axios
        .put(
          `http://16.170.173.197/posts/${id}`,
          { description: Data },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => console.log(response));
    }
  }
  return (
    <Box sx={{ flexGrow: 1, marginTop: 3 }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {MyAccount ? (
          MyAccount[0].posts.map((post, index) => {
            return (
              <Grid key={index} item xs={4}>
                <div
                  className="profileBox"
                  style={{ width: "280px", height: "300px" }}
                >
                  <div className="Layout">
                    <FontAwesomeIcon
                      style={{ fontSize: "25px", cursor: "pointer" }}
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
