// App.js

import React, { useRef } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MenuNavBar from "./components/MenuNavBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import CurrentProjects from "./components/CurrentProjects";
import Project1 from "./components/Project/Project1";
import Project2 from "./components/Project/Project2";
import Project3 from "./components/Project/Project3";
import Box from "@mui/material/Box";
import "./App.css";

const theme = createTheme({
  palette: {
    background: {
      default: "black",
    },
  },
});

function App() {
  const menuNavBarRef = useRef(null);

  const scrollToMenuNavBar = () => {
    menuNavBarRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ThemeProvider theme={{ ...theme, background: { default: "black" } }}>
      <Box ref={menuNavBarRef} className="arkaplan" id="arkaplan1">
        <MenuNavBar  />
      </Box>
      <Box className="arkaplan" id="arkaplan2" sx={{ borderBottom: 0 }}>
        <AboutMe />
      </Box>
      <Box className="arkaplan" id="arkaplan3">
        <Skills />
      </Box>
      <Box className="arkaplan" id="arkaplan4">
        <CurrentProjects />
      </Box>
      <Box className="arkaplan" id="arkaplan5">
        <Project1 />
      </Box>

      <Box className="arkaplan" id="arkaplan6">
        <Project2 />
      </Box>
      <Box className="arkaplan" id="arkaplan7">
        <Project3 scrollToMenuNavBar={scrollToMenuNavBar} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
