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

  const projectAddSchema = Yup.object().shape({
    project_name: Yup.string().required("Required"),
    project_type: Yup.string().required("Required"),
    project_status: Yup.string().required("Required"),
  });

  const initialValues = {
    project_name: props.project?.project_name || "",
    project_type: props.project?.project_type || "production",
    project_status: props.project?.project_status || "active",
    project_description: props.project?.project_description || "",
    requested_by: props.project?.requested_by || null,
  };

  let selectedRequestedByOptions = [];
  if (props.project) {
    if (props.project.requested_by) {
      props.project.requested_by.forEach((r) => {
        selectedRequestedByOptions.push({
          value: r,
          label: r,
        });
      });
    }
  }

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: projectAddSchema,
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
      // commited_design_capacity: Number(values.commited_design_capacity),
    };
    // updatedValues.active = true;
    try {
      const res = await projectService.saveProject(
        updatedValues,
        props.project?.slug
      );
      if (res) {
        resetForm();
        props.closeModal();
        props.updateProjects(res.data.project);
      }
      setShowLoader(false);
    } catch (err) {
      setShowLoader(false);
      console.log(err);
    }
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
            placeholder="Enter a project name"
            tabIndex="3"
            name="project_name"
            className={`custom-input-field ${
              errors?.project_name && touched?.project_name
                ? "border-error"
                : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.project_name}
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
                checked={values.project_type === "production"}
                values={values.project_type}
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
          <label className="field-label text-left" tabIndex="13">
            Active or backlog
            <Tooltip
              tabIndex="14"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </label>
          <ul className="grid gap-3 grid-cols-2 mb-7">
            <li>
              <input
                type="radio"
                id="active"
                name="project_status"
                value="active"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.project_status === "active"}
                values={values.project_status}
              />
              <label
                htmlFor="active"
                tabIndex="15"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                Active
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="backlog"
                name="project_status"
                value="backlog"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.project_status === "backlog"}
                values={values.project_status}
              />
              <label
                htmlFor="backlog"
                tabIndex="16"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                Backlog
              </label>
            </li>
          </ul>
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            Description (Optional)
          </label>
          <textarea
            placeholder="Add a description"
            tabIndex="3"
            value={formik.values.project_description}
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
            Requested by (Optional)
            <Tooltip
              tabIndex="11"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="Select requested by"
              options={props.allUsers}
              handleChange={handleChange}
              value={selectedRequestedByOptions}
              setFieldValue={formik.setFieldValue}
              name="requested_by"
              handleBlur={() => formik.setFieldTouched("requested_by")}
              error={errors?.requested_by && touched?.requested_by}
              isMulti
            />
          </div>
        </div>
      </div>
      <div className="modal-footer border-t border-t-fieldOutline p-6 flex flex-wrap items-center justify-end fixed left-0 right-0 bottom-0 bg-white z-50">
        <Button
          classes="custom-button custom-button-large custom-button-fill-primary w-auto"
          attributes={{
            type: "button",
            disabled:
              Object.keys(errors).length > 0 ||
              (!props.editMode && Object.keys(touched).length < 1)
                ? true
                : false,
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
