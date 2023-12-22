import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import PmpPlusImage from "../assets/pmpplus.png";
import MarketPlace from "../assets/marketplace.png";

function CurrentProjects() {
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
        CURRENT PROJECT
        <Divider
          sx={{
            height: 4,
            backgroundColor: "orange",
            width: "50%",
            margin: "auto",
          }}
        />
      </Typography>

      <Box sx={{ display: "flex", alignItems: "flex-start", marginBottom:8 , marginTop:6 }}>
        <img
          src={PmpPlusImage}
          alt="PmpPlus"
          width="150"
          height="150"
          style={{ borderRadius: "8px" }}
        />
        <Box sx={{ marginLeft: 2, textAlign: "center", width: 500 }}>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 2,
            }}
          >
            It is a type of software system that helps organizations automate
            and manage core business processes for optimal performance.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "flex-start" }}>
        <Box sx={{ marginLeft: 2, textAlign: "center", width: 500 }}>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 2,
            }}
          >
            Marketplace is a website that brings buyers together with sellers and serves as an intermediary between companies or individuals who want to sell their products or services.
          </Typography>
        </Box>
        <img
          src={MarketPlace}
          alt="PmpPlus"
          width="150"
          height="150"
          style={{ borderRadius: "8px" }}
        />
      </Box>
    </Box>
  );
}

export default CurrentProjects;
