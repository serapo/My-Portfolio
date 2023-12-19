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
          textAlign: "left",
          backgroundColor: "#F3F3F3",
          padding: 0,
          margin: 0,
        }}
      >
        <Typography>
          Serap ORAL
          <Typography variant="caption"> Frontend Developer</Typography>
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default MenuNavBar;
