import React, { useContext, useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import instaImage from "../assets/assets/instagram-logo.png";
import {
  Avatar,
  Badge,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import StoryCircle from "./Pages/Home/StoryCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import img from "../assets/assets/profile.jpg";
import BasicModal from "./Pages/Home/CreatePost";
import { PostContext } from "./context";
export default function IconsSide() {
  let [open, setOpen] = useState(false);
  let { myUser } = useContext(PostContext);
  const handleClick = () => {
    setOpen(true);
  };
  const closing = () => {
    setOpen(false);
  };
  return (
    <List
      className="List"
      sx={{
        position: "sticky",
        Width: "100%",
        height: "100vh",
        bgcolor: "black",
        color: "white",
        borderRight: "1px solid #ffffff38",
        zIndex: "44",
        top: 0,
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          style={{ backgroundColor: "black" }}
        >
          <img
            src={instaImage}
            alt="instagram"
            style={{
              backgroundColor: "black",
              width: "150px",
              marginTop: "35px",
            }}
          />
        </ListSubheader>
      }
    >
      <Link to="/user" style={{ textDecoration: "none", color: "white" }}>
        <ListItemButton>
          <ListItemIcon>{<HomeIcon style={{ color: "white" }} />}</ListItemIcon>
          <ListItemText sx={{ marginLeft: -2 }} primary="Home" />
        </ListItemButton>
      </Link>
      <Link
        to={"/user/messagePage"}
        style={{ textDecoration: "none", color: "white" }}
      >
        <ListItemButton>
          <ListItemIcon>
            {
              <FontAwesomeIcon
                style={{ color: "white", marginRight: "2px", fontSize: "22px" }}
                icon={faComment}
              />
            }
          </ListItemIcon>
          <ListItemText sx={{ marginLeft: -2 }} primary="Messages" />
        </ListItemButton>
      </Link>
      <Link
        to={"/user/explore"}
        style={{ textDecoration: "none", color: "white" }}
      >
        <ListItemButton>
          <ListItemIcon>
            {<ExploreIcon style={{ color: "white" }} />}
          </ListItemIcon>
          <ListItemText sx={{ marginLeft: -2 }} primary="Explore" />
        </ListItemButton>
      </Link>
      <Link
        to={"/user/search"}
        style={{ textDecoration: "none", color: "white" }}
      >
        <ListItemButton>
          <ListItemIcon>
            {<SearchIcon style={{ color: "white" }} />}
          </ListItemIcon>
          <ListItemText sx={{ marginLeft: -2 }} primary="search" />
        </ListItemButton>
      </Link>
      <ListItemButton>
        <ListItemIcon onClick={() => handleClick()}>
          {<AddCircleOutlineIcon style={{ color: "white" }} />}
        </ListItemIcon>
        <ListItemText sx={{ marginLeft: -2 }} primary="create" />
        <BasicModal Open={open} closing={closing} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          {<SlideshowIcon style={{ color: "white" }} />}
        </ListItemIcon>
        <ListItemText sx={{ marginLeft: -2 }} primary="reals" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Badge sx={{ color: "red" }} color="error" variant="dot">
            <FavoriteBorderIcon style={{ color: "white" }} />
          </Badge>
        </ListItemIcon>
        <ListItemText sx={{ marginLeft: -2 }} primary="Notifications" />
      </ListItemButton>
      <Link to={"/user/profile"} style={{ textDecoration: "none" }}>
        <ListItemButton>
          <Avatar
            src={myUser.avatar}
            sx={{ width: "30px", height: "30px" }}
          ></Avatar>
          <ListItemText
            sx={{
              marginLeft: 2,
              textDecoration: "none",
              color: "white",
            }}
            primary={`${myUser.userName}`}
          />
        </ListItemButton>
      </Link>
      <ListItemButton style={{ position: "absolute", bottom: "10px" }}>
        <ListItemIcon>{<MenuIcon style={{ color: "white" }} />}</ListItemIcon>
        <ListItemText sx={{ marginLeft: -2 }} primary="Menu" />
      </ListItemButton>
    </List>
  );
}
