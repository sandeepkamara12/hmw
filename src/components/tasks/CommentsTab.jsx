import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../formElements/Button";

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
    <div className="lg:w-5/12 pl-12">
      <div className="border border-fieldOutline rounded-lg p-6">
        <div className="text-16 leading-20 mb-4 font-semibold font-inter-regular text-black false">
          Comments
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
