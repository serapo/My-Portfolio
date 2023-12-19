import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MenuNavBar from "./components/MenuNavBar";
import Main from "./components/Main";


const theme = createTheme({
  palette: {
    background: {
      default: "red",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuNavBar />
     
      <Main />
    </ThemeProvider>
  );
}

export default App;
