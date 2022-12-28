import React from "react";
import MediaQuery from "react-responsive";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import CustomChip from "../../../../layout/CustomChip";
import Button from "../../../FormElements/Button";
import "react-circular-progressbar/dist/styles.css";

const Stage = (props) => {
  return (
    <>
      <MediaQuery minWidth={768}>
        <div className="border border-fieldOutline rounded-lg p-6">
          <div className="flex justify-between items-center">
            <div className="text-16 leading-20 font-inter-medium  text-black false">
              Status
            </div>
            <span className="text-xs leading-18 font-normal ml-2 inline-block text-gray">
              2 days ago
            </span>
          </div>
          <div className="flex mt-6 items-center">
            <div className="w-[60px] h-[60px]">
              <CircularProgressbar
                value={props.percentage}
                text={props.percentage}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "20px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `#044FF5`,
                  textColor: "#000",
                  trailColor: "#DFE9EE",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
            <div className="flex-1 pl-4 text-sm">
              <h5 className="text-16 pb-2.5 font-inter-medium">
                Problem definition
              </h5>
              <p className="text-14">
                <CustomChip content="Oct 13-16" />
              </p>
            </div>
          </div>

          <div className="flex rounded-lg border border-fieldOutline p-2.5 my-6">
            <h6 className="flex flex-col flex-1 text-center border-r border-fieldOutline last:border-0 text-base">
              Activities
              <span className="text-[22px] font-inter-medium mt-3">5</span>
            </h6>
            <h6 className="flex flex-col flex-1 text-center border-r border-fieldOutline last:border-0 text-base">
              Collaborations
              <span className="text-[22px] font-inter-medium mt-3">3</span>
            </h6>
          </div>
          <ul className="space-y-1 text-sm list-disc pl-4">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>
              {" "}
              Eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
          </ul>
          <div className="border border-fieldOutline my-6"></div>
          <div className="flex space-x-3">
            <Button
              classes="custom-button custom-button-small custom-button-outline-primary"
              attributes={{
                type: "button",
                disabled: false,
                value: "Share",
              }}
            />
            <Button
              classes="custom-button custom-button-small custom-button-outline-primary"
              attributes={{
                type: "button",
                disabled: false,
                value: "Update",
                clickEvent: () => props.openStatusUpdateModal(),
              }}
            />
          </div>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={767}>
        <div className="border border-fieldOutline rounded-lg p-6 cursor-pointer">
          <div className="flex justify-between items-center">
            <div className="text-16 leading-20 font-semibold font-inter-regular text-black false">
              Status
            </div>
            <span className="text-gray opacity-40 text-13 font-inter-regular ml-2">
              2 days ago
            </span>
          </div>
          <div className="flex mt-6 items-center">
            <div className="w-[60px] h-[60px]">
              <CircularProgressbar
                value={props.percentage}
                text={props.percentage}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "20px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `#044FF5`,
                  textColor: "#000",
                  trailColor: "#DFE9EE",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
            <div className="flex-1 px-4 text-sm">
              <h5 className="text-16 pb-2.5 font-inter-medium">
                Problem definition
              </h5>
              <p className="text-14">
                <CustomChip content="Oct 13-16" />
              </p>
            </div>
            <div className="">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_8_27)">
                  <path
                    d="M11.375 7C11.375 7.40834 11.2 7.75834 10.9083 7.99167L4.43333 13.7667C3.96667 14.1167 3.26667 14.0583 2.91667 13.5917C2.56667 13.125 2.56667 12.4833 3.03333 12.1333L8.75 7.11667C8.80833 7.05834 8.80833 7 8.75 6.88334L3.03333 1.86667C2.56667 1.45834 2.50833 0.816671 2.91667 0.350004C3.325 -0.116662 3.96667 -0.174996 4.43333 0.233337C4.43333 0.233337 4.43333 0.233337 4.49167 0.291671L10.9667 6.00834C11.2 6.24167 11.375 6.65 11.375 7Z"
                    fill="#CADAE2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8_27">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(0 14) rotate(-90)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
};

export default Stage;
