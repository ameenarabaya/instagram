import React, { useEffect, useState } from "react";
import Post from "./Post";
import BasicModal from "../CreatePost";
import axios from "axios";

export default function Posts() {
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
  }, []);
  return (
    <>
      <BasicModal setPost={setPost} />
      {posts ? (
        posts.map((e, index) => {
          return (
            <Post
              key={e.id}
              title={e.user.userName}
              body={e.description}
              url={e.image}
            />
          );
        })
      ) : (
        <></>
      )}
    </>
  );
}
