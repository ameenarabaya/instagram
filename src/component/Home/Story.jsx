import React, { useEffect, useState } from "react";
import image1 from "../../assets/assets/StoriesAvatars/saleswoman.png";
import image2 from "../../assets/assets/StoriesAvatars/driver.png";
import image3 from "../../assets/assets/StoriesAvatars/farmer-avatar.png";
import image4 from "../../assets/assets/StoriesAvatars/graduated-student.png";
import image5 from "../../assets/assets/StoriesAvatars/female-chef.png";
import image6 from "../../assets/assets/StoriesAvatars/graduated-student.png";
import image7 from "../../assets/assets/StoriesAvatars/flight-attendant.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import StoryCircle from "./StoryCircle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Pagination from "swiper";
import axios from "axios";
import "./story.css";
import { Controller } from "swiper/modules";

export default function Story() {
  let token = localStorage.getItem("token");
  let [users, setUsers] = useState([]);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  console.log(controlledSwiper);
  useEffect(() => {
    axios
      .get("http://16.170.173.197/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.log("Error Fedching memories", error);
      });
  }, []);
  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{
        maxWidth: 550,
        marginTop: 3,
        marginLeft: 3,
        color: "white",
        marginBottom:-3
      }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={"2px"}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: "2px",
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: "2px",
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: "2px",
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 3,
          },
        }}
        // modules={[Pagination]}
        controller={{ control: controlledSwiper }}
        className="mySwiper"
        style={{
          color: "white",
          maxWidth: "100%",
        }}
      >
        <SwiperSlide>
          <StoryCircle name={"ameena"} images={image5} />
        </SwiperSlide>
        {users ? (
          users.map((e) => (
            <SwiperSlide>
              <StoryCircle name={e.userName.slice(0, 8)} images={image1} />
            </SwiperSlide>
          ))
        ) : (
          <></>
        )}
      </Swiper>
    </Stack>
  );
}
