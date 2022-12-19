import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import UserImage from "../../../assets/images/user-pf-image.png";
import CustomChip from "../../../layout/CustomChip";
import Button from "../../../components/FormElements/Button";
import MediaQuery from "react-responsive";
import ModalBottom from "../../../layout/ModalBottom";
// import ProjectStatusHomeSkeleton from "../../Skeleton/ProjectStatusHomeSkeleton";
import StatusModalContent from "./StatusModalContent";
import NewNoteModal from "./NewNoteModal";
import Dropdown from "../../../layout/Dropdown";

const HomeTab = () => {
  const [percentage, setPercentage] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 20) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const openStatusModal = () => {
    setStatusModalOpen(true);
  };
  const closeStatusModal = () => {
    setStatusModalOpen(false);
  };

  const [newNoteModalOpen, setNewNoteModalOpen] = useState(false);
  const openNewNoteModal = () => {
    setNewNoteModalOpen(true);
  };
  const closeNewNoteModal = () => {
    setNewNoteModalOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 3000);
  }, []);

  return (
    <>
      {/* {showLoader ? (
        <ProjectStatusHomeSkeleton />
      ) : ( */}
      <div className="flex flex-wrap flex-col-reverse lg:flex-row">
        <MediaQuery maxWidth={640}>
          <div className="flex justify-center mt-4 fixed left-0 right-0 bottom-24 z-10">
            <button
              className="custom-button custom-button-large custom-button-fill-primary w-auto flex items-center justify-center"
              type="button"
              onClick={openNewNoteModal}
            >
              <span className="mr-2.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0463 2.66668C10.0152 2.63448 9.97793 2.60898 9.93665 2.59178C9.89536 2.57458 9.85099 2.56604 9.80627 2.56668C9.71929 2.56616 9.63556 2.59966 9.57294 2.66002L2.29294 9.94002C2.26169 9.97101 2.23689 10.0079 2.21997 10.0485C2.20305 10.0891 2.19434 10.1327 2.19434 10.1767C2.19434 10.2207 2.20305 10.2643 2.21997 10.3049C2.23689 10.3455 2.26169 10.3824 2.29294 10.4134L5.58627 13.7067C5.64986 13.7705 5.73618 13.8065 5.82627 13.8067C5.86987 13.8064 5.91297 13.7975 5.95305 13.7803C5.99312 13.7631 6.02935 13.7381 6.0596 13.7067L13.3329 6.43335C13.3944 6.36992 13.4288 6.28504 13.4288 6.19668C13.4288 6.10833 13.3944 6.02345 13.3329 5.96002L10.0463 2.66668Z"
                    fill="white"
                  />
                  <path
                    d="M1.61956 11.2C1.57669 11.1601 1.52422 11.1319 1.46724 11.1182C1.41026 11.1045 1.35071 11.1057 1.29437 11.1218C1.23802 11.1379 1.18679 11.1683 1.14565 11.2101C1.10451 11.2518 1.07485 11.3034 1.05956 11.36L0.0528917 15.54C0.0395513 15.5958 0.0411543 15.6542 0.0575393 15.7092C0.0739243 15.7642 0.104513 15.8139 0.146225 15.8534C0.186402 15.894 0.236172 15.9238 0.290937 15.9402C0.345702 15.9565 0.403695 15.9587 0.459558 15.9467L4.66622 14.94C4.72356 14.9264 4.77613 14.8975 4.81838 14.8564C4.86063 14.8154 4.89099 14.7636 4.90622 14.7067C4.92171 14.6499 4.92249 14.5901 4.90849 14.533C4.8945 14.4759 4.86619 14.4232 4.82622 14.38L1.61956 11.2Z"
                    fill="white"
                  />
                  <path
                    d="M15.4667 1.9467L14.0534 0.533368C13.739 0.223136 13.315 0.0491943 12.8734 0.0491943C12.4317 0.0491943 12.0078 0.223136 11.6934 0.533368L10.7534 1.48004C10.7215 1.50996 10.6961 1.54611 10.6787 1.58624C10.6613 1.62637 10.6523 1.66964 10.6523 1.71337C10.6523 1.7571 10.6613 1.80037 10.6787 1.8405C10.6961 1.88063 10.7215 1.91677 10.7534 1.9467L14.0534 5.28004C14.0833 5.31192 14.1194 5.33734 14.1596 5.35471C14.1997 5.37208 14.243 5.38105 14.2867 5.38105C14.3304 5.38105 14.3737 5.37208 14.4138 5.35471C14.454 5.33734 14.4901 5.31192 14.52 5.28004L15.4667 4.30003C15.7781 3.98763 15.953 3.56449 15.953 3.12337C15.953 2.68224 15.7781 2.25911 15.4667 1.9467Z"
                    fill="white"
                  />
                </svg>
              </span>
              New note
            </button>
          </div>
        </MediaQuery>
        <div className="lg:w-7/12">
          <div className="border border-fieldOutline rounded-lg p-6">
            <h4 className="text-16 leading-20  font-semibold font-inter-regular text-black false">
              Notes
            </h4>
            <div className="flex py-6 border-b border-fieldOutline">
              <div className="c-userimg">
                <img src={UserImage} alt="Logo" />
              </div>
              <div className="flex-1 pl-2.5">
                <div className="flex justify-between items-center mb-2.5">
                  <h5 className="text-16 font-inter-medium">
                    Jamison
                    <span className="opacity-40 text-14 font-inter-regular ml-2">1 week ago</span>
                  </h5>
                  <span className="ml-auto">
                    <Dropdown />
                  </span>
                </div>
                <p className="text-14 pb-2.5">Lorem ipsum dolor sit amet, consectetur</p>
                <Link to="/" className="text-13 text-primary font-inter-medium">
                  Resolved
                </Link>
              </div>
            </div>

            <div className="flex py-6">
              <div className="c-userimg">
                <img src={UserImage} alt="Logo" />
              </div>
              <div className="flex-1 pl-2.5">
                <div className="flex justify-between items-center mb-2.5">
                  <h5 className="text-16 font-inter-medium">
                    Jamison{" "}
                    <span className="opacity-40 text-14 font-inter-regular ml-2">1 week ago</span>
                  </h5>
                  <span className="ml-auto">
                    <Dropdown />
                  </span>
                </div>
                <p className="text-14 pb-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to="/" className="text-13 text-primary font-inter-medium">
                  Resolved
                </Link>
              </div>
            </div>

            <div className="bg-[#F9F9FB] text-center p-3 rounded-md">
              <Link className="text-13 text-primary font-inter-medium">3 resolved notes</Link>
            </div>
            <MediaQuery minWidth={640}>
              <div className="mt-4">
                <textarea
                  className="custom-input-field !mb-0 !h-51 resize-none !bg-white"
                  placeholder="Add a new note"
                  autoFocus
                  tabIndex="3"
                />
              </div>
            </MediaQuery>
          </div>
        </div>

        <div className="lg:w-5/12 lg:pl-6 mb-2.5">
          <MediaQuery minWidth={768}>
            <div className="border border-fieldOutline rounded-lg p-6">
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
                <span className="text-xs leading-18 font-normal ml-2 inline-block text-gray">
                  2 days ago
                </span>
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
                <div className="flex-1 px-4 text-sm" onClick={openStatusModal}>
                  <h5 className="text-16 pb-2.5 font-inter-medium">Problem definition</h5>
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
          {/*****************************************/}

          <MediaQuery minWidth={768}>
            <div className="border border-fieldOutline rounded-lg p-6 mt-5">
              <div className="flex justify-between items-center">
                <div className="text-16 leading-20 font-semibold font-inter-regular text-black false">
                  Status
                </div>
                <div className="leading-18 font-normal ml-2 inline-block text-13">
                  <span className="w-2.5 h-2.5 bg-[#FECD48] rounded-full inline-block mr-2.5"></span>
                  Missing
                </div>
              </div>
              <div>
                <span className="w-40 h-40 rounded-full bg-fieldBg block mx-auto my-8"></span>
              </div>
              <Button
                classes="custom-button custom-button-small custom-button-fill-primary w-auto"
                attributes={{
                  type: "button",
                  disabled: false,
                  value: "Add a status",
                }}
              />
            </div>

            {/*****************************************/}

            <div className="border border-fieldOutline rounded-lg p-6 mt-5">
              <div className="flex justify-between items-center">
                <div className="text-16 leading-20 font-semibold font-inter-regular text-black false">
                  Status
                </div>
                <div className="leading-18 font-normal ml-2 inline-block text-13">
                  <span className="w-2.5 h-2.5 bg-[#FECD48] rounded-full inline-block mr-2.5"></span>
                  Expired
                </div>
              </div>
              <div className="opacity-40">
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
                <Button
                  classes="custom-button custom-button-small custom-button-fill-primary"
                  attributes={{
                    type: "button",
                    disabled: false,
                    value: "Update status",
                  }}
                />
              </div>
            </div>

            {/*****************************************/}
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
              <div className="p-4 border border-rose-500 rounded-lg mt-6">
                <CustomChip icon="blocked" content="Blocked" />
                <p className="mt-2 text-14">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit Eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
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
                  }}
                />
              </div>
            </div>
          </MediaQuery>
        </div>
      </div>
      {/* )} */}

      <ModalBottom
        isOpen={statusModalOpen}
        isClose={closeStatusModal}
        component={<StatusModalContent />}
        title="Status"
      />
      <ModalBottom
        isOpen={newNoteModalOpen}
        isClose={closeNewNoteModal}
        component={<NewNoteModal />}
        title="New note"
        buttonContent="Save"
      />
    </>
  );
};

export default HomeTab;