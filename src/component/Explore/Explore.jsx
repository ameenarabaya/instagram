import {
  Box,
  Container,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React from "react";
import image1 from "../../assets/assets/ExplorePics/explorePic1.avif";
import image2 from "../../assets/assets/ExplorePics/explorePic2.avif";
import image3 from "../../assets/assets/ExplorePics/explorePic3.avif";
import image4 from "../../assets/assets/ExplorePics/explorePic4.avif";
import image5 from "../../assets/assets/ExplorePics/explorePic5.avif";
import image6 from "../../assets/assets/ExplorePics/explorePic6.avif";
import image7 from "../../assets/assets/ExplorePics/explorePic7.avif";
import image8 from "../../assets/assets/ExplorePics/explorePic8.avif";
import image9 from "../../assets/assets/ExplorePics/explorePic9.avif";
import image10 from "../../assets/assets/ExplorePics/explorePic10.webp";
import image11 from "../../assets/assets/ExplorePics/explorePic11.webp";
import image12 from "../../assets/assets/ExplorePics/explorePic12.webp";
import image13 from "../../assets/assets/ExplorePics/explorePic13.webp";
import image14 from "../../assets/assets/ExplorePics/explorePic14.webp";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
export default function Explore() {
  let images = [
    `${image1}`,
    `${image2}`,
    `${image3}`,
    `${image4}`,
    `${image5}`,
    `${image6}`,
    `${image7}`,
    `${image8}`,
    `${image9}`,
    `${image10}`,
    `${image11}`,
    `${image12}`,
    `${image13}`,
    `${image14}`,
  ];
  return (
    <Box Container sx={{ width: "900px", height: "100%", margin: "0 auto" }}>
      <ImageList sx={{ width: "100%" }} cols={3}>
        {images.map((e) => {
          return (
            <ImageListItem>
              <img
                style={{
                  width: "294px",
                  height: "294px",
                  marginBottom: "5px",
                }}
                src={e}
                alt={""}
                loading="lazy"
              />
              <ImageListItemBar
                position="top"
                sx={{ bgcolor: "rgba(0, 0, 0, -3.5)" }}
                actionIcon={
                  <IconButton
                    sx={{
                      color: "white",
                    }}
                  >
                    <ContentCopyOutlinedIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Box>
  );
}
