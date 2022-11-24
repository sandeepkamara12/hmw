import React, { useState } from 'react';
import Button from '../components/formElements/Button';
import { Link, useNavigate } from 'react-router-dom';
import TimezoneSelect from 'react-timezone-select';
import Select from 'react-select';
import Tooltip from '../components/Tooltip';

const Profile = () => {
   const [selectedTimezone, setSelectedTimezone] = useState({});
   const navigate = useNavigate();
   const handleClick = () => {
      navigate("/auth/verify/email");
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
               borderRadius: provided.selectProps.menuIsOpen ? '4px 4px 0 0!important' : '4px!important',
               borderBottomColor: provided.selectProps.menuIsOpen ? 'rgb(var(--color-black)/1)!important' : 'rgb(var(--color-fieldOutline)/1)',
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
            <Link to="/" tabIndex="1" className='mx-auto mb-20 mt-9 inline-block'>
               <svg xmlns="http://www.w3.org/2000/svg" width="62" height="15" viewBox="0 0 62 15" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M28.2304 10.6421L23.2193 0L16.1406 14.4376H26.3695H30.0176H40.2464L33.4481 0L28.2304 10.6421Z" fill="#FE7A48" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M50.7648 0.982422H40.252V9.7431C40.252 12.6461 42.6053 14.9995 45.5084 14.9995C48.4114 14.9995 50.7648 12.6461 50.7648 9.7431V0.982422ZM61.2793 0.982422H50.7664V9.7431C50.7664 12.6461 53.1198 14.9995 56.0229 14.9995C58.9259 14.9995 61.2793 12.6461 61.2793 9.7431V0.982422Z" fill="#044FF5" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.72168 1.11987H6.74903V4.48188H9.13035V1.11987H15.1577V14.4361H9.13035V11.0699H6.74903V14.4361H0.72168V1.11987Z" fill="#FECD48" />
               </svg>
            </Link>
         </div>
         <div className="custom-small-container mb-10 border-b-none">
            <h1 className='headingOne'>Profile</h1>
            <div className="form-control">
               <label className="field-label text-left" tabIndex="2">full name</label>
               <input type="text" className="custom-input-field" placeholder="Add your name" autoFocus tabIndex="3" />
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabIndex="4">Work email (Required for 2FA)
                  <Tooltip tabIndex="5" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
               </label>
               <input type="text" className="custom-input-field" placeholder="Enter your work email" tabIndex="6" />
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabIndex="7">Timezone
                  <Tooltip tabIndex="8" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
               </label>
               <div className="select-wrapper" tabIndex="9">
                  <TimezoneSelect
                     value={selectedTimezone}
                     onChange={setSelectedTimezone}
                     placeholder="Select a timezone"
                     styles={customStyles}
                  />
               </div>
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabIndex="10">Preferred language
                  <Tooltip tabIndex="11" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
               </label>
               <div className="select-wrapper" tabIndex="12">
                  <Select
                     styles={customStyles}
                     placeholder="Select a language"
                     options={languageOptions}
                  />
               </div>
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabIndex="13">My organization plans design initiatives by:
                  <Tooltip tabIndex="14" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
               </label>
               <ul className="grid gap-3 grid-cols-3 mb-7">
                  <li>
                     <input type="radio" id="quarter" name="hosting" value="quarter" className="hidden peer" required />
                     <label htmlFor="quarter" tabIndex="15" className="p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary">Quarter</label>
                  </li>
                  <li>
                     <input type="radio" id="client" name="hosting" value="client" className="hidden peer" />
                     <label htmlFor="client" tabIndex="16" className="p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary">Client</label>
                  </li>
                  <li>
                     <input type="radio" id="other" name="hosting" value="other" className="hidden peer" />
                     <label htmlFor="other" tabIndex="17" className="p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary">Other</label>
                  </li>
               </ul>
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabIndex="18">What month does Q1 begin each year?
                  <Tooltip tabIndex="19" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
               </label>
               <div className="select-wrapper" tabIndex="20">
                  <Select
                     styles={customStyles}
                     placeholder="Select a month"
                     options={monthOptions}
                  />
               </div>
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabIndex="21">How many design initiatives do you complete each quarter?</label>
               <div className="select-wrapper" tabIndex="22">
                  <Select
                     styles={customStyles}
                     placeholder="Select an option"
                     options={monthOptions}
                  />
               </div>
            </div>
            <Button tabIndex="23" classes='custom-button custom-button-large custom-button-fill-primary' attributes={{ disabled: true, loader: false, value: "Submit", clickEvent: handleClick }} />
         </div>
      </div>
   )
}

export default Profile;