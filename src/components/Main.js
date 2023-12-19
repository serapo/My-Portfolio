import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function Main() {
  return (
    <Box
      sx={{
        textAlign: "left",
        padding: 0,
        margin: 0,
        height: "95vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        width: "100%",
      }}
    >
      <Box sx={{ width: "100%"  }}>
        <Typography variant="h3" gutterBottom>
          SERAP ORAL
        </Typography>
        <Divider sx={{ height: 4, backgroundColor: "orange" }} />
        <Typography variant="h4" gutterBottom>
          FRONT-END
        </Typography>
        <Typography variant="h4" gutterBottom>
          WEB DEVELOPER
        </Typography>
      </Box>
    </Box>
  );
}

export default Main;
