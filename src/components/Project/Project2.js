import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import React from "react";
import LanguageCardImage from "../../assets/language_card.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Project2() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabClick = () => {
    window.location.href = "https://serapo.github.io/Language_Card/";
  };
  const handleTabClickGithub = () => {
    window.location.href =
      "https://serapo.github.io/Language_Card/";
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
           You can see the description of the software language you want by clicking on one of the cards on the home page.
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
    </Box>
  );
}

export default Project2;
