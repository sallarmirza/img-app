import { Nav } from "../components/Nav";
import { PromptBox } from "../components/PromptBox";
import { ResponseBox } from "../components/ResponseBox";
import { Typography, Box } from "@mui/material";

export const Home = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", overflow:"hidden"}}>
      {/* Navbar */}
      <Box className="navbar">
        <Nav />
      </Box>

      {/* Main content (scrollable) */}
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

        <ResponseBox />
      </Box>

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "background.paper",
          padding: 2,
          zIndex: 1000,
        }}
      >
        <PromptBox />
      </Box>
    </Box>
  );
};
