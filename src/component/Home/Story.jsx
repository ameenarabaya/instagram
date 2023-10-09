import React from "react";
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
export default function Story() {
  return (
    <>
      <Stack
        direction="row"
        spacing={3}
        sx={{
          bgcolor: "black",
          maxWidth: 450,
          marginTop: 3,
          marginLeft: 3,
          color: "white",
        }}
      >
        <StoryCircle name={"ameena"} images={image1} />
        <StoryCircle name={"Moath"} images={image2} />
        <StoryCircle name={"waleed"} images={image3} />
        <StoryCircle name={"kareem"} images={image4} />
        <StoryCircle name={"sara"} images={image5} />
        <StoryCircle name={"Adam"} images={image6} />
        <StoryCircle name={"Tyma'a"} images={image7} />
      </Stack>
    </>
  );
}
