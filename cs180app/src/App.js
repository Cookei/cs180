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
                    <Link>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          TBA
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
              <Grid size={4}>
                <Card>
                  <CardActionArea>
                    <Link>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          TBA
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
              <Grid size={4}>
                <Card>
                  <CardActionArea>
                    <Link>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          TBA
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
