import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif", // Inter has better readability
    h1: {
      fontWeight: 800,
      fontSize: "2.5rem",
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
      color: "#111827", // Darker for better contrast
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
      letterSpacing: "-0.01em",
      lineHeight: 1.3,
      color: "#1E40AF", // More sophisticated blue
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      letterSpacing: "-0.01em",
      color: "#374151",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7, // Better for readability
      color: "#4B5563",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#2563EB", // More modern blue
      light: "#3B82F6",
      dark: "#1D4ED8",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#0D9488", // Refined teal
      light: "#14B8A6",
      dark: "#0F766E",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F9FAFB", // Lighter, cleaner background
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111827", // Higher contrast
      secondary: "#4B5563",
    },
    warning: {
      main: "#F59E0B", // More balanced orange
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#10B981",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#3B82F6",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#EF4444",
      contrastText: "#FFFFFF",
    },
    grey: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
  },
  shape: {
    borderRadius: 10, // Slightly more rounded for softer appearance
  },
  shadows: [
    "none",
    "0px 1px 2px rgba(0, 0, 0, 0.05)", // More refined shadows
    "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
    "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
    ...Array(20).fill("none"), // Keeping the rest as none for simplicity
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 20px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
          },
        },
        contained: {
          background: "linear-gradient(90deg, #2563EB 0%, #1D4ED8 100%)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
          border: "1px solid #F3F4F6", // Subtle border for depth
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#111827",
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;