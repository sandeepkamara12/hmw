import React, { useState } from 'react';
import Tooltip from '../Tooltip';
import Select from 'react-select';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const AddProject = () => {
   const [rangeValue, setRangeValue] = useState(10);

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
         zIndex: 9,
      }),
      menuList: (base, state) => ({
         ...base,
         padding: 0,
         border: state.selectProps.menuIsOpen ? '1px solid rgb(var(--color-primary)/1)' : null,
         borderTop: state.selectProps.menuIsOpen ? 'none' : null,
         borderRadius: '0 0 4px 4px',
      }),
      control: (state, provided) => ({
         width: '100%',
         '> div:first-of-type': {
            marginBottom: provided.isMulti && provided.hasValue ? '1.75rem!important' : '',
            padding: provided.isMulti && provided.hasValue ? '8px 16px' : '',
            '.css-1rhbuit-multiValue': {
               display: 'inline-flex',
               backgroundColor: 'transparent',
               border: '1px solid rgb(var(--color-fieldOutline)/1)',
               borderRadius: '50px',
               position: 'relative',
               fontSize: '16px',
               lineHeight: '19px',
               zIndex: 5,
               color: 'rgb(var(--color-black)/1)',
               margin: '0 4px',
               '&:first-of-type': {
                  marginLeft: '0!important',
               },
               '>div:first-of-type': {
                  padding: '5px 15px 7px',
                  lineHeight: '19px',
               },
               'svg': {
                  fill: 'rgb(var(--color-primary)/1)',
                  width: '20px',
                  height: '20px',
               }
            },
            '> div:last-of-type': {
               position: provided.isMulti && provided.hasValue && 'absolute',
               left: 0,
               right: 0,
               top: 0,
            }
         },
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
         '>div:first-child': {
            display: 'none',
         }
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
      }),
   }

   const quarterOptions = [
      { value: 'quarter-1', label: 'Quarter 1' },
      { value: 'quarter-2', label: 'Quarter 2' },
      { value: 'quarter-3', label: 'Quarter 3' },
      { value: 'quarter-4', label: 'Quarter 4' },
   ];
   const trackOptions = [
      { value: 'active', label: 'Active' },
      { value: 'upcoming', label: 'Upcoming' },
      { value: 'complete', label: 'Complete' },
   ];
   const shirtSizeOptions = [
      { value: 'xs', label: 'XS' },
      { value: 'sm', label: 'SM' },
      { value: 'md', label: 'MD' },
      { value: 'lg', label: 'LG' },
      { value: 'xl', label: 'XL' },
      { value: 'xxl', label: 'XXL' },
      { value: 'xxxl', label: 'XXXL' },
   ];
   const requestedByOptions = [
      { value: 'john-doe', label: 'John Doe' },
      { value: 'petersan', label: 'Mr. Petersan' },
      { value: 'harsh-vardhan', label: 'Harsh Vardhan' },
   ];

   return (
      <>
         <div className="px-6 lg:px-8 custom-modal">
            <div className="form-control">
               <label className="field-label text-left" tabIndex="2">Project name</label>
               <input type="text" className="custom-input-field" placeholder="Enter a project name" autoFocus tabIndex="3" />
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabIndex="13">Project type
                  <Tooltip tabIndex="14" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
               </label>
               <ul className="grid gap-3 grid-cols-2 mb-7">
                  <li>
                     <input type="radio" id="production" name="hosting" value="production" className="hidden peer" required />
                     <label htmlFor="production" tabIndex="15" className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary">Production</label>
                  </li>
                  <li>
                     <input type="radio" id="internal" name="hosting" value="internal" className="hidden peer" />
                     <label htmlFor="internal" tabIndex="16" className="text-center p-2.5 text-14 font-medium text-capitalize inline-block w-full text-fieldNoFocus rounded border border-fieldOutline cursor-pointer peer-checked:border-blue-600 peer-checked:text-primary hover:border-primary hover:text-primary">Internal</label>
                  </li>
               </ul>
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabIndex="10">Target quarter
                  <Tooltip tabIndex="11" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
               </label>
               <div className="select-wrapper" tabIndex="12">
                  <Select
                     styles={customStyles}
                     placeholder="Select a quarter"
                     options={quarterOptions}
                  />
               </div>
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabIndex="10">T-shirt size
                  <Tooltip tabIndex="11" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
               </label>
               <div className="select-wrapper" tabIndex="12">
                  <Select
                     styles={customStyles}
                     placeholder="Select a size"
                     options={shirtSizeOptions}
                  />
               </div>
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabIndex="10">What % of your time will you commit?
                  <Tooltip tabIndex="11" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
               </label>
               <div className='flex flex-wrap items-center justify-between'>
                  <RangeSlider
                     className="single-thumb"
                     defaultValue={[0, 100]}
                     thumbsDisabled={[true, false]}
                     rangeSlideDisabled={false}
                     value={[0, rangeValue]}
                  // onThumbDragStart={(e) => setRangeValue(e.target.value)}
                  // onThumbDragEnd={(e) => setRangeValue(e.target.value)}
                  // onChange={(e) => setRangeValue(e.target.value)}
                  />
                  <div className='field-wrap relative'>
                     <input type="text" className="custom-input-field mb-0 text-center !pr-7" value={rangeValue} tabIndex="3" onChange={(e) => { setRangeValue(e.target.value) }} />
                     <label htmlFor="" className='absolute top-0 right-0 flex flex-wrap items-center justify-center h-full w-8'>%</label>
                  </div>
               </div>
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabIndex="2">Description (Optional)</label>
               <textarea className="custom-input-field resize-none" placeholder="Add a description" tabIndex="3" />
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabIndex="10">Track
                  <Tooltip tabIndex="11" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
               </label>
               <div className="select-wrapper" tabIndex="12">
                  <Select
                     styles={customStyles}
                     placeholder="Select a track"
                     options={trackOptions}
                     isMulti
                  />
               </div>
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabIndex="10">Requested by (Optional)
                  <Tooltip tabIndex="11" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
               </label>
               <div className="select-wrapper" tabIndex="12">
                  <Select
                     styles={customStyles}
                     placeholder="Select requested by"
                     options={requestedByOptions}
                     isMulti
                  />
               </div>
            </div>
            <div className="form-control">
               <label className="field-label text-left" tabIndex="2">PRD Link
                  <Tooltip tabIndex="11" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
               </label>
               <input type="text" className="custom-input-field" placeholder="Enter a link to a PRD" tabIndex="3" />
            </div>
         </div>
      </>
   )
}

export default AddProject;