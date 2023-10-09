import React from "react";
import image1 from "../assets/assets/androidScreen.png";
import image2 from "../assets/assets/iPhoneScreen.png";
import { Outlet } from "react-router-dom";
export default function OutLayout() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="OutLayout"
        style={{
          width: "800px",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "150px",
        }}
      >
        <div className="images">
          <img src={image1} style={{ height: "450px", marginTop: "30px" }} />
          <img
            src={image2}
            style={{
              height: "470px",
              position: "absolute",
              top: "25%",
              left: "25%",
            }}
          />
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
