import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "1px solid #1D1D1D ",
  borderRadius: 6,
  boxShadow: 24,
  p: 4,
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  bgcolor: "#1D1D1D",
};

export default function BasicModal({ Open, closing, setPost }) {
  let [description, setDescription] = React.useState("");
  let [image, setimage] = React.useState(null);
  let [imagefile, setimageFile] = React.useState(null);
  const token = localStorage.getItem("token");

  function handleBody(e) {
    setDescription(e.target.value);
  }
  function handleUrl(event) {
    const file = event.target.files[0];
    setimage(file);
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setimageFile(reader.result);
    };
  }
  const formData = new FormData();
  formData.append("description", description);
  formData.append("image", image);
  async function handlesubmit(e) {
    e.preventDefault();
    await axios
      .post("http://16.170.173.197/posts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-Data",
        },
      })
      .then((response) => {
        setPost((prevposts) => [...prevposts, response.data]);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <Modal
        open={Open}
        onClose={closing}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ marginBottom: 3, borderRadius: "20px" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            create new post
          </Typography>

          <label style={{ marginBottom: "5px" }}>Description</label>
          <textarea
            style={{
              width: "100%",
              borderRadius: "10px",
              height: "90px",
              marginBottom: "15px",
              backgroundColor: "#4D4D4D",
              border: "1px solid #FFFFFF",
              color: "white",
            }}
            onChange={(e) => handleBody(e)}
          ></textarea>
          {image ? (
            <div style={{ width: "160px", height: "160px", margin: "0 auto" }}>
              <img style={{ width: "100%", height: "100%" }} src={imagefile} />
            </div>
          ) : (
            <></>
          )}
          <label htmlFor="image-upload">
            <Button
              variant="contained"
              component="div"
              sx={{
                width: "100%",
                textAlign: "center",
                margin: "10px auto",
                transform: "translateX(90%)",
                paddingTop: "5px",
                borderRadius: "20px",
                fontSize: "14px",
                color: "white",
                backgroundColor: "#1565c0",
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
                "&:active": {
                  boxShadow: "none",
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            >
              Upload Image
            </Button>
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={(event) => handleUrl(event)}
            style={{ display: "none" }}
          />
          <Button
            type="submit"
            onClick={(e) => {
              handlesubmit(e);
              closing();
            }}
            variant="contained"
            sx={{ width: "50%", borderRadius: "20px", margin: "0 auto" }}
          >
            Post
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
