import * as React from "react";
import {
  AppBar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "wouter";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", alignItems: "center", height: "100vh" }}
      >
        <Paper
          elevation={3}
          sx={{
            bgcolor: "#cfe8fc",
            height: "90vh",
            padding: "50px",
            paddingTop: "25px",
            paddingBottom: "25px",
            borderRadius: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "15px" }}>
            <Typography gutterBottom variant="h4" component="div">
              CS 180 Webpage Report Home - Han Li
            </Typography>
            <Link href="https://github.com/Cookei/cs180" target="_blank">
              <GitHubIcon />
            </Link>
          </div>
          <Divider />
          <Box sx={{ p: 3 }}></Box>
          <Container>
            <Grid container spacing={4}>
              <Grid size={4}>
                <Card>
                  <CardActionArea>
                    <Link href="/projects/0">
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Project 0
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          Becoming Friends With Your Camera
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "text.secondary" }}
                        >
                          The goal of this project is to get some intuitive
                          understanding of the subtle relationship between
                          perspective, focal length/zoom, and the center of
                          projection.
                        </Typography>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={4}>
                <Card>
                  <CardActionArea>
                    <Link href="/projects/1">
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Project 1
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          Images of the Russian Empire
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "text.secondary" }}
                        >
                          The goal of this project is to colorize
                          Prokudin-Gorskii photo collection. Using image
                          alignment methods, analyze and separate the channels
                          of each image to recreate color photography
                          efficiently.
                        </Typography>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={4}>
                <Card>
                  <CardActionArea>
                    <Link href="/projects/2">
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Project 2
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          Fun With Frequencies!
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "text.secondary" }}
                        >
                          The goal of this project is to play around with the
                          frequency spectrum and gaussian kernels to create
                          various effects!
                        </Typography>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={4}>
                <Card>
                  <CardActionArea>
                    <Link href="/projects/3">
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Project 3
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                        ></Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "text.secondary" }}
                        ></Typography>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Container>
    </>
  );
}

export default App;
