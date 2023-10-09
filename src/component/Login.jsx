import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import image from "../assets/assets/instagram-logo.png";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import axios from "axios";
const style = {
  width: 330,
  border: "1px solid #1D1D1D ",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  bgcolor: "#1D1D1D",
  textAlign: "center",
  marginTop: 4,
};
export default function Login() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  let nav = useNavigate();
  async function handlesubmit(e) {
    e.preventDefault();
    let { data } = await axios.post("http://16.170.173.197/users/login", user);
    if (data.token) {
      localStorage.setItem("token", data.token);
      nav("/user");
    }
  }
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box sx={style}>
        <img src={image} style={{ width: "50%", margin: "0 auto" }} />
        <form onSubmit={(e) => handlesubmit(e)}>
          <input
            style={{
              width: "100%",
              height: "25px",
              borderRadius: "5px",
              marginBottom: "15px",
              marginTop: "17px",
              padding: "3px",
            }}
            placeholder="Mobile Number or Email"
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
              textTransform: "capitalize",
              marginBottom: 1,
            }}
          >
            Login
          </Button>
        </form>
        <div className="orStyle">or</div>
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: "100%",
            margin: "0 auto",
            textTransform: "capitalize",
            marginBottom: 3,
          }}
          startIcon={<FacebookIcon />}
        >
          Login with Facebook
        </Button>
        <a
          href=""
          style={{
            textDecoration: "none",
            color: "#959595",
            fontWeight: "bold",
          }}
        >
          Forget Password?
        </a>
      </Box>
      <Box
        sx={{
          width: "35%",
          bgcolor: "#1D1D1D",
          borderRadius: 3,
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        <div style={{ color: "#959595", marginRight: "2px" }}>
          Don't have an account ?
        </div>
        <a href="" style={{ textDecoration: "none", color: "#0095f6" }}>
          sign up
        </a>
      </Box>
    </Container>
  );
}
