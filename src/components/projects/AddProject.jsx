import React, { useState } from "react";
import Tooltip from "../Tooltip";
import RangeSlider from "react-range-slider-input";
import Select from "../FormElements/Select";

const AddProject = () => {
  const [rangeValue, setRangeValue] = useState(10);

  const quarterOptions = [
    { value: "quarter-1", label: "Quarter 1" },
    { value: "quarter-2", label: "Quarter 2" },
    { value: "quarter-3", label: "Quarter 3" },
    { value: "quarter-4", label: "Quarter 4" },
  ];
  const trackOptions = [
    { value: "active", label: "Active" },
    { value: "upcoming", label: "Upcoming" },
    { value: "complete", label: "Complete" },
  ];
  const shirtSizeOptions = [
    { value: "xs", label: "XS" },
    { value: "sm", label: "SM" },
    { value: "md", label: "MD" },
    { value: "lg", label: "LG" },
    { value: "xl", label: "XL" },
    { value: "xxl", label: "XXL" },
    { value: "xxxl", label: "XXXL" },
  ];
  const requestedByOptions = [
    { value: "john-doe", label: "John Doe" },
    { value: "petersan", label: "Mr. Petersan" },
    { value: "harsh-vardhan", label: "Harsh Vardhan" },
  ];

  const handleChangeEvent = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className="px-6 lg:px-8 custom-modal">
        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            Project name
          </label>
          <input
            type="text"
            className="custom-input-field"
            placeholder="Enter a project name"
            autoFocus
            tabIndex="3"
          />
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="13">
            Project type
            <Tooltip
              tabIndex="14"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </label>
          <ul className="grid gap-3 grid-cols-2 mb-7">
            <li>
              <input
                type="radio"
                id="production"
                name="hosting"
                value="production"
                className="hidden peer"
                required
              />
              <label
                htmlFor="production"
                tabIndex="15"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                Production
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="internal"
                name="hosting"
                value="internal"
                className="hidden peer"
              />
              <label
                htmlFor="internal"
                tabIndex="16"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                Internal
              </label>
            </li>
          </ul>
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="10">
            Target quarter
            <Tooltip
              tabIndex="11"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="Select a quarter"
              options={quarterOptions}
              changeEvent={(val) => handleChangeEvent(val)}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="10">
            T-shirt size
            <Tooltip
              tabIndex="11"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="Select a size"
              options={shirtSizeOptions}
              changeEvent={(val) => handleChangeEvent(val)}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="10">
            What % of your time will you commit?
            <Tooltip
              tabIndex="11"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </label>
          <div className="flex flex-wrap items-center justify-between">
            <RangeSlider
              className="single-thumb"
              defaultValue={[0, 100]}
              thumbsDisabled={[true, false]}
              rangeSlideDisabled={false}
              value={[0, rangeValue]}
              // onThumbDragStart={(e) => setRangeValue(e.target.value)}
              // onThumbDragEnd={(e) => setRangeValue(e.target.value)}
              // onChange={(e) => setRangeValue(e.target.value)}
            />
            <div className="field-wrap relative">
              <input
                type="text"
                className="custom-input-field mb-0 text-center !pr-7"
                value={rangeValue}
                tabIndex="3"
                onChange={(e) => {
                  setRangeValue(e.target.value);
                }}
              />
              <label
                htmlFor=""
                className="absolute top-0 right-0 flex flex-wrap items-center justify-center h-full w-8"
              >
                %
              </label>
            </div>
          </div>
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            Description (Optional)
          </label>
          <textarea
            className="custom-input-field resize-none"
            placeholder="Add a description"
            tabIndex="3"
          />
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="10">
            Track
            <Tooltip
              tabIndex="11"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="Select a track"
              options={trackOptions}
              changeEvent={(val) => handleChangeEvent(val)}
              isMulti
            />
          </div>
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="10">
            Requested by (Optional)
            <Tooltip
              tabIndex="11"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="Select requested by"
              options={requestedByOptions}
              changeEvent={(val) => handleChangeEvent(val)}
              isMulti
            />
          </div>
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            PRD Link
            <Tooltip
              tabIndex="11"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </label>
          <input
            type="text"
            className="custom-input-field"
            placeholder="Enter a link to a PRD"
            tabIndex="3"
          />
        </div>
      </div>
    </>
  );
};

export default AddProject;
