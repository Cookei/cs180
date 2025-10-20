import React from "react";
import { Box, Container, Paper, Typography, Divider } from "@mui/material";

const ProjectSection = ({ Title, Description, children, Spacing = true }) => {
  return (
    <>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography gutterBottom variant="h4">
          {Title}
        </Typography>
        <Typography gutterBottom variant="h5">
          {Description}
        </Typography>
        <Divider />
        <Box sx={{ p: 2 }}>{children}</Box>
      </Paper>
      {Spacing ? <Box sx={{ p: 3 }} /> : null}
    </>
  );
};

export default ProjectSection;
