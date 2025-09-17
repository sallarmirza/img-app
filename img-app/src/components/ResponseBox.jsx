import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

export const ResponseBox = ({ response }) => {
  if (!response) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography color="text.secondary">
          No response yet — try generating something!
        </Typography>
      </Box>
    );
  }

  return (
    <Box mt={4} display="flex" justifyContent="center">
      <Card sx={{ maxWidth: 600, width: "100%" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Response
          </Typography>
          {response.type === "image" ? (
            <Box
              component="img"
              src={response.data}
              alt="Generated result"
              sx={{ width: "100%", borderRadius: 2 }}
            />
          ) : (
            <Typography variant="body1">{response.data}</Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};
