import React, { useState, useEffect } from "react";
import Tooltip from "../Tooltip";
import "react-range-slider-input/dist/style.css";
import Select from "../../components/FormElements/Select";
import { useFormik } from "formik";
import Button from "../FormElements/Button";
import * as Yup from "yup";
import taskService from "./../../services/taskService";

const AddTask = (props) => {
  const [showLoader, setShowLoader] = useState(false);
  ////  Formik /////
  const addTaskSchema = Yup.object().shape({
    task_name: Yup.string().required("Required"),
    assigned_to: Yup.array().required("Required").min(1),
    project_type: Yup.string().required("Required"),
    time_est: Yup.string().required("Required"),
    section_id: Yup.string().required("Required"),
  });

  const initialValues = {
    task_name: "",
    assigned_to: null,
    project_type: "kickoff",
    time_est: "1h",
    section_id: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: addTaskSchema,
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

  const submitHandler = async (values) => {
    setShowLoader(true);
    const updatedValues = {
      ...values,
    };
    updatedValues.active = true;
    updatedValues.project_id = props.project._id;
    try {
      const res = await taskService.saveTask(updatedValues);
      if (res) {
        resetForm();
        props.closeModal();
        props.renderProjectDetails();
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
          <label htmlFor="title" className="field-label text-left" tabIndex="2">
            Title
          </label>
          <input
            type="text"
            name="task_name"
            className={
              errors?.task_name && touched?.task_name
                ? "custom-input-field border-error "
                : "custom-input-field !bg-white"
            }
            onChange={handleChange}
            onBlur={handleBlur}
            value={formik.values.task_name}
            placeholder="Onboarding project title"
            tabIndex="3"
          />
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="10">
            Select Section
            <Tooltip
              tabIndex="11"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="Select a section"
              options={props.sectionOptions}
              handleChange={handleChange}
              value={formik.values.section_id}
              name="section_id"
              handleBlur={() => formik.setFieldTouched("section_id")}
              error={errors?.section_id && touched?.section_id}
            />
          </div>
        </div>
        <div className="form-control">
          <label
            htmlFor="track"
            className="field-label text-left"
            tabIndex="10"
          >
            Assigned to
          </label>
          <div className="select-wrapper" tabIndex="12">
            <Select
              placeholder="Select a user"
              options={props.assignedToOptions}
              handleChange={handleChange}
              value={formik.values.assigned_to}
              setFieldValue={formik.setFieldValue}
              name="assigned_to"
              handleBlur={() => formik.setFieldTouched("assigned_to")}
              error={errors?.assigned_to && touched?.assigned_to}
              isMulti
            />
          </div>
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="13">
            Project type
            <Tooltip
              tabIndex="14"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </label>
          <ul
            className="grid gap-3 grid-cols-3 mb-7"
            role="group"
            aria-labelledby="my-radio-group"
          >
            <li>
              <input
                type="radio"
                id="kickoff"
                name="project_type"
                value="kickoff"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.project_type === "kickoff"}
                values={values.project_type}
              />
              <label
                htmlFor="kickoff"
                tabIndex="15"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                Kickoff
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="produce"
                name="project_type"
                value="produce"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.project_type === "produce"}
                values={values.project_type}
              />
              <label
                htmlFor="produce"
                tabIndex="16"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                Produce
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="review"
                name="project_type"
                value="review"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.project_type === "review"}
                values={values.project_type}
              />
              <label
                htmlFor="review"
                tabIndex="16"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                Review
              </label>
            </li>
          </ul>
        </div>
        <div className="form-control">
          <label className="field-label text-left" tabIndex="13">
            Time estimate
          </label>
          <ul className="grid gap-3 grid-cols-5 mb-7">
            <li>
              <input
                type="radio"
                id="one_hour"
                name="time_est"
                value="1h"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.time_est === "1h"}
                values={values.time_est}
              />
              <label
                htmlFor="one_hour"
                tabIndex="15"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                1h
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="two_hour"
                name="time_est"
                value="2h"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.time_est === "2h"}
                values={values.time_est}
              />
              <label
                htmlFor="two_hour"
                tabIndex="16"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                2h
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="four_hour"
                name="time_est"
                value="4h"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.time_est === "4h"}
                values={values.time_est}
              />
              <label
                htmlFor="four_hour"
                tabIndex="16"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                4h
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="eight_hour"
                name="time_est"
                value="8h"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.time_est === "8h"}
                values={values.time_est}
              />
              <label
                htmlFor="eight_hour"
                tabIndex="16"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                8h
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="eight_plus"
                name="time_est"
                value="8h+"
                className="hidden peer"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.time_est === "8h+"}
                values={values.time_est}
              />
              <label
                htmlFor="eight_plus"
                tabIndex="16"
                className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
              >
                8h+
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="modal-footer border-t border-t-fieldOutline p-6 flex flex-wrap items-center justify-end fixed left-0 right-0 bottom-0 bg-white z-50">
        <Button
          classes="custom-button custom-button-large custom-button-fill-primary w-auto"
          attributes={{
            type: "button",
            disabled:
              Object.keys(errors).length > 0 || Object.keys(touched).length < 1
                ? true
                : false,
            value: "Save task",
            clickEvent: () => handleSubmit(),
            loader: showLoader,
          }}
        />
      </div>
    </>
  );
};

export default AddTask;
