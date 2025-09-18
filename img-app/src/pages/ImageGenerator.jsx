import React, { useState } from "react";
import {PromptBox} from '../components/PromptBox'
import { ResponseBox } from "../components/ResponseBox";
import { generateImage } from "../services/api";

export const ImageGenerator = () => {
  const [response, setResponse] = useState(null);

  const handlePromptSubmit = async (prompt) => {
    try {
      const result = await generateImage(prompt);
      setResponse({ type: "image", data: `http://localhost:8000${result.imageUrl}` });
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
