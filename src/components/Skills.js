import React, { useState } from "react";
import Box from "@mui/material/Box";
import Icon from "@mdi/react";
import { mdiLanguageHtml5 } from "@mdi/js";
import { mdiLanguageCss3 } from "@mdi/js";
import { mdiLanguageJavascript } from "@mdi/js";
import { mdiVuejs } from "@mdi/js";
import { mdiVuetify } from "@mdi/js";
import { mdiBootstrap } from "@mdi/js";
import { mdiMaterialUi } from "@mdi/js";
import { mdiGit } from "@mdi/js";
import { mdiJira } from "@mdi/js";
import { mdiReact } from "@mdi/js";
import { mdiLanguagePython } from "@mdi/js";
import { mdiSass } from "@mdi/js";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
function Skills() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const iconStyle = {
    fill: "white",
    width: "24px",
    height: "24px",
    cursor: "pointer",
  };
  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };
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
    >
      <Typography variant="h3" style={{ color: "white" }}>
        SKILLS
        <Divider
          sx={{
            height: 4,
            backgroundColor: "orange",
            width: "20%",
            margin: "auto",
          }}
        />
      </Typography>

      <Box
        sx={{
          textAlign: "center",
          padding: 0,
          margin: 0,
          marginBottom: 0,
          display: "flex",
          justifyContent: "space-between",
          marginTop: 2,
          color: "white",
          width: "100%",
        }}
      >
        <Icon
          style={{
            ...iconStyle,
            color: hoveredIcon === "HTML5" ? "orange" : "white",
          }}
          onMouseEnter={() => handleIconHover("HTML5")}
          onMouseLeave={handleIconLeave}
          path={mdiLanguageHtml5}
          size={3}
        />
        <Icon
          style={{
            ...iconStyle,
            color: hoveredIcon === "CSS3" ? "orange" : "white",
          }}
          onMouseEnter={() => handleIconHover("CSS3")}
          onMouseLeave={handleIconLeave}
          path={mdiLanguageCss3}
          size={3}
        />
        <Icon
          style={{
            ...iconStyle,
            color: hoveredIcon === "JAVASCRIPT" ? "orange" : "white",
          }}
          onMouseEnter={() => handleIconHover("JAVASCRIPT")}
          onMouseLeave={handleIconLeave}
          path={mdiLanguageJavascript}
          size={3}
        />
        <Icon
          style={{
            ...iconStyle,
            color: hoveredIcon === "VUE" ? "orange" : "white",
          }}
          onMouseEnter={() => handleIconHover("VUE")}
          onMouseLeave={handleIconLeave}
          path={mdiVuejs}
          size={3}
        />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          padding: 0,
          margin: 0,
          marginBottom: 10,
          display: "flex",
          justifyContent: "space-between",
          marginTop: 2,
          color: "white",
          width: "100%",
        }}
      >
        <Typography variant="H4" style={{ color: "white" }}>
          HTML5
        </Typography>
        <Typography variant="H4" style={{ color: "white" }}>
          CSS
        </Typography>
        <Typography variant="H4" style={{ color: "white" }}>
          JAVASCRIPT
        </Typography>
        <Typography variant="H4" style={{ color: "white" }}>
          VUE
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          padding: 0,
          margin: 0,
          marginBottom: 0,
          display: "flex",
          justifyContent: "space-between",
          marginTop: 2,
          color: "white",
          width: "100%",
        }}
      >
        <Icon
          style={{
            ...iconStyle,
            color: hoveredIcon === "VUETIFY" ? "orange" : "white",
          }}
          onMouseEnter={() => handleIconHover("VUETIFY")}
          onMouseLeave={handleIconLeave}
          path={mdiVuetify}
          size={3}
        />
        <Icon
          style={{
            ...iconStyle,
            color: hoveredIcon === "BOOTSTRAP" ? "orange" : "white",
          }}
          onMouseEnter={() => handleIconHover("BOOTSTRAP")}
          onMouseLeave={handleIconLeave}
          path={mdiBootstrap}
          size={3}
        />
        <Icon
          style={{
            ...iconStyle,
            color: hoveredIcon === "MATERIALUI" ? "orange" : "white",
          }}
          onMouseEnter={() => handleIconHover("MATERIALUI")}
          onMouseLeave={handleIconLeave}
          path={mdiMaterialUi}
          size={3}
        />
        <Icon
          style={{
            ...iconStyle,
            color: hoveredIcon === "GIT" ? "orange" : "white",
          }}
          onMouseEnter={() => handleIconHover("GIT")}
          onMouseLeave={handleIconLeave}
          path={mdiGit}
          size={3}
        />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          padding: 0,
          margin: 0,
          marginBottom: 10,
          display: "flex",
          justifyContent: "space-between",
          marginTop: 2,
          color: "white",
          width: "100%",
        }}
      >
        <Typography variant="H4" style={{ color: "white" }}>
          VUETIFY
        </Typography>
        <Typography variant="H4" style={{ color: "white" }}>
          BOOTSTRAP
        </Typography>
        <Typography variant="H4" style={{ color: "white" }}>
          Material UI
        </Typography>
        <Typography variant="H4" style={{ color: "white" }}>
          Git
        </Typography>
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
        <Icon style={{
            ...iconStyle,
            color: hoveredIcon === "JIRA" ? "orange" : "white",
          }}
          onMouseEnter={() => handleIconHover("JIRA")}
          onMouseLeave={handleIconLeave} path={mdiJira} size={3} />
        <Icon style={{
            ...iconStyle,
            color: hoveredIcon === "REACT" ? "orange" : "white",
          }}
          onMouseEnter={() => handleIconHover("REACT")}
          onMouseLeave={handleIconLeave}  path={mdiReact} size={3} />
        <Icon  style={{
            ...iconStyle,
            color: hoveredIcon === "PYTHON" ? "orange" : "white",
          }}
          onMouseEnter={() => handleIconHover("PYTHON")}
          onMouseLeave={handleIconLeave} path={mdiLanguagePython} size={3} />
        <Icon style={{
            ...iconStyle,
            color: hoveredIcon === "SASS" ? "orange" : "white",
          }}
          onMouseEnter={() => handleIconHover("SASS")}
          onMouseLeave={handleIconLeave} path={mdiSass} size={3} />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          padding: 0,
          margin: 0,
          marginBottom: 0,
          display: "flex",
          justifyContent: "space-between",
          marginTop: 2,
          color: "white",
          width: "100%",
        }}
      >
        <Typography variant="H4" style={{ color: "white" }}>
          JIRA
        </Typography>
        <Typography variant="H4" style={{ color: "white" }}>
          REACT
        </Typography>
        <Typography variant="H4" style={{ color: "white" }}>
          PYTHON
        </Typography>
        <Typography variant="H4" style={{ color: "white" }}>
          SASS
        </Typography>
      </Box>
    </Box>
  );
}

export default Skills;
