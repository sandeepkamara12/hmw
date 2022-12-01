import React from "react";

const DescriptionModalContent = () => {
  return (
    <div className="modal-content">
      <div className="form-control mb-8">
        <label className="field-label text-left" tabIndex="2">
          Description
        </label>
        <textarea
          className="custom-input-field resize-none"
          placeholder="Add a description"
          tabIndex="3"
          rows="4"
        />
      </div>
    </div>
  );
};

export default DescriptionModalContent;
