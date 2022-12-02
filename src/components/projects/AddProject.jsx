import React, { useState, forwardRef } from "react";
import Tooltip from "../Tooltip";
import RangeSlider from "react-range-slider-input";
import Select from "../FormElements/Select";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../FormElements/Button";
import projectService from "./../../services/projectService";
import { QUARTERS, TRACKS, TSHIRT_SIZES } from "../../utils/constants";

const AddProject = forwardRef((props, ref) => {
  const [rangeValue, setRangeValue] = useState(10);
  const [showLoader, setShowLoader] = useState(false);
  const [timeCommit, setTimeCommitRange] = useState(0);

  const requestedByOptions = [
    { value: "john-doe", label: "John Doe" },
    { value: "petersan", label: "Mr. Petersan" },
    { value: "harsh-vardhan", label: "Harsh Vardhan" },
  ];

  const SignupSchema = Yup.object().shape({
    project_name: Yup.string().required("Required"),
    project_type: Yup.string().required("Required"),
    target_quarter: Yup.string().required("Required"),
    t_shirt_size: Yup.string().required("Required"),
    track: Yup.array().required("Required").min(1),
    commited_design_capacity: Yup.string().required("Required"),
    project_description: Yup.string().required("Required"),
    prd_link: Yup.string().required("Required"),
  });

  const initialValues = {
    project_name: "",
    project_type: "production",
    target_quarter: "",
    t_shirt_size: "",
    track: null,
    commited_design_capacity: 0,
    project_description: "",
    prd_link: "",
    requested_by: null,
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      submitHandler(values);
    },
  });

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    touched,
    setFieldValue,
    resetForm,
    handleBlur,
  } = formik;

  // useImperativeHandle(ref, () => ({
  //   handleSubmit,
  // }));

  const submitHandler = async (values) => {
    setShowLoader(true);
    const updatedValues = {
      ...values,
      commited_design_capacity: Number(values.commited_design_capacity),
    };
    try {
      const res = await projectService.saveProject(updatedValues);
      if (res) {
        resetForm();
        props.closeModal();
        props.renderProjects();
      }
      setShowLoader(false);
    } catch (err) {
      setShowLoader(false);
      console.log(err);
    }
  };

  return (
    <>
      {/* {console.log("values", values)}
      {console.log("errors", errors)}
      {console.log("touched", touched)} */}
      <div className="px-6 lg:px-8 custom-modal">
        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            Project name
          </label>
          <input
            type="text"
            placeholder="Enter a project name"
            tabIndex="3"
            name="project_name"
            className={`custom-input-field ${
              errors?.project_name && touched?.project_name ? "border-error" : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            values={values.project_name}
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
                name="project_type"
                value="production"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
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
                name="project_type"
                value="internal"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.project_type === "internal"}
                values={values.project_type}
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
              options={QUARTERS}
              handleChange={handleChange}
              value={formik.values.target_quarter}
              name="target_quarter"
              handleBlur={() => formik.setFieldTouched("target_quarter")}
              error={errors?.target_quarter && touched?.target_quarter}
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
              options={TSHIRT_SIZES}
              handleChange={handleChange}
              value={formik.values.t_shirt_size}
              name="t_shirt_size"
              handleBlur={() => formik.setFieldTouched("t_shirt_size")}
              error={errors?.t_shirt_size && touched?.t_shirt_size}
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
              defaultValue={[0, 0]}
              step={1}
              thumbsDisabled={[true, false]}
              rangeSlideDisabled={false}
              value={[0, values.commited_design_capacity]}
              onInput={(e) => {
                setFieldValue("commited_design_capacity", e[1]);
              }}
            />
            <div className="field-wrap relative">
              <input
                type="text"
                tabIndex="3"
                name="commited_design_capacity"
                className={`custom-input-field mb-0 text-center !pr-7 ${
                  errors?.commited_design_capacity && touched?.commited_design_capacity
                    ? "border-error"
                    : "!bg-white"
                }`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.commited_design_capacity}
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
            placeholder="Add a description"
            tabIndex="3"
            name="project_description"
            className={`custom-input-field  resize-none${
              errors?.project_description && touched?.project_description
                ? "border-error"
                : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
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
              options={TRACKS}
              handleChange={handleChange}
              value={formik.values.track}
              setFieldValue={formik.setFieldValue}
              name="track"
              handleBlur={() => formik.setFieldTouched("track")}
              error={errors?.track && touched?.track}
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
              handleChange={handleChange}
              value={formik.values.requested_by}
              setFieldValue={formik.setFieldValue}
              name="requested_by"
              handleBlur={() => formik.setFieldTouched("requested_by")}
              error={errors?.requested_by && touched?.requested_by}
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
            placeholder="Enter a link to a PRD"
            tabIndex="3"
            name="prd_link"
            className={`custom-input-field ${
              errors?.prd_link && touched?.prd_link ? "border-error" : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            values={values.prd_link}
          />
        </div>
      </div>
      <div className="modal-footer border-t border-t-fieldOutline p-6 flex flex-wrap items-center justify-end fixed left-0 right-0 bottom-0 bg-white z-50">
        <Button
          classes="custom-button custom-button-large custom-button-fill-primary w-auto"
          attributes={{
            type: "button",
            disabled:
              Object.keys(errors).length > 0 || Object.keys(touched).length < 1 ? true : false,
            value: "Save project",
            clickEvent: () => handleSubmit(),
            loader: showLoader,
          }}
        />
      </div>
    </>
  );
});

export default AddProject;
