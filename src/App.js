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
      <div ref={menuNavBarRef} className="arkaplan" id="arkaplan1">
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
      <div className="arkaplan" id="arkaplan5">
        <Project3  scrollToMenuNavBar={scrollToMenuNavBar}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
