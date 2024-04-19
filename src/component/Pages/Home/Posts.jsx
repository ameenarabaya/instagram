import React, { useContext, useEffect, useState } from "react";
import BasicModal from "./CreatePost";
import axios from "axios";
import Post from "./Post";
import postCss from "./posts.module.css";
import { PostContext } from "../../context";
export default function Posts() {
  let { posts, setposts } = useContext(PostContext);
  let [Posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  let [loading, setLoading] = useState(true);
  async function getPosts() {
    await axios
      .get("https://instagram-cloneapi.onrender.com/posts", {
        headers: {
          token: token,
        },
      })
      .then((response) => {
        setposts(response.data.posts);
        setPosts(response.data.posts);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error Fedching memories", error);
      });
  }
  useEffect(() => {
    getPosts();
  }, [Posts]);
  return (
    <>
      {loading ? (
        <span class={postCss.loader}></span>
      ) : (
        Posts
          .slice()
          .reverse()
          .map((post) => {
            return (
              <Post
                key={post._id}
                title={post.user.userName}
                body={post.description}
                url={post.image}
                id={post._id}
                likes={post.likes}
                createdAt={post.createdAt}
                avatar={post.user.avatar}
              />
            );
          })
      )}
    </>
  );
}
