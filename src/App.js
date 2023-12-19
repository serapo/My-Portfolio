// App.js

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MenuNavBar from "./components/MenuNavBar";
import AboutMe from "./components/AboutMe";

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
    </ThemeProvider>
  );
}

export default App;
