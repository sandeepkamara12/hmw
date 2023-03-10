import React, { useEffect, useState, useRef } from "react";
import Button from "../components/FormElements/Button";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import authService from "./../services/authService";
import VerificationWithEmail from "../components/Auth/VerificationWithEmail";
import { toastSuccess } from "../utils/toast";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useFormik } from "formik";
import * as yup from "yup";

const SigninEmail = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [showLoader, setShowLoader] = useState(false);
  const [email, setEmail] = useState(null);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [validationError, setValidationError] = useState();
  const [showVWEComponent, setShowVWEComponent] = useState(false);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const textRef = useRef();
  const initialValues = {
    email: "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async (values) => {
      submitHandler(values.email);
    },
  });

  const { values, errors, handleChange, handleSubmit, resetForm, handleBlur } =
    formik;

  useEffect(() => {
    isLoggedIn === true && navigate("/profile-setup", { replace: true });
  }, [isLoggedIn]);

  useEffect(() => {
    document.title = `Sign in – HMW`;
  }, []);
  const submitHandler = async (email, resend = false) => {
    setShowLoader(true);
    try {
      const res = await authService.requestVerificationCodeByEmail(email);
      if (res) {
        setShowVWEComponent(true);
        setShowLoader(false);
        if (resend) {
          toastSuccess("Code resend succesfully!");
        }
      }
      setShowLoader(false);
    } catch (err) {
      setShowLoader(false);
    }
  };

  // useEffect(() => {
  //   if (isMobile) {
  //     var target = document.getElementsByTagName("input")[0];

  //     if (target) {
  //       // target.addEventListener("click", function () {
  //       //   alert("sdf");
  //       // });
  //       target.focus();
  //       target.click();
  //     }
  //   }
  // }, []);

  useEffect(() => {
    if (isMobile) {
      if (textRef.current) {
        textRef.current.focus();
      }
      // textRef.current.click();
    }
  }, []);

  return (
    <>
      {!showVWEComponent && (
        <div className="custom-container text-center">
          <div className="header hidden sm:block">
            <Link to="/" className="mx-auto mb-20 mt-9 inline-block">
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
          <div className="custom-small-container">
            <h1 className="headingOne">{t("signin")}</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="field-label text-left">email</label>
                <input
                  type="text"
                  name="email"
                  ref={textRef}
                  className={`custom-input-field ${
                    errors.email
                      ? "border !border-red-500 focus:!border-red-500"
                      : "!bg-white"
                  }`}
                  placeholder={t("email")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoFocus
                />
              </div>
              <Button
                classes="custom-button custom-button-large custom-button-fill-primary"
                attributes={{
                  type: "submit",
                  disabled: false,
                  value: "requestVerificationCode",
                  loader: showLoader,
                }}
              />
            </form>
          </div>
          <div className="custom-small-container border-none py-0">
            <Link to="/" className="textLink mb-11">
              {t("usePhoneNumber")}
            </Link>
            <p className="content">
              By selecting ‘Request verification code’ you agree to our{" "}
              <Link to="/terms" className="normalLink">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      )}
      {showVWEComponent && (
        <VerificationWithEmail
          email={values.email}
          hideVWEComponent={() => setShowVWEComponent(false)}
          resendCode={(email) => submitHandler(email, true)}
        />
      )}
    </>
  );
};

export default SigninEmail;
