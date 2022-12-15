import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import useViewport from "../../utils";
import Button from "../../components/FormElements/Button";
import AddProject from "../../components/Projects/AddProject";
import Footer from "../../layout/Footer";
import CustomModal from "../../layout/Modal";
import projectService from "../../services/projectService";
import { useSelector } from "react-redux";
import Active from "../../components/Projects/Active";
import Backlog from "../../components/Projects/Backlog";

import "react-loading-skeleton/dist/skeleton.css";
import ActiveProjectSkeleton from "../../components/Skeleton/ActiveProjectSkeleton";

const Projects = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState({
    active: true,
    backlog: false,
    complete: false,
  });

  const width = useViewport();
  const [hideHeader, setHideHeader] = useState("show");
  const [hideButton, setHideButton] = useState("show");
  const loggedInUser = useSelector((state) => state.user.userInfo);
  const [allProjects, setAllProjects] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

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

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  const getProjectsByUserId = async (values) => {
    setShowLoader(true);
    const { _id } = loggedInUser;
    try {
      const res = await projectService.getProjectsByUserId(_id);
      setShowLoader(false);
      setAllProjects(res.data);
    } catch (error) {
      setShowLoader(true);
      console.log(error);
    }
  };
  useEffect(() => {
    getProjectsByUserId();
  }, []);

  const changeTab = (tab) => {
    tab === "active"
      ? setActiveTab({ active: true, backlog: false })
      : tab === "backlog"
      ? setActiveTab({ active: false, backlog: true })
      : setActiveTab({ active: true, backlog: false });
  };
  const addProjectComponent = useRef();
  return (
    <div className={`sm:ml-20 py-7 sm:py-18`}>
      {hideHeader === "show" && (
        <div className="header block sm:hidden text-center">
          <Link to="/" className="mx-auto mb-10 inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62"
              height="15"
              viewBox="0 0 62 15"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.2304 10.6421L23.2193 0L16.1406 14.4376H26.3695H30.0176H40.2464L33.4481 0L28.2304 10.6421Z"
                fill="#FE7A48"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50.7648 0.982422H40.252V9.7431C40.252 12.6461 42.6053 14.9995 45.5084 14.9995C48.4114 14.9995 50.7648 12.6461 50.7648 9.7431V0.982422ZM61.2793 0.982422H50.7664V9.7431C50.7664 12.6461 53.1198 14.9995 56.0229 14.9995C58.9259 14.9995 61.2793 12.6461 61.2793 9.7431V0.982422Z"
                fill="#044FF5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.72168 1.11987H6.74903V4.48188H9.13035V1.11987H15.1577V14.4361H9.13035V11.0699H6.74903V14.4361H0.72168V1.11987Z"
                fill="#FECD48"
              />
            </svg>
          </Link>
        </div>
      )}

      <div className="custom-medium-container">
        <div
          className={
            hideButton === "hide" ? "sticky-header border-b-fieldOutline" : "relative px-4 sm:px-0"
          }
        >
          <div
            className={`flex flex-wrap items-center mb-8 sm:mb-12 ${
              hideButton === "hide" ? "justify-center mb-6" : "justify-between"
            }`}
          >
            <h1
              className={`headingOne transition-all !text-left !mb-0 ${
                hideButton === "hide" ? "!text-18 !leading-21" : ""
              }`}
            >
              Projects
            </h1>
            {hideButton === "show" && (
              <div>
                <Button
                  classes="custom-button custom-button-small custom-button-outline-primary"
                  attributes={{
                    type: "button",
                    disabled: false,
                    value: "Add project",
                    clickEvent: openModal,
                  }}
                />
              </div>
            )}
          </div>
          <>
            {showLoader ? (
              // <Loader classes={"loader-xxl mx-auto"} />
              <></>
            ) : !allProjects.length > 0 ? (
              <div className="">
                <span className="w-44 h-44 block bg-fieldBg rounded-full mx-auto mt-20"></span>
              </div>
            ) : (
              <div className="tabs">
                <Button
                  attributes={{
                    type: "button",
                    disabled: false,
                    value: "active",
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
                    value: "backlog",
                    clickEvent: () => {
                      changeTab("backlog");
                    },
                  }}
                  classes={`tab ${activeTab.backlog ? "active" : ""}`}
                />
              </div>
            )}
          </>
        </div>

        {allProjects.length && activeTab.active ? (
          <Active width={width} projects={allProjects} />
        ) : allProjects.length && activeTab.backlog ? (
          <Backlog width={width} projects={allProjects} />
        ) : (
          <>
            <ActiveProjectSkeleton />
          </>
        )}
      </div>

      <Footer />
      <CustomModal
        isOpen={modalIsOpen}
        isClose={closeModal}
        component={
          <AddProject
            ref={addProjectComponent}
            closeModal={closeModal}
            renderProjects={getProjectsByUserId}
          />
        }
        title="Add a project"
        buttonContent="Save project"
        onClickEvent={() => addProjectComponent.current.handleSubmit()}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Projects;
