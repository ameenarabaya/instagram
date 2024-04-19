import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import image from "../assets/assets/instagram-logo.png";
import "./signup.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const style = {
  width: 330,
  border: "1px solid #1D1D1D ",
  borderRadius: 3,
  boxShadow: 24,
  p: 3,
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  bgcolor: "#1D1D1D",
  textAlign: "center",
  marginTop: 4,
};
export default function SignUp() {
  let [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  let nav = useNavigate();
  async function handlesubmit(e) {
    e.preventDefault();
    let { data } = await axios.post(
      "https://instagram-cloneapi.onrender.com/users/signup",
      user
    );
    console.log(data);
    if (data.token) {
      nav("/");
    }
  }
  return (
    <Container
      maxWidth={"sm"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={style}>
        <img src={image} style={{ width: "50%", margin: "0 auto" }} />
        <Typography
          mt={2}
          mb={2}
          sx={{
            fontSize: "15px",
            width: "80%",
            color: "#959595",
            fontWeight: "bold",
          }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          sign up to see photos and videos from your friends
        </Typography>
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize", width: "100%" }}
          startIcon={<FacebookIcon />}
        >
          Login with Facebook
        </Button>
        <div className="orStyle">or</div>
        <form onSubmit={(e) => handlesubmit(e)}>
          <input
            style={{
              width: "100%",
              height: "25px",
              borderRadius: "5px",
              marginBottom: "15px",
              padding: "3px",
              border: "2px solid white",
              outline: "none",
            }}
            placeholder="Username"
            value={user.userName}
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
          />
          <input
            style={{
              marginBottom: "20px",
              width: "100%",
              borderRadius: "5px",
              height: "25px",
              padding: "3px",
              border: "2px solid white",
              outline: "none",
            }}
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            style={{
              marginBottom: "20px",
              width: "100%",
              borderRadius: "5px",
              height: "25px",
              padding: "3px",
              border: "2px solid white",
              outline: "none",
            }}
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "100%",
              margin: "0 auto",
              textTransform: "lowercase",
              marginBottom: 3,
            }}
          >
            Sign Up
          </Button>
        </form>
        <Typography
          sx={{
            marginBottom: 5,
            fontSize: "15px",
            margin: "0 auto",
            color: "#959595",
            fontWeight: "bold",
          }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          By signing up ,You agree to our Terms,Data policy and cookies policy
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#1D1D1D",
          borderRadius: 3,
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        <div style={{ color: "#959595", marginRight: "2px" }}>
          Have an account?
        </div>
        <Link to="/" style={{ textDecoration: "none", color: "#0095f6" }}>
          Login
        </Link>
      </Box>
    </Container>
  );
}
