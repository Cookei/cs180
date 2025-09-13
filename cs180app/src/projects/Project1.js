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

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { ReactCompareSlider } from "react-compare-slider";
import simple_method from "../assets/proj1/simple_method.png";
import nocrop_ag from "../assets/proj1/nocrop_ag.gif";
import nocrop_ar from "../assets/proj1/nocrop_ar.gif";

import nocrop from "../assets/proj1/nocrop.jpg";
import defaultImg from "../assets/proj1/default.jpg";

import cropNCC from "../assets/proj1/crop_NCC.jpg";

import crop_ag from "../assets/proj1/crop_ag.gif";
import crop_ar from "../assets/proj1/crop_ar.gif";

import NCC_15 from "../assets/proj1/test1_NCC_15.jpg";
import NCC_30 from "../assets/proj1/test1_NCC_30.jpg";

import img_pyramid from "../assets/proj1/Image_pyramid.png";

import pyramid_alignment from "../assets/proj1/pyramid_alignment.jpg";

import cathedral from "../assets/proj1/results/cathedral.jpg";
import church from "../assets/proj1/results/church.jpg";
import emir from "../assets/proj1/results/emir.jpg";
import harvesters from "../assets/proj1/results/harvesters.jpg";
import icon from "../assets/proj1/results/icon.jpg";
import italil from "../assets/proj1/results/italil.jpg";
import lastochikino from "../assets/proj1/results/lastochikino.jpg";
import lugano from "../assets/proj1/results/lugano.jpg";
import melons from "../assets/proj1/results/melons.jpg";
import monastery from "../assets/proj1/results/monastery.jpg";
import self_portrait from "../assets/proj1/results/self_portrait.jpg";
import siren from "../assets/proj1/results/siren.jpg";
import three_generations from "../assets/proj1/results/three_generations.jpg";
import tobolsk from "../assets/proj1/results/tobolsk.jpg";
import milan from "../assets/proj1/results/milan.jpg";
import kivach from "../assets/proj1/results/kivach.jpg";
import ekaterinburg from "../assets/proj1/results/ekaterinburg.jpg";

import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

const photoData = [
  {
    img: cathedral,
    title: "Cathedral",
    subtitle: "OffsetG: (-5, 2) OffsetR: (-12, -3)",
  },
  {
    img: church,
    title: "Church",
    subtitle: "OffsetG: (-25, -4) OffsetR: (-58, 4)",
  },
  {
    img: emir,
    title: "Emir",
    subtitle: "OffsetG: (-49, -24) OffsetR: (-414, -577)",
  },
  {
    img: harvesters,
    title: "Harvesters",
    subtitle: "OffsetG: (-60, -17) OffsetR: (-124, -14)",
  },
  {
    img: icon,
    title: "Icon",
    subtitle: "OffsetG: (-41, -17) OffsetR: (-89, -23)",
  },
  {
    img: italil,
    title: "Italil",
    subtitle: "OffsetG: (-38, -21) OffsetR: (-76, -35)",
  },
  {
    img: lastochikino,
    title: "Lastochikino",
    subtitle: "OffsetG: (3, 2) OffsetR: (-75, 9)",
  },
  {
    img: lugano,
    title: "Lugano",
    subtitle: "OffsetG: (-41, 16) OffsetR: (-93, 29)",
  },
  {
    img: melons,
    title: "Melons",
    subtitle: "OffsetG: (-82, -11) OffsetR: (-178, -13)",
  },
  {
    img: monastery,
    title: "Monastery",
    subtitle: "OffsetG: (3, -2) OffsetR: (-3, -2)",
  },
  {
    img: self_portrait,
    title: "Self Portrait",
    subtitle: "OffsetG: (-79, -29) OffsetR: (-176, -36)",
  },
  {
    img: siren,
    title: "Siren",
    subtitle: "OffsetG: (-49, 6) OffsetR: (-96, 25)",
  },
  {
    img: three_generations,
    title: "Three Generations",
    subtitle: "OffsetG: (-53, -14) OffsetR: (-112, -11)",
  },
  {
    img: tobolsk,
    title: "Tobolsk",
    subtitle: "OffsetG: (-3, -3) OffsetR: (-6, -3)",
  },
  {
    img: milan,
    title: "Milan",
    subtitle: "OffsetG: (10, 19) OffsetR: (5, 54)",
  },
  {
    img: kivach,
    title: "Kivach",
    subtitle: "OffsetG: (-18, -17) OffsetR: (-89, -30)",
  },
  {
    img: ekaterinburg,
    title: "Ekaterinburg",
    subtitle: "OffsetG: (-55, -18) OffsetR: (-117, -11)",
  },
];

const Project1 = () => {
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
                Project 1
              </Typography>
              <Typography gutterBottom variant="h5">
                Images of the Russian Empire: Colorizing the Prokudin-Gorskii
                photo collection
              </Typography>
              <Divider />
              <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="body1">
                  The goal of this project is to colorize Prokudin-Gorskii photo
                  collection. Using image alignment methods, analyze and
                  separate the channels of each image to recreate color
                  photography efficiently
                </Typography>
              </Box>
            </Paper>

            <Box sx={{ p: 3 }} />

            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography gutterBottom variant="h4">
                Introduction
              </Typography>
              <Divider />
              <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="body1">
                  In 1907, before color photography, Prokudin-Gorskii received
                  permission from the Russian Empire to take color photographs
                  of everything he saw to document the empire. By taking 3
                  exposures of every scene using a Red, Green, and Blue filter,
                  one could combine them together onto a glass plate to create a
                  color photograph. However, it wasn't until much later that
                  color prints were possible to make, and he died not having
                  been able to materialize his plans.
                </Typography>
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="body1">
                  Here, we proceed to complete his work through his digitized
                  negatives provided by the Library of Congress.
                </Typography>
              </Box>
              <Divider />
              <Box display={"flex"} justifyContent={"center"}>
                <Box
                  sx={{
                    p: 1,
                    display: "flex",
                    justifyContent: "center",
                    maxWidth: 600,
                  }}
                >
                  <img
                    style={{ width: "100%" }}
                    src={simple_method}
                    alt="method for combining channels"
                    loading="lazy"
                  />
                </Box>
              </Box>

              <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="body1">
                  The simple solution to take his photos directly and overlay
                  them on top of each other, assigning each one to their
                  respective <InlineMath math="R, G, B" /> color channel. The
                  image itself comes top down as <InlineMath math="B, G, R" />{" "}
                  though, so we have to flip the channels around to align with
                  our <code>[R, G, B]</code> convention. Unfortunately, we
                  notice that the alignment is incredibly off. Though it does
                  produce a color image, the chromatic aberration induced by
                  each channel not being aligned makes it difficult to make out
                  any features.
                </Typography>
              </Box>
            </Paper>

            <Box sx={{ p: 3 }} />

            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography gutterBottom variant="h4">
                Naive Alignment
              </Typography>
              <Divider />
              <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="body1">
                  We implement a naive solution by exhaustively searching over a
                  window a possible displacements (such as{" "}
                  <code>[-15, 15]</code>). For each alignment candidate, we
                  score each alignment with some type of metric and then pick
                  the best displacement.
                </Typography>
                <Typography gutterBottom variant="h5">
                  Euclidean Distance
                </Typography>
                <Typography gutterBottom variant="body1">
                  The simplest metric we can use is the Euclidean Distance, or
                  the 2 Norm. For each alignment candidate, we calculate the
                  Euclidean Distance between the two images.
                </Typography>
                <BlockMath>{`\\text{dist}=\\sqrt{\\sum_{p}(\\text{img}_1 - \\text{img}_2)^2}`}</BlockMath>
                <Typography gutterBottom variant="body1">
                  Minimizing this distance between all possibilities in the
                  displacement range gives the best alignment within a given
                  window.
                </Typography>
                <Typography gutterBottom variant="body1">
                  Here, we align the green and red channels to the blue channel.
                  In other words, we "fix" the blue channel and shift the red
                  and green channels respectively.
                </Typography>
                <Box display={"flex"} justifyContent={"center"} sx={{ p: 1 }}>
                  <ImageList
                    gap={25}
                    sx={{
                      maxWidth: 800,
                    }}
                  >
                    <ImageListItem>
                      <img src={nocrop_ag} alt="Align G to B" loading="lazy" />
                      <ImageListItemBar title="Align G to B gif" />
                    </ImageListItem>
                    <ImageListItem>
                      <img src={nocrop_ar} alt="Align R to B" loading="lazy" />
                      <ImageListItemBar title="Align R to B gif" />
                    </ImageListItem>
                  </ImageList>
                </Box>
                <Typography gutterBottom variant="body1">
                  In the above gif, you can see the alignment being made with a
                  window of <code>[-15, 15]</code>. With proper alignment, the
                  resulting image looks significantly better.
                </Typography>

                <Box display={"flex"} justifyContent={"center"} sx={{ p: 1 }}>
                  <Box sx={{ maxWidth: 500, width: "100%" }}>
                    <ReactCompareSlider
                      style={{ width: "100%" }}
                      itemOne={
                        <ImageListItem sx={{ width: "100%" }}>
                          <img
                            src={defaultImg}
                            alt="No alignment"
                            loading="lazy"
                          />
                          <ImageListItemBar title="No Alignment" />
                        </ImageListItem>
                      }
                      itemTwo={
                        <ImageListItem sx={{ textAlign: "right" }}>
                          <img src={nocrop} alt="ED Alignment" loading="lazy" />
                          <ImageListItemBar title="ED Alignment" />
                        </ImageListItem>
                      }
                    />
                  </Box>
                </Box>
                <Typography gutterBottom variant="body1">
                  Here, we can note a small speedup. Instead of fully
                  calculating the 2 Norm, we can instead just calculate the Sum
                  of Squared Distances (SSD) instead, thereby not needing to do
                  an expensive square root computation.
                </Typography>
                <Typography gutterBottom variant="h5">
                  Normalized Cross Correlation
                </Typography>
                <Typography gutterBottom variant="body1">
                  Another metric that can be used to score the alignment between
                  images is by using a Normalized Cross Correlation (NCC). It is
                  defined formally here.
                </Typography>
                <BlockMath>{`\\text{corr}=\\frac{\\sum_{p}(\\text{img}_1-\\mu_1)\\cdot(\\text{img}_2-\\mu_2)}{||\\text{img}_1-\\mu_1||\\:||\\text{img}_2-\\mu_2||}`}</BlockMath>
                <Typography gutterBottom variant="body1">
                  Here we can subtract the average pixel value across each image{" "}
                  <InlineMath math="\mu" /> to make the evaluation not sensitive
                  to brightness changes. Compared to pure Euclidean Distance,
                  NCC with zero-mean centering makes the metric insensitive to
                  brightness offsets. By maximizing the correlation value across
                  the displacement window, the best alignment can be found.
                </Typography>
                <Typography gutterBottom variant="body1">
                  Going forward, all future algorithms described will be using
                  the NCC metric for alignment comparison.
                </Typography>
              </Box>
            </Paper>

            <Box sx={{ p: 3 }} />

            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography gutterBottom variant="h4">
                Cropping
              </Typography>
              <Divider />
              <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="body1">
                  The previous computations used <code>np.roll()</code> in order
                  to shift each image for alignment. However, since the{" "}
                  <code>roll()</code> function wraps the ends of a vector back
                  to its start, using it for the initial displacement before
                  comparing the images with a metric skews results. In
                  particular, the rolled over pixels significantly skew
                  alignment results.
                </Typography>
                <Typography gutterBottom variant="body1">
                  To resolve this, we can crop the image such that rolled over
                  pixels are not considered for evaluation by the NCC alignment
                  metric. The naive way to do this would be to strip only what
                  is necessary every window displacement iteration on both the
                  fixed image (the blue channel) and the aligned image. However,
                  this is particularly expensive, especially as the displacement
                  window gets larger.
                </Typography>
                <Typography gutterBottom variant="body1">
                  Instead, given a displacement window, we compute a central
                  shared crop window and precompute the necessary values for the
                  fixed image <InlineMath math="F" />. We then only compare the
                  shared crop window on the aligned image{" "}
                  <InlineMath math="A" /> on each iteration. This allows us to
                  discard the edge margins for the metric calculation. Since the
                  edges of the photographs themselves are distorted to begin
                  with, discarding a small amount of pixels for evaluation
                  doesn't pose much of an accuracy difference.
                </Typography>
                <BlockMath
                  math={String.raw`\text{corr}\left(
F\!\left[
  \begin{aligned}
    &\text{window : -window ,} \\
    &\text{window : -window}
  \end{aligned}
\right], 

A\!\left[
  \begin{aligned}
    &\text{window + dy : H - window + dy ,} \\
    &\text{window + dx : W - window + dx}
  \end{aligned}
\right]

\right)
`}
                />
                <Box display={"flex"} justifyContent={"center"} sx={{ p: 1 }}>
                  <ImageList
                    gap={25}
                    sx={{
                      maxWidth: 800,
                    }}
                  >
                    <ImageListItem>
                      <img
                        src={crop_ag}
                        alt="Crop Algin G to B"
                        loading="lazy"
                      />
                      <ImageListItemBar title="Crop Algin G to B gif" />
                    </ImageListItem>
                    <ImageListItem>
                      <img
                        src={crop_ar}
                        alt="Crop Align R to B"
                        loading="lazy"
                      />
                      <ImageListItemBar title="Crop Align R to B gif" />
                    </ImageListItem>
                  </ImageList>
                </Box>

                <Divider />

                <Box display={"flex"} justifyContent={"center"} sx={{ p: 1 }}>
                  <Box sx={{ maxWidth: 500, width: "100%" }}>
                    <ReactCompareSlider
                      style={{ width: "100%" }}
                      itemOne={
                        <ImageListItem sx={{ width: "100%" }}>
                          <img src={nocrop} alt="No Crop" loading="lazy" />
                          <ImageListItemBar title="No Crop" />
                        </ImageListItem>
                      }
                      itemTwo={
                        <ImageListItem>
                          <img src={cropNCC} alt="Crop NCC" loading="lazy" />
                          <ImageListItemBar
                            title="Crop NCC"
                            sx={{ textAlign: "right" }}
                          />
                        </ImageListItem>
                      }
                    />
                  </Box>
                </Box>
              </Box>
            </Paper>

            <Box sx={{ p: 3 }} />

            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography gutterBottom variant="h4">
                Image Pyramid
              </Typography>
              <Divider />
              <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="body1">
                  This is all well and good, however this implementation is
                  incredibly slow. On large images with thousands of more
                  pixels, a larger window is required in order to get adequate
                  matching. However, increasing the window size proportional to
                  the image size is an <InlineMath math="N^2" /> operation. This
                  is incredibly, incredibly slow, not to mention the sheer
                  computation power required to vectorize and compute
                  correlations as the image scales.
                </Typography>
              </Box>
              <Box display={"flex"} justifyContent={"center"} sx={{ p: 1 }}>
                <ImageList
                  gap={25}
                  sx={{
                    maxWidth: 800,
                  }}
                >
                  <ImageListItem>
                    <img src={NCC_15} alt="NCC_15 window" loading="lazy" />
                    <ImageListItemBar
                      title="window = [-15, 15]"
                      subtitle="140.7s"
                    />
                  </ImageListItem>
                  <ImageListItem>
                    <img src={NCC_30} alt="NCC_30 window" loading="lazy" />
                    <ImageListItemBar
                      title="window = [-30, 30]"
                      subtitle="519.79s"
                    />
                  </ImageListItem>
                </ImageList>
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="body1">
                  Running the naive crop implementation on the{" "}
                  <code>church.tif</code> file, its noticeable just how long
                  each alignment takes when given large images. Not only that,
                  but the image does not fully converge until the window size
                  was increased to <code>[-30, 30]</code>, nearly quadrupling
                  the computation time. Here, we introduce an image pyramid to
                  resolve this.
                </Typography>
                <Divider />
                <Box sx={{ p: 1 }} />
                <Typography gutterBottom variant="body1">
                  The central idea is to create an image pyramid, also known as
                  a mipmap, gaussian pyramid, laplacian pyramid, etc. Each level
                  of the pyramid is a downsampled version of the previous
                  version by a factor of 2. By doing a rough estimate at the
                  coarsest level (the blurriest level) and then working our way
                  down, an alignment heuristic can be formed that enables us to
                  shift less each time. Instead, we shift a small amount per
                  layer as an educated estimate from the previous layer.
                </Typography>
                <Box display={"flex"} justifyContent={"center"}>
                  <Box
                    sx={{
                      p: 1,
                      display: "flex",
                      justifyContent: "center",
                      maxWidth: 600,
                    }}
                  >
                    <a
                      href="https://en.wikipedia.org/wiki/Pyramid_%28image_processing%29"
                      target="_blank"
                    >
                      <ImageListItem>
                        <img
                          src={img_pyramid}
                          alt="img pyramid"
                          loading="lazy"
                        />
                        <ImageListItemBar
                          title="Image Pyramid"
                          subtitle="https://en.wikipedia.org/wiki/Pyramid_%28image_processing%29"
                        />
                      </ImageListItem>
                    </a>
                  </Box>
                </Box>
                <Typography gutterBottom variant="body1">
                  In other words, shifting at a coarser level by a small amount
                  is equivalent to shifting at a finer level by a large amount.
                  Thus, we can get the larger displacements out of the way with
                  fewer shifts at a coarser level, and iteratively jump to finer
                  levels for more precise movements.
                </Typography>
                <Typography gutterBottom variant="h6">
                  Creating MipMaps
                </Typography>
                <Typography gutterBottom variant="body1">
                  To create MipMaps, we simply repeatedly downsample our image
                  by half until we reach the desired level depth. To ensure we
                  have sufficient MipMaps, we can generate MipMaps such that the
                  smallest level is at most size 32 pixels.
                </Typography>
                <BlockMath>{String.raw`m = \text{min(img.shape[:2])}`}</BlockMath>
                <BlockMath>{String.raw`L = \text{max}\left(1, \lfloor\log_2\left(\text{max}\left(\frac{m}{32}, 1\right)\right)\rfloor\right)`}</BlockMath>
                <Typography gutterBottom variant="body1">
                  After generating the MipMaps, we start at the coarsest level
                  and run the alignment algorithm with our large displacement.
                  We then step up one level finer and double the displacement
                  from the previous level. This is to counteract the size
                  doubling caused by stepping up a finer level.
                </Typography>
                <Typography gutterBottom variant="body1">
                  Here, we can calculate the displacement window size according
                  to the level that we are on. As we move finer and finer, we
                  can afford to make a smaller displacement window since the
                  large displacements were taken care of by the coarser level.
                  This is the idea of the refinement heuristic. The displacement
                  window at each level is thus calculated as so.
                </Typography>
                <BlockMath>{String.raw`\text{window}_\text{level}=\text{max}\left(2, \frac{\text{window}_\text{initial}}{2^{L - 1 - \text{level}}}\right)`}</BlockMath>
                <Typography gutterBottom variant="body1">
                  We then repeat this at every level until we reach the final
                  level, accumulating the displacement at each level. For
                  simplicity's sake, the cropping function was modified to only
                  use the center 80% of the image. Additional safeguards are
                  also put into place to ensure the displacement cropping
                  doesn't go out of bounds.
                </Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow bgcolor="#f5f9ff">
                        <TableCell>Algorithm</TableCell>
                        <TableCell align="center">Window</TableCell>
                        <TableCell align="center">Time (seconds)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>ED Crop</TableCell>
                        <TableCell align="center">[-15, 15]</TableCell>
                        <TableCell align="center">105.03s</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>NCC Crop</TableCell>
                        <TableCell align="center">[-15, 15]</TableCell>
                        <TableCell align="center">140.7s</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>NCC Crop</TableCell>
                        <TableCell align="center">[-30, 30]</TableCell>
                        <TableCell align="center">519.79s</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>NCC Pyr Crop</TableCell>
                        <TableCell align="center">[-15, 15]</TableCell>
                        <TableCell align="center">6.47s</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box sx={{ p: 2 }} />
                <Typography gutterBottom variant="body1">
                  This yield significantly better alignment results while
                  simultaneously being incredibly faster.
                </Typography>
                <Box display={"flex"} justifyContent={"center"} sx={{ p: 1 }}>
                  <Box sx={{ maxWidth: 500, width: "100%" }}>
                    <ReactCompareSlider
                      style={{ width: "100%" }}
                      itemOne={
                        <ImageListItem sx={{ width: "100%" }}>
                          <img src={NCC_30} alt="NCC_30" loading="lazy" />
                          <ImageListItemBar
                            title="NCC"
                            subtitle="window: [-30, 30]"
                          />
                        </ImageListItem>
                      }
                      itemTwo={
                        <ImageListItem>
                          <img
                            src={pyramid_alignment}
                            alt="pyramid_alignment"
                            loading="lazy"
                          />
                          <ImageListItemBar
                            title="NCC Pyramid"
                            subtitle="window: [-15, 15]"
                            sx={{ textAlign: "right" }}
                          />
                        </ImageListItem>
                      }
                    />
                  </Box>
                </Box>
              </Box>
            </Paper>

            <Box sx={{ p: 3 }} />

            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography gutterBottom variant="h5">
                Results
              </Typography>
              <Divider />
              <Box display={"flex"} justifyContent={"center"}>
                <ImageList sx={{ maxWidth: 900 }} cols={3} gap={10}>
                  {photoData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img src={item.img} alt={item.title} loading="lazy" />
                      <ImageListItemBar
                        title={item.title}
                        subtitle={item.subtitle}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
            </Paper>
          </Container>
        </Paper>
      </Container>
    </Box>
  );
};

export default Project1;
