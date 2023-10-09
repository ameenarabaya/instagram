import React from "react";
import FollowingCard from "./FollowingCard";
import { Container } from "@mui/material";
export default function SectionTwo() {
  return (
    <div
      style={{
        position: "sticky",
        top: "30px",
        color: "white",
        textAlign: "start",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
      }}
    >
      <FollowingCard />
      <div className="text" style={{ marginBottom: "20px" }}>
        <span style={{ marginRight: "90px" }}>suggestion for you</span>
        <span>see more</span>
      </div>
      <FollowingCard />
      <FollowingCard />
      <FollowingCard />
      <FollowingCard />
      <div style={{ fontSize: "12px", marginBottom: "9px" }}>
        About . Help . Press . API . Jobs . Privacy . Terms. Locations .
        Language . Meta Verified
      </div>
      <div style={{ fontSize: "12px" }}>© 2023 INSTAGRAM FROM META</div>
    </div>
  );
}
