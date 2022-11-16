import React from 'react';
import Button from '../components/formElements/Button';
import Logo from '../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const SigninPhone = () => {
   const navigate = useNavigate();
   const handleClick = () => {
      navigate("/verification-phone");
   }
   return (
      <div className="custom-container text-center">
         <div className="header hidden sm:block">
            <Link to="/">
               <img src={Logo} alt="Logo" className="mx-auto mb-20 mt-9" />
            </Link>
         </div>
         <div className="custom-small-container">
            <h1 className='headingOne'>Sign in</h1>
            <div className="form-control">
               <label className="field-label text-left">phone number</label>
               <input type="number" className="custom-input-field" placeholder="Phone number" required autoFocus />
               {/* <span className='field-label-error field-error field-label'>Not a great phone number bro</span> */}
            </div>
            <Button classes='custom-button custom-button-large custom-button-fill-primary' attributes={{ disabled: false, value: "Request verification code", clickEvent: handleClick }} />
         </div>
         <div className="custom-small-container border-none py-0">
            <Link to="/sign-in-email" className="textLink mb-11">Use an email instead</Link>
            <p className='content'>By selecting ‘Request verification code’ you agree to our <Link to="#" className='normalLink'>Terms of Service</Link>.</p>
         </div>
      </div>
   )
}

export default SigninPhone;