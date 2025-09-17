import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif", // clean + professional
    h1: {
      fontWeight: 700,
      letterSpacing: "0.05em",
      color: "#1F2937", // dark gray for strong headings
    },
    h2: {
      fontWeight: 600,
      letterSpacing: "0.03em",
      color: "#4F46E5", // indigo for sub-headings
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#4B5563", // medium gray for readability
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      color: "#FFFFFF",
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#4F46E5", // Indigo
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#0D9488", // Teal
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F3F4F6", // light gray background
      paper: "#FFFFFF",   // white cards
    },
    text: {
      primary: "#1F2937", // dark gray
      secondary: "#4B5563", // softer gray
    },
    warning: {
      main: "#FB923C", // orange for warnings/alerts
    },
    success: {
      main: "#10B981", // green for success
    },
    info: {
      main: "#3B82F6", // blue info accents
    },
  },
  shape: {
    borderRadius: 12, // slightly more rounded for modern look
  },
});

export default theme;
