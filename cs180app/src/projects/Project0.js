import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "wouter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Project0 = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          minHeight: "calc(100vh - 50px)",
          padding: "50px",
          paddingTop: "25px",
          paddingBottom: "25px",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "15px" }}>
          <h1>Project 0: Becoming Friends With Your Camera</h1>
        </div>
        <Container></Container>
      </Box>
    </Container>
  );
};

export default Project0;
