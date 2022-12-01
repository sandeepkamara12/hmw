import React from "react";

const TaskTimeModal = () => {
  return (
    <div className="modal-content">
      <div className="form-control mb-8">
        <label className="field-label text-left" tabIndex="2">
          How much time did you spend on this task?
        </label>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="13">
            Time estimate
          </label>
          <ul className="grid gap-3 grid-cols-2 mb-7" role="group" aria-labelledby="my-radio-group">
            <li>
              <input type="radio" name="1h" className="hidden peer" required />
              <label
                tabIndex="15"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                1h
              </label>
            </li>
            <li>
              <input type="radio" name="projectType" className="hidden peer" />
              <label
                tabIndex="16"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                2h
              </label>
            </li>
            <li>
              <input type="radio" name="projectType" className="hidden peer" />
              <label
                tabIndex="16"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                4h
              </label>
            </li>
            <li>
              <input type="radio" name="projectType" className="hidden peer" />
              <label
                tabIndex="16"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                6h
              </label>
            </li>
            <li>
              <input type="radio" name="projectType" className="hidden peer" />
              <label
                tabIndex="16"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                8h
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskTimeModal;
