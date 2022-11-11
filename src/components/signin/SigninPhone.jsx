import React from 'react';
import Button from '../formElements/Button';

const SigninPhone = () => {
   return (
      <div className="custom-small-container ">
         <h1 className='headingOne'>Sign in</h1>
         {/* <Button classes='custom-button custom-button-small custom-button-fill-primary' attributes={{ disabled: false }} /> */}
         <div className="form-control">
            <label className="field-label">phone number</label>
            <input type="text" className="custom-input-field" placeholder="Phone number" />
         </div>
         <Button classes='custom-button custom-button-large custom-button-fill-primary' attributes={{ disabled: false, value: "Request verification code" }} />
         {/* <div className="form-control">
            <label className="field-label">phone number</label>
            <input type="text" className="custom-input-field field-error" placeholder="Phone number" />
            <label className="field-label field-label-error">Not a great phone number bro</label>
         </div> */}
      </div>
   )
}

export default SigninPhone;