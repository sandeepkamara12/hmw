import React, { useState } from 'react';


const AddSectionTask = (props) => {
   console.log(props);
   const [showSubTaskBox, setShowSubTaskBox] = useState(false);
   const showSubTaskField = () => {
      setShowSubTaskBox(true);
   }
   const hideSubTaskField = () => {
      setShowSubTaskBox(false);
   }
   return (
      <div className={`add-sub-task px-4 sm:px-0 ${showSubTaskBox ? 'block' : 'hidden'}`}>
         <div className="form-control flex flex-wrap items-center justify-between relative">
            <label className="field-label text-left mb-0 w-8" tabIndex="2">
               <svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6.00244L19 6.00244" stroke="#CADAE2" strokeWidth="2" strokeLinecap="round" />
                  <path d="M1 1.00244L19 1.00244" stroke="#CADAE2" strokeWidth="2" strokeLinecap="round" />
               </svg>
            </label>
            <div className="sub-task-field-wrap">
               <input type="text" className="custom-input-field mb-0 !pr-10" placeholder="Add a sub task" tabIndex="3" />
               <div className='delete-section absolute right-4 cursor-pointer group top-4'>
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={hideSubTaskField}>
                     <path d="M12.967 5.00225H3.03362C2.98751 5.00211 2.94187 5.01153 2.89959 5.02992C2.8573 5.04832 2.81929 5.07528 2.78797 5.10912C2.75664 5.14295 2.73267 5.18292 2.71758 5.22649C2.70249 5.27006 2.6966 5.31629 2.70029 5.36225L3.55362 14.7889C3.58366 15.1214 3.73729 15.4304 3.98416 15.6551C4.23102 15.8797 4.55317 16.0036 4.88695 16.0023H11.1136C11.4474 16.0036 11.7696 15.8797 12.0164 15.6551C12.2633 15.4304 12.4169 15.1214 12.447 14.7889L13.3336 5.33559C13.3373 5.28962 13.3314 5.2434 13.3163 5.19982C13.3012 5.15625 13.2773 5.11628 13.2459 5.08245C13.2146 5.04862 13.1766 5.02165 13.1343 5.00325C13.092 4.98486 13.0464 4.97544 13.0003 4.97559L12.967 5.00225ZM6.83362 13.6689C6.83362 13.8015 6.78094 13.9287 6.68717 14.0225C6.59341 14.1162 6.46623 14.1689 6.33362 14.1689C6.20101 14.1689 6.07384 14.1162 5.98007 14.0225C5.8863 13.9287 5.83362 13.8015 5.83362 13.6689V7.66892C5.83362 7.53631 5.8863 7.40914 5.98007 7.31537C6.07384 7.2216 6.20101 7.16892 6.33362 7.16892C6.46623 7.16892 6.59341 7.2216 6.68717 7.31537C6.78094 7.40914 6.83362 7.53631 6.83362 7.66892V13.6689ZM10.167 13.6689C10.167 13.8015 10.1143 13.9287 10.0205 14.0225C9.92674 14.1162 9.79956 14.1689 9.66695 14.1689C9.53435 14.1689 9.40717 14.1162 9.3134 14.0225C9.21963 13.9287 9.16695 13.8015 9.16695 13.6689V7.66892C9.16695 7.53631 9.21963 7.40914 9.3134 7.31537C9.40717 7.2216 9.53435 7.16892 9.66695 7.16892C9.79956 7.16892 9.92674 7.2216 10.0205 7.31537C10.1143 7.40914 10.167 7.53631 10.167 7.66892V13.6689Z" fill="#BABFC9" className='group-hover:fill-primary' />
                     <path d="M14.666 2.66911H11.4994C11.4551 2.66911 11.4128 2.65155 11.3815 2.62029C11.3502 2.58904 11.3327 2.54664 11.3327 2.50244V1.66911C11.3327 1.22708 11.1571 0.803157 10.8445 0.490597C10.532 0.178036 10.108 0.00244141 9.66602 0.00244141L6.33268 0.00244141C5.89066 0.00244141 5.46673 0.178036 5.15417 0.490597C4.84161 0.803157 4.66602 1.22708 4.66602 1.66911V2.50244C4.66602 2.54664 4.64846 2.58904 4.6172 2.62029C4.58594 2.65155 4.54355 2.66911 4.49935 2.66911H1.33268C1.15587 2.66911 0.986302 2.73935 0.861278 2.86437C0.736254 2.98939 0.666016 3.15896 0.666016 3.33577C0.666016 3.51259 0.736254 3.68215 0.861278 3.80718C0.986302 3.9322 1.15587 4.00244 1.33268 4.00244H14.666C14.8428 4.00244 15.0124 3.9322 15.1374 3.80718C15.2624 3.68215 15.3327 3.51259 15.3327 3.33577C15.3327 3.15896 15.2624 2.98939 15.1374 2.86437C15.0124 2.73935 14.8428 2.66911 14.666 2.66911ZM5.99935 2.50244V1.66911C5.99935 1.5807 6.03447 1.49592 6.09698 1.43341C6.15949 1.37089 6.24428 1.33577 6.33268 1.33577H9.66602C9.75442 1.33577 9.83921 1.37089 9.90172 1.43341C9.96423 1.49592 9.99935 1.5807 9.99935 1.66911V2.50244C9.99935 2.54664 9.98179 2.58904 9.95054 2.62029C9.91928 2.65155 9.87689 2.66911 9.83268 2.66911H6.16602C6.12181 2.66911 6.07942 2.65155 6.04817 2.62029C6.01691 2.58904 5.99935 2.54664 5.99935 2.50244Z" fill="#BABFC9" className='group-hover:fill-primary' />
                  </svg>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AddSectionTask;