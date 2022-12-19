import React, { useEffect, useState } from "react";

const NewNoteModal = () => {
  return (
    <div className="modal-content">
      <div className="form-control">
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

export default NewNoteModal;
