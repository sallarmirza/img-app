import React, { useState } from "react";
import { PromptBox } from "../components/PromptBox";
import { ResponseBox } from "../components/ResponseBox";
import { generateImage } from "../services/api";
import { Box } from "@mui/material";
export const ImageGenerator = () => {
  const [response, setResponse] = useState(null);

  const handlePromptSubmit = async (prompt) => {
    try {
      const result = await generateImage(prompt);
      setResponse({
        type: "image",
        data: `${import.meta.env.VITE_API_BASE_URL}${result.imageUrl}`,
      });
    } catch (err) {
      setResponse({ type: "text", data: "Error generating image." });
    }
  };

  return (
    <div >
      <Box>
      <ResponseBox response={response} />
        <PromptBox onSubmit={handlePromptSubmit} />
        </Box>
      </div>
      );
};
