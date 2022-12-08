import BackBtn from "./../../assets/images/back-arrow.svg";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useViewport from "./../../utils";
import Support from "../../components/tasks/Support";
import StatusTasks from "../../components/Projects/Details/StatusTasks";
import Button from "./../../components/FormElements/Button";
import Footer from "./../../layout/Footer";
import AddTask from "./../../components/tasks/AddTask";
import CustomModal from "./../../layout/Modal";
import Chip from "./../../layout/CustomChip";
import projectService from "../../services/projectService";
import sectionService from "../../services/sectionService";
import Loader from "../../components/Loader";
import Plan from "./../../components/tasks/Plan";
import userService from "./../../services/userService";
import omit from "lodash/omit";

const ProjectDetails = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState(false);
  const [activeTab, setActiveTab] = useState({
    active: true,
    upcoming: false,
    complete: false,
  });

  const [hideHeader, setHideHeader] = useState("show");
  const [hideButton, setHideButton] = useState("show");
  const [projectSections, setProjectSections] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [sectionInputError, setSectionInputError] = useState(null);
  const [addSection, setAddSection] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [assignedToOptions, setAssignedToOptions] = useState([]);
  const [sectionOptions, setSectionOptions] = useState([]);
  const params = useParams();
  const width = useViewport();
  const navigate = useNavigate();

  async function openTaskModal() {
    await getAllUsers();
    setIsOpen(true);
  }
  function closeTaskModal() {
    setIsOpen(false);
  }
  const showSection = () => {
    setOpenSection(true);
  };
  const closeSection = () => {
    setOpenSection(false);
  };

  const handleWindowScroll = () => {
    if (width <= 640) {
      if (window.scrollY > 100) {
        setHideHeader("hide");
      } else {
        setHideHeader("show");
      }
      if (window.scrollY > 30) {
        setHideButton("hide");
      } else {
        setHideButton("show");
      }
    }
  };

  const addNewSection = () => {
    setOpenSection(true);
    if (!addSection && openSection) {
      setSectionInputError(true);
    }
  };

  const addSectionHandler = async () => {
    if (addSection && openSection) {
      const payload = {
        project_id: currentProject._id,
        title: addSection,
      };
      try {
        const res = await sectionService.saveSection(payload);
        if (res) {
          setOpenSection(false);
          setAddSection(null);
          getProjectBySlug();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setSectionInputError(true);
    }
  };

  const getAllUsers = async () => {
    try {
      const res = await userService.getAllUsers();
      const { user } = res.data;
      let options = [];
      user.forEach((u) => {
        options.push({ value: u._id, label: u.full_name });
      });
      setAssignedToOptions(options);
      let secOptions = [];
      projectSections.forEach((sec) => {
        secOptions.push({ value: sec._id, label: sec.title });
      });
      setSectionOptions(secOptions);
    } catch (err) {
      setShowLoader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  const changeTab = (tab) => {
    tab === "active"
      ? setActiveTab({ active: true, upcoming: false, complete: false })
      : tab === "upcoming"
      ? setActiveTab({ active: false, upcoming: true, complete: false })
      : setActiveTab({ active: false, upcoming: false, complete: true });
  };

  const getProjectBySlug = async () => {
    setShowLoader(true);
    try {
      const res = await projectService.getProjectBySlug(params.slug);
      const { data } = res;
      setCurrentProject(omit(data, ["section"]));
      setProjectSections(data.section);
      setShowLoader(false);
    } catch (error) {
      setShowLoader(false);
      // setShowLoader(true);
      console.log(error);
    }
  };

  const deleteProject = async () => {
    try {
      const res = await projectService.deleteProject(currentProject.slug);
      if (res.data) {
        navigate("/projects");
      }
    } catch (error) {
      setShowLoader(false);
      // setShowLoader(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getProjectBySlug();
  }, []);

  return (
    <div className={`sm:ml-20 pt-7 pb-24 sm:py-18`}>
      <div className="custom-container">
        <div className="header flex flex-wrap items-center justify-between">
          <Link to="/" tabIndex="1" className="block sm:hidden mr-auto">
            <img src={BackBtn} alt="Back Btn" className="mx-auto mb-10" />
          </Link>
          <Link to="/" tabIndex="1" className="block sm:hidden mb-10">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4384 0.500001H11.4384C11.3267 0.499847 11.2175 0.533411 11.1252 0.596303C11.0329 0.659195 10.9617 0.748487 10.9209 0.8525C10.8783 0.954224 10.8669 1.06634 10.8883 1.17454C10.9097 1.28274 10.9628 1.38212 11.0409 1.46L13.5009 3.8825L6.41341 10.8575C6.27372 10.998 6.19531 11.1881 6.19531 11.3863C6.19531 11.5844 6.27372 11.7745 6.41341 11.915C6.48287 11.9859 6.5657 12.0422 6.65711 12.0809C6.74851 12.1195 6.84668 12.1396 6.94591 12.14C7.1416 12.1412 7.33001 12.0658 7.47091 11.93L14.5809 4.9325L17.0484 7.3625C17.1003 7.41508 17.1623 7.45677 17.2305 7.4851C17.2988 7.51343 17.372 7.52785 17.4459 7.5275C17.5207 7.52773 17.5948 7.51241 17.6634 7.4825C17.7646 7.4394 17.8507 7.36719 17.9108 7.27505C17.9709 7.18291 18.0023 7.075 18.0009 6.965V1.0625C17.999 0.91392 17.9391 0.771972 17.834 0.666901C17.7289 0.56183 17.587 0.501943 17.4384 0.500001Z"
                fill="black"
              />
              <path
                d="M13.875 8.465C13.6761 8.465 13.4853 8.54402 13.3447 8.68467C13.204 8.82532 13.125 9.01609 13.125 9.215V17H1.5V5.375H9.2775C9.47641 5.375 9.66718 5.29598 9.80783 5.15533C9.94848 5.01468 10.0275 4.82391 10.0275 4.625C10.0275 4.42609 9.94848 4.23532 9.80783 4.09467C9.66718 3.95402 9.47641 3.875 9.2775 3.875H1.4025C1.03053 3.875 0.673802 4.02276 0.410783 4.28578C0.147763 4.5488 1.41295e-10 4.90553 1.41294e-10 5.2775L1.41294e-10 17.09C-5.27179e-06 17.4627 0.147518 17.8202 0.410324 18.0844C0.673131 18.3486 1.02985 18.498 1.4025 18.5H13.215C13.589 18.5 13.9476 18.3514 14.212 18.087C14.4764 17.8226 14.625 17.464 14.625 17.09V9.215C14.625 9.01609 14.546 8.82532 14.4053 8.68467C14.2647 8.54402 14.0739 8.465 13.875 8.465Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
      </div>

      {!showLoader ? (
        <div className="custom-medium-container">
          <div
            className={
              hideButton === "hide"
                ? "border-b-fieldOutline"
                : "relative px-4 sm:px-0"
            }
          >
            <div
              className={`flex flex-wrap items-center mb-8 sm:mb-12 ${
                hideButton === "hide"
                  ? "justify-center mb-6"
                  : "justify-between"
              }`}
            >
              <h1 className={`headingOne !text-left !mb-0`}>
                {currentProject?.project_name}
              </h1>
            </div>
            <div className="flex flex-wrap items-center justify-between">
              <div className="tabs w-full sm:w-auto">
                <Button
                  attributes={{
                    type: "button",
                    disabled: false,
                    value: "Plan",
                    clickEvent: () => {
                      changeTab("active");
                    },
                  }}
                  classes={`tab ${activeTab.active ? "active" : ""}`}
                />
                <Button
                  attributes={{
                    type: "button",
                    disabled: false,
                    value: "Support",
                    clickEvent: () => {
                      changeTab("upcoming");
                    },
                  }}
                  classes={`tab ${activeTab.upcoming ? "active" : ""}`}
                />
                <Button
                  attributes={{
                    type: "button",
                    disabled: false,
                    value: "Status",
                    clickEvent: () => {
                      changeTab("complete");
                    },
                  }}
                  classes={`tab ${activeTab.complete ? "active" : ""}`}
                />
              </div>
              <Chip
                overrideClasses="!mx-0 !hidden lg:!inline-flex"
                icon="status"
                content="On-track: Oct 12-14"
              />
            </div>
          </div>

          {activeTab.active ? (
            <>
              {/* {console.log(sections)} */}
              <Plan width={width} sections={projectSections} />
              <div className="add-section px-4 sm:px-0">
                {openSection && (
                  <div className="add-sub-task px-4 sm:px-0 block">
                    <div className="form-control flex flex-wrap items-center justify-between relative">
                      <label
                        className="field-label text-left mb-0 w-8"
                        tabIndex="2"
                      >
                        <svg
                          width="20"
                          height="8"
                          viewBox="0 0 20 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6.00244L19 6.00244"
                            stroke="#CADAE2"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M1 1.00244L19 1.00244"
                            stroke="#CADAE2"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </label>
                      <div className="sub-task-field-wrap">
                        <input
                          type="text"
                          className={`custom-input-field mb-0 !pr-10 ${
                            sectionInputError
                              ? "border !border-red-500"
                              : "!bg-white"
                          }`}
                          placeholder="Section title"
                          tabIndex="3"
                          onBlur={() => addSectionHandler()}
                          onFocus={(e) => {
                            setSectionInputError(false);
                          }}
                          value={addSection}
                          onChange={(e) => {
                            setAddSection(e.target.value);
                          }}
                        />
                        <div className="delete-section absolute right-4 cursor-pointer group top-4">
                          <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onMouseDown={() => {
                              setAddSection("");
                              setOpenSection();
                            }}
                          >
                            <path
                              d="M12.967 5.00225H3.03362C2.98751 5.00211 2.94187 5.01153 2.89959 5.02992C2.8573 5.04832 2.81929 5.07528 2.78797 5.10912C2.75664 5.14295 2.73267 5.18292 2.71758 5.22649C2.70249 5.27006 2.6966 5.31629 2.70029 5.36225L3.55362 14.7889C3.58366 15.1214 3.73729 15.4304 3.98416 15.6551C4.23102 15.8797 4.55317 16.0036 4.88695 16.0023H11.1136C11.4474 16.0036 11.7696 15.8797 12.0164 15.6551C12.2633 15.4304 12.4169 15.1214 12.447 14.7889L13.3336 5.33559C13.3373 5.28962 13.3314 5.2434 13.3163 5.19982C13.3012 5.15625 13.2773 5.11628 13.2459 5.08245C13.2146 5.04862 13.1766 5.02165 13.1343 5.00325C13.092 4.98486 13.0464 4.97544 13.0003 4.97559L12.967 5.00225ZM6.83362 13.6689C6.83362 13.8015 6.78094 13.9287 6.68717 14.0225C6.59341 14.1162 6.46623 14.1689 6.33362 14.1689C6.20101 14.1689 6.07384 14.1162 5.98007 14.0225C5.8863 13.9287 5.83362 13.8015 5.83362 13.6689V7.66892C5.83362 7.53631 5.8863 7.40914 5.98007 7.31537C6.07384 7.2216 6.20101 7.16892 6.33362 7.16892C6.46623 7.16892 6.59341 7.2216 6.68717 7.31537C6.78094 7.40914 6.83362 7.53631 6.83362 7.66892V13.6689ZM10.167 13.6689C10.167 13.8015 10.1143 13.9287 10.0205 14.0225C9.92674 14.1162 9.79956 14.1689 9.66695 14.1689C9.53435 14.1689 9.40717 14.1162 9.3134 14.0225C9.21963 13.9287 9.16695 13.8015 9.16695 13.6689V7.66892C9.16695 7.53631 9.21963 7.40914 9.3134 7.31537C9.40717 7.2216 9.53435 7.16892 9.66695 7.16892C9.79956 7.16892 9.92674 7.2216 10.0205 7.31537C10.1143 7.40914 10.167 7.53631 10.167 7.66892V13.6689Z"
                              fill="#BABFC9"
                              className="group-hover:fill-primary"
                            />
                            <path
                              d="M14.666 2.66911H11.4994C11.4551 2.66911 11.4128 2.65155 11.3815 2.62029C11.3502 2.58904 11.3327 2.54664 11.3327 2.50244V1.66911C11.3327 1.22708 11.1571 0.803157 10.8445 0.490597C10.532 0.178036 10.108 0.00244141 9.66602 0.00244141L6.33268 0.00244141C5.89066 0.00244141 5.46673 0.178036 5.15417 0.490597C4.84161 0.803157 4.66602 1.22708 4.66602 1.66911V2.50244C4.66602 2.54664 4.64846 2.58904 4.6172 2.62029C4.58594 2.65155 4.54355 2.66911 4.49935 2.66911H1.33268C1.15587 2.66911 0.986302 2.73935 0.861278 2.86437C0.736254 2.98939 0.666016 3.15896 0.666016 3.33577C0.666016 3.51259 0.736254 3.68215 0.861278 3.80718C0.986302 3.9322 1.15587 4.00244 1.33268 4.00244H14.666C14.8428 4.00244 15.0124 3.9322 15.1374 3.80718C15.2624 3.68215 15.3327 3.51259 15.3327 3.33577C15.3327 3.15896 15.2624 2.98939 15.1374 2.86437C15.0124 2.73935 14.8428 2.66911 14.666 2.66911ZM5.99935 2.50244V1.66911C5.99935 1.5807 6.03447 1.49592 6.09698 1.43341C6.15949 1.37089 6.24428 1.33577 6.33268 1.33577H9.66602C9.75442 1.33577 9.83921 1.37089 9.90172 1.43341C9.96423 1.49592 9.99935 1.5807 9.99935 1.66911V2.50244C9.99935 2.54664 9.98179 2.58904 9.95054 2.62029C9.91928 2.65155 9.87689 2.66911 9.83268 2.66911H6.16602C6.12181 2.66911 6.07942 2.65155 6.04817 2.62029C6.01691 2.58904 5.99935 2.54664 5.99935 2.50244Z"
                              fill="#BABFC9"
                              className="group-hover:fill-primary"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="text-center border border-dashed border-fieldOutline rounded-lg mt-4">
                  <Link
                    className="textLink text-center block  rounded-8 p-3 my-0"
                    onClick={addNewSection}
                  >
                    Add a section
                  </Link>
                </div>
                {projectSections?.length > 0 && (
                  <div className="text-center border border-dashed border-fieldOutline rounded-lg mt-4">
                    <Link
                      className="textLink text-center block  rounded-8 p-3 my-0"
                      onClick={openTaskModal}
                    >
                      Add a task
                    </Link>
                  </div>
                )}
              </div>
            </>
          ) : activeTab.upcoming ? (
            <Support
              width={width}
              project={currentProject}
              updateCurrentProject={(projectData) => {
                setCurrentProject(projectData);
                // navigate("/projects");
              }}
              deleteAction={() => {
                deleteProject();
              }}
            />
          ) : (
            <StatusTasks width={width} />
          )}
        </div>
      ) : (
        <Loader classes={"loader-xxl mx-auto"} />
      )}

      <Footer />
      <CustomModal
        isOpen={modalIsOpen}
        isClose={closeTaskModal}
        component={
          <AddTask
            assignedToOptions={assignedToOptions}
            sectionOptions={sectionOptions}
            project={currentProject}
            closeModal={closeTaskModal}
            renderProjectDetails={getProjectBySlug}
          />
        }
        title="Add a task"
      />
    </div>
  );
};

export default ProjectDetails;
