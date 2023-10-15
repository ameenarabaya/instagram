import React, { useEffect, useState } from "react";
import BasicModal from "../CreatePost";
import axios from "axios";
import Post from "./Post";
export default function Posts({ updateLikes }) {
  const [posts, setPost] = useState([]);
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
        setPost(response.data.posts);
      })
      .catch((error) => {
        console.log("Error Fedching memories", error);
      });
  }, [posts]);
  return (
    <>
      <BasicModal setPost={setPost} />
      {posts ? (
        posts.map((post, index) => {
          return (
            <Post
              key={post.id}
              title={post.user.userName}
              body={post.description}
              url={post.image}
              id={post.id}
              likes={post.likes}
              createdAt={post.createdAt}
            />
          );
        })
      ) : (
        <></>
      )}
    </>
  );
}
