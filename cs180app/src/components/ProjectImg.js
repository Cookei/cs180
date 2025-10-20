import React from "react";
import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

const ProjectImg = ({
  images = [],
  alt = [],
  title = [null],
  maxWidth = 600,
  titleRight = false,
}) => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "center",
          maxWidth: maxWidth,
          gap: "1em",
        }}
      >
        {images.map((item, index) => {
          return (
            <ImageListItem>
              <img src={item} alt={alt[index]} loading="lazy" />
              {title != null && title[index] != null ? (
                <ImageListItemBar
                  title={title[index]}
                  sx={{ textAlign: titleRight ? "right" : "left" }}
                />
              ) : null}
            </ImageListItem>
          );
        })}
      </Box>
    </Box>
  );
};

export default ProjectImg;
