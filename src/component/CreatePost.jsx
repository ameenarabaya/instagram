import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

export default function BasicModal({ Open, closing }) {
  let [title, setTitle] = React.useState("");
  let [body, setBody] = React.useState("");
  let [Url, setUrl] = React.useState("");
  let [posts, setPost] = React.useState([
    {
      title: "Ameena",
      body: "Good Morning",
      url: "https://images.pexels.com/photos/17038848/pexels-photo-17038848.jpeg?cs=srgb&dl=pexels-yunus-tu%C4%9F-17038848.jpg&fm=jpg",
    },
  ]);
  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleBody(e) {
    setBody(e.target.value);
  }
  function handleUrl(e) {
    setUrl(e.target.value);
  }
  function handlesubmit() {
    let postObject = { title: title, body: body, url: Url };
    setPost([...posts, postObject]);
    localStorage.setItem("posts", JSON.stringify([...posts, postObject]));
  }
  React.useEffect(() => {
    if (localStorage.getItem("posts")) {
      setPost(JSON.parse(localStorage.getItem("posts")));
    }
  }, []);
  return (
    <div>
      <Modal
        open={Open}
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
          <label style={{ marginBottom: "5px" }}>title</label>
          <input
            style={{
              width: "100%",
              height: "25px",
              borderRadius: "10px",
              marginBottom: "15px",
              backgroundColor: "#4D4D4D",
              border: "1px solid #FFFFFF",
              color: "white",
            }}
            onChange={(e) => handleTitle(e)}
          />
          <label style={{ marginBottom: "5px" }}>Body</label>
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
          <label style={{ marginBottom: "5px" }}>image Url</label>
          <input
            style={{
              marginBottom: "20px",
              width: "100%",
              borderRadius: "10px",
              height: "25px",
              backgroundColor: "#4D4D4D",
              border: "1px solid #FFFFFF",
              color: "white",
            }}
            onChange={(e) => handleUrl(e)}
          />
          <Button
            type="submit"
            onClick={() => {
              handlesubmit();
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
