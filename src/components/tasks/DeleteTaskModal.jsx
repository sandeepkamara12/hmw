import React from "react";

const DeleteTaskModal = () => {
  return (
    <>
      <div className="px-6 lg:px-8 custom-modal">
        <div className="form-control md:mb-8 mb-0">
          <h4 className="font-inter-regular fs-16 text-center" tabIndex="2">
            Are you sure you want to delete this task?
          </h4>
        </div>
      </div>
      <div className="modal-footer md:border-t border-t-fieldOutline p-6 pt-0 md:pt-6 flex flex-wrap items-center justify-end fixed left-0 right-0 bottom-0 bg-white z-50">
        <button className="custom-button custom-button-large custom-button-fill-primary">
          Delete
        </button>
      </div>
    </>
  );
};

export default DeleteTaskModal;
