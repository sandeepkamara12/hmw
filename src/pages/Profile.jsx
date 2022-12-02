import React, { useEffect, useState } from "react";
import Button from "../components/FormElements/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import TimezoneSelect from "react-timezone-select";
import Select from "../components/FormElements/Select";
import Tooltip from "../components/Tooltip";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import * as Yup from "yup";
import SignOutButton from "../components/FormElements/SignOutButton";
import { useSelector, useDispatch } from "react-redux";
import userService from "./../services/userService";
import { userActions } from "./../store/slices/userSlice";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [phone, setPhone] = useState("");
  const [validationError, setValidationError] = useState();
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(false);
  const [initiativeBy, setInitiativeBy] = useState("quarter");
  const loggedInUser = useSelector((state) => state.user.userInfo);
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  const SignupSchema = Yup.object().shape({
    full_name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone_number: Yup.string("Invalid email").required("Required"),
    preferred_language: Yup.string().required("Required"),
    quarter_month: initiativeBy === "quarter" ? Yup.string().required("Required") : null,
    quarter_design: Yup.string().required("Required"),
    timezone: Yup.string().required(),
  });

  const languageOptions = [
    { value: "English", label: "English" },
    { value: "廣東話", label: "廣東話" },
    { value: "普通话", label: "普通话" },
    { value: "हिन्दी", label: "हिन्दी" },
    { value: "Español", label: "Español" },
    { value: "Français", label: "Français" },
    { value: "日本語", label: "日本語" },
    { value: "Tiếng Việt", label: "Tiếng Việt" },
    { value: "اَلْعَرَبِيَّةُ", label: "اَلْعَرَبِيَّةُ" },
    { value: "বাংলা", label: "বাংলা" },
    { value: "русский", label: "русский" },
    { value: "Português", label: "Português" },
    { value: "Bahasa Indonesia", label: "Bahasa Indonesia" },
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

  const designInitiativeValues = [
    { value: "1-3", label: "1-3" },
    { value: "4-6", label: "4-6" },
    { value: "6+", label: "6+" },
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
        border:
          errors?.preferred_language && touched?.timezone
            ? "1px solid rgb(var(--color-error) / 1)!important"
            : "1px solid rgb(var(--color-fieldOutline) / 1)!important",
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

  ////  Formik /////

  const initialValues = {
    full_name: "",
    phone_number: "",
    email: "",
    timezone: "",
    preferred_language: "",
    quarter_month: "",
    quarter_design: "",
    user_id: "",
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

  useEffect(() => {
    loggedInUser.sign_in_method === "phone"
      ? setFieldValue("phone_number", loggedInUser.phone_number) &&
        setPhone(loggedInUser.phone_number.slice(1))
      : setFieldValue("email", loggedInUser.email);
    setFieldValue("user_id", loggedInUser._id);
    if (!loggedInUser.is_updated) {
      navigate("/profile-setup");
    } else if (location.pathname === "/profile-setup" && loggedInUser.is_updated) {
      navigate("/projects");
    }
  }, [loggedInUser]);

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

    const updatedValues = { ...values, phone_number: `+${phone}` };
    try {
      const res = await userService.updateProfile(updatedValues);
      if (res) {
        resetForm();
        const temp = { ...loggedInUser, is_updated: true };
        dispatch(userActions.userInfo(temp));
        localStorage.setItem("user", JSON.stringify(temp));
        navigate("/projects");
      }
      setShowLoader(false);
    } catch (err) {
      setShowLoader(false);
      console.log(err);
    }
  };

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
                name="full_name"
                placeholder="Add your name"
                className={
                  errors?.full_name && touched?.full_name
                    ? "custom-input-field border-error "
                    : "custom-input-field !bg-white"
                }
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.full_name}
              />

              {/* {errors.fullName ? <div className="field-label-error">{errors.fullName}</div> : null} */}
            </div>

            {loggedInUser.sign_in_method === "phone" && (
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
                  className={
                    errors?.email && touched?.email
                      ? "custom-input-field border-error"
                      : "custom-input-field !bg-white"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* {errors.email ? <div className="field-label-error">{errors.email}</div> : null} */}
              </div>
            )}

            {loggedInUser.sign_in_method === "email" && (
              <div className="form-control">
                <label className="field-label text-left">phone number</label>
                <PhoneInput
                  country={"us"}
                  value={values.phone}
                  onChange={(phoneNumber, country, e) => {
                    handleChange(e);
                    setPhone(phoneNumber);
                  }}
                  // onBlur={handleBlur}
                  containerClass="mb-7"
                  // searchClass="country-code-search"
                  enableSearch
                  searchPlaceholder="Search"
                  autocompleteSearch={true}
                  disableSearchIcon
                  inputClass={`custom-input-field ${
                    (errors?.phone_number && touched?.phone_number) || phoneNumberIsValid
                      ? "border !border-red-500"
                      : "!bg-white"
                  }`}
                  inputProps={{
                    name: "phone_number",
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
                    handleBlur(e);
                  }}
                  onFocus={(e) => {
                    setPhoneNumberIsValid(false);
                  }}
                />
                {validationError?.length && (
                  <span className="field-label-error field-error field-label">
                    {validationError}
                  </span>
                )}
              </div>
            )}

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
                  value={values.timezone}
                  onChange={(selectedOption) => {
                    let event = {
                      target: { name: "timezone", value: selectedOption.value },
                    };
                    handleChange(event);
                  }}
                  placeholder="Select a timezone"
                  styles={customStyles}
                  name="timezone"
                  onBlur={() => formik.setFieldTouched("timezone")}
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
                  // changeEvent={(val) => handleChange(val)}
                  handleChange={handleChange}
                  value={formik.values.language}
                  name="preferred_language"
                  handleBlur={() => formik.setFieldTouched("preferred_language")}
                  error={errors?.preferred_language && touched?.preferred_language}
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
                    checked={initiativeBy === "quarter"}
                    onChange={(e) => {
                      setInitiativeBy(e.target.value);
                    }}
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
                    checked={initiativeBy === "client"}
                    onChange={(e) => {
                      setInitiativeBy(e.target.value);
                    }}
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
                    checked={initiativeBy === "other"}
                    onChange={(e) => {
                      setInitiativeBy(e.target.value);
                    }}
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
            {initiativeBy === "quarter" && (
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
                    handleChange={handleChange}
                    value={formik.values.quarter_month}
                    name="quarter_month"
                    handleBlur={() => formik.setFieldTouched("quarter_month")}
                    error={errors?.quarter_month && touched?.quarter_month}
                  />
                </div>
              </div>
            )}
            <div className="form-control text-left">
              <label className="field-label text-left" tabIndex="21">
                {initiativeBy === "quarter"
                  ? "How many design initiatives do you complete each quarter?"
                  : "How many design initiatives do you complete each 3 months?"}
              </label>
              <div className="select-wrapper" tabIndex="22">
                <Select
                  placeholder="Select an option"
                  options={designInitiativeValues}
                  handleChange={handleChange}
                  value={formik.values.quarter_design}
                  name="quarter_design"
                  handleBlur={() => formik.setFieldTouched("quarter_design")}
                  error={errors?.quarter_design && touched?.quarter_design}
                />
              </div>
            </div>
            <Button
              tabIndex="23"
              classes="custom-button custom-button-large custom-button-fill-primary"
              attributes={{
                disabled: Object.keys(errors).length ? true : false,
                loader: showLoader,
                value: "Submit",
                clickEvent: handleSubmit,
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
