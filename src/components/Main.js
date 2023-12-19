import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import img from "../assets/profileImg.jpeg";
import Typography from "@mui/material/Typography";

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
      <Box sx={{ display: "flex", alignItems: "flex-start" }}>
        <Avatar alt="User" src={img} sx={{ width: 300, height: 300 }} />
        <Box sx={{ marginLeft: 2, textAlign: "left", width: 300 }}>
          <Typography variant="h5">Hello World! </Typography>
          <Typography variant="h6">
            I am Serap ORAL, Front-End Web Developer. I craft user interfaces
            using modern frontend web technologies
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Main;
