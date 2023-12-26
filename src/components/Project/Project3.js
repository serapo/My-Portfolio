import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import menuImage from "../../assets/menu.jpeg";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
function Project3({ scrollToMenuNavBar }) {
  const handleBackToTopClick = () => {
    scrollToMenuNavBar();
  };

  const [value1, setValue1] = React.useState(0);

  const handleChange1 = (event, newValue) => {
    setValue(newValue);
  };
  const handleTabClick = () => {
    window.location.href = "https://serapo.github.io/Menu-React-Project/";
  };
  const handleTabClickGithub = () => {
    window.location.href =
      "https://github.com/serapo/Menu-React-Project?tab=readme-ov-file";
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: 0,
        margin: 0,
        marginTop: 2,
        color: "white",
        width: "50%",
        cursor: "pointer",
      }}
      onClick={handleBackToTopClick}
    >
      {" "}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          marginBottom: 8,
          marginTop: 6,
        }}
      >
        <img
          src={menuImage}
          alt="PmpPlus"
          width="200"
          height="200"
          style={{ borderRadius: "8px" }}
        />
        <Box sx={{ marginLeft: 2, textAlign: "center", width: 500 }}>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Menu
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
            }}
          >
            I have developed a website that serves as a platform for displaying
            menus. The website is designed to provide users with an easy and
            intuitive way to explore different menus for various purposes.
          </Typography>
          <Tabs
            value={value1}
            onChange={handleChange1}
            centered
            textColor="white"
            TabIndicatorProps={{
              style: {
                backgroundColor: "orange",
                color: "white",
              },
            }}
          >
            <Tab
              label="LIVE SITE"
              sx={{ color: "white", cursor: "pointer" }}
              onClick={handleTabClick}
            />
            <Tab
              label="GITHUB"
              sx={{ color: "white", cursor: "pointer" }}
              onClick={handleTabClickGithub}
            />
          </Tabs>
        </Box>
      </Box>
      <Typography
        variant="h6"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        BACK TO TOP
      </Typography>
    </Box>
  );
}

export default Project3;
