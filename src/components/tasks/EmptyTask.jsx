import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";
import BackBtn from "../../assets/images/back-arrow.svg";
import Button from "../FormElements/Button";
import AddLink from "./AddLink";
import AddFile from "./AddFile";
import CustomModal from "../../layout/Modal";
import CommentsTab from "./CommentsTab";
import DetailsTab from "./DetailsTab";
import MediaQuery from "react-responsive";

const EmptyTask = (props) => {
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

  const [showDescriptionBox, setShowDescriptionBox] = useState(false);
  const showDescriptionField = () => {
    setShowDescriptionBox(true);
  };
  const hideDescriptionField = () => {
    setShowDescriptionBox(false);
  };

  const [showSubTaskBox, setShowSubTaskBox] = useState(false);

  const showSubTaskField = () => {
    setShowSubTaskBox(true);
  };
  const hideSubTaskField = () => {
    setShowSubTaskBox(false);
  };

  const [activeTab, setActiveTab] = useState({ details: true, comments: false });

  const changeTab = (tab) => {
    tab === "details"
      ? setActiveTab({ details: true, comments: false })
      : tab === "comments"
      ? setActiveTab({ details: false, comments: true })
      : setActiveTab({ details: true, comments: false });
  };

  return (
    <div className={`sm:ml-20 pt-7 pb-24 sm:py-18 px-4 sm:px-0`}>
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

      <div className="custom-medium-container">
        <div className="relative">
          <div className={`flex flex-wrap items-center mb-8 sm:mb-12 justify-between`}>
            <h1 className={`headingOne !text-left !mb-0`}>Task name</h1>
          </div>
        </div>
        <MediaQuery maxWidth={1024}>
          <div className="tabs mb-[26px]">
            <Button
              attributes={{
                type: "button",
                disabled: false,
                value: "details",
                clickEvent: () => {
                  changeTab("details");
                },
              }}
              classes={`tab ${activeTab.details ? "active" : ""}`}
            />
            <Button
              attributes={{
                type: "button",
                disabled: false,
                value: "comments",
                clickEvent: () => {
                  changeTab("comments");
                },
              }}
              classes={`tab ${activeTab.comments ? "active" : ""}`}
            />
          </div>
        </MediaQuery>

        {activeTab.active ? (
          <DetailsTab hideButton={props.hideButton} width={props.width} />
        ) : activeTab.comments ? (
          <CommentsTab hideButton={props.hideButton} width={props.width} />
        ) : (
          <DetailsTab hideButton={props.hideButton} width={props.width} />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default EmptyTask;
