import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

export const ResponseBox = ({ response }) => {
  if (!response) {
    return (
      <Box
        textAlign="center"
        mt={2}
        sx={{
          background: "repeating-linear-gradient(38deg, #f0f0f0, #f0f0f0 10px, #fafafa 10px, #fafafa 20px)",
          p: 23,
          borderRadius: 3,
          
        }}
      >
        <Typography color="text.secondary" fontSize="1.2rem">
          ✨ Let’s try the magic!
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      mt={4}
      display="flex"
      justifyContent="center"
      sx={{
        p: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 700,
          width: "100%",
          borderRadius: 4,
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          background:
            "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#444" }}
          >
            Response
          </Typography>

          {response.type === "image" ? (
            <Box
              component="img"
              src={response.data}
              alt="Generated result"
              sx={{
                width: "100%",
                borderRadius: 3,
                border: "2px solid #eee",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          ) : (
            <Typography
              variant="body1"
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: "#f9f9f9",
                fontStyle: "italic",
              }}
            >
              {response.data}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};
