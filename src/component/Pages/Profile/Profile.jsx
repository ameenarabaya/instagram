import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import images from "../../../assets/assets/Avatars/nurse.png";
import TabProfile from "./TabProfile";
import ProfilePosts from "./ProfilePosts";
import SettingsIcon from "@mui/icons-material/Settings";
import img from "../../../assets/assets/profile.jpg";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [expanded, setExpanded] = React.useState(false);
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let nav = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("id");
    nav("/");
  };
  return (
    <Container sx={{ bgcolor: "black", color: "white", width: "950px" }}>
      <Box sx={{ borderBottom: "1px solid #ffffff38" }}>
        <Stack
          spacing={9}
          sx={{
            marginTop: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          direction={"row"}
        >
          <Avatar
            sx={{ border: "1px solid white", width: 120, height: 120 }}
            alt="Remy Sharp"
            src={img}
          />
          <Stack spacing={2} direction={"row"} sx={{ alignItems: "center" }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h6" component="h2">
              {user.userName}
            </Typography>
            <Button
              variant="contained"
              sx={{
                height: 36,
                width: "120px",
                fontSize: "15px",
                textTransform: "lowercase",
                bgcolor: "white",
                color: "black",
              }}
            >
              edit profile
            </Button>
            <Button
              variant="contained"
              sx={{
                height: 36,
                width: "120px",
                fontSize: "15px",
                textTransform: "lowercase",
                bgcolor: "white",
                color: "black",
              }}
            >
              view actions
            </Button>
            <IconButton
              sx={{ color: "white" }}
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <SettingsIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              <MenuItem onClick={signOut}>Logout</MenuItem>
            </Menu>
          </Stack>
        </Stack>
        <Stack
          sx={{
            marginLeft: 20,
            marginTop: -3,
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={7}
          direction={"row"}
        >
          <Typography sx={{ fontSize: "15px" }} variant="h6" component="h2">
            2 posts
          </Typography>
          <Typography sx={{ fontSize: "15px" }} variant="h6" component="h2">
            652 followers
          </Typography>
          <Typography sx={{ fontSize: "15px" }} variant="h6" component="h2">
            1,384 following
          </Typography>
        </Stack>
        <Stack
          sx={{
            marginLeft: 44,
            marginTop: 2,
            marginBottom: 2,
            justifyContent: "start",
            alignItems: "start",
          }}
          direction={"column"}
        >
          <Typography sx={{ fontSize: "15px" }} variant="h6" component="h2">
            Ameena Rabaya
          </Typography>
          <Typography sx={{ fontSize: "15px" }} variant="h6" component="h2">
            CSE || AAUP
          </Typography>
          <Typography sx={{ fontSize: "15px" }} variant="h6" component="h2">
            smile :)
          </Typography>
        </Stack>
      </Box>
      <TabProfile />
      <ProfilePosts />
    </Container>
  );
}
