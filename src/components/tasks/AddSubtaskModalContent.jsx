import React from "react";

const AddSubtaskModalContent = () => {
  return (
    <div className="modal-content">
      <div className="form-control mb-8">
        <label className="field-label text-left" tabIndex="2">
          Title
        </label>
        <textarea
          className="custom-input-field resize-none"
          placeholder="Add Sub tasks"
          tabIndex="3"
          rows="4"
        />
      </div>
    </div>
  );
};

export default AddSubtaskModalContent;
