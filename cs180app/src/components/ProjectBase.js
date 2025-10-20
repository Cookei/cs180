import React from "react";
import { Box, Container, Paper } from "@mui/material";

const ProjectBase = ({ children }) => {
  return (
    <Box sx={{ width: "100vw", bgcolor: "#9aaec9ff" }}>
      <Container maxWidth="xl">
        <Paper
          elevation={2}
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
        </Paper>
      </Container>
    </Box>
  );
};

export default ProjectBase;
