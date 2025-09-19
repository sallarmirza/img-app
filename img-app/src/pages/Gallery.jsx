import React, { useEffect, useState } from "react";
import { getGallery } from "../services/api";
import { Grid, Card, CardMedia, Typography, Box } from "@mui/material";

export const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getGallery();
        setImages(data.images);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <Box mt={4} px={4}>
      <Typography variant="h4" gutterBottom>
        Gallery
      </Typography>
      <Grid container spacing={2}>
        {images.length > 0 ? (
          images.map((img, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={`http://localhost:8000${img}`}
                  alt={`Generated ${index}`}
                />
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No images in gallery yet.</Typography>
        )}
      </Grid>
    </Box>
  );
};
