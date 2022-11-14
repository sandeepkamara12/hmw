import React, { useState } from 'react';
import Button from '../components/formElements/Button';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import OtpInput from 'react-otp-input';

const VerificationWithPhone = () => {
   const [otp, setOtp] = useState('');
   const handleChange = (otp) => setOtp(otp);

   return (
      <div className="custom-container text-center">
         <div className="header hidden vsm:block">
            <img src={Logo} alt="Logo" className="mx-auto mb-20 mt-9" />
         </div>
         <div className="custom-small-container border-b-none">
            <h1 className='headingOne'>Enter your code</h1>
            <div className="form-control">
               <label className="field-label text-left">Verification code</label>
               <OtpInput
                  value={otp}
                  onChange={handleChange}
                  numInputs={6}
                  className="otp-field-wrap"
                  inputStyle="custom-input-field otp-field !w-full"
                  containerStyle="otp-field-wrapper"
               />
            </div>
            <Button classes='custom-button custom-button-large custom-button-fill-primary' attributes={{ disabled: true, value: "Submit" }} />
            <Link to="#" className="textLink mt-4">Resend code</Link>

            <div className='border-t border-fieldOutline font-mono-regular pt-4 mt-10'>
               <div className='text-base text-left mb-1 tracking-tighter'>Code was sent to:</div>
               <div className='flex flex-wrap items-center justify-between'>
                  <div className='text-16 font-semibold tracking-tighter'>jamison.hill@bebebe.com</div>
                  <div className=''>
                     <Link to="#" className="textLink mt-0">Change</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default VerificationWithPhone;