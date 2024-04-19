import React, { useContext, useEffect, useState } from "react";
import image5 from "../../../assets/assets/StoriesAvatars/female-chef.png";
import StoryCircle from "./StoryCircle";
import axios from "axios";
import { Controller } from "swiper/modules";
import { PostContext } from "../../context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
export default function Story() {
  let token = localStorage.getItem("token");
  let [users, setUsers] = useState([]);
  let { myUser } = useContext(PostContext);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  useEffect(() => {
    axios
      .get("https://instagram-api-0xvb.onrender.com/users")
      .then((response) => {
        setUsers(response.data.users);
        // console.log(users);
      })
      .catch((error) => {
        console.log("Error Fedching memories", error);
      });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <Swiper
      className="mb-4"
      spaceBetween={30}
      slidesPerView={6}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide key={0}>
        <StoryCircle name={myUser.userName} images={myUser.avatar} />
      </SwiperSlide>
      {users.map(
        (item, index) =>
          item.userName !== myUser.userName && (
            <SwiperSlide key={index}>
              <StoryCircle name={item.userName} images={item.avatar} />
            </SwiperSlide>
          )
      )}
    </Swiper>
  );
}
