import React from "react";
import coffeeImg from "../assets/proj3/coffee_warp.png";
import comparisonImg from "../assets/proj3/comparison.png";
import mosaicImg from "../assets/proj3/mosaic.png";
import math from "../assets/proj3/math.png";
import ProjectBase from "../components/ProjectBase";
import ProjectSection from "../components/ProjectSection";
import {
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Container,
  Paper,
  CardMedia,
  Divider,
} from "@mui/material";

import { BlockMath, InlineMath } from "react-katex";

import calibration1img from "../assets/proj4/Part0/render(22).png";
import calibration2img from "../assets/proj4/Part0/render(26).png";
import calibrationvid from "../assets/proj4/Part0/calibration.mp4";
import ProjectImg from "../components/ProjectImg";

import original from "../assets/proj4/Part0/original_0.jpg";
import undistorted_uncropped_0 from "../assets/proj4/Part0/undistored_uncropped_0.jpg";
import undistorted_cropped_0 from "../assets/proj4/Part0/undistored_cropped_0.jpg";

import MLP1 from "../assets/proj4/Part1/mlp_img.jpg";

import PE10_Width256output from "../assets/proj4/Part1/Fox/PE10_Width256/output.mp4";
import PE10_Width256output_10 from "../assets/proj4/Part1/Fox/PE10_Width256/output_10.jpg";
import PE10_Width256output_50 from "../assets/proj4/Part1/Fox/PE10_Width256/output_50.jpg";
import PE10_Width256output_1000 from "../assets/proj4/Part1/Fox/PE10_Width256/output_1000.jpg";
import PE10_Width256output_2000 from "../assets/proj4/Part1/Fox/PE10_Width256/output_2000.jpg";
import PE10_Width256psnr_curve from "../assets/proj4/Part1/Fox/PE10_Width256/psnr_curve.jpg";

import PE5_Width256output from "../assets/proj4/Part1/Fox/PE5_Width256/output.mp4";
import PE5_Width256psnr_curve from "../assets/proj4/Part1/Fox/PE5_Width256/psnr_curve.jpg";

import PE5_Width64output from "../assets/proj4/Part1/Fox/PE5_Width64/output.mp4";
import PE5_Width64psnr_curve from "../assets/proj4/Part1/Fox/PE5_Width64/psnr_curve.jpg";

import PE10_Width64output from "../assets/proj4/Part1/Fox/PE10_Width64/output.mp4";
import PE10_Width64psnr_curve from "../assets/proj4/Part1/Fox/PE10_Width64/psnr_curve.jpg";

///////////////////////////////

import crepe_PE10_Width256output from "../assets/proj4/Part1/Crepe/PE10_Width256/output.mp4";

import crepe_PE5_Width256output from "../assets/proj4/Part1/Crepe/PE5_Width256/output.mp4";

import crepe_PE5_Width64output from "../assets/proj4/Part1/Crepe/PE5_Width64/output.mp4";

import crepe_PE10_Width64output from "../assets/proj4/Part1/Crepe/PE10_Width64/output.mp4";

import sampling1 from "../assets/proj4/Part 2/render (28).png";
import sampling2 from "../assets/proj4/Part 2/render_close.png";
import sampling3 from "../assets/proj4/Part 2/render(27).png";

import nerfsampling from "../assets/proj4/Part 2/nerfsampling.mp4";
import nerfsinglecamerasampling from "../assets/proj4/Part 2/nerfsinglecamerasampling.mp4";

import lego500 from "../assets/proj4/Part 2/Lego/bsize8_lr0005/500/output.mp4";
import lego1000 from "../assets/proj4/Part 2/Lego/bsize8_lr0005/1000/output.mp4";
import lego1500 from "../assets/proj4/Part 2/Lego/bsize8_lr0005/1500/output.mp4";
import lego2000 from "../assets/proj4/Part 2/Lego/bsize8_lr0005/2000/output.mp4";

import legopsnr from "../assets/proj4/Part 2/Lego/bsize8_lr0005/psnr_curve.jpg";

import calibration1 from "../assets/proj4/Part0/calibration_photos/IMG_5573.jpg";
import calibration2 from "../assets/proj4/Part0/calibration_photos/IMG_5590.jpg";
import calibration3 from "../assets/proj4/Part0/calibration_photos/IMG_5604.jpg";

import object1 from "../assets/proj4/Part0/object_photos/IMG_5629 (2) (2) (2).jpg";
import object2 from "../assets/proj4/Part0/object_photos/IMG_5656 (2) (2) (2).jpg";
import object3 from "../assets/proj4/Part0/object_photos/IMG_5607 (2) (2) (2).jpg";

import mlpnerf from "../assets/proj4/Part 2/mlp_nerf.png";

import lego_still from "../assets/proj4/Part 2/Lego/bsize8_lr0005/output.mp4";

import rotate_output from "../assets/proj4/Part 2/Flower/rotate_output.mp4";
import hover_output from "../assets/proj4/Part 2/Flower/hover_output.mp4";
import still_output from "../assets/proj4/Part 2/Flower/still_output.mp4";
import flower_psnr_curve from "../assets/proj4/Part 2/Flower/psnr_curve.jpg";
import flower_1 from "../assets/proj4/Part 2/Flower/output_0000.jpg";
import flower_2 from "../assets/proj4/Part 2/Flower/output_0013.jpg";

import lafufu_still_output from "../assets/proj4/Part 2/Lafufu/lafufu_still_output.mp4";
import lafufu_rotate_output from "../assets/proj4/Part 2/Lafufu/lafufu_rotate_output.mp4";
import lafufu_psnr_curve from "../assets/proj4/Part 2/Lafufu/psnr_curve.jpg";

const Project4 = () => {
  return (
    <ProjectBase>
      <ProjectSection
        Title={"Project 4"}
        Description={"Neural Radiance Field!"}
      >
        <Typography gutterBottom variant="body1">
          The goal of this project is to do 3D reconstruction. Given a series of
          images, we want to be able to reconstruct the entire scene in 3D. This
          such method is called NeRFs, or Neural Radiance Fields (
          <a href="https://www.matthewtancik.com/nerf">Original Paper</a>). More
          specifically, we want to be able to render <b>novel views</b>. Given
          any arbitrary new camera position and rotation, we want to be able to
          reconstruct an image from that position.
        </Typography>
      </ProjectSection>

      <ProjectSection
        Title={"Part 0"}
        Description={"Calibrating Your Camera and Capturing a 3D Scan"}
      >
        <Typography gutterBottom variant="body">
          To calibrate a camera means to solve the following matrix{" "}
          <InlineMath math="M=\mathbf{K[R \enspace t]}" />. We know we can do
          this with known 3D points.
        </Typography>
        <BlockMath>
          {String.raw`
            \mathbf{x}=\mathbf{K[R \enspace t]X}
            `}
        </BlockMath>
        <BlockMath>
          {String.raw`
            s
            \begin{bmatrix}
            u \\
            v \\
            1
            \end{bmatrix}
            =
            \begin{bmatrix}
            \ast & \ast & \ast & \ast  \\
            \ast & \ast & \ast & \ast  \\
            \ast & \ast & \ast & \ast  \\
            \end{bmatrix}
            \begin{bmatrix}
            X \\
            Y \\
            Z \\
            1
            \end{bmatrix}
            `}
        </BlockMath>
        <Box sx={{ p: 2 }} />

        <Typography gutterBottom variant="h5">
          ArUco Tags
        </Typography>
        <Typography gutterBottom variant="body1">
          In order to get the data we need to train our NeRF, we first need to
          capture a bunch of images! Specifically, we need to capture our images
          in such a way such that we can recover our camera intrinsics (focal
          length, etc). To do this, we need some sort of reference object in the
          scene that we know the size of. Here, we will employ{" "}
          <a href="http://localhost:3000/cs180/projects/4">ArUco Tags</a>.
          Placing a sheet of paper in the scene and taking around 30-50 images
          from different angles, we can use that as our calibration data. Here,
          we know the physical size of the ArUco tags.
        </Typography>
        <ProjectImg
          sx={{ bgcolor: "white" }}
          images={[calibration1, calibration2, calibration3]}
          alt={["calibration1", "calibration2", "calibration3"]}
          maxWidth={800}
        />
        <Typography gutterBottom variant="body1">
          Here are a few of the calibration images! It's important to take
          photos from a variety of angles and distances, including above!
        </Typography>
        <Box sx={{ p: 2 }} />

        <Typography gutterBottom variant="h5">
          Capturing Instrinsics
        </Typography>
        <Typography gutterBottom variant="body1">
          For every single calibration image, we want to detect the ArUco tags
          that are in the image. Here we can employ OpenCV's ArUco detector. The
          important thing is to measure out the distances IRL between each tag
          as well as the size of each tag. We can center the world origin at the
          upper left hand corder of the 0th ID ArUco tag.
        </Typography>
        <Typography gutterBottom variant="body1">
          With the ArUco corners detected, we match it to our dictionary
          containing which ArUco tag it is as from key, as well as the world
          coordinates as its value. We then pass these poinds to{" "}
          <code>cv2.calibrateCamera()</code> and retrive the the <code>K</code>{" "}
          instrinsic matrix. Here we can also evaluate the <code>rms</code>{" "}
          value to make sure it is low eough of an error. The the above dataset,
          we achieved a <code>rms</code> value of <samp>8.76</samp>.
        </Typography>
        <Box sx={{ p: 2 }} />

        <Typography gutterBottom variant="h5">
          Capturing a 3D Scan
        </Typography>
        <Typography gutterBottom variant="body1">
          Once we have our camera calibration photos, we then need to capture
          photos of our actual object! Here, instead of printing out a whole
          array of ArUco tags, I used only 1 ArUco tag to simplify things. Once
          again, it's important to take images from a wide variety of angles,
          however we want to make sure to keep the distance relatively close and
          center. It is also important to reduce motion blur as much as
          possible. Here are a few of the photos.
        </Typography>
        <ProjectImg
          sx={{ bgcolor: "white" }}
          images={[object1, object2, object3]}
          alt={["object1", "object2", "object3"]}
          maxWidth={800}
        />
        <Typography gutterBottom variant="body1">
          I've also taken the opportunity to resize the images down to about 1k
          resolution in order to speed things up later.
        </Typography>
        <Box sx={{ p: 2 }} />

        <Typography gutterBottom variant="h5">
          Estimating Camera Pose
        </Typography>
        <Typography gutterBottom variant="body1">
          Once we have our images, we then need to recover the extrinsics (The
          rotation and translational values) of our camera in order to
          reconstruct the camera's location digitally.
        </Typography>
        <Typography gutterBottom variant="body1">
          Once we have our images, we then need to recover the extrinsics (The
          rotation and translational values) of our camera in order to
          reconstruct the camera's location digitally.
        </Typography>
        <Typography gutterBottom variant="body1">
          Specifically, we want to solve the PnP (Perspective-n-Point) problem
          by minimizing the reprojection loss with non-linear least squares
        </Typography>
        <BlockMath>
          {String.raw`
            \underset{R,T}{\min} \large{\sum}\left||x_i-K[R \enspace T]X\right||^2
          `}
        </BlockMath>
        <Typography gutterBottom variant="body1">
          We redetect the ArUco tag in our image and get the detected{" "}
          <code>imagePoints</code>. We can then input our{" "}
          <code>objectPoints</code> (ArUco world coordinates),{" "}
          <code>imagePoints</code>, <code>cameraMatrix</code> (recovered{" "}
          <InlineMath math="K" /> instrinsic matrix), as well as the{" "}
          <code>distCoeff</code> (distortion coefficients) into{" "}
          <code>cv2.solvePnP()</code>.
        </Typography>
        <Typography gutterBottom variant="body1">
          We do the above <i>for every point</i>. It's important that if either{" "}
          <code>detectArUco()</code> or <code>solvePnP()</code> fails, we need
          to skip that image rather than continue. With that, we can then
          recover our extrinsic components <InlineMath math="R" /> and{" "}
          <InlineMath math="t" />, the rotation matrix and translation vector
          respectively. We then combine these together into our <code>c2w</code>{" "}
          matrix for each image and return it. Here, the output{" "}
          <code>c2ws</code> is shape <samp>(N, 4, 4)</samp>.
        </Typography>
        <Box sx={{ p: 2 }} />

        <Typography gutterBottom variant="h5">
          Visualizing Extrinsics
        </Typography>
        <Typography gutterBottom variant="body1">
          We can visualize the instrinsics by plugging in our <code>c2ws</code>{" "}
          into viser.
        </Typography>
        <Paper sx={{ p: 1, bgcolor: "#e4e4e4ff" }}>
          <CardMedia
            component="video"
            image={calibrationvid}
            autoPlay
            muted
            preload="none"
            loop
          />
          <ProjectImg
            sx={{ bgcolor: "white" }}
            images={[calibration1img, calibration2img]}
            alt={["calibration1, calibration2"]}
            maxWidth={"100%"}
          />
        </Paper>
        <Box sx={{ p: 1 }} />
        <Typography gutterBottom variant="body1">
          here it's clear to see the angles that the images were taken from.
          Note that I intentionally didn't take any images from behind the
          object, where the ArUco tag wouldn't be visible. It's important to
          note here that the space in which the images were taken is mostly
          uniformly distributed. This allows us to camera a lot of data without
          bias.
        </Typography>
        <Box sx={{ p: 2 }} />

        <Typography gutterBottom variant="h5">
          Undistortion
        </Typography>
        <Typography gutterBottom variant="body1">
          In order to better prepare our images for NeRF since NeRF simulates a
          pinhole camera, we need to undistort the images. This is done by
          taking the straight edges of the ArUco tag, and undistorting the image
          relative to that. We then crop based on the returned ROI
        </Typography>
        <Typography gutterBottom variant="body1">
          To do this, we estimate a single optimal camera intrinsic matrix and
          ROI that is shared across all images with{" "}
          <code>cv2.getOptimalNewCameraMatrix()</code>. Since we crop the image
          based on the returned ROI, we need to shift the principle point of the
          intrinsic matrix as well!
        </Typography>
        <Typography gutterBottom variant="body1">
          Then, for each image, we undistort the image using{" "}
          <code>cv2.undistort()</code> based on the <code>distCoeff</code> from
          earlier, crop it, and return it.
        </Typography>
        <ProjectImg
          sx={{ bgcolor: "white" }}
          images={[original, undistorted_uncropped_0, undistorted_cropped_0]}
          title={["Original", "Undistorted_Uncropped", "Undistorted_Cropped"]}
          alt={["original, undistorted_uncropped", "undistorted_cropped"]}
          maxWidth={800}
        />
        <Typography gutterBottom variant="body1">
          What the undistortion does is make sure that ArUco tag itself is
          completely straight, and everything else undistorted relative to that.
        </Typography>
      </ProjectSection>

      <ProjectSection
        Title={"Part 1"}
        Description={"Fit a Neural Field to a 2D Image"}
      >
        <Typography gutterBottom variant="body1">
          To practice making neural fields, we'll practice on a 2D image first.
          Since there's no concept of radiance in 2D, we can simplify to Neural
          Field equation to just the <InlineMath math="(u,v)" /> coordinates.
          Specifically, we need to construct an MLP that converts{" "}
          <InlineMath math="\{u, v\} \rightarrow \{r, g, b\}" />.
        </Typography>
        <Typography gutterBottom variant="h5">
          Architecture
        </Typography>
        <Typography gutterBottom variant="body1">
          Here, we model the MLP based on this
        </Typography>
        <ProjectImg
          sx={{ bgcolor: "white" }}
          images={[MLP1]}
          alt={["MLP"]}
          maxWidth={800}
        />
        <Typography gutterBottom variant="body1">
          It's important here that we positionally encode (PE) the input
          coordinates. This gives us a higher dimensionality to work with in our
          input coordinates, allowing us to represent the scene with more data.
        </Typography>
        <BlockMath>
          {String.raw`
              PE(x)=(\sin(2^0\pi x),\cos(2^0\pi x),\sin(2^1\pi x),\cos(2^1\pi x), \cdots, \sin(2^{L-1}\pi x), \cos(2^{L-1}\pi x))
            `}
        </BlockMath>
        <Typography gutterBottom variant="body1">
          With an <InlineMath math="L=10" />, we map a 2 dimensional vector to a
          4 dimensional vector. To generalize this, for the 2D case, we map a 2
          dimensional vector to a <InlineMath math="2 + 4L" /> dimensional
          vector.
        </Typography>
        <Typography gutterBottom variant="body1">
          We can do this as a preprocessing step to our images and have our MLP
          take in a 42 dimensional vector as input.
        </Typography>
        <Typography gutterBottom variant="body1">
          It's also important to expose our MLP model to some hyperparameters,
          so we can generalize the model with any given input{" "}
          <InlineMath math="L" /> and <code>layerWidth</code>.
        </Typography>
        <Typography gutterBottom variant="body1">
          Here, we used a simple <code>MSELoss</code> as our loss metric with
          visualization metric being <code>PSNR</code>. The <code>Adam</code>{" "}
          optimizer model is also being used. The learning rate being used is
          0.01.
        </Typography>
        <Typography gutterBottom variant="h6">
          Dataloading
        </Typography>
        <Typography gutterBottom variant="body1">
          Since our input images can be quite big in resolution, we need to
          implement some type of dataloading to only train our network on a
          partial portion of the image per iteration. We implement a dataloader
          that samples 1 random pixel from the input image, so we can control
          how much we sample it with the dataloading <code>BATCH_SIZE</code>.
        </Typography>
        <Box sx={{ p: 2 }}></Box>

        <Typography gutterBottom variant="h5">
          Results
        </Typography>
        <Box textAlign={"center"}>
          <Typography gutterBottom variant="h6">
            <InlineMath math="L=10" /> | <code>layerWidth = 256</code>
          </Typography>
        </Box>
        <Container sx={{ justifyContent: "center", display: "flex" }}>
          <Paper sx={{ p: 1, bgcolor: "#e4e4e4ff", maxWidth: 900 }}>
            <CardMedia
              component="video"
              image={PE10_Width256output}
              autoPlay
              muted
              preload="none"
              loop
            />
            <Box display={"flex"}>
              <Box>
                <ProjectImg
                  sx={{ bgcolor: "white" }}
                  images={[PE10_Width256output_10, PE10_Width256output_50]}
                  title={["Iteration: 10", "Iteration: 50"]}
                  alt={["Iteration: 10", "Iteration: 50"]}
                  maxWidth={800}
                />
                <ProjectImg
                  sx={{ bgcolor: "white" }}
                  images={[PE10_Width256output_1000, PE10_Width256output_2000]}
                  title={["Iteration: 1000", "Iteration: 2000"]}
                  alt={["Iteration: 1000", "Iteration: 2000"]}
                  maxWidth={800}
                />
              </Box>
              <ProjectImg
                sx={{ bgcolor: "white" }}
                images={[PE10_Width256psnr_curve]}
                title={["PSNR_Curve"]}
                alt={["PSNR_Curve"]}
                maxWidth={800}
              />
            </Box>
          </Paper>
        </Container>

        <Box sx={{ p: 2 }}></Box>
        <Divider />
        <Box sx={{ p: 2 }}></Box>

        <Typography gutterBottom variant="body1">
          Here, we try the training on various other hyperparameter settings to
          see what it would look like
        </Typography>

        <Box sx={{ p: 1 }} />

        <Box display={"flex"} flexDirection={"column"} gap={5}>
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <Box display={"flex"} gap={2}>
              <ImageListItem>
                <CardMedia
                  component="video"
                  image={PE10_Width256output}
                  autoPlay
                  muted
                  preload="none"
                  loop
                />
                <ImageListItemBar title={"L=10, layerWidth=256"} />
              </ImageListItem>
              <ImageListItem>
                <CardMedia
                  component="video"
                  image={PE5_Width256output}
                  autoPlay
                  muted
                  preload="none"
                  loop
                />
                <ImageListItemBar title={"L=5, layerWidth=256"} />
              </ImageListItem>
            </Box>
            <Box display={"flex"} gap={2}>
              <ImageListItem>
                <CardMedia
                  component="video"
                  image={PE10_Width64output}
                  autoPlay
                  muted
                  preload="none"
                  loop
                />
                <ImageListItemBar title={"L=10, layerWidth=64"} />
              </ImageListItem>
              <ImageListItem>
                <CardMedia
                  component="video"
                  image={PE5_Width64output}
                  autoPlay
                  muted
                  preload="none"
                  loop
                />
                <ImageListItemBar title={"L=5, layerWidth=64"} />
              </ImageListItem>
            </Box>
          </Box>
          <Box>
            <Box display={"flex"}>
              <ProjectImg
                sx={{ bgcolor: "white" }}
                images={[PE10_Width256psnr_curve]}
                title={["L=10, layerWidth=256"]}
                alt={["PSNR_Curve"]}
              />
              <ProjectImg
                sx={{ bgcolor: "white" }}
                images={[PE5_Width256psnr_curve]}
                title={["L=5, layerWidth=256"]}
                alt={["PSNR_Curve"]}
              />
            </Box>
            <Box display={"flex"}>
              <ProjectImg
                sx={{ bgcolor: "white" }}
                images={[PE10_Width64psnr_curve]}
                title={["L=10, layerWidth=64"]}
                alt={["PSNR_Curve"]}
              />
              <ProjectImg
                sx={{ bgcolor: "white" }}
                images={[PE5_Width64psnr_curve]}
                title={["L=5, layerWidth=64"]}
                alt={["PSNR_Curve"]}
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ p: 1 }} />

        <Divider />

        <Box sx={{ p: 1 }} />

        <Typography gutterBottom variant="h6">
          Custom Images
        </Typography>

        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <Box display={"flex"} gap={2}>
            <ImageListItem>
              <CardMedia
                component="video"
                image={crepe_PE10_Width256output}
                autoPlay
                muted
                preload="none"
                loop
              />
              <ImageListItemBar title={"L=10, layerWidth=256"} />
            </ImageListItem>
            <ImageListItem>
              <CardMedia
                component="video"
                image={crepe_PE5_Width256output}
                autoPlay
                muted
                preload="none"
                loop
              />
              <ImageListItemBar title={"L=5, layerWidth=256"} />
            </ImageListItem>
          </Box>
          <Box display={"flex"} gap={2}>
            <ImageListItem>
              <CardMedia
                component="video"
                image={crepe_PE10_Width64output}
                autoPlay
                muted
                preload="none"
                loop
              />
              <ImageListItemBar title={"L=10, layerWidth=64"} />
            </ImageListItem>
            <ImageListItem>
              <CardMedia
                component="video"
                image={crepe_PE5_Width64output}
                autoPlay
                muted
                preload="none"
                loop
              />
              <ImageListItemBar title={"L=5, layerWidth=64"} />
            </ImageListItem>
          </Box>
        </Box>

        <Box sx={{ p: 2 }}></Box>
      </ProjectSection>
      <ProjectSection
        Title={"Part 2"}
        Description={"Fit a Neural Radiance Field from Multi-view Images"}
      >
        <Typography gutterBottom variant="h5">
          Sampling
        </Typography>
        <Typography gutterBottom variant="body1">
          First, we need to be able to sample rays from our cameras. To do this,
          we can create some helper functions to convert pixel coordinates to
          camera coordinates, and then pixel coordinates to camera rays.
        </Typography>
        <Typography gutterBottom variant="h6">
          Camera to World Coordinates
        </Typography>
        <Typography gutterBottom variant="body1">
          Since we already have the c2w matrix, we just need to multiply that
          with our input coordinates. Here it's important to keep into account
          the shape of our matrices. <code>c2ws</code> is shape{" "}
          <samp>(N, 4, 4)</samp> and <code>coords</code> is shape{" "}
          <samp>(N, 3)</samp>. This allows us to batch multiply all coordinates
          across all images.
        </Typography>
        <Typography gutterBottom variant="h6">
          Pixel to Camera Coordinates
        </Typography>
        <Typography gutterBottom variant="body1">
          Pixel to Camera coordinates is just as simple. Since we already have
          our <InlineMath math="K" /> matrix, we can just multiply the uv
          coordinates with the inverse of the <InlineMath math="K" /> matrix.
        </Typography>
        <BlockMath>
          {String.raw`
            \begin{bmatrix}
              x_c \\
              y_c \\
              z_c 
            \end{bmatrix}
            =
            \mathbf{K}^{-1} s
            \begin{bmatrix}
              u \\
              v \\
              1
            \end{bmatrix}
          `}
        </BlockMath>
        <Typography gutterBottom variant="h6">
          Pixel to Ray
        </Typography>
        <Typography gutterBottom variant="body1">
          For pixel to ray coordinates, we transform our uv coordinates to world
          coordinates and then subtract that from our camera origin. Here, the
          camera origin is simply the translational vector from our extrinsics.
        </Typography>
        <BlockMath>
          {String.raw`
          \text{c2w}=
            \begin{bmatrix}
              \mathbf{R}_{3 \times 3} & \mathbf{t} \\
              \mathbf{0_{1 \times 3}} & 1
            \end{bmatrix}
          `}
        </BlockMath>
        <Typography gutterBottom variant="body1">
          This means we can just extract the <InlineMath math="t" /> vector!{" "}
          <code>t = c2w[:3, 3]</code>.
        </Typography>

        <Typography gutterBottom variant="h6">
          Sampling
        </Typography>
        <Typography gutterBottom variant="body1">
          To sample, we need to shoot rays from our images into the world. Since
          we can convert pixel coordinates to ray directions, we simply batch
          sample <InlineMath math="N" /> rays from <InlineMath math="M" />{" "}
          images. To do this, we keep our batch in our dataloader choosing{" "}
          <InlineMath math="M" /> rays and in our <code>__getItem__</code>, we
          sample <InlineMath math="N" /> rays from a singular image. This allows
          us to use our <code>BATCH_SIZE</code> to determine how many images we
          want to sample at once.
        </Typography>

        <Typography gutterBottom variant="body1">
          With our rays out in the world, we can then sample{" "}
          <code>n_samples</code> points from each ray at given <code>t</code>{" "}
          values defined by our near and far clipping planes. It's important to
          introduce some sort of perturbation to our rays so that during
          training, we avoid overfitting. Thus, we can alter the <code>t</code>{" "}
          value by <code>t = t + (np.random.rand(t.shape) * t_width)</code>
        </Typography>

        <Paper elevation={2} sx={{ p: 2 }}>
          <Box display={"flex"}>
            <CardMedia
              component="video"
              image={nerfsampling}
              autoPlay
              muted
              preload="none"
              loop
            />
            <CardMedia
              component="video"
              image={nerfsinglecamerasampling}
              autoPlay
              muted
              preload="none"
              loop
            />
          </Box>
          <Box sx={{ p: 1 }} />
          <Divider />
          <Box sx={{ p: 1 }} />
          <ProjectImg
            sx={{ bgcolor: "white" }}
            images={[sampling1, sampling2, sampling3]}
            maxWidth={"100%"}
          />
        </Paper>
        <Box sx={{ p: 2 }} />

        <Typography gutterBottom variant="h5">
          Neural Radiance Field
        </Typography>

        <Typography gutterBottom variant="body1">
          I implemented an MLP based on this following diagram with the
          dataloader mentioned previously. Instead of positional encoding as a
          preprocessor step, I added it in as a <code>nn.module</code> for more
          robustness. Here, the output dimension of the positional encoding is{" "}
          <InlineMath math="3(2L+1)" />.
        </Typography>

        <ProjectImg
          sx={{ bgcolor: "white" }}
          images={[mlpnerf]}
          alt={["MLP NeRF"]}
          maxWidth={800}
        />

        <Box sx={{ p: 1 }} />

        <Typography gutterBottom variant="h5">
          Volume Rendering
        </Typography>

        <Typography gutterBottom variant="body1">
          To actually reconstruct the image, we need to render the scene
          volumetrically since NeRF outputs a volumetric scene representation.
          The core volumetric rendering equation is as follows
        </Typography>
        <BlockMath>
          {String.raw`
            C(r)=\int_{t_n}^{t_f}T(t)\sigma(\mathbf{r}(t))\mathbf{c}(\mathbf{r}(t),\mathbf{d}) dt, \space \text{where} \space T(t)=\text{exp}\left(-\int_{t_n}^{t}\sigma(\mathbf{r}(s))ds\right)
          `}
        </BlockMath>
        <Typography gutterBottom variant="body1">
          This means that for every <InlineMath math="dt" /> along the ray, we
          add the contribution of that interval to the final ray color. In order
          to discretize this equation, we use the following
        </Typography>
        <BlockMath>
          {String.raw`
            \hat{C}(\mathbf{r})=\large{\sum_{i=1}^{N}}T_i(1-\text{exp}(-\sigma_i \delta_i))\mathbf{c}_i, \space \text{where} \space T_i=\text{exp}\left(-\large{\sum_{j=1}^{i-1}\sigma_j \delta_j}\right)
          `}
        </BlockMath>
        <Typography gutterBottom variant="body1">
          Here <InlineMath math="\mathbf{c}_i" /> is the color retrieved from
          our network, <InlineMath math="T_i" /> is the probability of a ray{" "}
          <i>not</i> terminating before sample location <InlineMath math="i" />,
          and <InlineMath math="1-e^{-\sigma_i \delta_i}" /> is the probability
          of a ray terminating at sample location <InlineMath math="i" />.
        </Typography>

        <Box sx={{ p: 1 }} />

        <Typography gutterBottom variant="h5">
          Results!
        </Typography>
        <Typography gutterBottom variant="body1">
          Here, we trained using 1024 samples per image with a batch size of 8,
          and a learning rate of 5e-4.
        </Typography>

        <Box sx={{ p: 1 }} />

        <Box display={"flex"} justifyContent={"center"}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            gap={2}
            maxWidth={700}
          >
            <Box
              display={"flex"}
              gap={2}
              flexDirection={"column"}
              width={"50%"}
            >
              <Box display={"flex"} gap={2} width={"100%"}>
                <ImageListItem>
                  <CardMedia
                    component="video"
                    image={lego500}
                    autoPlay
                    muted
                    preload="none"
                    loop
                  />
                  <ImageListItemBar title={"Iteration: 500"} />
                </ImageListItem>
                <ImageListItem>
                  <CardMedia
                    component="video"
                    image={lego1000}
                    autoPlay
                    muted
                    preload="none"
                    loop
                  />
                  <ImageListItemBar title={"Iteration: 1000"} />
                </ImageListItem>
              </Box>
              <Box display={"flex"} gap={2} width={"100%"}>
                <ImageListItem>
                  <CardMedia
                    component="video"
                    image={lego1500}
                    autoPlay
                    muted
                    preload="none"
                    loop
                  />
                  <ImageListItemBar title={"Iteration: 1500"} />
                </ImageListItem>
                <ImageListItem>
                  <CardMedia
                    component="video"
                    image={lego2000}
                    autoPlay
                    muted
                    preload="none"
                    loop
                  />
                  <ImageListItemBar title={"Iteration: 2000"} />
                </ImageListItem>
              </Box>
            </Box>
            <CardMedia
              component="video"
              image={lego_still}
              autoPlay
              muted
              preload="none"
              loop
              style={{ width: "50%" }}
            />
          </Box>
        </Box>
        <ProjectImg
          sx={{ bgcolor: "white" }}
          images={[legopsnr]}
          alt={["Lego_PSNR_Curve"]}
          maxWidth={800}
        />
      </ProjectSection>

      <ProjectSection Title={"Custom Results!"} Spacing={false}>
        <Typography gutterBottom variant="h5">
          My Own Data
        </Typography>
        <Typography gutterBottom variant="body1">
          Unfortunately, I was unable to get it working with my own custom
          dataset. I suspect that I did not have enough training data, or that
          my training data itself wasn't sufficient in the way it was taken.
          After testing multiple hyperparameters, this was the best I could get.
          This is with 8000 iterations, a batch size of 4, a learning rate of
          0.001, and 128 volume samples.
        </Typography>
        <Box display={"flex"} gap={2}>
          <CardMedia
            component="video"
            image={rotate_output}
            autoPlay
            muted
            preload="none"
            loop
          />
          <CardMedia
            component="video"
            image={hover_output}
            autoPlay
            muted
            preload="none"
            loop
          />
          <CardMedia
            component="video"
            image={still_output}
            autoPlay
            muted
            preload="none"
            loop
          />
        </Box>
        <Box p={1} />
        <Typography gutterBottom variant="body1">
          It's noticeable here that the result looks pretty good from the
          training data angle (rightmost figure). However, even small deviations
          as denoted by the hover image significantly destroy the structure.
        </Typography>
        <ProjectImg
          sx={{ bgcolor: "white" }}
          images={[flower_psnr_curve]}
          alt={["Flower_PSNR_Curve"]}
          maxWidth={700}
        />
        <ProjectImg
          sx={{ bgcolor: "white", width: "600px" }}
          images={[flower_1, flower_2]}
          alt={["Flower_frame_0000", "Flower_frame_0013"]}
          maxWidth={600}
        />
        <Typography gutterBottom variant="body1">
          An interesting thing to note here is actually that the structure seems
          incredibly periodic. Specifically, there are multiple frames during
          the turntable rotation where things happen to line up and the flower
          vase is able to be seen. On the picture on the right, you can notice
          how the flower bases seem to be repeating ad infinitum while
          maintaining a bit of structure.
        </Typography>
        <Box p={1} />
        <Typography gutterBottom variant="h5">
          Lafufu Dataset
        </Typography>
        <Typography gutterBottom variant="body1">
          This is the staff provided lafufu dataset trained on 8000 iterations,
          a batch size of 8, a learning rate of 0.0005, and a volume sampling
          rate of 128.
        </Typography>
        <Box display="flex" justifyContent={"center"} gap={2}>
          <CardMedia
            component="video"
            image={lafufu_rotate_output}
            autoPlay
            muted
            preload="none"
            loop
          />
          <CardMedia
            component="video"
            image={lafufu_still_output}
            autoPlay
            muted
            preload="none"
            loop
          />
        </Box>
        <Box p={1} />
        <ProjectImg
          sx={{ bgcolor: "white" }}
          images={[lafufu_psnr_curve]}
          alt={["Lafufu_PSNR_Curve"]}
          maxWidth={700}
        />
      </ProjectSection>
    </ProjectBase>
  );
};

export default Project4;
