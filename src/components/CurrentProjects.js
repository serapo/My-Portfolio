import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import PmpPlusImage from "../assets/pmpplus.png";
import Grid from "@mui/material/Grid";
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

      <Box sx={{ display: "flex", alignItems: "flex-start" }}>
        <img
          src={PmpPlusImage}
          alt="PmpPlus"
          width="150"
          height="150"
          style={{ borderRadius: "8px" }}
        />
        <Box sx={{ marginLeft: 2, textAlign: "left", width: 500 }}>
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
    </Box>
  );
}

export default CurrentProjects;
