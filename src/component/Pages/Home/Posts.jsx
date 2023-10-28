import React, { useContext, useEffect, useState } from "react";
import BasicModal from "./CreatePost";
import axios from "axios";
import Post from "./Post";
import { PostContext } from "../../context";
export default function Posts() {
  let { posts, setposts } = useContext(PostContext);
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    axios
      .get("http://16.170.173.197/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setposts(response.data.posts);
        // console.log(posts);
      })
      .catch((error) => {
        console.log("Error Fedching memories", error);
      });
  }, [posts]);
  return (
    <>
      {posts ? (
        posts
          .slice(0)
          .reverse()
          .map((post, index) => {
            return (
              <Post
                key={post.id}
                title={post.user.userName ? post.user.userName : "unKnown"}
                body={post.description}
                url={post.image}
                id={post.id}
                likes={post.likes}
                createdAt={post.createdAt}
                avatar={post.user.avatar}
              />
            );
          })
      ) : (
        <></>
      )}
    </>
  );
}
