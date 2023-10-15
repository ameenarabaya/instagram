import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import image1 from "../../assets/assets/Avatars/man.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import BasicModal from "../CreatePost";
import axios from "axios";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
export default function Post({ title, body, url, id, likes, createdAt }) {
  const start = Date.now();
  const token = localStorage.getItem("token");
  let [User, setUser] = useState([]);
  let myid = localStorage.getItem("id");
  const handleLikes = (id, e) => {
    axios
      .post(`http://16.170.173.197/posts/like/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data.likes.users);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    LikesUser(id);
  }, []);
  async function LikesUser(id) {
    axios
      .get(`http://16.170.173.197/posts/likes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data.likes.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }
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
            sx={{
              marginRight: 1,
              color: likes.includes(myid) ? "red" : "white",
            }}
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
          <div>
            {User.length > 0 ? (
              <span style={{ marginRight: "3px", fontSize: "12px" }}>
                liked By
              </span>
            ) : (
              <></>
            )}
            {User ? (
              User.map((userLike) => {
                return (
                  <span
                    style={{
                      marginRight: "5px",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                    key={userLike.id}
                  >
                    {userLike.userName},
                  </span>
                );
              })
            ) : (
              <></>
            )}
          </div>
          <div style={{ fontWeight: "bold" }}>{title}</div>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}
