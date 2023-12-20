import React from "react";
import Box from "@mui/material/Box";
import Icon from "@mdi/react";
import { mdiLanguageHtml5 } from "@mdi/js";
import { mdiLanguageCss3 } from "@mdi/js";
import { mdiLanguageJavascript } from "@mdi/js";
import { mdiVuejs } from "@mdi/js";
import { mdiVuetify } from "@mdi/js";
import { mdiBootstrap } from "@mdi/js";
import { mdiMaterialUi } from '@mdi/js';
import { mdiGit } from '@mdi/js';
import { mdiJira } from '@mdi/js';
import { mdiReact } from '@mdi/js';
import { mdiLanguagePython } from '@mdi/js';
import { mdiSass } from '@mdi/js';
import Typography from "@mui/material/Typography";


function Skills() {
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
    >  <Typography variant="H6" style={{ color: "white" }}>
    SKILLS
  </Typography>
      <Box
        sx={{
          textAlign: "center",
          padding: 0,
          margin: 0,
          marginBottom:10,
          display: "flex",
          justifyContent: "space-between",
          marginTop: 2,
          color: "white",
          width: "100%",
        }}
      >
        <Icon path={mdiLanguageHtml5} size={3} />
        <Icon path={mdiLanguageCss3} size={3} />
        <Icon path={mdiLanguageJavascript} size={3} />
        <Icon path={mdiVuejs} size={3} />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          padding: 0,
          margin: 0,
          marginBottom:10,
          display: "flex",
          justifyContent: "space-between",
          marginTop: 2,
          color: "white",
          width: "100%",
        }}
      >
        <Icon path={mdiVuetify} size={3} />
        <Icon path={mdiBootstrap} size={3} />
        <Icon path={mdiMaterialUi} size={3} />
        <Icon path={mdiGit} size={3} />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          padding: 0,
          margin: 0,
          display: "flex",
          justifyContent: "space-between",
          marginTop: 2,
          color: "white",
          width: "100%",
        }}
      >
     <Icon path={mdiJira} size={3} />
     <Icon path={mdiReact} size={3} />
     <Icon path={mdiLanguagePython} size={3} />
     <Icon path={mdiSass} size={3} />
      </Box>
    </Box>
  );
}

export default Skills;
