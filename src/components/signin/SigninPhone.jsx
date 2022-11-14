import React from 'react';
import Button from '../formElements/Button';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const SigninPhone = () => {
   return (
      <div className="custom-container text-center">
         <div className="header hidden vsm:block">
            <img src={Logo} alt="Logo" className="mx-auto mb-20 mt-9" />
         </div>
         <div className="custom-small-container ">
            <h1 className='headingOne'>Sign in</h1>
            {/* <Button classes='custom-button custom-button-small custom-button-fill-primary' attributes={{ disabled: false }} /> */}
            <div className="form-control">
               <label className="field-label text-left">phone number</label>
               <input type="text" className="custom-input-field" placeholder="Phone number" />
            </div>
            <Button classes='custom-button custom-button-large custom-button-fill-primary' attributes={{ disabled: false, value: "Request verification code" }} />
            {/* <div className="form-control">
            <label className="field-label">phone number</label>
            <input type="text" className="custom-input-field field-error" placeholder="Phone number" />
            <label className="field-label field-label-error">Not a great phone number bro</label>
         </div> */}
         </div>
         <Link to="/signin-email" className="textLink">Use an email instead</Link>
      </div>
   )
}

export default SigninPhone;