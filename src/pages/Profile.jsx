import React, { useState } from 'react';
import Button from '../components/formElements/Button';
import Logo from '../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import TimezoneSelect from 'react-timezone-select';
import Select from 'react-select';
import Info from '../assets/images/info.svg';
const Profile = () => {
   const [selectedTimezone, setSelectedTimezone] = useState({});
   const navigate = useNavigate();
   const handleClick = () => {
      navigate("/verification-email");
   }
   const languageOptions = [
      { value: 'english', label: 'English' },
      { value: 'hindi', label: 'Hindi' },
      { value: 'german', label: 'German' },
   ];
   const monthOptions = [
      { value: 'january', label: 'January' },
      { value: 'february', label: 'February' },
      { value: 'march', label: 'March' },
      { value: 'april', label: 'April' },
      { value: 'may', label: 'May' },
      { value: 'june', label: 'June' },
      { value: 'july', label: 'July' },
      { value: 'august', label: 'August' },
      { value: 'septmember', label: 'Septmember' },
      { value: 'october', label: 'October' },
      { value: 'november', label: 'November' },
      { value: 'december', label: 'December' },
   ];
   return (
      <div className="custom-container text-center">
         <div className="header hidden vsm:block">
            <Link to="/">
               <img src={Logo} alt="Logo" className="mx-auto mb-20 mt-9" />
            </Link>
         </div>
         <div className="custom-small-container mb-10 border-b-none">
            <h1 className='headingOne'>Profile</h1>
            <div className="form-control">
               <label className="field-label text-left">full name</label>
               <input type="text" className="custom-input-field" placeholder="Add your name" />
            </div>
            <div className="form-control">
               <label className="field-label text-left">Work email (Required for 2FA)<img src={Info} alt="info icon" className='cursor-pointer inline-block ml-2' /></label>
               <input type="text" className="custom-input-field" placeholder="Enter your work email" />
            </div>
            <div className="form-control">
               <label className="field-label text-left">Timezone<img src={Info} alt="info icon" className='cursor-pointer inline-block ml-2' /></label>
               <div className="select-wrapper">
                  <TimezoneSelect
                     value={selectedTimezone}
                     onChange={setSelectedTimezone}
                     placeholder="Select a timezone"
                  />
               </div>
            </div>
            <div className="form-control">
               <label className="field-label text-left">Preferred language<img src={Info} alt="info icon" className='cursor-pointer inline-block ml-2' /></label>
               <div className="select-wrapper">
                  <Select
                     placeholder="Select a timezone"
                     options={languageOptions}
                  />
               </div>
            </div>
            <div className="form-control">
               <label className="field-label text-left">My organization plans design initiatives by:<img src={Info} alt="info icon" className='cursor-pointer inline-block ml-2' /></label>
               <ul class="grid gap-3 grid-cols-3 mb-7">
                  <li>
                     <input type="radio" id="quarter" name="hosting" value="quarter" class="hidden peer" required />
                     <label for="quarter" class="p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-black hover:border-primary hover:text-black">Quarter</label>
                  </li>
                  <li>
                     <input type="radio" id="client" name="hosting" value="client" class="hidden peer" />
                     <label for="client" class="p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-black hover:border-primary hover:text-black">Client</label>
                  </li>
                  <li>
                     <input type="radio" id="other" name="hosting" value="other" class="hidden peer" />
                     <label for="other" class="p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-black hover:border-primary hover:text-black">Other</label>
                  </li>
               </ul>
            </div>
            <div className="form-control">
               <label className="field-label text-left">What month does Q1 begin each year?<img src={Info} alt="info icon" className='cursor-pointer inline-block ml-2' /></label>
               <div className="select-wrapper">
                  <Select
                     placeholder="Select a month"
                     options={monthOptions}
                  />
               </div>
            </div>
            <div className="form-control">
               <label className="field-label text-left">How many design initiatives do you complete each quarter?</label>
               <div className="select-wrapper">
                  <Select
                     placeholder="Select an option"
                     options={monthOptions}
                  />
               </div>
            </div>
            <Button classes='custom-button custom-button-large custom-button-fill-primary' attributes={{ disabled: true, value: "Submit", clickEvent: handleClick }} />
         </div>
      </div>
   )
}

export default Profile;