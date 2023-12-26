import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import React from "react";
import LanguageCardImage from "../../assets/language_card.png";
import CardProjectImage from "../../assets/cardProject.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Project2() {
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  const handleTabClick = () => {
    window.location.href = "https://serapo.github.io/Language_Card/";
  };
  const handleTabClickGithub = () => {
    window.location.href = "https://serapo.github.io/Language_Card/";
  };

  const handleTabClickCard = () => {
    window.location.href = "https://serapo.github.io/Card-React-Sass-app/";
  };
  const handleTabClickGithubCard = () => {
    window.location.href = "https://github.com/serapo/Card-React-Sass-app";
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
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          marginBottom: 8,
          marginTop: 6,
        }}
      >
        <img
          src={LanguageCardImage}
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
            Language_Card
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
            }}
          >
            You can see the description of the software language you want by
            clicking on one of the cards on the home page.
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
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          marginBottom: 8,
          marginTop: 6,
        }}
      >
        <Box sx={{ marginLeft: 2, textAlign: "center", width: 500 }}>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            CARD USER APP
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
            }}
          >
This project aims to display user information from a JSON file in a visually appealing way on a website. The user information is stored in a JSON file, and each user's details will be presented in the form of a card.

          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
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
              onClick={handleTabClickCard}
            />
            <Tab
              label="GITHUB"
              sx={{ color: "white", cursor: "pointer" }}
              onClick={handleTabClickGithubCard}
            />
          </Tabs>
        </Box>
        <img
          src={CardProjectImage}
          alt="PmpPlus"
          width="200"
          height="200"
          style={{ borderRadius: "8px" }}
        />
      </Box>
    </Box>
  );
}

export default Project2;
