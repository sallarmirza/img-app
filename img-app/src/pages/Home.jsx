import { Nav } from "../components/Nav";
import { Typography, Box } from "@mui/material"; 
import { ImageGenerator } from "./ImageGenerator";
export const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Navbar */}
      <Box className="navbar">
        <Nav />
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
          overflowY: "auto",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            textAlign: "center",
            marginBottom: 2,
          }}
        >
          Image Generator
        </Typography>

        {/* ✅ now only one component handles prompt + response */}
        <ImageGenerator />
      </Box>
    </Box>
  );
};
