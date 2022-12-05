import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../FormElements/Button";
import CommentsTab from "./CommentsTab";
import AddLink from "./AddLink";
import AddFile from "./AddFile";
import CustomModal from "../../layout/Modal";
import MediaQuery from "react-responsive";
import DescriptionModalContent from "./DescriptionModalContent";
import ModalBottom from "../../layout/ModalBottom";
import AddSubtaskModalContent from "./AddSubtaskModalContent";
import TaskTimeModal from "./TaskTimeModal";
import DeleteTaskModal from "./DeleteTaskModal";
import Loader from "../Loader";

const DetailsTab = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const [fileModalIsOpen, setIsFileModalOpen] = useState(false);
  const openFileModal = () => {
    setIsFileModalOpen(true);
  };
  const closeFileModal = () => {
    setIsFileModalOpen(false);
  };

  const [descriptionModalOpen, setDescriptionModalOpen] = useState(false);
  const openDescriptionModal = () => {
    setDescriptionModalOpen(true);
  };
  const closeDescriptionModal = () => {
    setDescriptionModalOpen(false);
  };

  const [subtaskModalOpen, setSubtaskModalOpen] = useState(false);
  const openSubtaskModal = () => {
    setSubtaskModalOpen(true);
  };
  const closeSubtaskModal = () => {
    setSubtaskModalOpen(false);
  };

  const [taskTimeModalOpen, setTaskTimeModalOpen] = useState(false);
  const openTaskTimeModal = () => {
    setTaskTimeModalOpen(true);
  };
  const closeTaskTimeModal = () => {
    setTaskTimeModalOpen(false);
  };

  const [deleteTaskModal, setDeleteTaskModalOpen] = useState(false);
  const openDeleteTaskModal = () => {
    setDeleteTaskModalOpen(true);
  };
  const closeDeleteTaskModal = () => {
    setDeleteTaskModalOpen(false);
  };

  const [showDescriptionBox, setShowDescriptionBox] = useState(false);
  const [showSubTaskBox, setShowSubTaskBox] = useState(false);

  const showDescriptionField = () => {
    setShowDescriptionBox(true);
  };
  const hideDescriptionField = () => {
    setShowDescriptionBox(false);
  };
  const showSubTaskField = () => {
    setShowSubTaskBox(true);
  };
  const hideSubTaskField = () => {
    setShowSubTaskBox(false);
  };

  return (
    <>
      <div className="tab-panel lg:flex">
        <div className="lg:w-7/12">
          {/* Selected Time */}
          <span className="chip mb-4">
            <svg
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.995 0.5C2.235 0.5 0 2.74 0 5.5C0 8.26 2.235 10.5 4.995 10.5C7.76 10.5 10 8.26 10 5.5C10 2.74 7.76 0.5 4.995 0.5ZM5 9.5C2.79 9.5 1 7.71 1 5.5C1 3.29 2.79 1.5 5 1.5C7.21 1.5 9 3.29 9 5.5C9 7.71 7.21 9.5 5 9.5Z"
                fill="#004DF6"
              />
              <path d="M5.25 3H4.5V6L7.125 7.575L7.5 6.96L5.25 5.625V3Z" fill="#004DF6" />
            </svg>
            8h
          </span>

          {/* Description as  Content */}
          <div className="task-description text-16 leading-19 text-black font-inter-regular mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>

          {/* Show Hide Description Field */}
          <div
            className={`show-hide-description-field form-control flex flex-wrap items-center justify-between relative ${
              showDescriptionBox ? "inline-block" : "hidden"
            }`}
          >
            <textarea
              className="custom-input-field mb-0 !pr-10 resize-none !h-51"
              placeholder="Add a description"
              tabIndex="3"
            />
            <div className="delete-section absolute right-4 cursor-pointer group">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={hideDescriptionField}
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
          {/* Description Link */}
          <div
            className={`text-center border border-dashed border-fieldOutline rounded-lg ${
              showDescriptionBox ? "hidden" : "block"
            }`}
          >
            <MediaQuery minWidth={641}>
              <Link
                className="textLink text-center block rounded-8 p-3.5 my-0"
                onClick={showDescriptionField}
              >
                Add a description
              </Link>
            </MediaQuery>
            <MediaQuery maxWidth={640}>
              <Link
                className="textLink text-center block rounded-8 p-3.5 my-0"
                onClick={openDescriptionModal}
              >
                Add a description
              </Link>
            </MediaQuery>
          </div>

          <div className="text-16 leading-20 my-4 font-semibold font-inter-regular text-black false">
            Sub tasks
          </div>

          {/* Sub tasks listing */}
          <ul>
            <li className="flex justify-between completed-task  mb-4">
              <label
                htmlFor="sub-task"
                className="text-16 leading-19 text-gray font-inter-regular tracking-tight flex"
              >
                <input
                  type="checkbox"
                  id="sub-task"
                  name="sub-task"
                  className="appearance-none w-4 h-4 bg-white rounded-4 border border-fieldOutline checked:bg-primary mr-2.5 relative top-1"
                />
                <span className="pr-2.5 flex-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </label>
              <Link className="textLink mt-0 text-gray">Undo</Link>
            </li>
            <li className="flex justify-between mb-4">
              <label
                htmlFor="sub-task"
                className="text-16 leading-19 text-black font-inter-regular tracking-tight flex"
              >
                <input
                  type="checkbox"
                  id="sub-task"
                  name="sub-task"
                  className="appearance-none w-4 h-4 bg-white rounded-4 border border-fieldOutline checked:bg-primary mr-2.5 relative top-1"
                />
                <span className="pr-2.5 flex-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </label>
              <Link className="textLink mt-0">Done</Link>
            </li>
            <li className="flex justify-between mb-4">
              <label
                htmlFor="sub-task"
                className="text-16 leading-19 text-black font-inter-regular tracking-tight flex"
              >
                <input
                  type="checkbox"
                  id="sub-task"
                  name="sub-task"
                  className="appearance-none w-4 h-4 bg-white rounded-4 border border-fieldOutline checked:bg-primary mr-2.5 relative top-1"
                />
                <span className="pr-2.5 flex-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </label>
              <Link className="textLink mt-0">Done</Link>
            </li>
            <li className="flex justify-between mb-4">
              <label
                htmlFor="sub-task"
                className="text-16 leading-19 text-black font-inter-regular tracking-tight flex"
              >
                <input
                  type="checkbox"
                  id="sub-task"
                  name="sub-task"
                  className="appearance-none w-4 h-4 bg-white rounded-4 border border-fieldOutline checked:bg-primary mr-2.5 relative top-1"
                />
                <span className="pr-2.5 flex-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </label>
              <Link className="textLink mt-0">Done</Link>
            </li>
          </ul>

          {/* Sub Task Field */}
          <div className={`add-sub-task px-4 sm:px-0 ${showSubTaskBox ? "block" : "hidden"}`}>
            <div className="form-control flex flex-wrap items-center justify-between relative">
              <label className="field-label text-left mb-0 w-8" tabIndex="2">
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
                  className="custom-input-field mb-0 !pr-10"
                  placeholder="Add a sub task"
                  tabIndex="3"
                />
                <div className="delete-section absolute right-4 cursor-pointer group top-4">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={hideSubTaskField}
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

          {/* Sub task link */}
          <div className="text-center border border-dashed border-fieldOutline rounded-lg mt-4">
            <MediaQuery minWidth={641}>
              <Link
                className="textLink text-center block rounded-8 p-3.5 my-0"
                onClick={showSubTaskField}
              >
                Add a sub task
              </Link>
            </MediaQuery>
            <MediaQuery maxWidth={640}>
              <Link
                className="textLink text-center block rounded-8 p-3.5 my-0"
                onClick={openSubtaskModal}
              >
                Add a sub task
              </Link>
            </MediaQuery>
          </div>

          <div className="text-16 leading-20 my-4 font-semibold font-inter-regular text-black false">
            Attachments
          </div>

          <div className="flex flex-wrap items-center justify-between mb-4">
            <span>Presentation URL</span>
            <Link className="textLink flex flex-wrap items-center mt-0 group">
              Open
              <svg
                className="ml-2"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:fill-hover"
                  d="M13.561 0.5H8.89437C8.80748 0.499881 8.72258 0.525987 8.65076 0.574903C8.57895 0.623818 8.52357 0.693267 8.49187 0.774167C8.45872 0.853285 8.44989 0.940487 8.46651 1.02464C8.48314 1.1088 8.52446 1.1861 8.5852 1.24667L10.4985 3.13083L4.98604 8.55583C4.87739 8.66513 4.81641 8.81298 4.81641 8.96708C4.81641 9.12119 4.87739 9.26904 4.98604 9.37833C5.04006 9.43345 5.10449 9.4773 5.17558 9.50734C5.24667 9.53738 5.32302 9.55301 5.4002 9.55333C5.55241 9.55425 5.69895 9.49563 5.80854 9.39L11.3385 3.9475L13.2577 5.8375C13.2981 5.8784 13.3463 5.91082 13.3993 5.93286C13.4524 5.95489 13.5094 5.9661 13.5669 5.96583C13.6251 5.96601 13.6827 5.9541 13.736 5.93083C13.8148 5.89731 13.8817 5.84115 13.9285 5.76949C13.9752 5.69782 13.9996 5.61389 13.9985 5.52833V0.9375C13.997 0.821938 13.9504 0.711534 13.8687 0.629812C13.787 0.54809 13.6766 0.501511 13.561 0.5Z"
                  fill="#004DF6"
                />
                <path
                  className="group-hover:fill-hover"
                  d="M10.7917 6.695C10.637 6.695 10.4886 6.75646 10.3792 6.86585C10.2698 6.97525 10.2083 7.12362 10.2083 7.27833V13.3333H1.16667V4.29167H7.21583C7.37054 4.29167 7.51892 4.23021 7.62831 4.12081C7.73771 4.01142 7.79917 3.86304 7.79917 3.70833C7.79917 3.55362 7.73771 3.40525 7.62831 3.29585C7.51892 3.18646 7.37054 3.125 7.21583 3.125H1.09083C0.801526 3.125 0.524069 3.23993 0.319498 3.4445C0.114927 3.64907 1.09896e-10 3.92653 1.09896e-10 4.21583L1.09896e-10 13.4033C-4.10028e-06 13.6932 0.114736 13.9712 0.319141 14.1767C0.523546 14.3822 0.800991 14.4985 1.09083 14.5H10.2783C10.5692 14.5 10.8481 14.3845 11.0538 14.1788C11.2595 13.9731 11.375 13.6942 11.375 13.4033V7.27833C11.375 7.12362 11.3135 6.97525 11.2041 6.86585C11.0947 6.75646 10.9464 6.695 10.7917 6.695Z"
                  fill="#004DF6"
                />
              </svg>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-between mb-4">
            <span>Presentation File</span>
            <Link className="textLink flex flex-wrap items-center mt-0 group">
              View
              <svg
                className="ml-2"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_801_24538)">
                  <path
                    className="group-hover:fill-hover"
                    d="M13.2245 10.3818C13.0367 10.3818 12.8566 10.456 12.7233 10.5882C12.59 10.7204 12.5144 10.8999 12.5128 11.0877V12.1668C12.5128 12.4097 12.4163 12.6427 12.2446 12.8144C12.0728 12.9862 11.8399 13.0827 11.597 13.0827H2.40365C2.16075 13.0827 1.92781 12.9862 1.75605 12.8144C1.5843 12.6427 1.48781 12.4097 1.48781 12.1668V11.0877C1.47175 10.9108 1.39013 10.7463 1.25899 10.6265C1.12785 10.5068 0.956666 10.4404 0.779063 10.4404C0.601459 10.4404 0.430274 10.5068 0.299134 10.6265C0.167993 10.7463 0.0863754 10.9108 0.0703125 11.0877V12.1668C0.0703125 12.7857 0.316145 13.3792 0.75373 13.8168C1.19131 14.2543 1.78481 14.5002 2.40365 14.5002H11.597C12.2158 14.5002 12.8093 14.2543 13.2469 13.8168C13.6845 13.3792 13.9303 12.7857 13.9303 12.1668V11.0877C13.9303 10.9005 13.8559 10.7209 13.7236 10.5886C13.5912 10.4562 13.4117 10.3818 13.2245 10.3818Z"
                    fill="#004DF6"
                  />
                  <path
                    className="group-hover:fill-hover"
                    d="M7.0016 0.5C6.70146 0.5 6.41362 0.619229 6.20139 0.831457C5.98916 1.04369 5.86993 1.33153 5.86993 1.63167V6.91667C5.86993 6.95534 5.85457 6.99244 5.82722 7.01979C5.79987 7.04714 5.76277 7.0625 5.7241 7.0625H4.17243C4.06758 7.06967 3.96662 7.10504 3.88021 7.16486C3.7938 7.22467 3.72516 7.30673 3.68153 7.40234C3.63791 7.49795 3.62093 7.60357 3.63238 7.70804C3.64383 7.81251 3.6833 7.91194 3.7466 7.99583L6.57576 11.2508C6.63033 11.3091 6.69628 11.3556 6.76952 11.3873C6.84277 11.4191 6.92176 11.4355 7.0016 11.4355C7.08143 11.4355 7.16042 11.4191 7.23367 11.3873C7.30692 11.3556 7.37286 11.3091 7.42743 11.2508L10.2566 7.99583C10.3199 7.91194 10.3594 7.81251 10.3708 7.70804C10.3823 7.60357 10.3653 7.49795 10.3217 7.40234C10.278 7.30673 10.2094 7.22467 10.123 7.16486C10.0366 7.10504 9.93561 7.06967 9.83076 7.0625H8.2791C8.24042 7.0625 8.20333 7.04714 8.17598 7.01979C8.14863 6.99244 8.13326 6.95534 8.13326 6.91667V1.63167C8.13326 1.33153 8.01403 1.04369 7.80181 0.831457C7.58958 0.619229 7.30173 0.5 7.0016 0.5V0.5Z"
                    fill="#004DF6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_801_24538">
                    <rect width="14" height="14" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>

          <div className="text-center border border-dashed border-fieldOutline rounded-lg mt-4 grid grid-cols-2">
            <Link
              className="textLink justify-center inline-flex items-center rounded-8 p-3.5 my-0"
              onClick={openModal}
            >
              <svg
                width="21"
                height="21"
                className="lg:hidden mr-2"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_801_14348)">
                  <path
                    d="M5.75 10.0023C5.75 10.2233 5.8378 10.4353 5.99408 10.5915C6.15036 10.7478 6.36232 10.8356 6.58333 10.8356H14.5C14.721 10.8356 14.933 10.7478 15.0893 10.5915C15.2455 10.4353 15.3333 10.2233 15.3333 10.0023C15.3333 9.78126 15.2455 9.5693 15.0893 9.41302C14.933 9.25674 14.721 9.16895 14.5 9.16895H6.58333C6.36232 9.16895 6.15036 9.25674 5.99408 9.41302C5.8378 9.5693 5.75 9.78126 5.75 10.0023Z"
                    fill="#004DF6"
                  />
                  <path
                    d="M7.58372 12.2689C7.06635 12.6914 6.41834 12.9212 5.75039 12.9189C4.97684 12.9189 4.23497 12.6117 3.68799 12.0647C3.14101 11.5177 2.83372 10.7758 2.83372 10.0023C2.83372 9.22873 3.14101 8.48687 3.68799 7.93989C4.23497 7.39291 4.97684 7.08561 5.75039 7.08561C6.41834 7.08338 7.06635 7.31313 7.58372 7.73561C7.75611 7.87485 7.97675 7.93991 8.19711 7.91647C8.41746 7.89302 8.61948 7.78301 8.75872 7.61062C8.89796 7.43822 8.96301 7.21758 8.93957 6.99723C8.91613 6.77687 8.80611 6.57485 8.63372 6.43561C7.96058 5.89235 7.14744 5.55067 6.2883 5.45006C5.42915 5.34944 4.55907 5.49402 3.77863 5.86706C2.99818 6.2401 2.33923 6.82639 1.87795 7.55815C1.41666 8.2899 1.17188 9.13726 1.17188 10.0023C1.17188 10.8673 1.41666 11.7147 1.87795 12.4464C2.33923 13.1782 2.99818 13.7645 3.77863 14.1375C4.55907 14.5105 5.42915 14.6551 6.2883 14.5545C7.14744 14.4539 7.96058 14.1122 8.63372 13.5689C8.80611 13.4297 8.91613 13.2277 8.93957 13.0073C8.96301 12.787 8.89796 12.5663 8.75872 12.3939C8.61948 12.2216 8.41746 12.1115 8.19711 12.0881C7.97675 12.0647 7.75611 12.1297 7.58372 12.2689Z"
                    fill="#004DF6"
                  />
                  <path
                    d="M15.7505 5.41895C14.7017 5.41986 13.6846 5.77849 12.8672 6.43561C12.6948 6.57485 12.5848 6.77687 12.5613 6.99722C12.5379 7.21758 12.6029 7.43822 12.7422 7.61061C12.8814 7.783 13.0834 7.89302 13.3038 7.91646C13.5241 7.9399 13.7448 7.87485 13.9172 7.73561C14.4346 7.31313 15.0826 7.08338 15.7505 7.08561C16.5241 7.08561 17.2659 7.3929 17.8129 7.93988C18.3599 8.48686 18.6672 9.22873 18.6672 10.0023C18.6672 10.7758 18.3599 11.5177 17.8129 12.0647C17.2659 12.6117 16.5241 12.9189 15.7505 12.9189C15.0826 12.9212 14.4346 12.6914 13.9172 12.2689C13.7448 12.1297 13.5241 12.0647 13.3038 12.0881C13.0834 12.1115 12.8814 12.2216 12.7422 12.3939C12.6029 12.5663 12.5379 12.787 12.5613 13.0073C12.5848 13.2277 12.6948 13.4297 12.8672 13.5689C13.4375 14.0292 14.1099 14.3461 14.828 14.4928C15.5461 14.6395 16.2889 14.6119 16.9941 14.4123C17.6993 14.2127 18.3463 13.8468 18.8809 13.3455C19.4156 12.8441 19.8221 12.2219 20.0666 11.5309C20.311 10.84 20.3862 10.1005 20.2858 9.37448C20.1854 8.64847 19.9124 7.95713 19.4896 7.35844C19.0669 6.75975 18.5067 6.27118 17.8561 5.93371C17.2055 5.59624 16.4834 5.41972 15.7505 5.41895Z"
                    fill="#004DF6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_801_14348">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.75 0.00231934)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>Add a link</span>
            </Link>
            <Link
              className="textLink justify-center inline-flex items-center rounded-8 p-3.5 my-0"
              onClick={openFileModal}
            >
              <svg
                width="19"
                height="19"
                className="lg:hidden mr-2"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_801_14355)">
                  <path
                    d="M16.6292 2.5973C15.6465 1.62631 14.3207 1.08179 12.9392 1.08179C11.5577 1.08179 10.2319 1.62631 9.24916 2.5973L1.46416 10.3748C0.786352 11.1044 0.417869 12.0685 0.436199 13.0642C0.45453 14.06 0.858245 15.0098 1.56245 15.714C2.26666 16.4182 3.2165 16.8219 4.21223 16.8403C5.20796 16.8586 6.17201 16.4901 6.90166 15.8123L13.2242 9.4898C13.4663 9.26382 13.6604 8.99141 13.795 8.6888C13.9296 8.3862 14.002 8.05959 14.0077 7.72845C14.0134 7.3973 13.9524 7.0684 13.8283 6.76134C13.7042 6.45427 13.5195 6.17533 13.2853 5.94115C13.0511 5.70696 12.7722 5.52231 12.4651 5.39821C12.1581 5.27411 11.8292 5.21309 11.498 5.2188C11.1669 5.2245 10.8403 5.29682 10.5377 5.43142C10.2351 5.56603 9.96264 5.76018 9.73666 6.0023L5.84416 9.8873C5.77387 9.95702 5.71807 10.04 5.68 10.1314C5.64192 10.2228 5.62232 10.3208 5.62232 10.4198C5.62232 10.5188 5.64192 10.6168 5.68 10.7082C5.71807 10.7996 5.77387 10.8826 5.84416 10.9523C5.98469 11.092 6.17478 11.1704 6.37291 11.1704C6.57105 11.1704 6.76114 11.092 6.90166 10.9523L10.7942 7.0598C10.9304 6.92618 11.1029 6.8355 11.2903 6.799C11.4776 6.76249 11.6715 6.78177 11.848 6.85443C12.0245 6.9271 12.1757 7.04996 12.283 7.20779C12.3904 7.36562 12.449 7.55147 12.4517 7.7423C12.4503 8.00068 12.3481 8.2483 12.1667 8.4323L5.84416 14.7548C5.51588 15.0821 5.09803 15.3049 4.6433 15.3951C4.18857 15.4853 3.71732 15.4388 3.28897 15.2615C2.86062 15.0842 2.49435 14.7841 2.23633 14.399C1.97832 14.0138 1.84012 13.5609 1.83916 13.0973C1.83421 12.7911 1.88999 12.487 2.00328 12.2025C2.11656 11.918 2.2851 11.6588 2.49916 11.4398L10.3067 3.6548C11.0288 3.11319 11.9221 2.85024 12.8225 2.91423C13.7229 2.97822 14.57 3.36486 15.2083 4.00315C15.8466 4.64144 16.2332 5.48855 16.2972 6.38896C16.3612 7.28938 16.0983 8.18265 15.5567 8.9048L9.72166 14.7398C9.58198 14.8803 9.50357 15.0704 9.50357 15.2685C9.50357 15.4667 9.58198 15.6568 9.72166 15.7973C9.86219 15.937 10.0523 16.0154 10.2504 16.0154C10.4486 16.0154 10.6386 15.937 10.7792 15.7973L16.6142 9.9623C17.5852 8.9796 18.1297 7.65379 18.1297 6.2723C18.1297 4.89081 17.5852 3.565 16.6142 2.5823L16.6292 2.5973Z"
                    fill="#004DF6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_801_14355">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(0.25 0.00231934)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Add a file
            </Link>
          </div>
          <div className="lg:border lg:border-fieldOutline rounded-lg lg:py-4 lg:px-5 flex flex-wrap justify-between items-center mt-8">
            <Link
              onClick={openDeleteTaskModal}
              className="textLink text-center inline-flex flex-wrap items-center rounded-8 lg:pr-3 my-0 group lg:order-1 order-2 lg:flex-none justify-center flex-1"
            >
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  className="group-hover:fill-hover"
                  d="M12.467 5.00225H2.53362C2.48751 5.00211 2.44187 5.01153 2.39959 5.02992C2.3573 5.04832 2.31929 5.07528 2.28797 5.10912C2.25664 5.14295 2.23267 5.18292 2.21758 5.22649C2.20249 5.27006 2.1966 5.31629 2.20029 5.36225L3.05362 14.7889C3.08366 15.1214 3.23729 15.4304 3.48416 15.6551C3.73102 15.8797 4.05317 16.0036 4.38695 16.0023H10.6136C10.9474 16.0036 11.2696 15.8797 11.5164 15.6551C11.7633 15.4304 11.9169 15.1214 11.947 14.7889L12.8336 5.33559C12.8373 5.28962 12.8314 5.2434 12.8163 5.19982C12.8012 5.15625 12.7773 5.11628 12.7459 5.08245C12.7146 5.04862 12.6766 5.02165 12.6343 5.00325C12.592 4.98486 12.5464 4.97544 12.5003 4.97559L12.467 5.00225ZM6.33362 13.6689C6.33362 13.8015 6.28094 13.9287 6.18717 14.0225C6.09341 14.1162 5.96623 14.1689 5.83362 14.1689C5.70101 14.1689 5.57384 14.1162 5.48007 14.0225C5.3863 13.9287 5.33362 13.8015 5.33362 13.6689V7.66892C5.33362 7.53631 5.3863 7.40914 5.48007 7.31537C5.57384 7.2216 5.70101 7.16892 5.83362 7.16892C5.96623 7.16892 6.09341 7.2216 6.18717 7.31537C6.28094 7.40914 6.33362 7.53631 6.33362 7.66892V13.6689ZM9.66695 13.6689C9.66695 13.8015 9.61428 13.9287 9.52051 14.0225C9.42674 14.1162 9.29956 14.1689 9.16695 14.1689C9.03435 14.1689 8.90717 14.1162 8.8134 14.0225C8.71963 13.9287 8.66695 13.8015 8.66695 13.6689V7.66892C8.66695 7.53631 8.71963 7.40914 8.8134 7.31537C8.90717 7.2216 9.03435 7.16892 9.16695 7.16892C9.29956 7.16892 9.42674 7.2216 9.52051 7.31537C9.61428 7.40914 9.66695 7.53631 9.66695 7.66892V13.6689Z"
                  fill="#004DF6"
                ></path>
                <path
                  className="group-hover:fill-hover"
                  d="M14.166 2.66911H10.9994C10.9551 2.66911 10.9128 2.65155 10.8815 2.62029C10.8502 2.58904 10.8327 2.54664 10.8327 2.50244V1.66911C10.8327 1.22708 10.6571 0.803157 10.3445 0.490597C10.032 0.178036 9.60804 0.00244141 9.16602 0.00244141L5.83268 0.00244141C5.39066 0.00244141 4.96673 0.178036 4.65417 0.490597C4.34161 0.803157 4.16602 1.22708 4.16602 1.66911V2.50244C4.16602 2.54664 4.14846 2.58904 4.1172 2.62029C4.08594 2.65155 4.04355 2.66911 3.99935 2.66911H0.832682C0.655871 2.66911 0.486302 2.73935 0.361278 2.86437C0.236254 2.98939 0.166016 3.15896 0.166016 3.33577C0.166016 3.51259 0.236254 3.68215 0.361278 3.80718C0.486302 3.9322 0.655871 4.00244 0.832682 4.00244H14.166C14.3428 4.00244 14.5124 3.9322 14.6374 3.80718C14.7624 3.68215 14.8327 3.51259 14.8327 3.33577C14.8327 3.15896 14.7624 2.98939 14.6374 2.86437C14.5124 2.73935 14.3428 2.66911 14.166 2.66911ZM5.49935 2.50244V1.66911C5.49935 1.5807 5.53447 1.49592 5.59698 1.43341C5.65949 1.37089 5.74428 1.33577 5.83268 1.33577H9.16602C9.25442 1.33577 9.33921 1.37089 9.40172 1.43341C9.46423 1.49592 9.49935 1.5807 9.49935 1.66911V2.50244C9.49935 2.54664 9.48179 2.58904 9.45054 2.62029C9.41928 2.65155 9.37689 2.66911 9.33268 2.66911H5.66602C5.62181 2.66911 5.57942 2.65155 5.54817 2.62029C5.51691 2.58904 5.49935 2.54664 5.49935 2.50244Z"
                  fill="#004DF6"
                ></path>
              </svg>{" "}
              Delete
            </Link>
            <Link
              className="textLink text-center inline-flex flex-wrap items-center rounded-8 px-3 my-0 group lg:order-2 order-3 lg:flex-none justify-center flex-1"
              to="/"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  className="group-hover:fill-hover"
                  d="M10.0472 2.66937C10.0162 2.63716 9.9789 2.61167 9.93762 2.59446C9.89634 2.57726 9.85196 2.56872 9.80724 2.56937C9.72027 2.56885 9.63653 2.60234 9.57391 2.6627L2.29391 9.9427C2.26267 9.97369 2.23787 10.0106 2.22095 10.0512C2.20403 10.0918 2.19531 10.1354 2.19531 10.1794C2.19531 10.2234 2.20403 10.2669 2.22095 10.3076C2.23787 10.3482 2.26267 10.385 2.29391 10.416L5.58724 13.7094C5.65084 13.7732 5.73716 13.8091 5.82724 13.8094C5.87084 13.8091 5.91395 13.8001 5.95402 13.783C5.9941 13.7658 6.03033 13.7408 6.06058 13.7094L13.3339 6.43604C13.3954 6.3726 13.4298 6.28772 13.4298 6.19937C13.4298 6.11102 13.3954 6.02614 13.3339 5.9627L10.0472 2.66937Z"
                  fill="#004DF6"
                ></path>
                <path
                  className="group-hover:fill-hover"
                  d="M1.62054 11.2026C1.57766 11.1626 1.52519 11.1344 1.46822 11.1207C1.41124 11.107 1.35169 11.1083 1.29534 11.1244C1.239 11.1405 1.18777 11.1709 1.14663 11.2126C1.10549 11.2544 1.07583 11.306 1.06054 11.3626L0.0538683 15.5426C0.0405279 15.5984 0.0421309 15.6568 0.0585159 15.7118C0.0749009 15.7668 0.105489 15.8165 0.147202 15.8559C0.187378 15.8965 0.237149 15.9264 0.291914 15.9427C0.346679 15.959 0.404672 15.9613 0.460535 15.9492L4.6672 14.9426C4.72453 14.929 4.77711 14.9001 4.81936 14.859C4.86161 14.8179 4.89196 14.7662 4.9072 14.7092C4.92269 14.6525 4.92347 14.5927 4.90947 14.5356C4.89547 14.4784 4.86716 14.4258 4.8272 14.3826L1.62054 11.2026Z"
                  fill="#004DF6"
                ></path>
                <path
                  className="group-hover:fill-hover"
                  d="M15.4667 1.94926L14.0534 0.535932C13.739 0.225699 13.315 0.0517578 12.8734 0.0517578C12.4317 0.0517578 12.0078 0.225699 11.6934 0.535932L10.7534 1.4826C10.7215 1.51252 10.6961 1.54867 10.6787 1.5888C10.6613 1.62893 10.6523 1.6722 10.6523 1.71593C10.6523 1.75966 10.6613 1.80293 10.6787 1.84306C10.6961 1.88319 10.7215 1.91934 10.7534 1.94926L14.0534 5.2826C14.0833 5.31448 14.1194 5.3399 14.1596 5.35727C14.1997 5.37465 14.243 5.38361 14.2867 5.38361C14.3304 5.38361 14.3737 5.37465 14.4138 5.35727C14.454 5.3399 14.4901 5.31448 14.52 5.2826L15.4667 4.3026C15.7781 3.99019 15.953 3.56706 15.953 3.12593C15.953 2.68481 15.7781 2.26167 15.4667 1.94926Z"
                  fill="#004DF6"
                ></path>
              </svg>{" "}
              Edit
            </Link>
            <Button
              classes="custom-button custom-button-large custom-button-fill-primary w-full lg:w-auto ml-auto lg:order-3 order-1 lg:mb-0 mb-[30px]"
              attributes={{
                disabled: false,
                type: "button",
                loader: false,
                value: "complete",
                clickEvent: () => openTaskTimeModal(),
              }}
            />
          </div>
        </div>
        <MediaQuery minWidth={1024}>
          <CommentsTab />
        </MediaQuery>
      </div>
      <MediaQuery maxWidth={640}>
        <ModalBottom
          isOpen={descriptionModalOpen}
          isClose={closeDescriptionModal}
          component={<DescriptionModalContent />}
          title="Add a description"
          buttonContent="Save"
        />
      </MediaQuery>
      <MediaQuery maxWidth={640}>
        <ModalBottom
          isOpen={subtaskModalOpen}
          isClose={closeSubtaskModal}
          component={<AddSubtaskModalContent />}
          title="Add a sub task"
          buttonContent="Save"
        />
      </MediaQuery>
      <CustomModal
        isOpen={modalIsOpen}
        isClose={closeModal}
        component={<AddLink />}
        title="Add a link"
        buttonContent="Save"
        className="hidden"
      />
      <CustomModal
        isOpen={fileModalIsOpen}
        isClose={closeFileModal}
        component={<AddFile />}
        title="Add a file"
        buttonContent="Save"
      />
      <CustomModal
        isOpen={taskTimeModalOpen}
        isClose={closeTaskTimeModal}
        component={<TaskTimeModal />}
        title="Complete a task"
        buttonContent="Submit"
      />
      <CustomModal
        isOpen={deleteTaskModal}
        isClose={closeDeleteTaskModal}
        component={<DeleteTaskModal />}
        title="Delete task"
        buttonContent="Submit"
      />
    </>
  );
};

export default DetailsTab;
