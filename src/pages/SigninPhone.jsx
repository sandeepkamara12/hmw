import React from 'react';
import Button from '../components/formElements/Button';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const SigninPhone = () => {
   return (
      <div className="custom-container text-center">
         <div className="header hidden vsm:block">
            <img src={Logo} alt="Logo" className="mx-auto mb-20 mt-9" />
         </div>
         <div className="custom-small-container">
            <h1 className='headingOne'>Sign in</h1>
            <div className="form-control">
               <label className="field-label text-left">phone number</label>
               <input type="text" className="custom-input-field" placeholder="Phone number" />
            </div>
            <Button classes='custom-button custom-button-large custom-button-fill-primary' attributes={{ disabled: false, value: "Request verification code" }} />
         </div>
         <Link to="/signin-email" className="textLink">Use an email instead</Link>
      </div>
   )
}

export default SigninPhone;