import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import img from "../assets/profileImg.jpeg"
function Main() {
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "#F3F3F3",
        padding: 0,
        margin: 0,
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar alt="User" src={img} sx={{ width: 300, height: 300 }}/>
    </Box>
  );
}

export default Main;
