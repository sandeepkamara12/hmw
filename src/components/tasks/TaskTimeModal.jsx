import React from "react";

const TaskTimeModal = () => {
  return (
    <>
      <div className="px-6 lg:px-8 custom-modal">
        <div className="form-control md:mb-8 mb-0">
          <h4 className="font-inter-regular fs-16 mb-8" tabIndex="2">
            How much time did you spend on this task?
          </h4>
          <div className="form-control md:mb-8 mb-0">
            <label className="field-label text-left" tabIndex="13">
              Time estimate
            </label>
            <ul
              className="gap-3 grid grid-flow-col md:mb-7 mb-0"
              role="group"
              aria-labelledby="my-radio-group"
            >
              <li>
                <input type="radio" name="time" id="onehour" className="hidden peer" required />
                <label
                  for="onehour"
                  tabIndex="15"
                  className="text-center p-2.5 text-14 font-inter-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
                >
                  1h
                </label>
              </li>
              <li>
                <input type="radio" name="time" id="twohour" className="hidden peer" />
                <label
                  for="twohour"
                  tabIndex="16"
                  className="text-center p-2.5 text-14 font-inter-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
                >
                  2h
                </label>
              </li>
              <li>
                <input type="radio" name="time" id="fourhour" className="hidden peer" />
                <label
                  for="fourhour"
                  tabIndex="16"
                  className="text-center p-2.5 text-14 font-inter-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
                >
                  4h
                </label>
              </li>
              <li>
                <input type="radio" name="time" id="sixhour" className="hidden peer" />
                <label
                  for="sixhour"
                  tabIndex="16"
                  className="text-center p-2.5 text-14 font-inter-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
                >
                  6h
                </label>
              </li>
              <li>
                <input type="radio" name="time" id="eighthour" className="hidden peer" />
                <label
                  for="eighthour"
                  tabIndex="16"
                  className="text-center p-2.5 text-14 font-inter-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
                >
                  8h
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="modal-footer md:border-t border-t-fieldOutline p-6 pt-0 md:pt-6 flex flex-wrap items-center justify-end fixed left-0 right-0 bottom-0 bg-white z-50">
        <button className="custom-button custom-button-large custom-button-fill-primary md:w-auto">
          Submit
        </button>
      </div>
    </>
  );
};

export default TaskTimeModal;
