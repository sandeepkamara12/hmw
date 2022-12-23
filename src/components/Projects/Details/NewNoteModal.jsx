import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const NewNoteModal = (props) => {
  const [value, setValue] = useState("");
  return (
    <div className="modal-content">
      <div className="form-control">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={(e) => {
            setValue(e);
            props.setNoteContent(e);
          }}
        />
      </div>
    </div>
  );
};

export default NewNoteModal;
