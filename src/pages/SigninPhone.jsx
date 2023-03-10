import React, { useState, useEffect, useCallback, useRef } from "react";
import Button from "../components/FormElements/Button";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import authService from "./../services/authService";
import VerificationWithPhone from "../components/Auth/VerificationWithPhone";
import { toastSuccess } from "../utils/toast";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import _debounce from "lodash/debounce";

const SigninPhone = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [validationError, setValidationError] = useState();
  const [phoneNumberInValid, setphoneNumberInValid] = useState(false);
  const [showVWPComponent, setShowVWPComponent] = useState(false);
  const [selectedCountryPhoneLength, setSelectedCountryPhoneLength] =
    useState(null);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const textRef = useRef();

  useEffect(() => {
    isLoggedIn === true && navigate("/profile-setup", { replace: true });
  }, [isLoggedIn]);

  const verificationCodeHandler = async (resend = false) => {
    if (!(!phone.length || phone.length !== selectedCountryPhoneLength)) {
      setShowLoader(true);
      setValidationError(null);
      try {
        let finalPhoneNumber = "";
        if (phone) {
          finalPhoneNumber = `+${phone}`;
        }
        await authService.requestVerificationCodeByPhone(finalPhoneNumber);
        setShowVWPComponent(true);
        setShowLoader(false);
        if (resend) {
          toastSuccess("Code resend succesfully!");
        }
      } catch (error) {
        const { statusCode, message } = error.response.data;
        if (statusCode === 422 || statusCode === 400) {
          if (Array.isArray(message)) {
            setValidationError(message[0]);
          } else {
            setValidationError(message);
          }
        }
        setShowLoader(false);
        setphoneNumberInValid(true);
      }
    } else {
      setShowLoader(false);
      setphoneNumberInValid(true);
    }
  };

  useEffect(() => {
    document.title = `Sign in ??? HMW`;
  }, []);

  // useEffect(() => {
  //   if (isMobile) {
  //     var target = document.getElementsByTagName("input")[0];
  //     target.focus();
  //     target.click();
  //   }
  // }, []);

  useEffect(() => {
    if (isMobile) {
      // console.log(textRef.current.numberInputRef);
      if (textRef.current.numberInputRef) {
        textRef.current.numberInputRef.focus();
      }

      // textRef.current.numberInputRef.change();

      // console.log(textRef.current.numberInputRef.focus());
      // textRef.current.focus();
      // textRef.current.click();
    }
  }, []);

  // const debounceFn = useCallback(_debounce(handleDebounceFn, 1500), []);

  // function handleDebounceFn() {
  //   verificationCodeHandler();
  // }

  return (
    <>
      {!showVWPComponent && (
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
            <h1 className="headingOne">Sign in</h1>
            <div className="form-control">
              <label className="field-label text-left">phone number</label>
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={(phone) => {
                  setPhone(phone);
                  // debounceFn();
                }}
                // searchClass="country-code-search"
                enableSearch
                searchPlaceholder="Search"
                autocompleteSearch={true}
                countryCodeEditable={false}
                disableSearchIcon
                inputClass={`custom-input-field ${
                  phoneNumberInValid ? "border !border-red-500" : "!bg-white"
                }`}
                inputProps={{
                  name: "phone",
                  required: true,
                  placeholder: "Phone number",
                  autoFocus: true,
                }}
                onBlur={(e, country) => {
                  let _length = country.format.split(".").length - 1;
                  setSelectedCountryPhoneLength(_length);
                  // startsWith(phone, country.dialCode) || startsWith(country.dialCode, phone);
                  if (!phone.length || phone.length !== _length) {
                    setphoneNumberInValid(true);
                  } else {
                    verificationCodeHandler();
                  }
                }}
                onFocus={(e) => {
                  setphoneNumberInValid(false);
                }}
                ref={textRef}
              />
              {/* {validationError?.length && (
                  <div className='field-label-error text-left'>{validationError}</div>
               )} */}
            </div>
            <Button
              classes="custom-button custom-button-large custom-button-fill-primary"
              attributes={{
                type: "submit",
                disabled: false,
                value: "Request verification code",
                clickEvent: () => verificationCodeHandler(),
                loader: showLoader,
              }}
            />
          </div>
          <div className="custom-small-container border-none py-0">
            <Link to="/auth/email" className="textLink mb-11">
              Use an email instead
            </Link>
            <p className="content">
              By selecting ???Request verification code??? you agree to our{" "}
              <Link to="/terms" className="normalLink">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      )}
      {showVWPComponent && (
        <VerificationWithPhone
          phone={`+${phone}`}
          hideVWPComponent={() => {
            setShowVWPComponent(false);
          }}
          resendCode={() => verificationCodeHandler(true)}
        />
      )}
    </>
  );
};

export default SigninPhone;
