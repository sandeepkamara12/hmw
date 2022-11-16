import React, { useState, useRef } from 'react';
import Button from '../components/formElements/Button';
import Logo from '../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import TimezoneSelect from 'react-timezone-select';
import Select from 'react-select';
import Tooltip from '../components/Tooltip';
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
   const customStyles = {
      option: (state, provided) => ({
         top: '51px',
         margin: 0,
         boxShadow: 'none',
         border: '1px solid rgb(var(--color-fieldOutline) / 1)',
         borderTop: 'none',
         fontSize: '16px',
         fontFamily: 'InterRegular',
         textAlign: 'left',
         borderRadius: 0,
         padding: '13px 16px',
         borderBottom: '1px solid rgb(var(--color-fieldOutline)/1)',
         cursor: 'pointer',
         backgroundColor: provided.isSelected ? 'rgba(var(--color-primary)/1)' : null,
         color: provided.isSelected ? 'rgba(var(--color-white)/1)' : 'rgb(var(--color-fieldNoFocus) / 1)',
         '&:hover': {
            backgroundColor: !provided.isSelected ? 'rgb(var(--color-fieldBg))' : null,
         },
      }),
      menu: (provided) => ({
         ...provided,
         margin: 0,
         boxShadow: 'none',
      }),
      menuList: (base, state) => ({
         ...base,
         padding: 0,
         border: state.selectProps.menuIsOpen ? '1px solid rgb(var(--color-primary)/1)' : null,
         borderTop: state.selectProps.menuIsOpen ? 'none' : null,
         borderRadius: '0 0 4px 4px',
      }),
      control: () => ({
         width: '100%',
      }),
      valueContainer: () => ({
         padding: 0
      }),
      placeholder: (state, provided) => ({
         margin: 0,
         padding: '0.875rem 1rem',
         position: 'absolute',
         top: 0,
         left: 0,
         textIndent: '5px',
         fontSize: '1rem',
         lineHeight: '1.25rem',
         fontWeight: 400,
         fontFamily: 'InterRegular',
         width: '100%',
         height: '51px',
         paddingRight: '50px',
         textAlign: 'left',
         color: provided.isFocused ? 'rgb(var(--color-placeholder)/1)' : 'rgb(79, 79, 79, 1)',
         borderRadius: '4px'
      }),
      input: (state, provided) => ({
         borderRadius: '4px',
         marginBottom: '1.75rem',
         opacity: 1,
         'input[type="text"]': {
            // border: state.isFocused ? '1px solid red!important' : '1.5px solid rgb(var(--color-fieldOutline) / 1)!important',
            borderRadius: '4px!important',
            padding: '0.875rem 1rem!important',
            fontSize: '1rem!important',
            lineHeight: '1.25rem!important',
            fontWeight: '400!important',
            color: 'rgb(var(--color-black) / 1)!important',
            fontFamily: 'InterRegular!important',
            opacity: 1,
            backgroundColor: 'rgb(var(--color-fieldBg) / 1)!important',
            border: '1px solid rgb(var(--color-fieldOutline) / 1)!important',

            '&:focus': {
               backgroundColor: 'rgb(var(--color-fieldBg) / 1)!important',
               color: 'rgb(var(--color-placeholder)/1)',
               borderColor: 'rgb(var(--color-primary))!important',
               borderRadius: '4px 4px 0 0!important',
               borderBottomColor: 'rgb(var(--color-black)/1)!important',

            }
         }
      }),
      indicatorSeparator: () => ({
         display: 'none'
      }),
      dropdownIndicator: () => ({
         color: 'rgb(var(--color-primary)/1)',
         transition: 'all .2s ease',
      }),
      indicatorsContainer: (state, provided) => ({
         position: 'absolute',
         right: '10px',
         top: 0,
         height: '51px',
         display: 'flex',
         flexWrap: 'wrap',
         alignItems: 'center',
         transform: provided.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
      }),
      singleValue: (state, provided) => ({
         border: provided.hasValue && !provided.selectProps.menuIsOpen ? '1.5px solid rgb(var(--color-fieldOutline)/1)' : '1.5px solid rgb(var(--color-primary)/1)',
         borderRadius: provided.hasValue && !provided.selectProps.menuIsOpen ? '4px' : '4px 4px 0 0',
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
         margin: 0,
         padding: '0.875rem 1rem',
         position: 'absolute',
         top: 0,
         left: 0,
         fontSize: '1rem',
         lineHeight: '1.25rem',
         fontWeight: 400,
         fontFamily: 'InterRegular',
         width: '100%',
         height: '51px',
         paddingRight: '50px!important',
         color: provided.hasValue ? 'rgb(var(--color-black)/1)' : 'rgb(var(--color-fieldNoFocus)/1)',
         textAlign: 'left'
      })
   }

   return (
      <div className="custom-container text-center">
         <div className="header hidden sm:block">
            <Link to="/" tabindex="1">
               <img src={Logo} alt="Logo" className="mx-auto mb-20 mt-9" />
            </Link>
         </div>
         <div className="custom-small-container mb-10 border-b-none">
            <h1 className='headingOne'>Profile</h1>
            <div className="form-control">
               <label className="field-label text-left" tabindex="2">full name</label>
               <input type="text" className="custom-input-field" placeholder="Add your name" autoFocus tabindex="3" />
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabindex="4">Work email (Required for 2FA)
                  {/* <Tooltip tabindex="5" /> */}
                  <img tabindex="5" src={Info} alt="info icon" className='cursor-pointer inline-block ml-2' />
               </label>
               <input type="text" className="custom-input-field" placeholder="Enter your work email" tabindex="6" />
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabindex="7">Timezone<img tabindex="8" src={Info} alt="info icon" className='cursor-pointer inline-block ml-2' /></label>
               <div className="select-wrapper" tabindex="9">
                  <TimezoneSelect
                     value={selectedTimezone}
                     onChange={setSelectedTimezone}
                     placeholder="Select a timezone"
                     styles={customStyles}
                  />
               </div>
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabindex="10">Preferred language<img tabindex="11" src={Info} alt="info icon" className='cursor-pointer inline-block ml-2' /></label>
               <div className="select-wrapper" tabindex="12">
                  <Select
                     styles={customStyles}
                     placeholder="Select a language"
                     options={languageOptions}
                  />
               </div>
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabindex="13">My organization plans design initiatives by:<img tabindex="14" src={Info} alt="info icon" className='cursor-pointer inline-block ml-2' /></label>
               <ul className="grid gap-3 grid-cols-3 mb-7">
                  <li>
                     <input type="radio" id="quarter" name="hosting" value="quarter" className="hidden peer" required />
                     <label htmlFor="quarter" tabindex="15" className="p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary">Quarter</label>
                  </li>
                  <li>
                     <input type="radio" id="client" name="hosting" value="client" className="hidden peer" />
                     <label htmlFor="client" tabindex="16" className="p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary">Client</label>
                  </li>
                  <li>
                     <input type="radio" id="other" name="hosting" value="other" className="hidden peer" />
                     <label htmlFor="other" tabindex="17" className="p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary">Other</label>
                  </li>
               </ul>
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabindex="18">What month does Q1 begin each year?<img tabindex="19" src={Info} alt="info icon" className='cursor-pointer inline-block ml-2' /></label>
               <div className="select-wrapper" tabindex="20">
                  <Select
                     styles={customStyles}
                     placeholder="Select a month"
                     options={monthOptions}
                  />
               </div>
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabindex="21">How many design initiatives do you complete each quarter?</label>
               <div className="select-wrapper" tabindex="22">
                  <Select
                     styles={customStyles}
                     placeholder="Select an option"
                     options={monthOptions}
                  />
               </div>
            </div>
            <Button tabindex="23" classes='custom-button custom-button-large custom-button-fill-primary' attributes={{ disabled: true, value: "Submit", clickEvent: handleClick }} />
         </div>
      </div >
   )
}

export default Profile;