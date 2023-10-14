import React, { useEffect, useState } from "react";
import StoryCircle from "./StoryCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import image1 from "../../assets/assets/Avatars/man.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import image2 from "../../assets/assets/view.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
export default function Post({ title, body, url, id, likes, createdAt }) {
  const start = Date.now();
  let [clicked, setClicked] = useState(true);
  let [user, setUser] = useState("");
  let token = localStorage.getItem("token");
  let myid = localStorage.getItem("id");
  const handleLikes = (id, e) => {
    axios
      .post(`http://16.170.173.197/posts/like/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    likes.map((e) => {
      if (e == myid) {
        document.querySelector(`.Likes-${id}`).style.color = "red";
      } else {
        document.querySelector(`.Likes-${id}`).style.color = "white";
      }
    });
  }, [likes]);
  function getHourDifference(createdAt, start) {
    const createdAtob = new Date(createdAt);
    const diffInMilliseconds = start - createdAtob;
    const hours = diffInMilliseconds / 3600000;
    if (hours > 24) {
      return `${Math.round(diffInMilliseconds / 86400000)}d`;
    } else if (1 < hours && hours < 24) {
      return `${Math.round(hours)}h`;
    } else if (hours < 1) {
      return `${Math.round(diffInMilliseconds / 60000)}m`;
    }
  }
  return (
    <Card sx={{ bgcolor: "black", maxWidth: "100%" }}>
      <CardHeader
        sx={{ color: "white" }}
        avatar={
          <Avatar
            sx={{ width: 50, height: 50, border: "2px solid white" }}
            alt="Remy Sharp"
            src={image1}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        title={`${title}.${getHourDifference(createdAt, start)}`}
      />
      <CardMedia
        component="img"
        height="500px"
        width="100%"
        image={url}
        alt="Paella dish"
      />
      <CardActions sx={{ marginBottom: -2 }}>
        <IconButton sx={{ color: "white" }} aria-label="settings">
          <FavoriteIcon
            className={`Likes-${id}`}
            sx={{ marginRight: 1 }}
            onClick={(e) => {
              handleLikes(id, e);
            }}
          />
          <FontAwesomeIcon icon={faComment} />
          <SendIcon
            sx={{
              marginLeft: 1,
              transform: "rotate(-45deg)",
            }}
          />
        </IconButton>
      </CardActions>
      <CardContent sx={{ color: "white" }}>
        <Typography
          sx={{ color: "white" }}
          variant="body2"
          color="text.secondary"
        >
          <div>{likes.length} likes</div>
          <div>{title}</div>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}
