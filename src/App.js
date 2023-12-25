// App.js

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MenuNavBar from "./components/MenuNavBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import CurrentProjects from "./components/CurrentProjects";
import Project1 from "./components/Project/Project1";
import Project2 from "./components/Project/Project2";

import "./App.css";

const theme = createTheme({
  palette: {
    background: {
      default: "black",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={{ ...theme, background: { default: "black" } }}>
      <div className="arkaplan" id="arkaplan1">
        <MenuNavBar />
      </div>
      <div className="arkaplan" id="arkaplan2">
        <AboutMe />
      </div>
      <div className="arkaplan" id="arkaplan3">
        <Skills />
      </div>
      <div className="arkaplan" id="arkaplan4">
        <CurrentProjects />
      </div>
      <div className="arkaplan" id="arkaplan5">
        <Project1 />
      </div>
      <div className="arkaplan" id="arkaplan5">
        <Project2 />
      </div>
    </ThemeProvider>
  );
}

export default App;
