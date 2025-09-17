import React from "react";
import { ImgMediaCard } from "../components/Cards";
import { Box } from "@mui/material";
import { Nav } from "../components/Nav";

export const Gallery = () => {
  return (
    <Box>
      <Nav />
      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="left"
        p={2} 
      >
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </Box>
    </Box>
  );
};
