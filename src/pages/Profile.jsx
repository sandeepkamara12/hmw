import React, { useState } from "react";
import Button from "../components/FormElements/Button";
import { Link, useNavigate } from "react-router-dom";
import TimezoneSelect from "react-timezone-select";
import Select from "../components/FormElements/Select";
import Tooltip from "../components/Tooltip";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import * as Yup from "yup";
import SignOutButton from "../components/FormElements/SignOutButton";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()

    .min(2, "Too Short!")

    .max(50, "Too Long!")

    .required("Required"),

  lastName: Yup.string()

    .min(2, "Too Short!")

    .max(50, "Too Long!")

    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
});

const Profile = () => {
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate("/verification-email");
  };

  const [phone, setPhone] = useState("");
  const [validationError, setValidationError] = useState();
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(false);

  const languageOptions = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "german", label: "German" },
  ];
  const monthOptions = [
    { value: "january", label: "January" },
    { value: "february", label: "February" },
    { value: "march", label: "March" },
    { value: "april", label: "April" },
    { value: "may", label: "May" },
    { value: "june", label: "June" },
    { value: "july", label: "July" },
    { value: "august", label: "August" },
    { value: "septmember", label: "Septmember" },
    { value: "october", label: "October" },
    { value: "november", label: "November" },
    { value: "december", label: "December" },
  ];
  const customStyles = {
    option: (state, provided) => ({
      top: "51px",
      margin: 0,
      boxShadow: "none",
      border: "1px solid rgb(var(--color-fieldOutline) / 1)",
      borderTop: "none",
      fontSize: "16px",
      fontFamily: "InterRegular",
      textAlign: "left",
      borderRadius: 0,
      padding: "13px 16px",
      borderBottom: "1px solid rgb(var(--color-fieldOutline)/1)",
      cursor: "pointer",
      backgroundColor: provided.isSelected ? "rgba(var(--color-primary)/1)" : null,
      color: provided.isSelected
        ? "rgba(var(--color-white)/1)"
        : "rgb(var(--color-fieldNoFocus) / 1)",
      "&:hover": {
        backgroundColor: !provided.isSelected ? "rgb(var(--color-fieldBg))" : null,
      },
    }),
    menu: (provided) => ({
      ...provided,
      margin: 0,
      boxShadow: "none",
    }),
    menuList: (base, state) => ({
      ...base,
      padding: 0,
      border: state.selectProps.menuIsOpen ? "1px solid rgb(var(--color-primary)/1)" : null,
      borderTop: state.selectProps.menuIsOpen ? "none" : null,
      borderRadius: "0 0 4px 4px",
    }),
    control: () => ({
      width: "100%",
    }),
    valueContainer: () => ({
      padding: 0,
    }),
    placeholder: (state, provided) => ({
      margin: 0,
      padding: "0.875rem 1rem",
      position: "absolute",
      top: 0,
      left: 0,
      textIndent: "5px",
      fontSize: "1rem",
      lineHeight: "1.25rem",
      fontWeight: 400,
      fontFamily: "InterRegular",
      width: "100%",
      height: "51px",
      paddingRight: "50px",
      textAlign: "left",
      color: provided.isFocused ? "rgb(var(--color-placeholder)/1)" : "rgb(79, 79, 79, 1)",
      borderRadius: "4px",
    }),
    input: (state, provided) => ({
      borderRadius: "4px",
      marginBottom: "1.75rem",
      opacity: 1,
      'input[type="text"]': {
        borderRadius: "4px!important",
        padding: "0.875rem 1rem!important",
        fontSize: "1rem!important",
        lineHeight: "1.25rem!important",
        fontWeight: "400!important",
        color: "rgb(var(--color-black) / 1)!important",
        fontFamily: "InterRegular!important",
        opacity: 1,
        backgroundColor: "rgb(var(--color-fieldBg) / 1)!important",
        border: "1px solid rgb(var(--color-fieldOutline) / 1)!important",

        "&:focus": {
          backgroundColor: "rgb(var(--color-fieldBg) / 1)!important",
          color: "rgb(var(--color-placeholder)/1)",
          borderColor: "rgb(var(--color-primary))!important",
          borderRadius: provided.selectProps.menuIsOpen ? "4px 4px 0 0!important" : "4px!important",
          borderBottomColor: provided.selectProps.menuIsOpen
            ? "rgb(var(--color-black)/1)!important"
            : "rgb(var(--color-fieldOutline)/1)",
        },
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: () => ({
      color: "rgb(var(--color-primary)/1)",
      transition: "all .2s ease",
    }),
    indicatorsContainer: (state, provided) => ({
      position: "absolute",
      right: "10px",
      top: 0,
      height: "51px",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      transform: provided.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    }),
    singleValue: (state, provided) => ({
      border:
        provided.hasValue && !provided.selectProps.menuIsOpen
          ? "1.5px solid rgb(var(--color-fieldOutline)/1)"
          : "1.5px solid rgb(var(--color-primary)/1)",
      borderRadius: provided.hasValue && !provided.selectProps.menuIsOpen ? "4px" : "4px 4px 0 0",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      margin: 0,
      padding: "0.875rem 1rem",
      position: "absolute",
      top: 0,
      left: 0,
      fontSize: "1rem",
      lineHeight: "1.25rem",
      fontWeight: 400,
      fontFamily: "InterRegular",
      width: "100%",
      height: "51px",
      paddingRight: "50px!important",
      color: provided.hasValue ? "rgb(var(--color-black)/1)" : "rgb(var(--color-fieldNoFocus)/1)",
      textAlign: "left",
    }),
  };

  const handleChangeEvent = (value) => {
    console.log(value);
  };

  ////  Formik /////

  const initialValues = {
    fullName: "",
    email: "",
    selectedTimezone: "",
    language: "english",
    hosting: "",
    selectMonth: "january",
    designInitiatives: "january",
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      // const temp = values?.recievedParts?.filter((order) => order.selected);
      // dispatch(recievedOrders(temp));
      // handleClose();
      // resetForm();
      console.log(values);
    },
  });

  const { values, errors, handleChange, handleSubmit, setFieldValue, resetForm, handleBlur } =
    formik;

  return (
    <>
      <div className="custom-container text-center">
        <div className="header hidden sm:block">
          <Link to="/" tabIndex="1" className="mx-auto mb-20 mt-9 inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62"
              height="15"
              viewBox="0 0 62 15"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.2304 10.6421L23.2193 0L16.1406 14.4376H26.3695H30.0176H40.2464L33.4481 0L28.2304 10.6421Z"
                fill="#FE7A48"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50.7648 0.982422H40.252V9.7431C40.252 12.6461 42.6053 14.9995 45.5084 14.9995C48.4114 14.9995 50.7648 12.6461 50.7648 9.7431V0.982422ZM61.2793 0.982422H50.7664V9.7431C50.7664 12.6461 53.1198 14.9995 56.0229 14.9995C58.9259 14.9995 61.2793 12.6461 61.2793 9.7431V0.982422Z"
                fill="#044FF5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.72168 1.11987H6.74903V4.48188H9.13035V1.11987H15.1577V14.4361H9.13035V11.0699H6.74903V14.4361H0.72168V1.11987Z"
                fill="#FECD48"
              />
            </svg>
          </Link>
        </div>
        <div className="custom-small-container mb-10 border-b-none">
          <h1 className="headingOne">Profile</h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <div className="form-control text-left">
              <label className="field-label text-left" htmlFor="fullName">
                Full Name
              </label>
              <input
                name="fullName"
                placeholder="Add your name"
                className={
                  errors?.fullName ? "custom-input-field border-error " : "custom-input-field"
                }
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.fullName}
              />

              {errors.fullName ? <div className="field-label-error">{errors.fullName}</div> : null}
            </div>

            <div className="form-control text-left">
              <label className="field-label text-left" htmlFor="email">
                Work email (Required for 2FA)
                <Tooltip
                  tabIndex="5"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your work email"
                className={errors?.email ? "custom-input-field border-error" : "custom-input-field"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email ? <div className="field-label-error">{errors.email}</div> : null}
            </div>

            <div className="form-control">
              <label className="field-label text-left">phone number</label>
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                containerClass="mb-7"
                // searchClass="country-code-search"
                enableSearch
                searchPlaceholder="Search"
                autocompleteSearch={true}
                disableSearchIcon
                inputClass={`custom-input-field ${
                  phoneNumberIsValid ? "border !border-red-500" : "!bg-white"
                }`}
                inputProps={{
                  name: "phone",
                  required: true,
                  // autoFocus: true,
                  placeholder: "Phone number",
                }}
                onBlur={(e, country) => {
                  let _length = country.format.split(".").length - 1;
                  // startsWith(phone, country.dialCode) || startsWith(country.dialCode, phone);
                  if (!phone.length || phone.length !== _length) {
                    setPhoneNumberIsValid(true);
                  }
                }}
                onFocus={(e) => {
                  setPhoneNumberIsValid(false);
                }}
              />
              {validationError?.length && (
                <span className="field-label-error field-error field-label">{validationError}</span>
              )}
            </div>

            <div className="form-control text-left">
              <label className="field-label text-left" tabIndex="7">
                Timezone
                <Tooltip
                  tabIndex="8"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </label>
              <div className="select-wrapper" tabIndex="9">
                <TimezoneSelect
                  value={selectedTimezone}
                  onChange={setSelectedTimezone}
                  placeholder="Select a timezone"
                  styles={customStyles}
                  name="selectedTimezone"
                />
              </div>
            </div>

            <div className="form-control text-left">
              <label className="field-label text-left" tabIndex="10">
                Preferred language
                <Tooltip
                  tabIndex="11"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </label>
              <div className="select-wrapper" tabIndex="12">
                <Select
                  placeholder="Select a language"
                  options={languageOptions}
                  changeEvent={(val) => handleChangeEvent(val)}
                  value={formik.values.language}
                  name="language"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-control text-left">
              <label className="field-label text-left" tabIndex="13">
                My organization plans design initiatives by:
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
                    id="quarter"
                    name="hosting"
                    value="quarter"
                    className="hidden peer"
                    required
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="quarter"
                    tabIndex="15"
                    value="Quarter"
                    className="p-2.5 text-14 text-center font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
                  >
                    Quarter
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="client"
                    name="hosting"
                    value="client"
                    className="hidden peer"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="client"
                    tabIndex="16"
                    value="Client"
                    className="p-2.5 text-14 text-center font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
                  >
                    Client
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="other"
                    name="hosting"
                    value="other"
                    className="hidden peer"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="other"
                    tabIndex="17"
                    value="other"
                    className="p-2.5 text-14 text-center font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary"
                  >
                    Other
                  </label>
                </li>
              </ul>
            </div>
            <div className="form-control text-left">
              <label className="field-label text-left" tabIndex="18">
                What month does Q1 begin each year?
                <Tooltip
                  tabIndex="19"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </label>
              <div className="select-wrapper" tabIndex="20">
                <Select
                  placeholder="Select a month"
                  options={monthOptions}
                  name="selectMonth"
                  value={formik.values.selectMonth}
                  changeEvent={(val) => handleChangeEvent(val)}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-control text-left">
              <label className="field-label text-left" tabIndex="21">
                How many design initiatives do you complete each quarter?
              </label>
              <div className="select-wrapper" tabIndex="22">
                <Select
                  placeholder="Select an option"
                  options={monthOptions}
                  value={formik.values.designInitiatives}
                  name="designInitiatives"
                  changeEvent={(val) => handleChangeEvent(val)}
                  onChange={handleChange}
                />
              </div>
            </div>
            <Button
              tabIndex="23"
              classes="custom-button custom-button-large custom-button-fill-primary"
              attributes={{
                disabled: true,
                loader: false,
                value: "Submit",
                clickEvent: handleClick,
              }}
            />

            <div className="flex justify-center">
              <SignOutButton />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
