import { Nav } from "../components/Nav";
import {  Box } from "@mui/material"; 
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
      
      <Box className="navbar">
        <Nav />
      </Box>


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
        <ImageGenerator />
      </Box>
    </Box>
  );
};
