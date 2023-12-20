import Avatar from "@mui/material/Avatar";
import img from "../assets/profileImg.jpeg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiGitlab } from "@mdi/js";
import React, { useState } from "react";

function AboutMe() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const openLink = (url) => {
    window.open(url, "_blank");
  };
  const iconStyle = {
    fill: "white",
    width: "24px",
    height: "24px",
    cursor: "pointer",
  };

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: 0,
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-start" }}>
        <Avatar alt="User" src={img} sx={{ width: 300, height: 300 }} />
        <Box sx={{ marginLeft: 2, textAlign: "left", width: 300 }}>
          <Typography
            sx={{
              marginTop: 4,
            }}
            variant="h5"
          >
            Hello World!{" "}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 2,
            }}
          >
            I am Serap ORAL, Front-End Web Developer. I craft user interfaces
            using modern frontend web technologies.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            {" "}
            <Icon
              path={mdiGitlab}
              size={2}
              style={{
                ...iconStyle,
                color: hoveredIcon === "gitlab" ? "orange" : "white",
              }}
              onMouseEnter={() => handleIconHover("gitlab")}
              onMouseLeave={handleIconLeave}
              onClick={() => openLink("https://gitlab.com/serapo")}
            />
            <Icon
              path={mdiLinkedin}
              style={{
                ...iconStyle,
                color: hoveredIcon === "linkedin" ? "orange" : "white",
              }}
              onMouseEnter={() => handleIconHover("linkedin")}
              onMouseLeave={handleIconLeave}
              size={2}
              onClick={() => openLink("https://www.linkedin.com/in/serapo/")}
            />
            <Icon
              path={mdiGithub}
              size={2}
              style={{
                ...iconStyle,
                color: hoveredIcon === "github" ? "orange" : "white",
              }}
              onMouseEnter={() => handleIconHover("github")}
              onMouseLeave={handleIconLeave}
              onClick={() => openLink("https://github.com/serapo")}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutMe;
