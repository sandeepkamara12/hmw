import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../../../components/FormElements/Button";
const NewNoteModal = (props) => {
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };
  return (
    <div className="modal-content">
      <div className="form-control">
        <ReactQuill
          theme="snow"
          modules={modules}
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
