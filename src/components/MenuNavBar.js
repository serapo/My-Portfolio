import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Main from "./Main";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
const theme = createTheme();

const navItems = ["Home", "About", "Projects", "Contact"];

function MenuNavBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          textAlign: "right",
          padding: 0,
          margin: 0,
          color: "white",
        }}
      >
        <Box component="nav" variant="overline" sx={{ backgroundColor: "black" ,   height: "5vh",}}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            ></Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "white" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Box>
        
        <Main />
      </Box>
    </ThemeProvider>
  );
}

export default MenuNavBar;
