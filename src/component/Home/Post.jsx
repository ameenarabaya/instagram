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
export default function Post({ title, body, url, id }) {
  let [likesCount, setlikesCount] = useState("");
  let token = localStorage.getItem("token");
  // const handleLikes = (id) => {
  //   console.log(id);
  //   axios
  //     .post(`http://16.170.173.197/posts/like/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     });
  // };
  // useEffect(() => {
  //   axios.get(`http://16.170.173.197/posts?id=${id}`).then((response) => {
  //     setlikesCount(response.data.likes.count);
  //   });
  // }, [id]);
  return (
    <Card sx={{ maxWidth: "100%", bgcolor: "black", color: "white" }}>
      <CardHeader
        sx={{ color: "white" }}
        avatar={
          <Avatar
            sx={{ border: "1px solid white", width: 50, height: 50 }}
            alt="Remy Sharp"
            src={image1}
          />
        }
        action={
          <IconButton sx={{ color: "white" }} aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        title={`${title}.8h`}
      />
      <CardMedia
        component="img"
        height="500px"
        width="100%"
        image={url}
        alt="Paella dish"
      />
      <CardActions sx={{ color: "white", marginBottom: -2 }}>
        <IconButton aria-label="settings">
          <FavoriteIcon
            sx={{ color: "white", marginRight: 1 }}
            onClick={(e) => {
              e.target.style.color = "red";
              // handleLikes(id);
            }}
          />
          <FontAwesomeIcon style={{ color: "white" }} icon={faComment} />
          <SendIcon
            sx={{
              color: "white",
              marginLeft: 1,
              transform: "rotate(-45deg)",
            }}
          />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography
          sx={{ color: "white" }}
          variant="body2"
          color="text.secondary"
        >
          <div>{likesCount}Likes</div>
          <div>{title}</div>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}
