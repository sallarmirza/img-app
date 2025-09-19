import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

export const PromptBox = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      onSubmit(input); 
      setInput("");    // clear after submit
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={2}
      sx={{ maxWidth: 600, margin: "20px auto" }}
    >
      <TextField
        fullWidth
        label="Let's Create"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Generate
      </Button>
    </Box>
  );
};
