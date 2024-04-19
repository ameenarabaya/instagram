import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { AiFillLock } from "react-icons/ai";
import React, { useContext, useEffect, useState } from "react";
import StoryCircle from "../Home/StoryCircle";
import images from "../../../assets/assets/Avatars/nurse.png";
import image2 from "../../../assets/assets/2.png";
import image3 from "../../../assets/assets/3.png";
import image4 from "../../../assets/assets/4.png";
import TabProfile from "../Profile/TabProfile.jsx";
import ProfilePosts from "../Profile/ProfilePosts";
import SettingsIcon from "@mui/icons-material/Settings";
import img from "../../../assets/assets/profile.jpg";
import plus from "../../../assets/assets/plus.webp";
import { useNavigate, useParams } from "react-router-dom";
import ProfileModule from "../Profile/ProfileModule.jsx";
import axios from "axios";
import { PostContext } from "../../context";
import Swal from "sweetalert2";
import UserProfilePosts from "./UserProfilePosts.jsx";
export default function UserProfile() {
  const [expanded, setExpanded] = React.useState(false);
  let token = localStorage.getItem("token");
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  let [openmodule, setOpenModule] = React.useState(false);
  let [myUser, setMyUser] = React.useState();
  const open = Boolean(anchorEl);
  let nav = useNavigate();
  let [numberOfPost, setNumberOfPost] = useState("");
  const myid = localStorage.getItem("id");
  const [loading, setLoading] = useState(true);
  let { UserId } = useParams();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    nav("/");
  };
  console.log(UserId);
  async function fetchData() {
    await axios
      .get(`https://instagram-cloneapi.onrender.com/users/${UserId}`)
      .then((response) => {
        console.log(response.data);
        setMyUser(response.data.user);
        setLoading(false);
      })
      .catch((error) => console.log("error"));
  }

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container sx={{ bgcolor: "black", color: "white", width: "950px" }}>
      {loading ? (
        <span class="loader"></span>
      ) : (
        <>
          <Box sx={{ borderBottom: "1px solid #ffffff38" }}>
            <Stack
              spacing={5}
              sx={{
                marginTop: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              direction={"row"}
            >
              <Avatar
                sx={{ border: "1px solid white", width: 120, height: 120 }}
                alt="Remy Sharp"
                src={myUser.avatar}
              />
              <Stack
                spacing={2}
                direction={"row"}
                sx={{ alignItems: "center" }}
              >
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h6"
                  component="h2"
                >
                  {myUser.userName}
                </Typography>
              </Stack>
              <Stack
                sx={{
                  marginLeft: 20,
                  marginTop: -3,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                spacing={7}
                direction={"row"}
              >
                <Typography
                  sx={{ fontSize: "15px" }}
                  variant="h6"
                  component="h2"
                >
                  {/* {myUser.posts.length}posts */}
                </Typography>
                <Typography
                  sx={{ fontSize: "15px", textAlign: "center" }}
                  variant="h6"
                  component="h2"
                >
                  652 <br></br> followers
                </Typography>
                <Typography
                  sx={{ fontSize: "15px", textAlign: "center" }}
                  variant="h6"
                  component="h2"
                >
                  1,384 <br></br> following
                </Typography>
              </Stack>
            </Stack>
            <Stack
              sx={{
                marginLeft: 33,
                marginTop: 2,
                marginBottom: 2,
                justifyContent: "start",
                alignItems: "start",
              }}
              direction={"column"}
            >
              <Typography sx={{ fontSize: "17px" }} variant="h6" component="h2">
                <h2 style={{ margin: "0" }}>{myUser.userName}</h2>
                {myUser.bio}
              </Typography>
            </Stack>
            <Box
              sx={{
                width: "auto",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: 3,
                marginBottom: 2,
                marginLeft: 10,
                marginTop: 5,
              }}
            >
              {/* <avatar name={"Nice memories"} images={image2} />
                <avata name={"Nice memories"} images={image3} />
                <StoryCircle name={"Nice memories"} images={image4} />
                <StoryCircle name={"New"} images={plus} /> */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "35px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    height: 36,
                    width: "30%",
                    fontSize: "15px",
                    textTransform: "lowercase",
                  }}
                >
                  follow
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    height: 36,
                    width: "30%",
                    fontSize: "15px",
                    textTransform: "lowercase",
                    bgcolor: "white",
                    color: "blue",
                  }}
                >
                  message
                </Button>
              </Box>
            </Box>
          </Box>
          {myUser.status === "private" ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "25px",
              }}
            >
              <i>
                <AiFillLock
                  style={{
                    color: "white",
                    fontSize: "100px",
                    marginTop: "100px",
                  }}
                />
              </i>
              <h2 style={{ marginTop: "0" }}>this account is private</h2>
            </div>
          ) : (
            <>
              <TabProfile />
              <UserProfilePosts posts={myUser.posts} />
            </>
          )}
        </>
      )}
    </Container>
  );
}
