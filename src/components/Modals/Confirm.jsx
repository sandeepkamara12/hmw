import React from "react";

const ConfirmModal = (props) => {
  return (
    <>
      <div className="px-6 lg:px-8 custom-modal">
        <div className="form-control md:mb-8 mb-0">
          <h4 className="font-inter-regular fs-16 text-center" tabIndex="2">
            {props.heading}
          </h4>
        </div>
      </div>
      <div className="modal-footer md:border-t border-t-fieldOutline p-6 pt-0 md:pt-6 flex flex-wrap items-center justify-end fixed left-0 right-0 bottom-0 bg-white z-50">
        <button
          className="custom-button custom-button-large custom-button-fill-primary md:w-auto"
          onClick={props.attributes?.clickEvent}
        >
          Delete
        </button>
      </div>
      {/* <svg
        width="20px"
        height="20px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="inline-block"
      >
        <g>
          <path
            d="M88 50 A38 38 0 0 1 50 88"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
          ></path>
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
      </svg> */}
    </>
  );
};

export default ConfirmModal;
