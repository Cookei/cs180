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
} from "@mui/material";
import ProjectImg from "../components/ProjectImg";

import PencilOfRays from "../assets/proj3/PartA/PencilOfRays.png";
import img1A from "../assets/proj3/PartA/img1A.jpg";
import img1B from "../assets/proj3/PartA/img1B.jpg";
import img2A from "../assets/proj3/PartA/img2A.jpg";
import img2B from "../assets/proj3/PartA/img2B.jpg";
import { BlockMath, InlineMath } from "react-katex";

import img1Correspondences from "../assets/proj3/PartA/img1Correspondences.png";
import bilinear from "../assets/proj3/PartA/bilinear.png";

import coffee from "../assets/proj3/PartA/coffee.jpg";
import coffee_bilinear from "../assets/proj3/PartA/coffee_bilinear.jpg";
import coffee_nearest from "../assets/proj3/PartA/coffee_nearest.jpg";
import mathp from "../assets/proj3/PartA/math.jpg";
import math_bilinear from "../assets/proj3/PartA/math_bilinear.jpg";
import math_nearest from "../assets/proj3/PartA/math_nearest.jpg";
import minecraft from "../assets/proj3/PartA/minecraft.jpg";
import minecraft_bilinear from "../assets/proj3/PartA/minecraft_bilinear.jpg";
import minecraft_nearest from "../assets/proj3/PartA/minecraft_nearest.jpg";
import { ReactCompareSlider } from "react-compare-slider";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import img1Mosaic from "../assets/proj3/PartA/img1Mosaic.png";
import peakCorrespondences from "../assets/proj3/PartA/peakCorrespondences.png";
import peakMosaic from "../assets/proj3/PartA/peakMosaic.png";
import portalCorrespondences from "../assets/proj3/PartA/portalCorrespondences.png";
import portalMosaic from "../assets/proj3/PartA/portalMosaic.png";

import harris from "../assets/proj3/PartB/harris.png";
import harrisStrength from "../assets/proj3/PartB/harrisStrength.png";
import anms from "../assets/proj3/PartB/anms.png";

import descriptorNormalized from "../assets/proj3/PartB/descriptorNormalized.png";
import descriptorUnnormalized from "../assets/proj3/PartB/descriptorUnnormalized.png";
import error from "../assets/proj3/PartB/error.png";
import betterError from "../assets/proj3/PartB/betterError.png";

import feature_matches from "../assets/proj3/PartB/feature_matches.png";
import feature_matches_15 from "../assets/proj3/PartB/feature_matches_15.png";

import anms_coords from "../assets/proj3/PartB/anms_coords.png";
import feature_match_coords from "../assets/proj3/PartB/feature_match_coords.png";

import ransac_loop from "../assets/proj3/PartB/ransac_loop.png";
import ransac_points from "../assets/proj3/PartB/ransac_points.png";

import ransac_feature_matches from "../assets/proj3/PartB/ransac_feature_matches.png";

import warframe_original from "../assets/proj3/PartB/warframe_original.png";
import pixar_original from "../assets/proj3/PartB/pixar_original.png";
import class180_original from "../assets/proj3/PartB/class180_original.png";

import warframe from "../assets/proj3/PartB/warframe.png";
import pixar from "../assets/proj3/PartB/pixar.png";
import warframe_manual from "../assets/proj3/PartB/warframe_manual.png";
import pixar_manual from "../assets/proj3/PartB/pixar_manual.png";
import class180 from "../assets/proj3/PartB/class180.png";

const Project3 = () => {
  return (
    <ProjectBase>
      <ProjectSection
        Title={"Project 3"}
        Description={"[Auto]Stitching Photo Mosaics"}
      >
        <Typography gutterBottom variant="body1">
          This goal of this project is to stitch together many photographs to
          create larger composite images. We will explore homographies and
          feature matching.
        </Typography>
      </ProjectSection>
      <ProjectSection
        Title={"Part A"}
        Description={"Image Warping and Mosaicing"}
      >
        <Typography gutterBottom variant="h5">
          Part A.1: Shoot the Pictures
        </Typography>
        <Typography gutterBottom variant="body1">
          Here we shoot some of the images that are going to used later. The
          important thing to note here is that we fix the center of projection.
          The intuition here is that the same center of projection allows us to
          relate the pencil of rays through that point, even though the images
          themselves are different through a homography.
        </Typography>
        <ProjectImg images={[PencilOfRays]} alt={["Pencil of Rays"]} />
        <Typography gutterBottom variant="body1">
          In practice, this means when taking a picture on an iPhone, to not
          rotate around your body, but by pivoting around the camera itself.
        </Typography>
        <ProjectImg
          images={[img1A, img1B]}
          alt={["img1A, img1B"]}
          maxWidth={800}
        />
        <ProjectImg
          images={[img2A, img2B]}
          alt={["img2A, img2B"]}
          maxWidth={800}
        />
        <Typography gutterBottom variant="body1">
          Here are some of the images I took by fixing the center of project
          about the camera
        </Typography>

        <Box sx={{ p: 2 }} />

        <Typography gutterBottom variant="h5">
          Part A.2: Recover Homographies
        </Typography>
        <Typography gutterBottom variant="body1">
          We note that we can relate the two images together through a
          homography. Since they span the same pencil of rays, we can project
          them onto a synthetic camera plane. In other words, since we know that
          both images can lie on the same synthetic camera plane, we can relate
          the source image to the destination image by a perspective transform.
        </Typography>
        <Typography gutterBottom variant="body1">
          The homography matrix <InlineMath math="H" /> is thus defined as the
          matrix <InlineMath math="H" /> that satisfied{" "}
          <InlineMath math="q=Hp" /> where <InlineMath math="q" /> is the
          destination image and <InlineMath math="p" /> is the source points.
        </Typography>
        <Typography gutterBottom variant="body1">
          For any given point <InlineMath math="p=[x, y, 1]^T" />, the
          homography matrix <InlineMath math="H" /> satisfies
        </Typography>
        <BlockMath>{String.raw`
        \begin{bmatrix}
          wq_x \\
          wq_y \\
          w
          \end{bmatrix} = 

          \begin{bmatrix}
              a & b & c \\
              d & e & f \\
              g & h & 1
          \end{bmatrix} = 
          \begin{bmatrix}
          p_x \\
          p_y \\
          1
          \end{bmatrix}
          `}</BlockMath>
        <Typography gutterBottom variant="body1">
          We can set the scaling factor <InlineMath math="H_{3,3}" /> to 1
        </Typography>
        <BlockMath>
          {String.raw`
          \begin{equation*}
            \begin{split}
              w &= gp_x+hp_y+1 \\
              q_x & = \frac{ap_x+bp_y+c}{gp_x+hp_y+1} \\
              q_x(gp_x+hp_y+1) &= ap_x+bp_y+c \\
              q_xgp_x+q_xhp_y+q_x &= ap_x+bp_y+c \\
              q_x &= ap_x+bp_y+c-q_xgp_x-q_xhp_y
            \end{split}
          \end{equation*}
          `}
        </BlockMath>
        <Typography gutterBottom variant="body1">
          We can do the same for <InlineMath math="q_y" /> as well to construct
          the following relationship
        </Typography>
        <BlockMath>
          {String.raw`
          \begin{bmatrix}
              p_{1x} & p_{1y} & 1 & 0 & 0 & 0 & -q_{1x}p_{1x} & -q_{1x}p_{1y} \\
              0 & 0 & 0 & p_{1x} & p_{1y} & 1 & -q_{1y}p_{1x} & -q_{1y}p_{1y} \\
              \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots \\
              p_{nx} & p_{ny} & 1 & 0 & 0 & 0 & -q_{nx}p_{nx} & -q_{nx}p_{ny} \\
              0 & 0 & 0 & p_{nx} & p_{ny} & 1 & -q_{ny}p_{nx} & -q_{ny}p_{ny} \\
          \end{bmatrix}
          \begin{bmatrix}
          a \\
          b \\
          c \\
          d \\
          e \\
          f \\
          g \\
          h \\
          \end{bmatrix} = 
          \begin{bmatrix}
          q_{1x} \\
          q_{1y} \\
          \vdots \\
          q_{nx} \\
          q_{ny} \\
          \end{bmatrix}
          `}
        </BlockMath>
        <Typography gutterBottom variant="body1">
          We then perform least squares on this to solve for the homography
          value vector <InlineMath math="h" />. The minimum number of points is
          4 for a homography, so we need at least 4 points. However, it is best
          to have more to solve for an overdetermined system.
        </Typography>
        <ProjectImg
          images={[img1Correspondences]}
          alt={["Img1Correspondences"]}
          maxWidth={800}
        />
        <Typography gutterBottom variant="body1">
          Running <code>computeH(img1, img1Points)</code> on this, we get the
          following values for <code>H</code>
        </Typography>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Typography gutterBottom variant="body1">
            <SyntaxHighlighter language="python" style={docco}>
              {`[
  [3.55223447e+00 1.56040408e-01 -2.21145165e+03]
  [8.88448996e-01 3.03100486e+00 -1.03080651e+03]
  [1.76297809e-03 4.41558667e-04 1.00000000e+00]
]`}
            </SyntaxHighlighter>
            <code></code>
          </Typography>
        </Container>

        <Box sx={{ p: 2 }} />

        <Typography gutterBottom variant="h5">
          Part A.3 Warp the Images
        </Typography>
        <Typography gutterBottom variant="body1">
          With the homography matrix found, we can now proceed to warping the
          images! By applying the matrix to every single point in the original
          source image, we can warp the source image such that it lies on the
          same synthetic projective plane as the destination image. In other
          words, we perspective transform the entirety of the source image to
          the perspective of the destination image.
        </Typography>
        <Box sx={{ p: 1 }} />
        <Typography gutterBottom variant="body1">
          Unfortunately, it is not good to simply transform every point in the
          source image to its destination. The warped image does not share the
          same size or pixel density of the source image. Instead of doing
          forward rendering, it is better to do inverse rendering where for
          every pixel in the destination space, we inverse transform to the
          original space to sample from there. This is incredibly similar to how
          texture mapping works in rendering.
        </Typography>
        <Typography gutterBottom variant="h6">
          Interpolation Schemes
        </Typography>
        <Typography gutterBottom variant="body1">
          There's two ways to do this, first is the simple way which is nearest
          neighbor sampling. We apply the inverse transform to the destination
          space and we sample from the closest pixel that the resultant
          coordinate lands on.
        </Typography>
        <Typography gutterBottom variant="body1">
          The second way to do this is through bilinear interpolation. We
          interpolate the value of the pixel by sampling both an interpolation
          in the x axis and in the y axis on neighboring pixels.
        </Typography>
        <BlockMath>
          {String.raw`
          \begin{align*}
              \text{lerp}(x,v_0,v_1) &= v_0+x(v_1-v_0) \\
              u_0 &= \text{lerp}(s,u_{00},u_{10}) \\
              u_1 &= \text{lerp}(s,u_{01},u_{11}) \\
              f(x,y) &= \text{lerp}(t,u_{0},u_{1}) 
          \end{align*}
          `}
        </BlockMath>
        <ProjectImg
          images={[bilinear]}
          alt={["bilinear interpolation"]}
          title={["CS 184 Slides"]}
        />
        <Box sx={{ p: 2 }} />
        <Typography gutterBottom variant="h6">
          Coordinate Space Matching
        </Typography>
        <Typography gutterBottom variant="body1">
          In order to determine the size of the resultant image to do inverse
          sampling, we need to compute its bounding box. This can be done by
          applying the homography matrix to the 4 corners of the source image
          and seeing where it lands up in mosaic space.
        </Typography>
        <Typography gutterBottom variant="body1">
          Since the warping shifts the image, we also need to store the
          translational <code>offset</code> of the resultant space. The offset
          determines the translational offset produced by the warping. If
          warping the image causes the warped image to land in some negative
          space, we need to shift everything back into positive space.
        </Typography>
        <Typography gutterBottom variant="body1">
          We can compute the offset by taking the <code>min()</code> of the all
          the warped points. We can also determine the new width and height that
          the warped image spans this way as well. When sampling from the
          original image, we have to reverse the offset in our mosaic space in
          order to sample properly from our source space.
        </Typography>
        <BlockMath>{String.raw`
          T = \begin{bmatrix}
          1 & 0 & T_x\\
          0 & 1 & T_y\\
          0 & 0 & 1\\
          \end{bmatrix}
        `}</BlockMath>
        <Typography gutterBottom variant="body1">
          Before computing the inverse of <InlineMath math="H" />, we first
          apply the translational offset.{" "}
          <InlineMath math="H'^{-1}=(T\cdot H)^{-1}" />. Now, the important
          thing to note is that not every point in the mosaic image canvas will
          correspond to a pixel within the source image. Since we're doing
          inverse sampling, we need a way to filter those pixels out to avoid
          sampling from them. We can convert every pixel in the mosaic canvas to
          its coordinates, inverse warp those coordinates, and then mask them
          out depending on if they are within the bounding box of the source
          image before sampling.
        </Typography>
        <Typography gutterBottom variant="body1">
          <SyntaxHighlighter language="python" style={docco}>
            {"validMask = (sx >= 0) & (sx < w_src) & (sy >= 0) & (sy < h_src)"}
          </SyntaxHighlighter>
        </Typography>
        <Typography gutterBottom variant="h6">
          Rectification
        </Typography>
        <Typography gutterBottom variant="body1">
          We can do something fun here called rectification. Given an object
          that we know to be rectangular, we can warp the image based on those
          coordinates such that that section of the image now becomes a perfect
          square! We set out destination coordinates to some hard coded square{" "}
          <code>[[0, 0], [1, 0], [0, 1], [1, 1]]</code> scaled by some arbitrary{" "}
          <code>width</code>. In order to retain relative sizing for the region
          selected, we can define the <code>width</code> as the maximum side
          lengths of the region selected.
        </Typography>
        <Paper elevation={2} sx={{ p: 1, bgcolor: "#f5f1f8ff" }}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <ProjectImg images={[coffee]} alt={["coffee"]} maxWidth={300} />
            <Box sx={{ maxWidth: 700, width: "100%" }}>
              <ReactCompareSlider
                style={{ width: "100%" }}
                itemOne={
                  <ProjectImg
                    images={[coffee_nearest]}
                    alt={["Coffee Nearest"]}
                    title={["Nearest Neighbor"]}
                    maxWidth={700}
                  />
                }
                itemTwo={
                  <ProjectImg
                    images={[coffee_bilinear]}
                    alt={["Coffee Bilinear"]}
                    title={["Bilinear"]}
                    maxWidth={700}
                    titleRight={true}
                  />
                }
              />
            </Box>
          </Box>
        </Paper>
        <Box sx={{ p: 1 }} />
        <Typography gutterBottom variant="body1">
          The above image is rectified on the front of the coffee machine.
        </Typography>
        <Box sx={{ p: 2 }} />
        <Paper elevation={2} sx={{ p: 1, bgcolor: "#f5f1f8ff" }}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <ProjectImg
              images={[minecraft]}
              alt={["minecraft"]}
              maxWidth={300}
            />
            <Box sx={{ maxWidth: 400, width: "100%" }}>
              <ReactCompareSlider
                style={{ width: "100%" }}
                itemOne={
                  <ProjectImg
                    images={[minecraft_nearest]}
                    alt={["minecraft Nearest"]}
                    title={["Nearest Neighbor"]}
                    maxWidth={400}
                  />
                }
                itemTwo={
                  <ProjectImg
                    images={[minecraft_bilinear]}
                    alt={["minecraft Bilinear"]}
                    title={["Bilinear"]}
                    maxWidth={400}
                    titleRight={true}
                  />
                }
              />
            </Box>
          </Box>
        </Paper>
        <Box sx={{ p: 1 }} />
        <Typography gutterBottom variant="body1">
          The above image is rectified on the front minecraft sheep box.
        </Typography>
        <Box sx={{ p: 2 }} />
        <Paper elevation={2} sx={{ p: 1, bgcolor: "#f5f1f8ff" }}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <ProjectImg images={[mathp]} alt={["math"]} maxWidth={300} />
            <Box sx={{ maxWidth: 400, width: "100%" }}>
              <ReactCompareSlider
                style={{ width: "100%" }}
                itemOne={
                  <ProjectImg
                    images={[math_nearest]}
                    alt={["math Nearest"]}
                    title={["Nearest Neighbor"]}
                    maxWidth={400}
                  />
                }
                itemTwo={
                  <ProjectImg
                    images={[math_bilinear]}
                    alt={["math Bilinear"]}
                    title={["Bilinear"]}
                    maxWidth={400}
                    titleRight={true}
                  />
                }
              />
            </Box>
          </Box>
        </Paper>
        <Box sx={{ p: 1 }} />
        <Typography gutterBottom variant="body1">
          The above image is rectified based on the blackboard.
        </Typography>

        <Box sx={{ p: 2 }} />

        <Typography gutterBottom variant="h5">
          Part A.4 Blend the Images into a Mosaic
        </Typography>
        <Typography gutterBottom variant="body1">
          Now that we have the warping and sampling done, making a combined
          mosaic isn't too difficult! All we need to do is define the bounding
          box of the resultant two images as the shared mosaic canvas, warp the
          source image to the destination image, and paste them onto the shared
          canvas!
        </Typography>
        <Typography gutterBottom variant="body1">
          Computing the bounding box of the two images together is quite simple.
          Similar to how we compute the bounding box of a single image, we first
          warp the image based on the given homography. The width and height of
          the mosaic is the difference between the max coordinate and the
          minimum coordinate. We compute the offset values by taking{" "}
          <code>min(0, warpedImg.min())</code>. If the warped image warps to the
          right, then there is no offset for the mosaic (we simply paste the
          warped image as is). However, if the warped image is to the left, we
          need to move everything back to positive space. The offset is thus the
          smallest value of the warped image.
        </Typography>
        <Typography gutterBottom variant="h6">
          Image Blending
        </Typography>
        <Typography gutterBottom variant="body1">
          Unforunately, if we simply past the two images onto the mosaic canvas
          while accounting for the offsets, we won't get a particularly good
          image. This is because there will be a really harsh seam between the
          edges of the two images.
        </Typography>
        <Typography gutterBottom variant="body1">
          To blend them, we employ a simple alpha masking algorithm. We create
          binary masks from the original images and warp those as well to the
          mosaic canvas. Here, we make sure to use nearest neighbor sampling in
          order to ensure our binary masks stay binary. After that, we can use{" "}
          <code>cv2.distanceTransform()</code> to create a smooth blend from the
          mask, making sure to normalize it across both the images together
          afterwards to compute the weights.
        </Typography>
        <Typography gutterBottom variant="body1">
          With weights for both the source image and the destination image, our
          final blended image is thus
        </Typography>
        <Typography gutterBottom variant="body1">
          <SyntaxHighlighter language="python" style={docco}>
            {"blended = (wDest * canvasDest + wSrc * canvasSrc)"}
          </SyntaxHighlighter>
        </Typography>
        <Typography gutterBottom variant="h6">
          Results
        </Typography>
        <Paper elevation={2} sx={{ p: 1, bgcolor: "#f5f1f8ff" }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ProjectImg
              images={[img1Correspondences]}
              alt={["im1Correspondences"]}
              maxWidth={800}
            />
            <ProjectImg
              images={[img1Mosaic]}
              alt={["img1Mosaic"]}
              maxWidth={800}
            />
          </Box>
        </Paper>
        <Box sx={{ p: 2 }} />
        <Paper elevation={2} sx={{ p: 1, bgcolor: "#f5f1f8ff" }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ProjectImg
              images={[peakCorrespondences]}
              alt={["peakCorrespondences"]}
              maxWidth={800}
            />
            <ProjectImg
              images={[peakMosaic]}
              alt={["peakMosaic"]}
              maxWidth={800}
            />
          </Box>
        </Paper>
        <Box sx={{ p: 2 }} />
        <Paper elevation={2} sx={{ p: 1, bgcolor: "#f5f1f8ff" }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ProjectImg
              images={[portalCorrespondences]}
              alt={["portalCorrespondences"]}
              maxWidth={800}
            />
            <ProjectImg
              images={[portalMosaic]}
              alt={["portalMosaic"]}
              maxWidth={800}
            />
          </Box>
        </Paper>
        <Box sx={{ p: 2 }} />
        <Typography gutterBottom variant="body1">
          The images here were sourced from a coffee shop, the video game Peak,
          and the video game Portal 2 respectively.
        </Typography>
      </ProjectSection>
      <ProjectSection
        Title={"Part B"}
        Description={"Feature Matching for Autostitching"}
      >
        <Typography gutterBottom variant="body1">
          Currently, we've been manually defining correspondences for image
          warping. However, this is incredibly tedious. In order to
          automatically stitch images together, we need to be able to
          automatically identify correspondences.
        </Typography>
        <Typography gutterBottom variant="h5">
          Part B.1: Harris Corner Detection
        </Typography>
        <Typography gutterBottom variant="body1">
          To start off with, we first need to be able to identify features of an
          image. For this, we will employ the Harris Corner Detector to detect
          "corners" of an image. We will not be implementing this.
        </Typography>
        <ProjectImg
          images={[harris]}
          alt={["Harris Corner Detection"]}
          maxWidth={800}
        />
        <Typography gutterBottom variant="body1">
          Here we apply the Harris Corner Detector on this screenshot from the
          game Warframe. Each red dot represents a corner. Unfortunately, there
          are a LOT of dots, and even more so unfortunately, many of these dots
          aren't strong corners. Note that we preprocessed the Harris Corners by
          specifying a minimum distance of 5 here.
        </Typography>
        <ProjectImg
          images={[harrisStrength]}
          alt={["Harris Corner Detection Strength"]}
          maxWidth={800}
        />
        <Typography gutterBottom variant="body1">
          Here we notice that a majority of the corners are incredibly weak, and
          there's a few spikes of really strong corners. We want a way to be
          able evenly distribute these corners across the entire image and avoid
          clustering. In other words, we want evenly distributed corners across
          the image, such that they represent only the strongest corners in a
          local radius around them.
        </Typography>
        <Typography gutterBottom variant="h6">
          ANMS (Adaptive Non-Maximal Suppression)
        </Typography>
        <Typography gutterBottom variant="body1">
          In order to do this, we will employ the ANMS algorithm. Formally, we
          want to be able to select the <InlineMath math="n=500" /> interest
          points with the largest value of <InlineMath math="r_i" /> where{" "}
          <InlineMath math="r_i" /> is the distance to the next significantly
          stronger corner. The minimum suppression radius is thus
        </Typography>
        <BlockMath>
          {String.raw`
            r_i=\text{min}_j|x_i-x_j| \ni f(x_i) \lt c_{\text{robust}} \cdot f(x_j)
          `}
        </BlockMath>
        <Typography gutterBottom variant="body1">
          where <InlineMath math="x_j" /> is every point stronger than{" "}
          <InlineMath math="x_i" />. We define a point that is "significantly"
          stronger than <InlineMath math="x_i" /> if it satisfies{" "}
          <InlineMath math="c_{\text{robust}} \cdot f(x_j)" />. Picking a value
          for <InlineMath math="c_{\text{robust}}" /> is experimental, but it's
          found that <code>0.9</code> works best.
        </Typography>
        <Typography gutterBottom variant="body1">
          It is possible to vectorize this across all points by doing some smart
          sorting. Sorting by the strengths of each point ensures that all
          points preceding it are stronger. We can then apply the difference
          calculation on a given point <InlineMath math="x_i" /> to every other
          point, while storing a vector containing the best radii of all points.
        </Typography>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box sx={{ maxWidth: 800, width: "100%" }}>
            <ReactCompareSlider
              style={{ width: "100%" }}
              itemOne={
                <ProjectImg
                  images={[harris]}
                  alt={["Harris Points"]}
                  title={["Harris Points"]}
                  maxWidth={800}
                />
              }
              itemTwo={
                <ProjectImg
                  images={[anms]}
                  alt={["ANMS Points"]}
                  title={["ANMS Points"]}
                  maxWidth={800}
                  titleRight={true}
                />
              }
            />
          </Box>
        </Box>
        <Box sx={{ p: 2 }} />
        <Typography gutterBottom variant="h5">
          Part B.2: Feature Description Extraction
        </Typography>
        <Typography gutterBottom variant="body1">
          Right now, we only have features on an image. In order to get any
          meaningful data out of them, we need to extract the descriptors around
          each feature. A descriptor here is defined as a vector describing the
          region around each feature. If we have pairs of descriptors across
          multiple images, we can match them together to see if they are
          correspondences.
        </Typography>
        <Typography gutterBottom variant="body1">
          We want our descriptor to be a 8x8 axis-aligned patches (not worrying
          about rotation invariance). The simple way would just be to sample the
          8x8 box around each feature. However, this is unstable as the
          descriptor is incredibly sensitive to the exact feature location,
          noise, and small imperfections. Instead, we sample from a 40x40 area
          around each feature using a spacing of <InlineMath math="s=5" />{" "}
          pixels between each sample. This allows to create a feature descriptor
          at a lower frequency.
        </Typography>
        <Typography gutterBottom variant="body1">
          After sampling, we want to normalize the descriptor to make it
          invariant to affine changes in intensity (bias and gain).
        </Typography>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box sx={{ maxWidth: 900, width: "100%" }}>
            <ReactCompareSlider
              style={{ width: "100%" }}
              itemOne={
                <ProjectImg
                  images={[descriptorNormalized]}
                  alt={["descriptorNormalized"]}
                  maxWidth={900}
                />
              }
              position={74}
              itemTwo={
                <ProjectImg
                  images={[descriptorUnnormalized]}
                  alt={["descriptorUnnormalized"]}
                  maxWidth={900}
                />
              }
            />
          </Box>
        </Box>
        <Box sx={{ p: 2 }} />
        <Typography gutterBottom variant="h5">
          Part B.3: Feature Matching
        </Typography>
        <Typography gutterBottom variant="body1">
          In order to proceed, we must now match the descriptors from one image
          to the descriptors of the other image. If the descriptors match, then
          we know that their corresponding features match and we can then form
          correspondences between the two images.
        </Typography>
        <Typography gutterBottom variant="body1">
          We can build an adjacency matrix <InlineMath math="D" /> by comparing
          every descriptor <InlineMath math="d_{\text{src}}" /> from the source
          image to every other descriptor <InlineMath math="d_{\text{dest}}" />{" "}
          from the destination image and computing the L2 Norm. The naive
          approach would then to take the strongest match (lowest distance) for
          each descriptor, and use those to match the features between them.
          Unfortunately, as described in Figure 6a of{" "}
          <a href="https://cal-cs180.github.io/fa25/hw/proj3/Papers/MOPS.pdf">
            "Multi-Image Matching using Multi-Scale Oriented Patches" by Brown
            et al
          </a>
          , this has a really high probability of incorrect matches.
        </Typography>
        <a
          href="https://cal-cs180.github.io/fa25/hw/proj3/Papers/MOPS.pdf"
          className="noDecor"
        >
          <ProjectImg images={[error]} alt={["1-NN squared Error"]} />
        </a>
        <Typography gutterBottom variant="body1">
          Instead with Lowe's optimization, we can compute the ratio between the
          distances of the first best match and the second best match. With this
          ratio, we can then keep only the features such that this{" "}
          <InlineMath math="r \lt \text{threshold}" />. Experimentally, a value
          of 0.7 works best for the global threshold. The intuition behind the
          reason using the ratio to threshold rather than simply the normalized
          distance of the best match is due to some additive gaussian noise
          being present at each pixel.
        </Typography>
        <a
          href="https://cal-cs180.github.io/fa25/hw/proj3/Papers/MOPS.pdf"
          className="noDecor"
        >
          <ProjectImg
            images={[betterError]}
            alt={["1-NN/2-NN squared Error"]}
          />
        </a>
        <Typography gutterBottom variant="body1">
          Here are the extracted features correspondences. I've also isolated
          the top 15 correspondences for better visualization.
        </Typography>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box sx={{ maxWidth: 900, width: "100%" }}>
            <ReactCompareSlider
              style={{ width: "100%" }}
              itemOne={
                <ProjectImg
                  images={[feature_matches]}
                  alt={["feature matches"]}
                  maxWidth={900}
                />
              }
              itemTwo={
                <ProjectImg
                  images={[feature_matches_15]}
                  alt={["feature matches 15"]}
                  maxWidth={900}
                />
              }
            />
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box sx={{ maxWidth: 900, width: "100%" }}>
            <ReactCompareSlider
              style={{ width: "100%" }}
              itemOne={
                <ProjectImg
                  images={[anms_coords]}
                  alt={["anms_coords"]}
                  maxWidth={900}
                />
              }
              itemTwo={
                <ProjectImg
                  images={[feature_match_coords]}
                  alt={["feature_match_coords"]}
                  maxWidth={900}
                />
              }
            />
          </Box>
        </Box>
        <Box sx={{ p: 2 }} />
        <Typography gutterBottom variant="h5">
          Part B.5: RANSAC for Robust Homography
        </Typography>
        <Typography gutterBottom variant="body1">
          Unfortunately, a lot of these correspondences aren't very good as
          well. We will need to employ another algorithm, RANSAC (Random
          Sampling Consensus) in order to narrow down the correspondences even
          more. The RANSAC algorithm is quite simple. Iteratively, select 4
          random feature pairs and compute the homography between them. The set
          of inliers are all feature pairs such that{" "}
          <InlineMath math="\text{dist}(p_\text{dest}, p_\text{src}) \lt \epsilon" />
          . We repeat this process iteratively multiple times and keep only the
          largest set of inliers. In other words, we keep the largest set of
          correspondences such that applying the homography is within some error
          bound. Here we choose our threshold to be <code>3.0</code>. We can
          then recompute the homography <InlineMath math="H" /> on the final set
          of inliers.
        </Typography>
        <ProjectImg images={[ransac_loop]} alt={["RANSAC Loop"]} />
        <Typography gutterBottom variant="body1">
          We can speed this up by prematurely stopping once we achieve a certain
          confidence level in order to save on computation power. With the
          Hartley-Zisserman approach we find{" "}
          <InlineMath math="w=\frac{\text{count}}{N}" /> where{" "}
          <code>count</code> is the number of inliers on the current iteration
          to find the probability that any given point is an inlier. We want the
          probability that after <InlineMath math="k" /> iterations, at least
          one sample succeeds our confidence level.
        </Typography>
        <BlockMath>
          {String.raw`
          \begin{align*}
            1-(1-w^4)^k &\geq \text{confidence} \\
            (1-w^4)^k &\leq 1-\text{confidence} \\
            k &\geq \frac{\log(1-\text{confidence})}{\log(1-w^s)} \\
          \end{align*}
          `}
        </BlockMath>
        <Typography gutterBottom variant="body1">
          If this estimate is lower than our previous iteration cap, we can
          update the iteration cap with this estimate.
        </Typography>
        <ProjectImg
          images={[ransac_feature_matches]}
          alt={["ransac_feature_matches"]}
          maxWidth={900}
        />
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box sx={{ maxWidth: 900, width: "100%" }}>
            <ReactCompareSlider
              style={{ width: "100%" }}
              itemOne={
                <ProjectImg
                  images={[feature_match_coords]}
                  alt={["feature_match_coords"]}
                  maxWidth={900}
                />
              }
              itemTwo={
                <ProjectImg
                  images={[ransac_points]}
                  alt={["ransac_points"]}
                  maxWidth={900}
                />
              }
            />
          </Box>
        </Box>
      </ProjectSection>
      <ProjectSection Title="Results!">
        <Paper elevation={2} sx={{ p: 1, bgcolor: "#f5f1f8ff" }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ProjectImg
              images={[warframe_original]}
              alt={["im1Correspondences"]}
              maxWidth={800}
            />
            <Box sx={{ maxWidth: 800, width: "100%" }}>
              <ReactCompareSlider
                style={{ width: "100%" }}
                itemOne={
                  <ProjectImg
                    images={[warframe]}
                    alt={["warframe_auto"]}
                    title={["Automatic"]}
                    maxWidth={800}
                  />
                }
                itemTwo={
                  <ProjectImg
                    images={[warframe_manual]}
                    alt={["warframe_manual"]}
                    title={["Manual"]}
                    maxWidth={800}
                    titleRight={true}
                  />
                }
              />
            </Box>
          </Box>
        </Paper>
        <Box sx={{ p: 2 }} />
        <Paper elevation={2} sx={{ p: 1, bgcolor: "#f5f1f8ff" }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ProjectImg
              images={[warframe_original]}
              alt={["im1Correspondences"]}
              maxWidth={800}
            />
            <Box sx={{ maxWidth: 800, width: "100%" }}>
              <ReactCompareSlider
                style={{ width: "100%" }}
                itemOne={
                  <ProjectImg
                    images={[pixar]}
                    alt={["pixar"]}
                    title={["Automatic"]}
                    maxWidth={800}
                  />
                }
                itemTwo={
                  <ProjectImg
                    images={[pixar_manual]}
                    alt={["pixar_manual"]}
                    title={["Manual"]}
                    maxWidth={800}
                    titleRight={true}
                  />
                }
              />
            </Box>
          </Box>
        </Paper>
        <Box sx={{ p: 2 }} />
        <Paper elevation={2} sx={{ p: 1, bgcolor: "#f5f1f8ff" }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ProjectImg
              images={[class180_original]}
              alt={["im1Correspondences"]}
              maxWidth={800}
            />
            <ProjectImg
              images={[class180]}
              alt={["img1Mosaic"]}
              maxWidth={800}
            />
          </Box>
        </Paper>
      </ProjectSection>
    </ProjectBase>
  );
};

export default Project3;
