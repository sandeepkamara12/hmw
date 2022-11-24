import React, { useState, useEffect } from 'react';
import Button from '../components/formElements/Button';
import { Link } from 'react-router-dom';
import OtpInput from 'react18-input-otp';

const VerificationWithPhone = () => {
   const [otp, setOtp] = useState('');
   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
   const verificationCodeLength = 6;
   const handleChange = (otp) => {
      setOtp(otp);
      if (otp && otp.length === 6) {
         setSubmitButtonDisabled(false);
      } else {
         setSubmitButtonDisabled(true);
      }
   };

   return (
      <div className="custom-container text-center">
         <div className="header hidden sm:block">
            <Link to="/" className='mx-auto mb-20 mt-9 hidden sm:inline-block'>
               <svg xmlns="http://www.w3.org/2000/svg" width="62" height="15" viewBox="0 0 62 15" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M28.2304 10.6421L23.2193 0L16.1406 14.4376H26.3695H30.0176H40.2464L33.4481 0L28.2304 10.6421Z" fill="#FE7A48" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M50.7648 0.982422H40.252V9.7431C40.252 12.6461 42.6053 14.9995 45.5084 14.9995C48.4114 14.9995 50.7648 12.6461 50.7648 9.7431V0.982422ZM61.2793 0.982422H50.7664V9.7431C50.7664 12.6461 53.1198 14.9995 56.0229 14.9995C58.9259 14.9995 61.2793 12.6461 61.2793 9.7431V0.982422Z" fill="#044FF5" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.72168 1.11987H6.74903V4.48188H9.13035V1.11987H15.1577V14.4361H9.13035V11.0699H6.74903V14.4361H0.72168V1.11987Z" fill="#FECD48" />
               </svg>
            </Link>
         </div>
         <div className="custom-small-container border-b-none">
            <h1 className='headingOne'>Enter your code</h1>
            <div className="form-control">
               <label className="field-label text-left">Verification code</label>
               <OtpInput
                  value={otp}
                  onChange={handleChange}
                  numInputs={verificationCodeLength}
                  className="otp-field-wrap"
                  inputStyle="custom-input-field otp-field !w-full"
                  containerStyle="otp-field-wrapper"
                  isInputNum
                  autoComplete="one-time-code"
               />
            </div>
            <Button classes='custom-button custom-button-large custom-button-fill-primary' attributes={{ type: 'submit', disabled: submitButtonDisabled, value: "Submit" }} />
            <Link to="/" className="textLink mt-4">Resend code</Link>

            <div className='border-t border-fieldOutline font-inter-regular pt-4 mt-10'>
               <div className='text-base text-left mb-1'>Code was sent to:</div>
               <div className='flex flex-wrap items-center justify-between'>
                  <div className='text-16 font-semibold tracking-tighter'>+14159609237</div>
                  <div className=''>
                     <Link to="/auth/verify/email" className="textLink mt-0">Change</Link>
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}

export default VerificationWithPhone;