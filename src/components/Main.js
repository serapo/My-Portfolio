import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSpring, animated} from "react-spring";
import Divider from "@mui/material/Divider";

function Main() {
    const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    config: { duration: 1000 }, 
   
  });
  return (
    <Box
      sx={{
        textAlign: "left",
        padding: 0,
        margin: 0,
        height: "95vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        width: "100%",
      }}
    >
      <Box sx={{ width: "100%", marginLeft: 20 }}>
        <animated.div style={props}>
          <Typography variant="h3" gutterBottom>
            SERAP ORAL
          </Typography>
        </animated.div>
        <Divider
          sx={{
            height: 4,
            backgroundColor: "orange",
            width: "20%",
            marginTop: 2,
            marginBottom: 2,
          }}
        />
        <Typography variant="h4" gutterBottom>
          FRONT-END
        </Typography>
        <Typography variant="h4" gutterBottom>
          WEB DEVELOPER
        </Typography>
      </Box>
    </Box>
  );
}

export default Main;
