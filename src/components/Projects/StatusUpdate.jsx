import React, { useState, forwardRef } from "react";
import Tooltip from "../Tooltip";
import RangeSlider from "react-range-slider-input";
import Select from "../FormElements/Select";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../FormElements/Button";
import projectService from "./../../services/projectService";
import { QUARTERS, TRACKS, TSHIRT_SIZES } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Datepicker from "react-tailwindcss-datepicker";

const StatusUpdate = forwardRef((props, ref) => {
  const [rangeValue, setRangeValue] = useState(10);
  const [showLoader, setShowLoader] = useState(false);
  const [timeCommit, setTimeCommitRange] = useState(0);
  const navigate = useNavigate();

  const requestedByOptions = [
    { value: "john-doe", label: "John Doe" },
    { value: "petersan", label: "Mr. Petersan" },
    { value: "harsh-vardhan", label: "Harsh Vardhan" },
  ];

  const projectAddSchema = Yup.object().shape({
    project_name: Yup.string().required("Required"),
    blocked: Yup.string().required("Required"),
    project_status: Yup.string().required("Required"),
  });

  const initialValues = {
    stage: props.project?.stage || "",
    activities: props.project?.activities || "",
    collaborations: props.project?.collaborations || "",
    status: props.project?.status || "",
    project_name: props.project?.project_name || "",
    blocked: props.project?.blocked || "yes",
    howBlocked: props.project?.howBlocked || "",
    design_delivery: props.project?.design_delivery || "",
    track_yes: props.project?.track_yes || "",
    howBlocked: props.project?.howBlocked || "",
    quarter: props.project?.quarter || "",
    dlt: props.project?.dlt || "",
    review: props.project?.review || "",
  };

  let selectedRequestedByOptions = [];
  if (props.project) {
    if (props.project.stage) {
      props.project.stage.forEach((r) => {
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
      const res = await projectService.saveProject(updatedValues, props.project?.slug);
      if (res) {
        resetForm();
        props.closeModal();
        if (props.project && props.project.slug) {
          props.updateProjects(res.data.project);
        } else {
          navigate(`/project/${res.data.slug}`);
          // props.updateProjects(values.project_status);
        }
      }
      setShowLoader(false);
    } catch (err) {
      setShowLoader(false);
      console.log(err);
    }
  };

  const [value, setValue] = useState({
    startDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <>
      <div className="px-6 lg:px-8 custom-modal">
        <h3 class="text-16 text-black font-inter-medium block mb-8">Project Name</h3>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="10">
            What stage is the project in?
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="Select requested by"
              options={props.allUsers}
              handleChange={handleChange}
              value={selectedRequestedByOptions}
              setFieldValue={formik.setFieldValue}
              name="stage"
              handleBlur={() => formik.setFieldTouched("stage")}
              error={errors?.stage && touched?.stage}
              isMulti
            />
          </div>
        </div>

        <div className="form-control">
          <label className="field-label text-left mb-4" tabIndex="10">
            What activities are still outstanding?
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <ul>
            <li className="flex justify-between mb-4">
              <label
                htmlFor="activities"
                className="text-16 leading-19 text-black font-inter-regular tracking-tight flex"
              >
                <input
                  type="checkbox"
                  id="activities"
                  name="activities"
                  className="appearance-none w-4 h-4 bg-white rounded-4 border border-fieldOutline checked:bg-primary mr-2.5 relative top-1"
                />
                <span className="pr-2.5 flex-1">Lorem ipsum dolor sit amet</span>
              </label>
            </li>
            <li className="flex justify-between mb-4">
              <label
                htmlFor="activities"
                className="text-16 leading-19 text-black font-inter-regular tracking-tight flex"
              >
                <input
                  type="checkbox"
                  id="activities"
                  name="activities"
                  className="appearance-none w-4 h-4 bg-white rounded-4 border border-fieldOutline checked:bg-primary mr-2.5 relative top-1"
                />
                <span className="pr-2.5 flex-1">Lorem ipsum dolor sit amet</span>
              </label>
            </li>
            <li className="flex justify-between mb-4">
              <label
                htmlFor="activities"
                className="text-16 leading-19 text-black font-inter-regular tracking-tight flex"
              >
                <input
                  type="checkbox"
                  id="activities"
                  name="activities"
                  className="appearance-none w-4 h-4 bg-white rounded-4 border border-fieldOutline checked:bg-primary mr-2.5 relative top-1"
                />
                <span className="pr-2.5 flex-1">Lorem ipsum dolor sit amet</span>
              </label>
            </li>
          </ul>
        </div>

        <div className="form-control">
          <label className="field-label text-left mb-4" tabIndex="10">
            What collaborations are still outstanding?
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <ul>
            <li className="flex justify-between mb-4">
              <label
                htmlFor="collaborations"
                className="text-16 leading-19 text-black font-inter-regular tracking-tight flex"
              >
                <input
                  type="checkbox"
                  id="collaborations"
                  name="collaborations"
                  className="appearance-none w-4 h-4 bg-white rounded-4 border border-fieldOutline checked:bg-primary mr-2.5 relative top-1"
                />
                <span className="pr-2.5 flex-1">Lorem ipsum dolor sit amet</span>
              </label>
            </li>
            <li className="flex justify-between mb-4">
              <label
                htmlFor="collaborations"
                className="text-16 leading-19 text-black font-inter-regular tracking-tight flex"
              >
                <input
                  type="checkbox"
                  id="collaborations"
                  name="collaborations"
                  className="appearance-none w-4 h-4 bg-white rounded-4 border border-fieldOutline checked:bg-primary mr-2.5 relative top-1"
                />
                <span className="pr-2.5 flex-1">Lorem ipsum dolor sit amet</span>
              </label>
            </li>
            <li className="flex justify-between mb-4">
              <label
                htmlFor="collaborations"
                className="text-16 leading-19 text-black font-inter-regular tracking-tight flex"
              >
                <input
                  type="checkbox"
                  id="collaborations"
                  name="collaborations"
                  className="appearance-none w-4 h-4 bg-white rounded-4 border border-fieldOutline checked:bg-primary mr-2.5 relative top-1"
                />
                <span className="pr-2.5 flex-1">Lorem ipsum dolor sit amet</span>
              </label>
            </li>
          </ul>
        </div>

        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            Status notes
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <textarea
            rows="2"
            placeholder="What’s going on with the project?"
            value={formik.values.status}
            name="status"
            className={`custom-input-field  resize-none${
              errors?.status && touched?.status ? "border-error" : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            Project name
          </label>
          <input
            type="text"
            placeholder="Enter a project name"
            name="project_name"
            className={`custom-input-field ${
              errors?.project_name && touched?.project_name ? "border-error" : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.project_name}
          />
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="13">
            Are you being blocked in any way?
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <ul className="grid gap-3 grid-cols-2 mb-2.5">
            <li>
              <input
                type="radio"
                id="yes"
                name="blocked"
                value="yes"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.blocked === "yes"}
                values={values.blocked}
              />
              <label
                htmlFor="yes"
                tabIndex="15"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                YES
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="no"
                name="blocked"
                value="no"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.blocked === "no"}
                values={values.blocked}
              />
              <label
                htmlFor="no"
                tabIndex="16"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                No
              </label>
            </li>
          </ul>
          <textarea
            rows="2"
            placeholder="Please explain how you are blocked"
            value={formik.values.howBlocked}
            name="howBlocked"
            className={`custom-input-field  resize-none${
              errors?.howBlocked && touched?.howBlocked ? "border-error" : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="form-control">
          <label className="field-label text-left" tabIndex="13">
            Target design delivery date
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <ul className="grid gap-3 grid-cols-2 mb-2.5">
            <li>
              <input
                type="radio"
                id="quarter"
                name="design_delivery"
                value="quarter"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.design_delivery === "quarter"}
                values={values.design_delivery}
              />
              <label
                htmlFor="quarter"
                tabIndex="15"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                Quarter
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="date"
                name="design_delivery"
                value="date"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.design_delivery === "date"}
                values={values.design_delivery}
              />
              <label
                htmlFor="date"
                tabIndex="16"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                Date
              </label>
            </li>
          </ul>

          <Datepicker
            containerClassName="datepicker"
            inputClassName="custom-input-field"
            placeholder={"MM / DD / YYYY"}
            primaryColor={"blue"}
            useRange={false}
            asSingle={true}
            value={value}
            onChange={handleValueChange}
          />
        </div>

        <div className="form-control">
          <label className="field-label text-left" tabIndex="13">
            Are you on track to deliver the designs?
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <ul className="grid gap-3 grid-cols-2 mb-2.5">
            <li>
              <input
                type="radio"
                id="track_yes"
                name="track"
                value="yes"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.track === "yes"}
                values={values.track}
              />
              <label
                htmlFor="track_yes"
                tabIndex="15"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                YES
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="track_no"
                name="track"
                value="no"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.track === "no"}
                values={values.track}
              />
              <label
                htmlFor="track_no"
                tabIndex="16"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                No
              </label>
            </li>
          </ul>
          <textarea
            rows="2"
            placeholder="Please explain how you are blocked"
            value={formik.values.howBlocked}
            name="howBlocked"
            className={`custom-input-field  resize-none${
              errors?.howBlocked && touched?.howBlocked ? "border-error" : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="form-control">
          <label className="field-label text-left" tabIndex="10">
            Target engineering launch quarter
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="Select a quarter"
              options={props.allUsers}
              handleChange={handleChange}
              value={selectedRequestedByOptions}
              setFieldValue={formik.setFieldValue}
              name="quarter"
              handleBlur={() => formik.setFieldTouched("quarter")}
              error={errors?.quarter && touched?.quarter}
            />
          </div>
        </div>

        <div className="form-control">
          <label className="field-label text-left" tabIndex="13">
            Would you like to review with DLT?
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <ul className="grid gap-3 grid-cols-2 mb-2.5">
            <li>
              <input
                type="radio"
                id="dlt_yes"
                name="dlt"
                value="yes"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.dlt === "yes"}
                values={values.dlt}
              />
              <label
                htmlFor="track_yes"
                tabIndex="15"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                YES
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="dlt_no"
                name="dlt"
                value="no"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.dlt === "no"}
                values={values.dlt}
              />
              <label
                htmlFor="track_no"
                tabIndex="16"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                Not right now
              </label>
            </li>
          </ul>
          <textarea
            rows="2"
            placeholder="What would you like to review?"
            value={formik.values.review}
            name="review"
            className={`custom-input-field  resize-none${
              errors?.review && touched?.review ? "border-error" : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="border-b border-[#E8EDF4]  mb-7"></div>
        <h3 class="text-16 text-black font-inter-medium block mb-6">Project details (Optional)</h3>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="10">
            T-shirt size
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="Select a quarter"
              options={props.allUsers}
              handleChange={handleChange}
              value={selectedRequestedByOptions}
              setFieldValue={formik.setFieldValue}
              name="tshirt"
              handleBlur={() => formik.setFieldTouched("tshirt")}
              error={errors?.tshirt && touched?.tshirt}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="10">
            Project summary
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <textarea
            rows="2"
            placeholder="What is this project about?"
            value={formik.values.summary}
            name="summary"
            className={`custom-input-field  resize-none${
              errors?.summary && touched?.summary ? "border-error" : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="10">
            Team
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="Select a quarter"
              options={props.allUsers}
              handleChange={handleChange}
              value={selectedRequestedByOptions}
              setFieldValue={formik.setFieldValue}
              name="team"
              handleBlur={() => formik.setFieldTouched("team")}
              error={errors?.team && touched?.team}
              isMulti
            />
          </div>
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="10">
            Impacted team(s)
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="Select a quarter"
              options={props.allUsers}
              handleChange={handleChange}
              value={selectedRequestedByOptions}
              setFieldValue={formik.setFieldValue}
              name="impacted"
              handleBlur={() => formik.setFieldTouched("impacted")}
              error={errors?.impacted && touched?.impacted}
              isMulti
            />
          </div>
        </div>

        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            PRD link
          </label>
          <input
            type="text"
            placeholder="https://"
            tabIndex="3"
            name="prd"
            className={`custom-input-field ${
              errors?.prd && touched?.prd ? "border-error" : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.prd}
          />
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            Figma link
          </label>
          <input
            type="text"
            placeholder="https://"
            tabIndex="3"
            name="figma"
            className={`custom-input-field ${
              errors?.figma && touched?.figma ? "border-error" : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.figma}
          />
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            Project Chat URL
          </label>
          <input
            type="text"
            placeholder="Chat URL"
            name="Chat_url"
            className={`custom-input-field ${
              errors?.Chat_url && touched?.Chat_url ? "border-error" : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Chat_url}
          />
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            Design POC
          </label>
          <input
            type="text"
            placeholder="Design POC"
            name="design_poc"
            className={`custom-input-field ${
              errors?.design_poc && touched?.design_poc ? "border-error" : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.design_poc}
          />
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            Product POC
          </label>
          <input
            type="text"
            placeholder="Product POC"
            name="product_poc"
            className={`custom-input-field ${
              errors?.product_poc && touched?.product_poc ? "border-error" : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.product_poc}
          />
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            Eng Lead
          </label>
          <input
            type="text"
            placeholder="Eng Lead"
            tabIndex="3"
            name="lead"
            className={`custom-input-field ${
              errors?.lead && touched?.lead ? "border-error" : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lead}
          />
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            Content POC
          </label>
          <input
            type="text"
            placeholder="Content POC"
            name="content_poc"
            className={`custom-input-field ${
              errors?.content_poc && touched?.content_poc ? "border-error" : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content_poc}
          />
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            TPM POC
          </label>
          <input
            type="text"
            placeholder="TPM POC"
            name="tpm_poc"
            className={`custom-input-field ${
              errors?.tpm_poc && touched?.tpm_poc ? "border-error" : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.tpm_poc}
          />
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            Development team
          </label>
          <input
            type="text"
            placeholder=" Development Team"
            name="development"
            className={`custom-input-field ${
              errors?.development && touched?.development ? "border-error" : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.development}
          />
        </div>
      </div>
      <div className="modal-footer border-t border-t-fieldOutline p-6 flex flex-wrap items-center justify-end fixed left-0 right-0 bottom-0 bg-white z-50">
        <Button
          classes="custom-button custom-button-large custom-button-fill-primary w-auto"
          attributes={{
            type: "button",
            disabled:
              Object.keys(errors).length > 0 || (!props.editMode && Object.keys(touched).length < 1)
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

export default StatusUpdate;
