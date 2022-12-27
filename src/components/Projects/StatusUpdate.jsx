import React, { useState, forwardRef, useEffect } from "react";
import Tooltip from "../Tooltip";
import RangeSlider from "react-range-slider-input";
import Select from "../FormElements/Select";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../FormElements/Button";
import projectService from "./../../services/projectService";
import { TSHIRT_SIZES, STATUS_STAGES } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import statusStagesData from "./../../local-json/status-stages.json";
import quarters from "../../utils/quarters";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StatusUpdate = forwardRef((props, ref) => {
  const [rangeValue, setRangeValue] = useState(10);
  const [showLoader, setShowLoader] = useState(false);
  const [timeCommit, setTimeCommitRange] = useState(0);
  const navigate = useNavigate();
  const [activitesOptions, setActivitesOptions] = useState([]);
  const [collaborationsOptions, setCollaborationsOptions] = useState([]);

  const requestedByOptions = [
    { value: "john-doe", label: "John Doe" },
    { value: "petersan", label: "Mr. Petersan" },
    { value: "harsh-vardhan", label: "Harsh Vardhan" },
  ];

  const statusUpdateSchema = Yup.object().shape({
    blocked: Yup.string().required("Required"),
    status_notes: Yup.string().required("Required"),
    stage: Yup.string().required("Required"),
    blocked_notes: Yup.string().required("Required"),
    eng_launch_quarter: Yup.string().required("Required"),
    dlt_review_notes: Yup.string().required("Required"),
    on_track_notes: Yup.string().required("Required"),
    design_delivery_date: Yup.string().required("Required"),
  });

  const initialValues = {
    stage: props.project?.stage || "Not started",
    outstanding_activities: props.project?.outstanding_activities || "",
    outstanding_collaborations: props.project?.outstanding_collaborations || "",
    status_notes: props.project?.status_notes || "",
    blocked: props.project?.blocked || "true",
    blocked_notes: props.project?.blocked_notes || "",
    design_delivery_date: props.project?.design_delivery_date || "",
    eng_launch_quarter: props.project?.eng_launch_quarter || "",
    design_delivery_date_method: props.project?.design_delivery_date_method || "quarter",
    on_track: props.project?.on_track || "true",
    on_track_notes: props.project?.on_track_notes || "",
    quarter: props.project?.quarter || "",
    review_with_dlt: props.project?.review_with_dlt || "true",
    dlt_review_notes: props.project?.dlt_review_notes || "",
    teams: props.project?.teams || null,
    impacted_teams: props.project?.impacted_teams || null,
    figma_link: props.project?.figma_link || null,
    prd_link: props.project?.prd_link || null,
    chat_url: props.project?.chat_url || null,
    design_poc: props.project?.design_poc || null,
    product_poc: props.project?.product_poc || null,
    eng_lead: props.project?.eng_lead || null,
    content_poc: props.project?.content_poc || null,
    tpm_poc: props.project?.tpm_poc || null,
    development_team: props.project?.development_team || null,
  };

  let selectedRequestedByOptions = [{ value: "Not started", label: "Not started" }];

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
    validationSchema: statusUpdateSchema,
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
        }
      }
      setShowLoader(false);
    } catch (err) {
      setShowLoader(false);
      console.log(err);
    }
  };

  const [startDate, setStartDate] = useState(new Date());

  const handleStageChange = (stage = "Not started") => {
    setActivitesOptions(statusStagesData.stages[stage].activities);
    setCollaborationsOptions(statusStagesData.stages[stage].collaborations);
  };

  useEffect(() => {
    handleStageChange(values.stage);
  }, [values.stage]);
  return (
    <>
      <div className="px-6 lg:px-8 custom-modal">
        <h3 className="text-16 text-black font-inter-medium block mb-8">Project Name</h3>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="10">
            What stage is the project in?
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="Select stage"
              options={STATUS_STAGES}
              handleChange={handleChange}
              value={selectedRequestedByOptions}
              setFieldValue={formik.setFieldValue}
              name="stage"
              handleBlur={() => formik.setFieldTouched("stage")}
              error={errors?.stage && touched?.stage}
              isNotCreateable={true}
            />
          </div>
        </div>

        {activitesOptions?.length && (
          <div className="form-control">
            <label className="field-label text-left mb-4" tabIndex="10">
              What activities are still outstanding?
              <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </label>
            <ul>
              {activitesOptions.map((activity, index) => {
                return (
                  <li className="flex justify-between mb-4" key={index}>
                    <label
                      htmlFor="outstanding_activities"
                      className="text-16 leading-19 text-black font-inter-regular tracking-tight flex"
                    >
                      <input
                        type="checkbox"
                        id="outstanding_activities"
                        name="outstanding_activities"
                        className="appearance-none w-4 h-4 bg-white rounded-4 border border-fieldOutline checked:bg-primary mr-2.5 relative top-1"
                      />
                      <span className="pr-2.5 flex-1">{activity}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {collaborationsOptions?.length && (
          <div className="form-control">
            <label className="field-label text-left mb-4" tabIndex="10">
              What collaborations are still outstanding?
              <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </label>
            <ul>
              {collaborationsOptions.map((collaboration, index) => {
                return (
                  <li className="flex justify-between mb-4" key={index}>
                    <label
                      htmlFor="outstanding_collaborations"
                      className="text-16 leading-19 text-black font-inter-regular tracking-tight flex"
                    >
                      <input
                        type="checkbox"
                        id="outstanding_collaborations"
                        name="outstanding_collaborations"
                        className="appearance-none w-4 h-4 bg-white rounded-4 border border-fieldOutline checked:bg-primary mr-2.5 relative top-1"
                      />
                      <span className="pr-2.5 flex-1">{collaboration}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            Status notes
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <textarea
            rows="2"
            placeholder="What’s going on with the project?"
            value={values.status}
            name="status_notes"
            className={`custom-input-field  resize-none ${
              errors?.status_notes && touched?.status_notes ? "border-error" : "!bg-white"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
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
                value="true"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.blocked === "true"}
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
                value=""
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.blocked === ""}
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
          {values.blocked && (
            <textarea
              rows="2"
              placeholder="Please explain how you are blocked"
              value={values.blocked_notes}
              name="blocked_notes"
              className={`custom-input-field  resize-none ${
                errors?.blocked_notes && touched?.blocked_notes ? "border-error" : "!bg-white"
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
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
                name="design_delivery_date_method"
                value="quarter"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.design_delivery_date_method === "quarter"}
                values={values.design_delivery_date_method}
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
                name="design_delivery_date_method"
                value="date"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.design_delivery_date_method === "date"}
                values={values.design_delivery_date_method}
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
          {values.design_delivery_date_method === "quarter" ? (
            <div className="form-control">
              <div className="select-wrapper" tabIndex="12">
                <Select
                  placeholder="Select quarter"
                  options={quarters}
                  handleChange={handleChange}
                  value={values.design_delivery_date}
                  setFieldValue={formik.setFieldValue}
                  name="design_delivery_date"
                  handleBlur={() => formik.setFieldTouched("design_delivery_date")}
                  error={errors?.design_delivery_date && touched?.design_delivery_date}
                  isNotCreateable={true}
                />
              </div>
            </div>
          ) : (
            <DatePicker
              className="!text-16
              !leading-20
              font-normal
              font-inter-regular
              text-black !w-full
              !h-auto
              !bg-fieldBg focus:!bg-fieldBg
              border border-fieldOutline focus:!border-primary focus:outline-none focus-visible:outline-none
              invalid:border-error
              !rounded-3 !p-4 !py-3.5
              placeholder:text-fieldNoFocus focus:placeholder:text-placeholder focus-visible:outline-none;"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          )}
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
                name="on_track"
                value="true"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.on_track === "true"}
                values={values.on_track}
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
                name="on_track"
                value=""
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.on_track === ""}
                values={values.on_track}
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
          {values.on_track && (
            <textarea
              rows="2"
              placeholder="Please explain how you are blocked"
              value={formik.values.on_track_notes}
              name="on_track_notes"
              className={`custom-input-field  resize-none ${
                errors?.on_track_notes && touched?.on_track_notes ? "border-error" : "!bg-white"
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
        </div>

        <div className="form-control">
          <label className="field-label text-left" tabIndex="10">
            Target engineering launch quarter
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="Select a quarter"
              options={quarters}
              handleChange={handleChange}
              value={values.eng_launch_quarter}
              setFieldValue={formik.setFieldValue}
              name="eng_launch_quarter"
              handleBlur={() => formik.setFieldTouched("eng_launch_quarter")}
              error={errors?.eng_launch_quarter && touched?.eng_launch_quarter}
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
                name="review_with_dlt"
                value="true"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.review_with_dlt === "true"}
                values={values.review_with_dlt}
              />
              <label
                htmlFor="dlt_yes"
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
                name="review_with_dlt"
                value=""
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.review_with_dlt === ""}
                values={values.review_with_dlt}
              />
              <label
                htmlFor="dlt_no"
                tabIndex="16"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                Not right now
              </label>
            </li>
          </ul>
          {values.review_with_dlt && (
            <textarea
              rows="2"
              placeholder="What would you like to review?"
              value={formik.values.dlt_review_notes}
              name="dlt_review_notes"
              className={`custom-input-field  resize-none ${
                errors?.dlt_review_notes && touched?.dlt_review_notes ? "border-error" : "!bg-white"
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
        </div>

        <div className="border-b border-[#E8EDF4]  mb-7"></div>
        <h3 className="text-16 text-black font-inter-medium block mb-6">
          Project details (Optional)
        </h3>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="10">
            T-shirt size
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="Select size"
              options={TSHIRT_SIZES}
              handleChange={handleChange}
              setFieldValue={formik.setFieldValue}
              name="t_shirt_size"
              handleBlur={() => formik.setFieldTouched("t_shirt_size")}
              error={errors?.t_shirt_size && touched?.t_shirt_size}
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
              placeholder="Select a team"
              options={[]}
              handleChange={handleChange}
              setFieldValue={formik.setFieldValue}
              name="teams"
              handleBlur={() => formik.setFieldTouched("teams")}
              error={errors?.teams && touched?.team}
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
              placeholder="Select a team"
              options={[]}
              handleChange={handleChange}
              setFieldValue={formik.setFieldValue}
              name="impacted_teams"
              handleBlur={() => formik.setFieldTouched("impacted_teams")}
              error={errors?.impacted_teams && touched?.impacted_teams}
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
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="Design Poc"
              options={[]}
              handleChange={handleChange}
              setFieldValue={formik.setFieldValue}
              name="design_poc"
              handleBlur={() => formik.setFieldTouched("design_poc")}
              error={errors?.design_poc && touched?.design_poc}
              isMulti
            />
          </div>
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            Product POC
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="Product Poc"
              options={[]}
              handleChange={handleChange}
              setFieldValue={formik.setFieldValue}
              name="product_poc"
              handleBlur={() => formik.setFieldTouched("product_poc")}
              error={errors?.product_poc && touched?.product_poc}
              isMulti
            />
          </div>
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            Eng Lead
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="Eng Lead"
              options={[]}
              handleChange={handleChange}
              setFieldValue={formik.setFieldValue}
              name="eng_lead"
              handleBlur={() => formik.setFieldTouched("eng_lead")}
              error={errors?.eng_lead && touched?.eng_lead}
              isMulti
            />
          </div>
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            Content POC
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder=" Content POC"
              options={[]}
              handleChange={handleChange}
              setFieldValue={formik.setFieldValue}
              name="content_poc"
              handleBlur={() => formik.setFieldTouched("content_poc")}
              error={errors?.content_poc && touched?.content_poc}
              isMulti
            />
          </div>
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            TPM POC
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="TPM POC"
              options={[]}
              handleChange={handleChange}
              setFieldValue={formik.setFieldValue}
              name="tpm_poc"
              handleBlur={() => formik.setFieldTouched("tpm_poc")}
              error={errors?.tpm_poc && touched?.tpm_poc}
              isMulti
            />
          </div>
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="2">
            Development team
            <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="Development team"
              options={[]}
              handleChange={handleChange}
              setFieldValue={formik.setFieldValue}
              name="development_team"
              handleBlur={() => formik.setFieldTouched("development_team")}
              error={errors?.development_team && touched?.development_team}
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
              Object.keys(errors).length > 0 || (!props.editMode && Object.keys(touched).length < 1)
                ? true
                : false,
            value: "Save status",
            clickEvent: () => handleSubmit(),
            loader: showLoader,
          }}
        />
      </div>
    </>
  );
});

export default StatusUpdate;
