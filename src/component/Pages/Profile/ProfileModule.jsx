import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { PostContext } from "../../context";
import { Avatar, Switch } from "@mui/material";
import images from "../../../assets/assets/StoriesAvatars/saleswoman.png";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
const label = { inputProps: { "aria-label": "Switch demo" } };
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "1px solid white ",
  borderRadius: 6,
  boxShadow: 24,
  p: 4,
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  bgcolor: "#1D1D1D",
};

export default function ProfileModule({ Open, closing }) {
  let [userName, setUserName] = React.useState("");
  let [bio, setBio] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [avatar, setAvatar] = React.useState("");
  let [status, setstatus] = React.useState("");
  let [AvatarCover, setAvatarCover] = React.useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  let myid = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  let { setMyUser, myUser } = React.useContext(PostContext);
  function handleUrl(event) {
    const file = event.target.files[0];
    setAvatar(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setAvatarCover(reader.result);
    };
  }
  const formData = new FormData();
  formData.append("bio", bio);
  formData.append("userName", userName);
  formData.append("status", status);
  formData.append("avatar", avatar);
  async function handlesubmit(e) {
    e.preventDefault();
    await axios
      .patch("https://instagram-cloneapi.onrender.com/users/update", formData, {
        headers: {
          token: token,
        },
      })
      .then(async () => {
        await axios
          .get("https://instagram-cloneapi.onrender.com/users")
          .then((response) => {
            setMyUser(response.data.users.filter((e) => e._id == myid)[0]);
          })
          .catch((error) => console.log(error));
      });
  }
  console.log(myUser.userName);
  React.useEffect(() => {
    axios
      .get("https://instagram-cloneapi.onrender.com/users")
      .then((response) => {
        setMyUser(response.data.users.filter((e) => e._id == myid)[0]);
      })
      .catch((error) => console.log(error));
  }, [myUser]);
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
            <Avatar
              className="avatar"
              sx={{
                width: 90,
                height: 90,
                border: "2px solid white",
              }}
              alt="Remy Sharp"
              src={myUser.avatar}
            ></Avatar>
            <label htmlFor="image-upload">
              <i
                variant="contained"
                component="div"
                style={{
                  width: "100%",
                  textAlign: "center",
                  margin: "10px auto",
                  position: "absolute",
                  top: "14%",
                  left: "0%",
                  paddingTop: "5px",
                  borderRadius: "20px",
                  fontSize: "20px",
                  color: "white",
                  marginLeft: "30px",
                }}
              >
                <AddPhotoAlternateIcon sx={{ fontSize: "30px" }} />
              </i>
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={(event) => handleUrl(event)}
              style={{ display: "none" }}
            />
          </Typography>

          <label style={{ marginBottom: "5px" }}>userName</label>
          <input
            style={{
              width: "100%",
              borderRadius: "10px",
              marginBottom: "15px",
              backgroundColor: "#4D4D4D",
              border: "1px solid #FFFFFF",
              color: "white",
              padding: "5px",
            }}
            // name="userName"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <label style={{ marginBottom: "5px" }}>Bio</label>
          <textarea
            style={{
              width: "100%",
              borderRadius: "10px",
              marginBottom: "15px",
              backgroundColor: "#4D4D4D",
              border: "1px solid #FFFFFF",
              color: "white",
              padding: "5px",
              height: "90px",
            }}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Switch
              {...label}
              defaultChecked
              color="secondary"
              onChange={(e) => {
                e.target.checked ? setstatus("public") : setstatus("private");
              }}
            />
            <span>Public</span>
          </Box>
          {/* <span style={{ fontSize: "12px", textAlign: "start" }}>
            *this feild is optional
          </span>
          <label style={{ marginBottom: "5px" }}>Password</label>
          <input
            style={{
              width: "100%",
              borderRadius: "10px",
              marginBottom: "15px",
              backgroundColor: "#4D4D4D",
              border: "1px solid #FFFFFF",
              color: "white",
              padding: "5px",
            }}
            onChange={(e) => setPassword(e.target.value)}
          ></input> */}
          <Button
            type="submit"
            onClick={(e) => {
              handlesubmit(e);
              closing();
            }}
            variant="contained"
            sx={{ width: "50%", borderRadius: "20px", margin: "0 auto" }}
          >
            Save Change
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
