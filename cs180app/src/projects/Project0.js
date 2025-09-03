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
  Divider,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { Link } from "wouter";
import francis0 from "../assets/proj0/francis0.jpg";
import francis1 from "../assets/proj0/francis1.jpg";
import sathergate0 from "../assets/proj0/sathergate0.jpg";
import sathergate1 from "../assets/proj0/sathergate1.jpg";
import dollyzoom from "../assets/proj0/DollyZoom.gif";

const Project0 = () => {
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
          <Container>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography gutterBottom variant="h4">
                Project 0
              </Typography>
              <Typography gutterBottom variant="h5">
                Becoming Friends With Your Camera
              </Typography>
              <Typography gutterBottom variant="body1">
                The goal of this project is to get some intuitive understanding
                of the subtle relationship between perspective, focal
                length/zoom, and the center of projection.
              </Typography>
            </Paper>
            <Box sx={{ p: 3 }} />
            <Paper elevation={2} sx={{ p: 3 }}>
              <Container>
                <Typography gutterBottom variant="h4" component="div">
                  Part 1:
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Selfie: The Wrong Way vs. The Right Way
                </Typography>
                <Divider />
                <Box sx={{ p: 2 }}>
                  <Typography gutterBottom variant="body1">
                    Here I took two photos of my friend, Francis. One is close
                    up and one further away while zoomed in, maintaining the
                    same scale in relation to the frame.
                  </Typography>
                </Box>
                <Box sx={{ p: 1, display: "flex", justifyContent: "center" }}>
                  <ImageList sx={{ width: 600, height: 500 }}>
                    <ImageListItem>
                      <img src={francis0} alt="francis0" loading="lazy" />
                      <ImageListItemBar
                        title="Close Up"
                        subtitle={"No Zoom"}
                        position="below"
                      />
                    </ImageListItem>
                    <ImageListItem>
                      <img src={francis1} alt="francis1" loading="lazy" />
                      <ImageListItemBar
                        title="Far Away"
                        subtitle={"Zoom"}
                        position="below"
                      />
                    </ImageListItem>
                  </ImageList>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography gutterBottom variant="body1">
                    It's noticeable here that the close up shot shows noticeable
                    distortion in the image. Noticeably, the eyes and the areas
                    around the cheek seem to be more rounded and stretched.
                    Here, the second photo looks significantly better than the
                    first photo.
                  </Typography>
                  <Typography gutterBottom variant="h5">
                    Why is this?
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    One conjecture as to why this phenomenon occurs is that a
                    farther away camera simulates a field of view/focal length
                    more similar to how we see people in real life and thus,
                    looks more natural. We view people at a distance by having
                    the camera farther away, the rays of light (the pencil of
                    rays), is more realistic.
                  </Typography>
                </Box>
              </Container>
            </Paper>
            <Box sx={{ p: 3 }} />
            <Paper elevation={2} sx={{ p: 3 }}>
              <Container>
                <Typography gutterBottom variant="h4" component="div">
                  Part 2:
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Architectural Perspective Compression
                </Typography>
                <Divider />
                <Box sx={{ p: 2 }}>
                  <Typography gutterBottom variant="body1">
                    Here we repeat the same procedure in Part 1 but instead of
                    an urban scene.
                  </Typography>
                </Box>
                <Box sx={{ p: 1, display: "flex", justifyContent: "center" }}>
                  <ImageList sx={{ width: 600, height: 500 }}>
                    <ImageListItem>
                      <img src={sathergate0} alt="sathergate0" loading="lazy" />
                      <ImageListItemBar
                        title="Close Up"
                        subtitle={"No Zoom"}
                        position="below"
                      />
                    </ImageListItem>
                    <ImageListItem>
                      <img src={sathergate1} alt="sathergate1" loading="lazy" />
                      <ImageListItemBar
                        title="Far Away"
                        subtitle={"Zoom"}
                        position="below"
                      />
                    </ImageListItem>
                  </ImageList>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography gutterBottom variant="body1">
                    Here, we notice that the second image here looks more flat
                    and compressed compared to the first image
                  </Typography>
                  <Typography gutterBottom variant="h5">
                    Why is this?
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    When the camera is further away, we approach a more
                    orthographic projection. The pencil of rays that enter the
                    camera are more shallow, leading to a flatter image. In
                    other words, when close up, the camera has a wider field of
                    view and thus captures "more perspective". This leads to the
                    farther away zoomed image feeling more flat.
                  </Typography>
                </Box>
              </Container>
            </Paper>
            <Box sx={{ p: 3 }} />
            <Paper elevation={2} sx={{ p: 3 }}>
              <Container>
                <Typography gutterBottom variant="h4" component="div">
                  Part 3:
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  The Dolly Zoom
                </Typography>
                <Divider />
                <Box sx={{ p: 2 }}>
                  <Typography gutterBottom variant="body1">
                    Here we are trying to recreate the classic film effect, the
                    Dolly Zoom. The Dolly Zoom is created by moving the camera
                    back while simultaneously zooming in, keeping the image size
                    the same.
                  </Typography>
                </Box>
                <Box sx={{ p: 1, display: "flex", justifyContent: "center" }}>
                  <ImageList
                    sx={{
                      width: 400,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ImageListItem>
                      <img src={dollyzoom} alt="dollyzoom" loading="lazy" />
                      <ImageListItemBar
                        title="Dolly Zoom Gif"
                        position="below"
                      />
                    </ImageListItem>
                  </ImageList>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography gutterBottom variant="body1">
                    When we create a dolly zoom effect here, it essentially
                    isolates the focal length and perspective distortion of the
                    camera at different zoom lengths, making it really easy to
                    see the difference. It also creates this really cool effect
                    where it seems like the world is expanding.
                  </Typography>
                </Box>
              </Container>
            </Paper>
          </Container>
        </Paper>
      </Container>
    </Box>
  );
};

export default Project0;
