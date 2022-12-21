import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const NewNoteModal = () => {
  const [value, setValue] = useState("");
  return (
    <div className="modal-content">
      <div className="form-control">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
    </div>
  );
};

export default NewNoteModal;
