import React from "react";
import coffeeImg from "../assets/proj3/coffee_warp.png";
import comparisonImg from "../assets/proj3/comparison.png";
import mosaicImg from "../assets/proj3/mosaic.png";
import math from "../assets/proj3/math.png";

const Project3 = () => {
  return (
    <div>
      <h1>Project 3</h1>
      <h2>Part A</h2>
      <h3>Part A.1</h3>
      <p>
        Taking images. I took some pictures while fixing the center of
        projection. Can be seen in the later parts
      </p>
      <h3>Part A.2</h3>
      <p>Recover Homographies</p>
      <img src={math} />
      <br></br>
      <p>Recovered Homographies for the image used in the mosaic</p>
      <code>
        [[ 3.55223447e+00 1.56040408e-01 -2.21145165e+03] [ 8.88448996e-01
        3.03100486e+00 -1.03080651e+03] [ 1.76297809e-03 4.41558667e-04
        1.00000000e+00]]
      </code>
      <h3>A.2</h3>
      <p>Rectify</p>
      <img src={coffeeImg} />
      <img src={comparisonImg} />
      <h3>A.3</h3>
      <p>Mosaic</p>
      <img src={mosaicImg} />
    </div>
  );
};

export default Project3;
