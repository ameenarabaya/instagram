import React, { useEffect, useState } from "react";
import Post from "./Post";
import BasicModal from "../CreatePost";

export default function Posts() {
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("posts")));
  useEffect(() => {
    if (localStorage.getItem("posts")) {
      setPosts(JSON.parse(localStorage.getItem("posts")));
    }
  }, [posts]);
  return (
    <>
      <Post
        title={"ameena"}
        body={"Good Morning"}
        url={
          "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        }
      />
      {posts ? (
        posts.map((e, index) => {
          return <Post key={index} post={e} />;
        })
      ) : (
        <></>
      )}
    </>
  );
}
