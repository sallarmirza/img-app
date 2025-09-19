import React, { useState } from "react";
import { PromptBox } from "../components/PromptBox";
import { ResponseBox } from "../components/ResponseBox";
import { generateImage } from "../services/api";
import { Box, CircularProgress } from "@mui/material";

export const ImageGenerator = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePromptSubmit = async (prompt) => {
    setLoading(true);
    try {
      const result = await generateImage(prompt);
      setResponse({
        type: "image",
        data: `${import.meta.env.VITE_API_BASE_URL}${result.imageUrl}`,
      });
    } catch (err) {
      setResponse({ type: "text", data: "⚠️ Error generating image." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        bgcolor: "#f9f9f9",
      }}
    >
      {/* Response Area */}
      <Box
        sx={{
          flexGrow: 1,
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        {loading ? <CircularProgress /> : <ResponseBox response={response} />}
      </Box>

      {/* Prompt Input at Bottom */}
      <Box
        sx={{
          p: 2,
          borderTop: "1px solid #ddd",
          bgcolor: "#fff",
        }}
      >
        <PromptBox onSubmit={handlePromptSubmit} />
      </Box>
    </Box>
  );
};
