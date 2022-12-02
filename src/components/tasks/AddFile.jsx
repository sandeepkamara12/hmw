import React from "react";
import { Link } from "react-router-dom";

const AddLink = () => {
  return (
    <div className="px-6 lg:px-8 custom-modal">
      <div className="form-control">
        <label className="field-label text-left" tabIndex="4">
          File name
        </label>
        <input
          type="text"
          className="custom-input-field"
          placeholder="Powerpoint presentation"
          tabIndex="6"
        />
      </div>
      <div className="form-control mb-7">
        <label className="field-label text-left" tabIndex="4">
          Attachment (Select one)
        </label>
        <div className="flex flex-wrap items-center justify-between">
          <div className="font-inter-regular text-16 leading-19 text-black tracking-tight">
            figma_presentation.pdf
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
          >
            <g fill="#BABFC9" clipPath="url(#clip0_801_24439)">
              <path d="M12.967 5H3.034a.333.333 0 00-.334.36l.854 9.427A1.333 1.333 0 004.887 16h6.227a1.333 1.333 0 001.333-1.213l.887-9.454a.333.333 0 00-.334-.36L12.967 5zm-6.133 8.666a.5.5 0 11-1 0v-6a.5.5 0 111 0v6zm3.333 0a.5.5 0 11-1 0v-6a.5.5 0 111 0v6zM14.668 2.667h-3.167a.166.166 0 01-.166-.167v-.833A1.667 1.667 0 009.668 0H6.335a1.667 1.667 0 00-1.667 1.667V2.5a.167.167 0 01-.167.167H1.335a.667.667 0 100 1.333h13.333a.667.667 0 100-1.333zM6.001 2.5v-.833a.333.333 0 01.334-.334h3.333a.333.333 0 01.333.334V2.5a.167.167 0 01-.166.167H6.168a.167.167 0 01-.167-.167z"></path>
            </g>
            <defs>
              <clipPath id="clip0_801_24439">
                <path fill="#fff" d="M0 0H16V16H0z"></path>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="text-center border border-dashed border-fieldOutline rounded-lg mt-4">
          <Link className="textLink text-center block rounded-8 p-3.5 my-0">
            Choose a file (or) drop file here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddLink;
