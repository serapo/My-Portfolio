
import Avatar from "@mui/material/Avatar";
import img from "../assets/profileImg.jpeg";
import Typography from "@mui/material/Typography";

function AboutMe() {
  return (
    <Box
    sx={{
      textAlign: "center",

      padding: 0,
      margin: 0,

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "flex-start" }}>
      <Avatar alt="User" src={img} sx={{ width: 300, height: 300 }} />
      <Box sx={{ marginLeft: 2, textAlign: "left", width: 300 }}>
        <Typography variant="h5">Hello World! </Typography>
        <Typography variant="h6">
          I am Serap ORAL, Front-End Web Developer. I craft user interfaces
          using modern frontend web technologies
        </Typography>
      </Box>
    </Box>
  </Box>
  );
}

export default AboutMe;
