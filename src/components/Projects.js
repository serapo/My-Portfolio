import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import React from "react";

function Projects() {
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
          textAlign: "center",
          padding: 0,
          margin: 0,
          marginBottom: 10,
          display: "flex",
          justifyContent: "space-between",
          marginTop: 2,
          color: "white",
          width: "100%",
        }}
      >
       
        <Typography variant="h6" style={{ color: "white", marginTop: 8 }}>
          HTML5
        </Typography>
      </Box>
    </Box>
  );
}

export default Projects;
