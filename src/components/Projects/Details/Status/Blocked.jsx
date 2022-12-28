import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import CustomChip from "../../../../layout/CustomChip";
import Button from "../../../FormElements/Button";
import "react-circular-progressbar/dist/styles.css";

const Blocked = (props) => {
  return (
    <>
      <div className="border border-fieldOutline rounded-lg p-6 mt-5">
        <div className="flex justify-between items-center">
          <div className="text-16 leading-20 font-semibold font-inter-regular text-black false">
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
        <div className="p-4 border border-rose-500 rounded-lg mt-6">
          <CustomChip icon="blocked" content="Blocked" />
          <p className="mt-2 text-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex rounded-lg border border-fieldOutline p-2.5 my-6">
          <h6 className="flex flex-col flex-1 text-center border-r border-fieldOutline last:border-0">
            Activities
            <span className="text-[22px] font-inter-medium mt-1.5">5</span>
          </h6>
          <h6 className="flex flex-col flex-1 text-center border-r border-fieldOutline last:border-0">
            Collaborations
            <span className="text-[22px] font-inter-medium mt-1.5">3</span>
          </h6>
        </div>
        <ul className="space-y-1 text-sm list-disc pl-4">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li> Eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
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
    </>
  );
};

export default Blocked;
