import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

function MenuNavBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          textAlign: "right",
          backgroundColor: "#F3F3F3",
          padding: 0,
          margin: 0,
        }}
      >
        <Typography>
         Home
          <Typography variant="caption"> About</Typography>
          <Typography variant="caption"> Projects</Typography>
          <Typography variant="caption"> Contact</Typography>
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default MenuNavBar;
