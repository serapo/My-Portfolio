import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
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
            width: "45%",
            margin: "auto",
          }}
        />
      </Typography>
    </Box>
  );
}

export default CurrentProjects;
