import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const CircularProgress = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 40) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);
  return (
    <>
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0.25,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "butt",

          // Text size
          textSize: "16px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: `#044DF6`,
          textColor: "#f88",
          trailColor: "#DFE9EE",
          backgroundColor: "#3e98c7",
        })}
      />
    </>
  );
};

export default CircularProgress;
