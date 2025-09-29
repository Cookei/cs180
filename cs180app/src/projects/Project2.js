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
import { BlockMath, InlineMath } from "react-katex";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import convolveGif from "../assets/proj2/part1/2dConvolve.gif";
import convolvePng from "../assets/proj2/part1/convolve4.png";

import fdoImg from "../assets/proj2/part1/fdo.png";
import fdoImg2 from "../assets/proj2/part1/fdo_2.png";
import fdoEdge from "../assets/proj2/part1/fdo_edge.png";

import convolveG from "../assets/proj2/part1/convolveG.png";
import convolveGD from "../assets/proj2/part1/convolveGD.png";
import unsharpenSharpen from "../assets/proj2/part1/unsharpenSharpen.png";
import unsharpenSharpen_innout from "../assets/proj2/part1/unsharpenSharpen_innout.png";

import sharpen from "../assets/proj2/part1/sharpen.png";
import sharpen_innout from "../assets/proj2/part1/sharpen_innout.png";

import taj from "../assets/proj2/part1/taj.jpg";
import innoutblur from "../assets/proj2/part1/innoutblur.jpg";

import { ReactCompareSlider } from "react-compare-slider";

import fdoXY from "../assets/proj2/part1/fdo_xy.png";

import food_color from "../assets/proj2/part2/food_color.jpg";
import food_color_FFT_A from "../assets/proj2/part2/food_color_FFT_A.jpg";
import food_color_FFT_H from "../assets/proj2/part2/food_color_FFT_H.jpg";
import food_color_FFT_input_H from "../assets/proj2/part2/food_color_FFT_input_H.jpg";
import food_color_FFT_input_L from "../assets/proj2/part2/food_color_FFT_input_L.jpg";
import food_color_FFT_L from "../assets/proj2/part2/food_color_FFT_L.jpg";

import hybridTemplate from "../assets/proj2/part2/hybridTemplate.jpg";
import animal from "../assets/proj2/part2/animal.jpg";

import apple_g_0 from "../assets/proj2/part2/stack/apple_g_0.jpg";
import apple_g_1 from "../assets/proj2/part2/stack/apple_g_1.jpg";
import apple_g_2 from "../assets/proj2/part2/stack/apple_g_2.jpg";
import apple_g_3 from "../assets/proj2/part2/stack/apple_g_3.jpg";
import apple_g_4 from "../assets/proj2/part2/stack/apple_g_4.jpg";
import apple_g_5 from "../assets/proj2/part2/stack/apple_g_5.jpg";

import apple_l_0 from "../assets/proj2/part2/stack/apple_l_0.jpg";
import apple_l_1 from "../assets/proj2/part2/stack/apple_l_1.jpg";
import apple_l_2 from "../assets/proj2/part2/stack/apple_l_2.jpg";
import apple_l_3 from "../assets/proj2/part2/stack/apple_l_3.jpg";
import apple_l_4 from "../assets/proj2/part2/stack/apple_l_4.jpg";
import apple_l_5 from "../assets/proj2/part2/stack/apple_l_5.jpg";

import apple_l_m_0 from "../assets/proj2/part2/stack/apple_l_m_0.jpg";
import apple_l_m_1 from "../assets/proj2/part2/stack/apple_l_m_1.jpg";
import apple_l_m_2 from "../assets/proj2/part2/stack/apple_l_m_2.jpg";
import apple_l_m_3 from "../assets/proj2/part2/stack/apple_l_m_3.jpg";
import apple_l_m_4 from "../assets/proj2/part2/stack/apple_l_m_4.jpg";
import apple_l_m_5 from "../assets/proj2/part2/stack/apple_l_m_5.jpg";

import blend_0 from "../assets/proj2/part2/stack/blend_0.jpg";
import blend_1 from "../assets/proj2/part2/stack/blend_1.jpg";
import blend_2 from "../assets/proj2/part2/stack/blend_2.jpg";
import blend_3 from "../assets/proj2/part2/stack/blend_3.jpg";
import blend_4 from "../assets/proj2/part2/stack/blend_4.jpg";
import blend_5 from "../assets/proj2/part2/stack/blend_5.jpg";

import mask_0 from "../assets/proj2/part2/stack/mask_0.jpg";
import mask_1 from "../assets/proj2/part2/stack/mask_1.jpg";
import mask_2 from "../assets/proj2/part2/stack/mask_2.jpg";
import mask_3 from "../assets/proj2/part2/stack/mask_3.jpg";
import mask_4 from "../assets/proj2/part2/stack/mask_4.jpg";
import mask_5 from "../assets/proj2/part2/stack/mask_5.jpg";

import orange_g_0 from "../assets/proj2/part2/stack/orange_g_0.jpg";
import orange_g_1 from "../assets/proj2/part2/stack/orange_g_1.jpg";
import orange_g_2 from "../assets/proj2/part2/stack/orange_g_2.jpg";
import orange_g_3 from "../assets/proj2/part2/stack/orange_g_3.jpg";
import orange_g_4 from "../assets/proj2/part2/stack/orange_g_4.jpg";
import orange_g_5 from "../assets/proj2/part2/stack/orange_g_5.jpg";

import orange_l_0 from "../assets/proj2/part2/stack/orange_l_0.jpg";
import orange_l_1 from "../assets/proj2/part2/stack/orange_l_1.jpg";
import orange_l_2 from "../assets/proj2/part2/stack/orange_l_2.jpg";
import orange_l_3 from "../assets/proj2/part2/stack/orange_l_3.jpg";
import orange_l_4 from "../assets/proj2/part2/stack/orange_l_4.jpg";
import orange_l_5 from "../assets/proj2/part2/stack/orange_l_5.jpg";

import orange_l_m_0 from "../assets/proj2/part2/stack/orange_l_m_0.jpg";
import orange_l_m_1 from "../assets/proj2/part2/stack/orange_l_m_1.jpg";
import orange_l_m_2 from "../assets/proj2/part2/stack/orange_l_m_2.jpg";
import orange_l_m_3 from "../assets/proj2/part2/stack/orange_l_m_3.jpg";
import orange_l_m_4 from "../assets/proj2/part2/stack/orange_l_m_4.jpg";
import orange_l_m_5 from "../assets/proj2/part2/stack/orange_l_m_5.jpg";

import blendedOrple from "../assets/proj2/part2/stack/blendedImg.jpg";

import peacock_eyes_g_0 from "../assets/proj2/part2/stack/peacock/peacock_eyes_g_0.jpg";
import peacock_g_0 from "../assets/proj2/part2/stack/peacock/peacock_g_0.jpg";
import peacock_mask_0 from "../assets/proj2/part2/stack/peacock/peacock_mask_0.jpg";
import peacock_blended from "../assets/proj2/part2/stack/peacock/blendedImg.jpg";

import galaxy_g_0 from "../assets/proj2/part2/stack/galaxy/galaxy_g_0.jpg";
import laal_g_0 from "../assets/proj2/part2/stack/galaxy/galaxy_g_0.jpg";
import galaxy_mask_0 from "../assets/proj2/part2/stack/galaxy/galaxy_mask_0.jpg";
import galaxy_blended from "../assets/proj2/part2/stack/galaxy/blendedImg.jpg";

const photoData = [
  {
    img: apple_g_0,
    title: "Gaussian 0",
  },
  {
    img: apple_g_1,
    title: "Gaussian 1",
  },
  {
    img: apple_g_2,
    title: "Gaussian 2",
  },
  {
    img: apple_g_3,
    title: "Gaussian 3",
  },
  {
    img: apple_g_4,
    title: "Gaussian 4",
  },
  {
    img: apple_g_5,
    title: "Gaussian 5",
  },
];

const photoData2 = [
  {
    img: apple_l_0,
    title: "Laplacian 0",
  },
  {
    img: apple_l_1,
    title: "Laplacian 1",
  },
  {
    img: apple_l_2,
    title: "Laplacian 2",
  },
  {
    img: apple_l_3,
    title: "Laplacian 3",
  },
  {
    img: apple_l_4,
    title: "Laplacian 4",
  },
  {
    img: apple_l_5,
    title: "Laplacian 5",
  },
];

const photoData3 = [
  {
    img: apple_l_m_0,
    title: "Masked 0",
  },
  {
    img: apple_l_m_1,
    title: "Masked 1",
  },
  {
    img: apple_l_m_2,
    title: "Masked 2",
  },
  {
    img: apple_l_m_3,
    title: "Masked 3",
  },
  {
    img: apple_l_m_4,
    title: "Masked 4",
  },
  {
    img: apple_l_m_5,
    title: "Masked 5",
  },
];

const photoData4 = [
  {
    img: orange_g_0,
    title: "Gaussian 0",
  },
  {
    img: orange_g_1,
    title: "Gaussian 1",
  },
  {
    img: orange_g_2,
    title: "Gaussian 2",
  },
  {
    img: orange_g_3,
    title: "Gaussian 3",
  },
  {
    img: orange_g_4,
    title: "Gaussian 4",
  },
  {
    img: orange_g_5,
    title: "Gaussian 5",
  },
];

const photoData5 = [
  {
    img: orange_l_0,
    title: "Laplacian 0",
  },
  {
    img: orange_l_1,
    title: "Laplacian 1",
  },
  {
    img: orange_l_2,
    title: "Laplacian 2",
  },
  {
    img: orange_l_3,
    title: "Laplacian 3",
  },
  {
    img: orange_l_4,
    title: "Laplacian 4",
  },
  {
    img: orange_l_5,
    title: "Laplacian 5",
  },
];

const photoData6 = [
  {
    img: orange_l_m_0,
    title: "Masked 0",
  },
  {
    img: orange_l_m_1,
    title: "Masked 1",
  },
  {
    img: orange_l_m_2,
    title: "Masked 2",
  },
  {
    img: orange_l_m_3,
    title: "Masked 3",
  },
  {
    img: orange_l_m_4,
    title: "Masked 4",
  },
  {
    img: orange_l_m_5,
    title: "Masked 5",
  },
];

const photoData7 = [
  {
    img: mask_0,
    title: "Gaussian 0",
  },
  {
    img: mask_1,
    title: "Gaussian 1",
  },
  {
    img: mask_2,
    title: "Gaussian 2",
  },
  {
    img: mask_3,
    title: "Gaussian 3",
  },
  {
    img: mask_4,
    title: "Gaussian 4",
  },
  {
    img: mask_5,
    title: "Gaussian 5",
  },
];

const photoData8 = [
  {
    img: blend_0,
    title: "Blended 0",
  },
  {
    img: blend_1,
    title: "Blended 1",
  },
  {
    img: blend_2,
    title: "Blended 2",
  },
  {
    img: blend_3,
    title: "Blended 3",
  },
  {
    img: blend_4,
    title: "Blended 4",
  },
  {
    img: blend_5,
    title: "Blended 5",
  },
];

let convolve4Code = `def convolve4(img, kernel:np.ndarray):
    finalImg = np.zeros_like(img, dtype=float)
    kernel = np.flip(kernel, (0, 1))
    kernelSize = kernel.shape[0]
    pad = kernelSize // 2
    if img.ndim == 2: #grayscale img
        paddedImg = np.pad(img, pad_width=((pad, pad), (pad, pad)), mode='constant', constant_values=0.0)
    elif img.shape[2] == 4:
        paddedImg = np.pad(img, pad_width= ((pad, pad), (pad, pad), (0, 0)), mode='constant', constant_values=0.0)
        paddedImg[..., 3] = 1.0
    else:
        paddedImg = np.pad(img, pad_width= ((pad, pad), (pad, pad), (0, 0)), mode='constant', constant_values=0.0)
    for y in range(img.shape[0]):
        for x in range(img.shape[1]):
            convolvedColor = 0
            for ky in range(kernelSize):
                for kx in range(kernelSize):
                    convolvedColor += paddedImg[y + ky, x + kx] * kernel[ky, kx]
            finalImg[y, x] = convolvedColor
    return finalImg
`;
let convolve4Code2 = `kernel = np.ones((9, 9))
kernel /= kernel.shape[0]**2
im_out = convolve4(im, kernel)
`;
let convolve2Code = `def convolve2(img, kernel:np.ndarray):
    finalImg = np.zeros_like(img, dtype=float)
    kernel = np.flip(kernel, (0, 1))
    kernelSize = kernel.shape[0]
    pad = kernelSize // 2
    if img.ndim == 2: #grayscale img
        paddedImg = np.pad(img, pad_width=((pad, pad), (pad, pad)), mode='constant', constant_values=0.0)
    elif img.shape[2] == 4:
        paddedImg = np.pad(img, pad_width= ((pad, pad), (pad, pad), (0, 0)), mode='constant', constant_values=0.0)
        paddedImg[..., 3] = 1.0
    else:
        paddedImg = np.pad(img, pad_width= ((pad, pad), (pad, pad), (0, 0)), mode='constant', constant_values=0.0)
    for y in range(img.shape[0]):
        for x in range(img.shape[1]):
            if paddedImg.ndim == 3 and paddedImg.shape[2] >= 3:
                region = paddedImg[y:y + kernelSize, x:x + kernelSize, :]
                finalImg[y, x] = np.sum(region * kernel[:, :, None], axis=(0, 1))
            else:
                region = paddedImg[y:y + kernelSize, x:x + kernelSize]
                finalImg[y, x] = np.sum(region * kernel[:, :], axis=(0, 1))
    return finalImg`;

let fdoCode = `def FDO(img, Dx, Dy):
    img = img[..., :3] if img.ndim == 3 else img
    finalImg = np.zeros_like(img, dtype=float)
    if img.ndim == 3:
        for c in range(img.shape[2]):
            im_out_x = sp.signal.convolve2d(img[..., c], Dx, mode='same')
            im_out_y = sp.signal.convolve2d(img[..., c], Dy, mode='same')
            mag = np.sqrt(im_out_x**2 + im_out_y**2)
            finalImg[..., c] = mag
            else:
            im_out_x = sp.signal.convolve2d(img, Dx, mode='same')
            im_out_y = sp.signal.convolve2d(img, Dy, mode='same')
            mag = np.sqrt(im_out_x**2 + im_out_y**2)
            finalImg = mag
            return finalImg`;

const Project2 = () => {
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
                Project 2
              </Typography>
              <Typography gutterBottom variant="h5">
                Fun with Frequencies!
              </Typography>
              <Divider />
              <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="body1">
                  The goal of this project is to play around with the frequency
                  spectrum and gaussian kernels to create various effects!
                </Typography>
              </Box>
            </Paper>

            <Box sx={{ p: 3 }} />

            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography gutterBottom variant="h4">
                Part 1: Fun with Filters
              </Typography>
              <Divider />
              <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="body1">
                  Here, we build intuitions about 2D convolutions and filtering
                </Typography>
                <Typography gutterBottom variant="h5">
                  Part 1.1: Convolutions From Scratch!
                </Typography>
                <Typography gutterBottom variant="body1">
                  We implement a convolution <InlineMath math="f * g" /> where{" "}
                  <InlineMath math="f" /> is the image and{" "}
                  <InlineMath math="g" /> is the convolution kernel by the
                  following ways. Intuitively, we can imagine a 2D array{" "}
                  <InlineMath math="g" /> centered at each corresponding pixel
                  in <InlineMath math="f" /> to sample each overlapping segment{" "}
                  (<InlineMath math="f \in g" />
                  ), weigh them by each entry within <InlineMath math="g" />,
                  and then sum them all up to equal the new value of{" "}
                  <InlineMath math="f_{xy}" />
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
                    <img
                      style={{ width: "100%" }}
                      src={convolveGif}
                      alt="method for convolving"
                      loading="lazy"
                    />
                  </Box>
                </Box>
                <Typography gutterBottom variant="body1">
                  The naive version is quite simple to implement, albeit
                  incredibly slow. For each pixel in the image, do a 2d loop
                  around the pixel that's the size of the kernel. Then, sample
                  those points and weigh them by the corresponding weight in the
                  kernel. For a simple box filter, each weight within the kernel
                  is <InlineMath math="\frac{1}{\texttt{g.shape[0]}^2}" />,
                  assuming a square kernel.
                </Typography>
                <Typography gutterBottom variant="body1">
                  It's noted here that for the edges of the image, we need to
                  pad the image with half of the kernel's width in order to not
                  go out of bounds. There are multiple ways to do this, but for
                  now, we will be padding it with zeros.
                </Typography>
                <SyntaxHighlighter language="python" style={docco}>
                  {convolve4Code}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="python" style={docco}>
                  {convolve4Code2}
                </SyntaxHighlighter>
                <Typography gutterBottom variant="body1">
                  We note that this is incredibly slow. There's 4 for loops!
                  Indeed, there is a faster way to do this using only 2 for
                  loops. Instead of double looping through the kernel, we can
                  instead take the entire region covered by the kernel by
                  slicing the original image, and then computing the element
                  wise multiplication of the region with the kernel, before
                  finally adding them together for the final value of the pixel.
                </Typography>
                <SyntaxHighlighter language="python" style={docco}>
                  {convolve2Code}
                </SyntaxHighlighter>
                <Box display={"flex"} justifyContent={"center"}>
                  <Box
                    sx={{
                      p: 1,
                      display: "flex",
                      justifyContent: "center",
                      maxWidth: 300,
                    }}
                  >
                    <ImageListItem>
                      <img src={convolvePng} alt="Convolve2" loading="lazy" />
                      <ImageListItemBar title="Convolution with 9x9" />
                    </ImageListItem>
                  </Box>
                </Box>
                <Typography gutterBottom variant="body1">
                  Alternatively, we can also use <code>scipy</code>'s built in
                  function, <code>scipy.signal.convolve2d()</code>. Here, we can
                  compare the runtime of the various functions.
                </Typography>

                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow bgcolor="#f5f9ff">
                        <TableCell>Algorithm</TableCell>
                        <TableCell align="center">Time (seconds)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>4 For Loops</TableCell>
                        <TableCell align="center">22.0s</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>2 For Loops</TableCell>
                        <TableCell align="center">4.6s</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>Scipy</TableCell>
                        <TableCell align="center">3.0s</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box sx={{ p: 2 }} />
                <Typography gutterBottom variant="h5">
                  Part 1.2: Finite Difference Operator
                </Typography>
                <Typography gutterBottom variant="body1">
                  The interesting thing about convolutions is that we can take
                  partial derivatives using convolutions! The intuition stems
                  from the the definition of a derivative.
                </Typography>
                <BlockMath>{String.raw`\lim_{h \to 0} \frac{f(x + h) - f(x)}{h}`}</BlockMath>
                <Typography gutterBottom variant="body1">
                  Since we are operating on discrete pixels however, the
                  smallest <InlineMath math="h" /> can get is 1. Thus, we can
                  express this as the simple finite difference between two
                  neighboring pixels.
                </Typography>
                <BlockMath>{String.raw`
                D_x= [1, 0, -1],\:\: D_y=\begin{bmatrix}
                    1 \\
                    0 \\
                    -1
                    \end{bmatrix}`}</BlockMath>
                <SyntaxHighlighter language="python" style={docco}>
                  {fdoCode}
                </SyntaxHighlighter>
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
                      src={fdoImg}
                      alt="Finite Difference Operator Results"
                      loading="lazy"
                    />
                  </Box>
                </Box>
                <Typography gutterBottom variant="body1">
                  With the application of the FDO in both x and y, we can
                  combine those together to get an edge detector. Since we are
                  evaluating the partial derivatives of the image, this is
                  functionally equivalent to rendering the gradient of the
                  image. Thus, we can see where the edges of the image lies,
                  creating an edge detector.
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
                    <img
                      style={{ width: "100%" }}
                      src={fdoImg2}
                      alt="Finite Difference Operator Results"
                      loading="lazy"
                    />
                  </Box>
                </Box>
                <Typography gutterBottom variant="body1">
                  Here is the same process done on another image. We can then
                  take the gradient and binarize it to isolate the edges via a
                  threshold.
                </Typography>
                <Box display={"flex"} justifyContent={"center"}>
                  <Box
                    sx={{
                      p: 1,
                      display: "flex",
                      justifyContent: "center",
                      maxWidth: 300,
                    }}
                  >
                    <ImageListItem>
                      <img src={fdoEdge} alt="fdoEdge" loading="lazy" />
                      <ImageListItemBar title="Binarized FDO" />
                    </ImageListItem>
                  </Box>
                </Box>
                <Typography gutterBottom variant="h5">
                  Part 1.3: Derivative of Gaussian (DoG) Filter
                </Typography>
                <Typography gutterBottom variant="body1">
                  Unfortunately, doing it simply with a FDO leads to a lot of
                  noise. This is because the filter is picking up on a lot of
                  high frequency background noise that we want to smooth out.
                  Thankfully, we can convolve the original image first with a
                  gaussian to smooth out the extremely high frequencies before
                  applying our edge filter.
                </Typography>
                <Typography gutterBottom variant="body1">
                  We can get a 2D gaussian by taking the outer product of a 1D
                  gaussian with its transpose
                </Typography>
                <BlockMath>{String.raw`G_{\text{2D}}=G_\text{1D} \otimes G_{\text{1D}}^T`}</BlockMath>
                <Typography gutterBottom variant="body1">
                  Here we choose size of the kernel based on{" "}
                  <InlineMath math="k=\lceil (6\sigma + 1) \rceil" />. This
                  ensures that we capture all significant weights of the
                  gaussian.
                </Typography>
                <Box display={"flex"} justifyContent={"center"} sx={{ p: 1 }}>
                  <ImageList
                    gap={25}
                    sx={{
                      maxWidth: 700,
                    }}
                  >
                    <ImageListItem>
                      <img
                        src={convolveG}
                        alt="convolve with gaussian"
                        loading="lazy"
                      />
                      <ImageListItemBar title="Convolve Gaussian" />
                    </ImageListItem>
                    <ImageListItem>
                      <img
                        src={convolveGD}
                        alt="FDO of gaussian"
                        loading="lazy"
                      />
                      <ImageListItemBar title="FDO of Gaussian" />
                    </ImageListItem>
                  </ImageList>
                </Box>
                <Typography gutterBottom variant="body1">
                  After convolving with the gaussian, we can see a blurry image
                  with the high frequencies removed. When we take the FDO of the
                  gaussian'd image, we notice how there is a significant
                  reduction of noise since we pre-filtered it out before.
                </Typography>
                <Box display={"flex"} justifyContent={"center"} sx={{ p: 1 }}>
                  <Box sx={{ maxWidth: 500, width: "100%" }}>
                    <ReactCompareSlider
                      style={{ width: "100%" }}
                      itemOne={
                        <ImageListItem sx={{ width: "100%" }}>
                          <img src={fdoXY} alt="FDO" loading="lazy" />
                          <ImageListItemBar title="FDO" />
                        </ImageListItem>
                      }
                      itemTwo={
                        <ImageListItem>
                          <img
                            src={convolveGD}
                            alt="Gaussian FDO"
                            loading="lazy"
                          />
                          <ImageListItemBar
                            title="Gaussian FDO"
                            sx={{ textAlign: "right" }}
                          />
                        </ImageListItem>
                      }
                    />
                  </Box>
                </Box>
                <Box sx={{ p: 2 }} />
                <Typography gutterBottom variant="body1">
                  We can actually compute this faster. Previously, we convolved
                  the original image with the gaussian, then convolved it twice
                  for <InlineMath math="D_x" /> and <InlineMath math="D_y" />.
                  However, since convolutions are associative, we can instead
                  convolve the gaussian kernel with <InlineMath math="D_x" />{" "}
                  and <InlineMath math="D_y" /> first, and then convolve that
                  with the image. This is a lot more efficient since the
                  gaussian kernel is significantly smaller than the image,
                  saving computation.
                </Typography>
                <Box display={"flex"} justifyContent={"center"} sx={{ p: 1 }}>
                  <ImageList
                    gap={25}
                    sx={{
                      maxWidth: 700,
                    }}
                  >
                    <ImageListItem>
                      <img src={convolveGD} alt="Slow" loading="lazy" />
                      <ImageListItemBar title="Slow" />
                    </ImageListItem>
                    <ImageListItem>
                      <img src={convolveGD} alt="Optimized" loading="lazy" />
                      <ImageListItemBar title="Optimized" />
                    </ImageListItem>
                  </ImageList>
                </Box>
              </Box>
            </Paper>
            <Box sx={{ p: 3 }} />
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography gutterBottom variant="h4">
                Part 2: Fun with Frequencies!
              </Typography>
              <Divider />
              <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="h5">
                  Part 2.1: Image "Sharpening"
                </Typography>
                <Typography gutterBottom variant="body1">
                  Here, we derive the unsharp unmask technique of sharpening
                  images. We can create a laplacian of an image by subtracting
                  the original image with its gaussian. Since a gaussian is a
                  low pass filter, subtracting the low frequencies from the
                  original image gives a high pass filter. Adding the laplacian
                  to the original image will boost the high frequencies, leading
                  to a sharper image.
                </Typography>
                <Typography gutterBottom variant="body1">
                  Once again, since convolutions are associative, we can combine
                  this into a single convolution operation.
                  <BlockMath>{String.raw`f + \alpha(f-f*g)=(1+\alpha)f - \alpha f - \alpha f*g = f*((1+\alpha)e - \alpha g)`}</BlockMath>
                  Here, <InlineMath math="e" /> is the unit impulse.
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{ p: 1, gap: 5 }}
                >
                  <Box sx={{ maxWidth: 400, width: "100%" }}>
                    <ReactCompareSlider
                      style={{ width: "100%" }}
                      itemOne={
                        <ImageListItem sx={{ width: "100%" }}>
                          <img src={taj} alt="FDO" loading="lazy" />
                          <ImageListItemBar title="Original" />
                        </ImageListItem>
                      }
                      itemTwo={
                        <ImageListItem>
                          <img
                            src={sharpen}
                            alt="Gaussian FDO"
                            loading="lazy"
                          />
                          <ImageListItemBar
                            title="Sharpened"
                            sx={{ textAlign: "right" }}
                          />
                        </ImageListItem>
                      }
                    />
                  </Box>
                  <Box sx={{ maxWidth: 400, width: "100%" }}>
                    <ReactCompareSlider
                      style={{ width: "100%" }}
                      itemOne={
                        <ImageListItem sx={{ width: "400px" }}>
                          <img src={innoutblur} alt="FDO" loading="lazy" />
                          <ImageListItemBar title="Original" />
                        </ImageListItem>
                      }
                      itemTwo={
                        <ImageListItem sx={{ width: "400px", left: "0px" }}>
                          <img
                            src={sharpen_innout}
                            alt="Gaussian FDO"
                            loading="lazy"
                          />
                          <ImageListItemBar
                            title="Sharpened"
                            sx={{ textAlign: "right" }}
                          />
                        </ImageListItem>
                      }
                    />
                  </Box>
                </Box>
                <Box sx={{ p: 2 }} />
                <Typography gutterBottom variant="body1">
                  We can actually make this better. Notice how the sharpening
                  ends up also sharpening the noise. By first blurring the image
                  and getting rid of high frequency noise, we can then sharpen
                  on top of that to sharpen better! This is the unsharpenSharpen
                  filter.
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{ p: 1, gap: 5 }}
                >
                  <Box sx={{ maxWidth: 400, width: "100%" }}>
                    <ReactCompareSlider
                      style={{ width: "100%" }}
                      itemOne={
                        <ImageListItem sx={{ width: "100%" }}>
                          <img src={sharpen_innout} alt="FDO" loading="lazy" />
                          <ImageListItemBar title="Sharpen" />
                        </ImageListItem>
                      }
                      itemTwo={
                        <ImageListItem>
                          <img
                            src={unsharpenSharpen_innout}
                            alt="Gaussian FDO"
                            loading="lazy"
                          />
                          <ImageListItemBar
                            title="UnsharpenSharpen"
                            sx={{ textAlign: "right" }}
                          />
                        </ImageListItem>
                      }
                    />
                  </Box>
                </Box>
                <Box sx={{ p: 2 }} />
                <Typography gutterBottom variant="h5">
                  Part 2.2: Hybrid Images
                </Typography>
                <Typography gutterBottom variant="body1">
                  By combining the low frequencies of one image and the high
                  frequencies of another, we can create a hybrid image where two
                  different images appear depending on how close you are to the
                  image. This is because the human eye, when viewing things from
                  far away, filters out high frequencies, only letting the low
                  frequency image be seen. The high frequency image is just the
                  laplacian we calculated before!
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{ p: 1 }}
                >
                  <ImageListItem>
                    <img src={food_color} alt="Slow" loading="lazy" />
                  </ImageListItem>
                  <Container sx={{ width: "30%" }}>
                    <ImageListItem>
                      <img src={food_color} alt="Optimized" loading="lazy" />
                    </ImageListItem>
                  </Container>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{ p: 1, gap: 1 }}
                >
                  <ImageListItem>
                    <img
                      src={food_color_FFT_input_H}
                      alt="Slow"
                      loading="lazy"
                    />
                    <ImageListItemBar title="Input High FFT" />
                  </ImageListItem>
                  <ImageListItem>
                    <img
                      src={food_color_FFT_input_L}
                      alt="Optimized"
                      loading="lazy"
                    />
                    <ImageListItemBar title="Input Low FFT" />
                  </ImageListItem>
                  <ImageListItem>
                    <img
                      src={food_color_FFT_H}
                      alt="Optimized"
                      loading="lazy"
                    />
                    <ImageListItemBar title="Output High FFT" />
                  </ImageListItem>
                  <ImageListItem>
                    <img
                      src={food_color_FFT_L}
                      alt="Optimized"
                      loading="lazy"
                    />
                    <ImageListItemBar title="Output Low FFT" />
                  </ImageListItem>
                  <ImageListItem>
                    <img
                      src={food_color_FFT_H}
                      alt="Optimized"
                      loading="lazy"
                    />
                    <ImageListItemBar title="Output FFT" />
                  </ImageListItem>
                </Box>
                <Typography gutterBottom variant="body1">
                  By examining the FFT of the input and output images, you can
                  visually see how the high and loss pass filters get rid of
                  their respective frequenices, before combining them together.
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{ p: 1 }}
                >
                  <ImageListItem>
                    <img src={hybridTemplate} alt="Slow" loading="lazy" />
                  </ImageListItem>
                  <Container sx={{ width: "30%" }}>
                    <ImageListItem>
                      <img
                        src={hybridTemplate}
                        alt="Optimized"
                        loading="lazy"
                      />
                    </ImageListItem>
                  </Container>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{ p: 1 }}
                >
                  <ImageListItem>
                    <img src={animal} alt="Slow" loading="lazy" />
                  </ImageListItem>
                  <Container sx={{ width: "30%" }}>
                    <ImageListItem>
                      <img src={animal} alt="Optimized" loading="lazy" />
                    </ImageListItem>
                  </Container>
                </Box>
                <Typography gutterBottom variant="h5">
                  Part 2.3: Gaussian and Laplacian Stacks
                </Typography>
                <Typography gutterBottom variant="body1">
                  Following from the previous project, we can compute gaussian
                  and laplacian stacks instead of pyramids. This just means we
                  don't resize the image as we go through the layers. Laplacian
                  stacks are computed by taking consecutive differences between
                  the gaussian stack, with the last laplacian stack being the
                  same as the deepest gaussian stack layer.
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  sx={{ gap: 2, flexDirection: "column" }}
                >
                  <ImageList sx={{ maxWidth: 900 }} cols={6} gap={10}>
                    {photoData7.map((item) => (
                      <ImageListItem key={item.img}>
                        <img src={item.img} alt={item.title} loading="lazy" />
                        <ImageListItemBar
                          title={item.title}
                          subtitle={item.subtitle}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                  <ImageList sx={{ maxWidth: 900 }} cols={6} gap={10}>
                    {photoData8.map((item) => (
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
                <Box display={"flex"} justifyContent={"center"} sx={{ gap: 2 }}>
                  <ImageList sx={{ maxWidth: 900 }} cols={1} gap={10}>
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
                  <ImageList sx={{ maxWidth: 900 }} cols={1} gap={10}>
                    {photoData2.map((item) => (
                      <ImageListItem key={item.img}>
                        <img src={item.img} alt={item.title} loading="lazy" />
                        <ImageListItemBar
                          title={item.title}
                          subtitle={item.subtitle}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                  <ImageList sx={{ maxWidth: 900 }} cols={1} gap={10}>
                    {photoData3.map((item) => (
                      <ImageListItem key={item.img}>
                        <img src={item.img} alt={item.title} loading="lazy" />
                        <ImageListItemBar
                          title={item.title}
                          subtitle={item.subtitle}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                  <ImageList sx={{ maxWidth: 900 }} cols={1} gap={10}>
                    {photoData4.map((item) => (
                      <ImageListItem key={item.img}>
                        <img src={item.img} alt={item.title} loading="lazy" />
                        <ImageListItemBar
                          title={item.title}
                          subtitle={item.subtitle}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                  <ImageList sx={{ maxWidth: 900 }} cols={1} gap={10}>
                    {photoData5.map((item) => (
                      <ImageListItem key={item.img}>
                        <img src={item.img} alt={item.title} loading="lazy" />
                        <ImageListItemBar
                          title={item.title}
                          subtitle={item.subtitle}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                  <ImageList sx={{ maxWidth: 900 }} cols={1} gap={10}>
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
                      src={blendedOrple}
                      alt="method for convolving"
                      loading="lazy"
                    />
                  </Box>
                </Box>
                <Typography gutterBottom variant="body1">
                  Here it is on a couple more images! Here we also use nonlinear
                  masks
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
                    <img
                      style={{ width: "100%" }}
                      src={peacock_g_0}
                      alt="method for convolving"
                      loading="lazy"
                    />
                  </Box>
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
                      src={peacock_eyes_g_0}
                      alt="method for convolving"
                      loading="lazy"
                    />
                  </Box>
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
                      src={peacock_mask_0}
                      alt="method for convolving"
                      loading="lazy"
                    />
                  </Box>
                </Box>
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
                      src={peacock_blended}
                      alt="method for convolving"
                      loading="lazy"
                    />
                  </Box>
                </Box>
                <Box sx={{ p: 2 }} />
                <Divider />
                <Box sx={{ p: 2 }} />
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
                      src={galaxy_g_0}
                      alt="method for convolving"
                      loading="lazy"
                    />
                  </Box>
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
                      src={laal_g_0}
                      alt="method for convolving"
                      loading="lazy"
                    />
                  </Box>
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
                      src={galaxy_mask_0}
                      alt="method for convolving"
                      loading="lazy"
                    />
                  </Box>
                </Box>
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
                      src={galaxy_blended}
                      alt="method for convolving"
                      loading="lazy"
                    />
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Container>
        </Paper>
      </Container>
    </Box>
  );
};

export default Project2;
