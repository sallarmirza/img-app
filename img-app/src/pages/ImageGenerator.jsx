import React, { useState } from "react";
import { PromptBox } from "../components/PromptBox";
import { ResponseBox } from "../components/ResponseBox";
import { generateImage } from "../services/api";

export const ImageGenerator = () => {
  const [response, setResponse] = useState(null);

  const handlePromptSubmit = async (prompt) => {
    try {
      const result = await generateImage(prompt);
      // result.imageUrl is relative (e.g., "/uploads/xxx.png")
      setResponse({
        type: "image",
        data: `${import.meta.env.VITE_API_BASE_URL}${result.imageUrl}`,
      });
    } catch (err) {
      setResponse({ type: "text", data: "Error generating image." });
    }
  };

  return (
    <div>
      <PromptBox onSubmit={handlePromptSubmit} />
      <ResponseBox response={response} />
    </div>
  );
};
