import React from "react";

const Loader = ({ className = "fixed top-2/4 left-2/4 translate-y--2/4 translate-x--2/4" }) => {
  return (
    <>
      <svg className={className} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g>
          <path d="M88 50 A38 38 0 0 1 50 88" fill="none" stroke="#ffffff" strokeWidth="3"></path>
          <path
            d="M50 88 A38 38 0 0 1 12 50.00000000000001"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
          ></path>
          <path
            d="M12 50.00000000000001 A38 38 0 0 1 49.99999999999999 12"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
          ></path>
          <path
            d="M49.99999999999999 12 A38 38 0 0 1 88 49.99999999999999"
            fill="none"
            stroke="#000000"
            strokeWidth="3"
          ></path>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 50 50;360 50 50"
            times="0;1"
            dur="0.4s"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
      </svg>
    </>
  );
};

export default Loader;
