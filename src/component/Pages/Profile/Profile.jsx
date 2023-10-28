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
import React, { useContext, useEffect, useState } from "react";
import StoryCircle from "../Home/StoryCircle";
import images from "../../../assets/assets/Avatars/nurse.png";
import image2 from "../../../assets/assets/2.png";
import image3 from "../../../assets/assets/3.png";
import image4 from "../../../assets/assets/4.png";
import TabProfile from "./TabProfile";
import ProfilePosts from "./ProfilePosts";
import SettingsIcon from "@mui/icons-material/Settings";
import img from "../../../assets/assets/profile.jpg";
import { useNavigate } from "react-router-dom";
import ProfileModule from "./ProfileModule";
import axios from "axios";
import { PostContext } from "../../context";
import Swal from "sweetalert2";
export default function Profile() {
  const [expanded, setExpanded] = React.useState(false);
  let token = localStorage.getItem("token");
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  let [openmodule, setOpenModule] = React.useState(false);
  let { myUser, setMyUser } = useContext(PostContext);
  const open = Boolean(anchorEl);
  let nav = useNavigate();
  let [numberOfPost, setNumberOfPost] = useState("");
  const myid = localStorage.getItem("id");
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
  async function fetchData() {
    await axios
      .get("http://16.170.173.197/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMyUser(response.data.users.filter((e) => e.id == myid)[0]);
      })
      .catch((error) => console.log(error));
    await axios
      .get(`http://16.170.173.197/posts/${myid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setNumberOfPost(response.data.posts.length);
      })
      .catch((error) => {
        console.log("Error Fedching memories", error);
      });
  }
  async function DeleteAccount() {
    await Swal.fire({
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
          .delete("http://16.170.173.197/users", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => console.log(res))
          .catch((error) => {
            console.log("Error", error);
          });

        localStorage.removeItem("token");
      }
    });
  }
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container sx={{ bgcolor: "black", color: "white", width: "950px" }}>
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
          <Stack spacing={2} direction={"row"} sx={{ alignItems: "center" }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h6" component="h2">
              {myUser.userName}
            </Typography>
            <Button
              variant="contained"
              sx={{
                height: 36,
                width: "120px",
                fontSize: "15px",
                textTransform: "lowercase",
                bgcolor: "white",
                color: "black",
              }}
              onClick={() => setOpenModule(true)}
            >
              edit profile
            </Button>
            <ProfileModule
              Open={openmodule}
              closing={() => setOpenModule(false)}
              myUser={myUser ? myUser : ""}
            />
            <Button
              variant="contained"
              sx={{
                height: 36,
                width: "120px",
                fontSize: "15px",
                textTransform: "lowercase",
                bgcolor: "white",
                color: "black",
              }}
            >
              view actions
            </Button>
            <IconButton
              sx={{ color: "white" }}
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <SettingsIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              <MenuItem onClick={signOut}>Logout</MenuItem>
              <MenuItem onClick={signOut}>change password</MenuItem>
              <MenuItem onClick={DeleteAccount}>delete Account</MenuItem>
            </Menu>
          </Stack>
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
          <Typography sx={{ fontSize: "15px" }} variant="h6" component="h2">
            {numberOfPost} posts
          </Typography>
          <Typography sx={{ fontSize: "15px" }} variant="h6" component="h2">
            652 followers
          </Typography>
          <Typography sx={{ fontSize: "15px" }} variant="h6" component="h2">
            1,384 following
          </Typography>
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
          <StoryCircle name={"Nice memories"} images={image2} />
          <StoryCircle name={"Nice memories"} images={image3} />
          <StoryCircle name={"Nice memories"} images={image4} />
          <StoryCircle
            name={"Add Highlight"}
            images={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWq1fCF7KbKYum0PRRMGKnq4EBj-QT_bcSLhLsIphPeQ&s"
            }
          />
        </Box>
      </Box>
      <TabProfile />
      <ProfilePosts />
    </Container>
  );
}
