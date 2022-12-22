import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CustomChip from "../../../layout/CustomChip";
import Button from "../../FormElements/Button";

const StatusModalContent = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 20) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  return (
    <div className="modal-content">
      <div className="flex justify-between items-center">
        <span class="text-xs leading-18 font-normal ml-2 inline-block text-gray">2 days ago</span>
      </div>
      <div className="flex mt-6 items-center">
        <div className="w-[60px] h-[60px]">
          <CircularProgressbar
            value={percentage}
            text={percentage}
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
          <h5 className="text-16 pb-2.5 font-inter-medium">Problem definition</h5>
          <p className="text-14">
            <CustomChip content="Oct 13-16" />
          </p>
        </div>
      </div>

      <div className="flex rounded-lg border border-fieldOutline p-2.5 my-6">
        <h6 className="flex flex-col flex-1 text-center border-r border-fieldOutline last:border-0 text-base">
          Activities
          <span className="text-[22px] font-inter-medium mt-2.5">5</span>
        </h6>
        <h6 className="flex flex-col flex-1 text-center border-r border-fieldOutline last:border-0 text-base">
          Collaborations
          <span className="text-[22px] font-inter-medium mt-2.5">3</span>
        </h6>
      </div>
      <ul className="space-y-1 text-sm list-disc pl-4">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        <li> Eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
      </ul>
      <div className="border border-fieldOutline my-6"></div>
      <div className="flex flex-col space-y-3">
        <Button
          classes="custom-button custom-button-small py-3 custom-button-outline-primary text-14 MonoMedium"
          attributes={{
            type: "button",
            disabled: false,
            value: "Share",
          }}
        />
        <Button
          classes="custom-button custom-button-small py-3 custom-button-outline-primary text-14 MonoMedium"
          attributes={{
            type: "button",
            disabled: false,
            value: "Update",
          }}
        />
      </div>
    </div>
  );
};

export default StatusModalContent;
