import React from "react";
import { Box, Container, Paper } from "@mui/material";

const ProjectBase = ({ children }) => {
  return (
    <Box
      sx={{
        bgcolor: "#cfe8fc",
        minHeight: "calc(100vh - 50px)",
        padding: "50px",
        paddingTop: "25px",
        paddingBottom: "25px",
        borderRadius: 0,
      }}
    >
      <Container>{children}</Container>
    </Box>
  );
};

export default ProjectBase;
