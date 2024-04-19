import React, { useEffect, useState } from "react";
import FollowingCard from "./FollowingCard";
import { Container } from "@mui/material";
import axios from "axios";
export default function SectionTwo() {
  let [users, setUser] = useState([]);
  let [myUser, setMyUser] = useState();
  let [loading, setLoading] = useState(true);
  let myId = localStorage.getItem("id");
  useEffect(() => {
    axios
      .get("https://instagram-cloneapi.onrender.com/users")
      .then((response) => {
        setUser(response.data.users);
        setMyUser(response.data.users.filter((e) => e._id == myId)[0]);
        setLoading(false);
      })
      .catch((error) => console.log("error"));
  }, []);

  return (
    <div
      style={{
        marginTop: "30px",
        color: "white",
        textAlign: "start",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        width: "100%",
      }}
    >
      <FollowingCard
        avatar={loading ? "" : myUser.avatar}
        name={loading ? "" : myUser.userName}
      />
      <div className="text" style={{ marginBottom: "20px" }}>
        <span style={{ marginRight: "90px" }}>suggestion for you</span>
        <span>see more</span>
      </div>
      {users.slice(0,6).map((user) => {
        return (
          user.userName !== myUser.userName && (
            <FollowingCard avatar={user.avatar} name={user.userName} />
          )
        );
      })}
      <div style={{ fontSize: "12px", marginBottom: "9px" }}>
        About . Help . Press . API . Jobs . Privacy . Terms. Locations .
        Language . Meta Verified
      </div>
      <div style={{ fontSize: "12px" }}>© 2023 INSTAGRAM FROM META</div>
    </div>
  );
}
