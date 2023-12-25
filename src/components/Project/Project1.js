import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import React from "react";
import WeatherAppImage from "../../assets/weather-app.jpg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Project1() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabClick = () => {
    window.location.href = "https://serapo.github.io/005-Weather-App/";
  };
  const handleTabClickGithub = () => {
    window.location.href =
      "https://github.com/serapo/005-Weather-App?tab=readme-ov-file";
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
      <Typography variant="h4" style={{ color: "white" }}>
        PROJECTS
        <Divider
          sx={{
            height: 4,
            backgroundColor: "orange",
            width: "25%",
            margin: "auto",
          }}
        />
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          marginBottom: 8,
          marginTop: 6,
        }}
      >
        <img
          src={WeatherAppImage}
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
            Weather_Condition_App
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
            }}
          >
            This project includes a simple and user-friendly web application
            that allows users to get instant weather information for a specific
            state or county. Users can type the city or district they want in
            the search box and then click the "Submit" button to obtain weather
            information instantly.
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

export default Project1;
