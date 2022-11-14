import React from 'react';
import Button from '../components/formElements/Button';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const SigninEmail = () => {
   return (
      <div className="custom-container text-center">
         <div className="header hidden vsm:block">
            <Link to="/signin-phone">
               <img src={Logo} alt="Logo" className="mx-auto mb-20 mt-9" />
            </Link>
         </div>
         <div className="custom-small-container ">
            <h1 className='headingOne'>Sign in</h1>
            <div className="form-control">
               <label className="field-label text-left">email</label>
               <input type="text" className="custom-input-field" placeholder="Email Address" />
            </div>
            <Button classes='custom-button custom-button-large custom-button-fill-primary' attributes={{ disabled: false, value: "Request verification code" }} />
         </div>
         <Link to="/signin-phone" className="textLink">Use phone number instead</Link>
      </div>
   )
}

export default SigninEmail;