import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../FormElements/Button";
import UserImage from "../../assets/images/user-pf-image.png";

const CommentsTab = (props) => {
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
    <div className="lg:w-5/12 lg:pl-12">
      <div className="border border-fieldOutline rounded-lg p-6">
        <div className="text-16 leading-20 mb-4 font-semibold font-inter-regular text-black false">
          Comments
        </div>

        <div className="commented-wrap flex py-6">
          <div className="c-userimg">
            <img src={UserImage} alt="Logo" />
          </div>
          <div className="flex-1 pl-2.5">
            <h5 className="text-16 pb-2.5 font-inter-medium">
              Jamison <span className="opacity-40 text-14 font-inter-regular">1 week ago</span>
            </h5>
            <p className="text-14 pb-2.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to="/" className="text-13 text-primary font-inter-medium">
              Resolved
            </Link>
          </div>
        </div>

        <div className="commented-wrap flex py-6">
          <div className="c-userimg">
            <img src={UserImage} alt="Logo" />
          </div>
          <div className="flex-1 pl-2.5">
            <h5 className="text-16 pb-2.5 font-inter-medium">
              Jamison <span className="opacity-40 text-14 font-inter-regular">1 week ago</span>
            </h5>
            <p className="text-14 pb-2.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to="/" className="text-13 text-primary font-inter-medium">
              Resolved
            </Link>
          </div>
        </div>

        <div className="form-control">
          <textarea
            className="custom-input-field !mb-0 !h-51 resize-none"
            placeholder="Add a new comment"
            autoFocus
            tabIndex="3"
          />
        </div>
      </div>
    </div>
  );
};

export default CommentsTab;
