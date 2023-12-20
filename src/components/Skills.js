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
      <Typography variant="h4" style={{ color: "white" }}>
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
          marginBottom: 10,
          display: "flex",
          justifyContent: "space-between",
          marginTop: 2,
          color: "white",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
          <Typography variant="h6" style={{ color: "white", marginTop: 8 }}>
            HTML5
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
          <Typography variant="h6  " style={{ color: "white", marginTop: 8 }}>
            CSS
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
          <Typography variant="h6  " style={{ color: "white", marginTop: 8 }}>
            JAVASCRIPT + ES6
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
          <Typography variant="h6  " style={{ color: "white", marginTop: 8 }}>
            VUE
          </Typography>
        </Box>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
          <Typography variant="h6" style={{ color: "white", marginTop: 8 }}>
            VUETIFY
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
          <Typography variant="h6  " style={{ color: "white", marginTop: 8 }}>
            BOOTSTRAP
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
          <Typography variant="h6  " style={{ color: "white", marginTop: 8 }}>
            MATERIAL UI
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
          <Typography variant="h6  " style={{ color: "white", marginTop: 8 }}>
            GIT
          </Typography>
        </Box>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Icon
            style={{
              ...iconStyle,
              color: hoveredIcon === "JIRA" ? "orange" : "white",
            }}
            onMouseEnter={() => handleIconHover("JIRA")}
            onMouseLeave={handleIconLeave}
            path={mdiJira}
            size={3}
          />
          <Typography variant="h6" style={{ color: "white", marginTop: 8 }}>
            JIRA
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Icon
            style={{
              ...iconStyle,
              color: hoveredIcon === "REACT" ? "orange" : "white",
            }}
            onMouseEnter={() => handleIconHover("REACT")}
            onMouseLeave={handleIconLeave}
            path={mdiReact}
            size={3}
          />
          <Typography variant="h6  " style={{ color: "white", marginTop: 8 }}>
            REACT
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Icon
            style={{
              ...iconStyle,
              color: hoveredIcon === "PYTHON" ? "orange" : "white",
            }}
            onMouseEnter={() => handleIconHover("PYTHON")}
            onMouseLeave={handleIconLeave}
            path={mdiLanguagePython}
            size={3}
          />
          <Typography variant="h6  " style={{ color: "white", marginTop: 8 }}>
            PYTHON
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Icon
            style={{
              ...iconStyle,
              color: hoveredIcon === "SASS" ? "orange" : "white",
            }}
            onMouseEnter={() => handleIconHover("SASS")}
            onMouseLeave={handleIconLeave}
            path={mdiSass}
            size={3}
          />
          <Typography variant="h6  " style={{ color: "white", marginTop: 8 }}>
            SASS
          </Typography>
        </Box>
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
      ></Box>

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
      ></Box>
    </Box>
  );
}

export default Skills;
