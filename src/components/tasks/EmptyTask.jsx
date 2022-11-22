import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../layout/Footer';
import BackBtn from '../../assets/images/back-arrow.svg';
import Button from '../formElements/Button';

const EmptyTask = () => {
   const [showDescriptionBox, setShowDescriptionBox] = useState(false);
   const [showSubTaskBox, setShowSubTaskBox] = useState(false);
   const showDescriptionField = () => {
      setShowDescriptionBox(true);
   }
   const hideDescriptionField = () => {
      setShowDescriptionBox(false);
   }
   const showSubTaskField = () => {
      setShowSubTaskBox(true);
   }
   const hideSubTaskField = () => {
      setShowSubTaskBox(false);
   }
   return (
      <div className={`sm:ml-20 pt-7 pb-24 sm:py-18`}>

         <div className='custom-container'>
            <div className="header flex flex-wrap items-center justify-between">
               <Link to="/" tabIndex="1" className='block sm:hidden mr-auto'>
                  <img src={BackBtn} alt="Back Btn" className="mx-auto mb-10" />
               </Link>
               <Link to="/" tabIndex="1" className='block sm:hidden mb-10'>
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M17.4384 0.500001H11.4384C11.3267 0.499847 11.2175 0.533411 11.1252 0.596303C11.0329 0.659195 10.9617 0.748487 10.9209 0.8525C10.8783 0.954224 10.8669 1.06634 10.8883 1.17454C10.9097 1.28274 10.9628 1.38212 11.0409 1.46L13.5009 3.8825L6.41341 10.8575C6.27372 10.998 6.19531 11.1881 6.19531 11.3863C6.19531 11.5844 6.27372 11.7745 6.41341 11.915C6.48287 11.9859 6.5657 12.0422 6.65711 12.0809C6.74851 12.1195 6.84668 12.1396 6.94591 12.14C7.1416 12.1412 7.33001 12.0658 7.47091 11.93L14.5809 4.9325L17.0484 7.3625C17.1003 7.41508 17.1623 7.45677 17.2305 7.4851C17.2988 7.51343 17.372 7.52785 17.4459 7.5275C17.5207 7.52773 17.5948 7.51241 17.6634 7.4825C17.7646 7.4394 17.8507 7.36719 17.9108 7.27505C17.9709 7.18291 18.0023 7.075 18.0009 6.965V1.0625C17.999 0.91392 17.9391 0.771972 17.834 0.666901C17.7289 0.56183 17.587 0.501943 17.4384 0.500001Z" fill="black" />
                     <path d="M13.875 8.465C13.6761 8.465 13.4853 8.54402 13.3447 8.68467C13.204 8.82532 13.125 9.01609 13.125 9.215V17H1.5V5.375H9.2775C9.47641 5.375 9.66718 5.29598 9.80783 5.15533C9.94848 5.01468 10.0275 4.82391 10.0275 4.625C10.0275 4.42609 9.94848 4.23532 9.80783 4.09467C9.66718 3.95402 9.47641 3.875 9.2775 3.875H1.4025C1.03053 3.875 0.673802 4.02276 0.410783 4.28578C0.147763 4.5488 1.41295e-10 4.90553 1.41294e-10 5.2775L1.41294e-10 17.09C-5.27179e-06 17.4627 0.147518 17.8202 0.410324 18.0844C0.673131 18.3486 1.02985 18.498 1.4025 18.5H13.215C13.589 18.5 13.9476 18.3514 14.212 18.087C14.4764 17.8226 14.625 17.464 14.625 17.09V9.215C14.625 9.01609 14.546 8.82532 14.4053 8.68467C14.2647 8.54402 14.0739 8.465 13.875 8.465Z" fill="black" />
                  </svg>
               </Link>
            </div>
         </div>

         <div className="custom-medium-container">
            <div className='relative px-4 sm:px-0'>
               <div className={`flex flex-wrap items-center mb-8 sm:mb-12 justify-between`}>
                  <h1 className={`headingOne !text-left !mb-0`}>Task name</h1>
               </div>
            </div>


            <div className='add-section px-4 sm:px-0 flex flex-wrap justify-between'>
               <div className='w-7/12'>

                  {/* Selected Time */}
                  <span className='chip mb-4'>
                     <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.995 0.5C2.235 0.5 0 2.74 0 5.5C0 8.26 2.235 10.5 4.995 10.5C7.76 10.5 10 8.26 10 5.5C10 2.74 7.76 0.5 4.995 0.5ZM5 9.5C2.79 9.5 1 7.71 1 5.5C1 3.29 2.79 1.5 5 1.5C7.21 1.5 9 3.29 9 5.5C9 7.71 7.21 9.5 5 9.5Z" fill="#004DF6" />
                        <path d="M5.25 3H4.5V6L7.125 7.575L7.5 6.96L5.25 5.625V3Z" fill="#004DF6" />
                     </svg>8h
                  </span>

                  {/* Description as  Content */}
                  <div className="task-description text-16 leading-19 text-black font-inter-regular mb-4">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>

                  {/* Show Hide Description Field */}
                  <div className={`show-hide-description-field form-control flex flex-wrap items-center justify-between relative ${showDescriptionBox ? 'inline-block' : 'hidden'}`}>
                     <textarea className="custom-input-field mb-0 !pr-10 resize-none !h-51" placeholder="Add a description" tabIndex="3" />
                     <div className='delete-section absolute right-4 cursor-pointer group'>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={hideDescriptionField}>
                           <path d="M12.967 5.00225H3.03362C2.98751 5.00211 2.94187 5.01153 2.89959 5.02992C2.8573 5.04832 2.81929 5.07528 2.78797 5.10912C2.75664 5.14295 2.73267 5.18292 2.71758 5.22649C2.70249 5.27006 2.6966 5.31629 2.70029 5.36225L3.55362 14.7889C3.58366 15.1214 3.73729 15.4304 3.98416 15.6551C4.23102 15.8797 4.55317 16.0036 4.88695 16.0023H11.1136C11.4474 16.0036 11.7696 15.8797 12.0164 15.6551C12.2633 15.4304 12.4169 15.1214 12.447 14.7889L13.3336 5.33559C13.3373 5.28962 13.3314 5.2434 13.3163 5.19982C13.3012 5.15625 13.2773 5.11628 13.2459 5.08245C13.2146 5.04862 13.1766 5.02165 13.1343 5.00325C13.092 4.98486 13.0464 4.97544 13.0003 4.97559L12.967 5.00225ZM6.83362 13.6689C6.83362 13.8015 6.78094 13.9287 6.68717 14.0225C6.59341 14.1162 6.46623 14.1689 6.33362 14.1689C6.20101 14.1689 6.07384 14.1162 5.98007 14.0225C5.8863 13.9287 5.83362 13.8015 5.83362 13.6689V7.66892C5.83362 7.53631 5.8863 7.40914 5.98007 7.31537C6.07384 7.2216 6.20101 7.16892 6.33362 7.16892C6.46623 7.16892 6.59341 7.2216 6.68717 7.31537C6.78094 7.40914 6.83362 7.53631 6.83362 7.66892V13.6689ZM10.167 13.6689C10.167 13.8015 10.1143 13.9287 10.0205 14.0225C9.92674 14.1162 9.79956 14.1689 9.66695 14.1689C9.53435 14.1689 9.40717 14.1162 9.3134 14.0225C9.21963 13.9287 9.16695 13.8015 9.16695 13.6689V7.66892C9.16695 7.53631 9.21963 7.40914 9.3134 7.31537C9.40717 7.2216 9.53435 7.16892 9.66695 7.16892C9.79956 7.16892 9.92674 7.2216 10.0205 7.31537C10.1143 7.40914 10.167 7.53631 10.167 7.66892V13.6689Z" fill="#BABFC9" className='group-hover:fill-primary' />
                           <path d="M14.666 2.66911H11.4994C11.4551 2.66911 11.4128 2.65155 11.3815 2.62029C11.3502 2.58904 11.3327 2.54664 11.3327 2.50244V1.66911C11.3327 1.22708 11.1571 0.803157 10.8445 0.490597C10.532 0.178036 10.108 0.00244141 9.66602 0.00244141L6.33268 0.00244141C5.89066 0.00244141 5.46673 0.178036 5.15417 0.490597C4.84161 0.803157 4.66602 1.22708 4.66602 1.66911V2.50244C4.66602 2.54664 4.64846 2.58904 4.6172 2.62029C4.58594 2.65155 4.54355 2.66911 4.49935 2.66911H1.33268C1.15587 2.66911 0.986302 2.73935 0.861278 2.86437C0.736254 2.98939 0.666016 3.15896 0.666016 3.33577C0.666016 3.51259 0.736254 3.68215 0.861278 3.80718C0.986302 3.9322 1.15587 4.00244 1.33268 4.00244H14.666C14.8428 4.00244 15.0124 3.9322 15.1374 3.80718C15.2624 3.68215 15.3327 3.51259 15.3327 3.33577C15.3327 3.15896 15.2624 2.98939 15.1374 2.86437C15.0124 2.73935 14.8428 2.66911 14.666 2.66911ZM5.99935 2.50244V1.66911C5.99935 1.5807 6.03447 1.49592 6.09698 1.43341C6.15949 1.37089 6.24428 1.33577 6.33268 1.33577H9.66602C9.75442 1.33577 9.83921 1.37089 9.90172 1.43341C9.96423 1.49592 9.99935 1.5807 9.99935 1.66911V2.50244C9.99935 2.54664 9.98179 2.58904 9.95054 2.62029C9.91928 2.65155 9.87689 2.66911 9.83268 2.66911H6.16602C6.12181 2.66911 6.07942 2.65155 6.04817 2.62029C6.01691 2.58904 5.99935 2.54664 5.99935 2.50244Z" fill="#BABFC9" className='group-hover:fill-primary' />
                        </svg>
                     </div>
                  </div>
                  {/* Description Link */}
                  <div className={`text-center border border-dashed border-fieldOutline rounded-lg ${showDescriptionBox ? 'hidden' : 'block'}`}><Link className='textLink text-center inline-block bg-fieldBg rounded-8 p-3.5 my-0' onClick={showDescriptionField}>Add a description</Link></div>


                  <div className="text-16 leading-20 my-4 font-semibold font-inter-regular text-black false">Sub tasks</div>

                  {/* Sub tasks listing */}
                  <ul>
                     <li className="flex flex-wrap items-center justify-between completed-task mb-4">
                        <label htmlFor="sub-task" className='text-16 leading-19 text-gray font-inter-regular tracking-tight flex flex-wrap items-center'>
                           <input type="checkbox" id="sub-task" name="sub-task" className="appearance-none w-4 h-4 bg-white rounded-4 border border-fieldOutline checked:bg-primary mr-2.5" />
                           <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                        </label>
                        <Link className='textLink mt-0 text-gray'>Undo</Link>
                     </li>
                     <li className="flex flex-wrap items-center justify-between mb-4">
                        <label htmlFor="sub-task" className='text-16 leading-19 text-black font-inter-regular tracking-tight flex flex-wrap items-center'>
                           <input type="checkbox" id="sub-task" name="sub-task" className="appearance-none w-4 h-4 bg-white rounded-4 border border-fieldOutline checked:bg-primary mr-2.5" />
                           <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                        </label>
                        <Link className='textLink mt-0'>Done</Link>
                     </li>
                     <li className="flex flex-wrap items-center justify-between mb-4">
                        <label htmlFor="sub-task" className='text-16 leading-19 text-black font-inter-regular tracking-tight flex flex-wrap items-center'>
                           <input type="checkbox" id="sub-task" name="sub-task" className="appearance-none w-4 h-4 bg-white rounded-4 border border-fieldOutline checked:bg-primary mr-2.5" />
                           <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                        </label>
                        <Link className='textLink mt-0'>Done</Link>
                     </li>
                     <li className="flex flex-wrap items-center justify-between mb-4">
                        <label htmlFor="sub-task" className='text-16 leading-19 text-black font-inter-regular tracking-tight flex flex-wrap items-center'>
                           <input type="checkbox" id="sub-task" name="sub-task" className="appearance-none w-4 h-4 bg-white rounded-4 border border-fieldOutline checked:bg-primary mr-2.5" />
                           <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                        </label>
                        <Link className='textLink mt-0'>Done</Link>
                     </li>
                  </ul>

                  {/* Sub Task Field */}
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

                  {/* Sub task link */}
                  <div className='text-center border border-dashed border-fieldOutline rounded-lg mt-4'>
                     <Link className='textLink text-center inline-block bg-fieldBg rounded-8 p-3.5 my-0' onClick={showSubTaskField}>Add a sub task</Link>
                  </div>



                  <div className="text-16 leading-20 my-4 font-semibold font-inter-regular text-black false">Attachments</div>
                  <div className='text-center border border-dashed border-fieldOutline rounded-lg mt-4 grid grid-cols-2 gap-4'>
                     <Link className='textLink text-center inline-block bg-fieldBg rounded-8 p-3.5 my-0' to="/">Add a link</Link>
                     <Link className='textLink text-center inline-block bg-fieldBg rounded-8 p-3.5 my-0' to="/">Add a file</Link>
                  </div>
                  <div className='border border-fieldOutline rounded-lg py-4 px-5 flex flex-wrap items-center mt-8'>
                     <Link className='textLink text-center inline-flex flex-wrap items-center bg-fieldBg rounded-8 pr-3 my-0 group' to="/">
                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                           <path className='group-hover:fill-hover' d="M12.467 5.00225H2.53362C2.48751 5.00211 2.44187 5.01153 2.39959 5.02992C2.3573 5.04832 2.31929 5.07528 2.28797 5.10912C2.25664 5.14295 2.23267 5.18292 2.21758 5.22649C2.20249 5.27006 2.1966 5.31629 2.20029 5.36225L3.05362 14.7889C3.08366 15.1214 3.23729 15.4304 3.48416 15.6551C3.73102 15.8797 4.05317 16.0036 4.38695 16.0023H10.6136C10.9474 16.0036 11.2696 15.8797 11.5164 15.6551C11.7633 15.4304 11.9169 15.1214 11.947 14.7889L12.8336 5.33559C12.8373 5.28962 12.8314 5.2434 12.8163 5.19982C12.8012 5.15625 12.7773 5.11628 12.7459 5.08245C12.7146 5.04862 12.6766 5.02165 12.6343 5.00325C12.592 4.98486 12.5464 4.97544 12.5003 4.97559L12.467 5.00225ZM6.33362 13.6689C6.33362 13.8015 6.28094 13.9287 6.18717 14.0225C6.09341 14.1162 5.96623 14.1689 5.83362 14.1689C5.70101 14.1689 5.57384 14.1162 5.48007 14.0225C5.3863 13.9287 5.33362 13.8015 5.33362 13.6689V7.66892C5.33362 7.53631 5.3863 7.40914 5.48007 7.31537C5.57384 7.2216 5.70101 7.16892 5.83362 7.16892C5.96623 7.16892 6.09341 7.2216 6.18717 7.31537C6.28094 7.40914 6.33362 7.53631 6.33362 7.66892V13.6689ZM9.66695 13.6689C9.66695 13.8015 9.61428 13.9287 9.52051 14.0225C9.42674 14.1162 9.29956 14.1689 9.16695 14.1689C9.03435 14.1689 8.90717 14.1162 8.8134 14.0225C8.71963 13.9287 8.66695 13.8015 8.66695 13.6689V7.66892C8.66695 7.53631 8.71963 7.40914 8.8134 7.31537C8.90717 7.2216 9.03435 7.16892 9.16695 7.16892C9.29956 7.16892 9.42674 7.2216 9.52051 7.31537C9.61428 7.40914 9.66695 7.53631 9.66695 7.66892V13.6689Z" fill="#004DF6" className="group-hover:fill-hover"></path>
                           <path className='group-hover:fill-hover' d="M14.166 2.66911H10.9994C10.9551 2.66911 10.9128 2.65155 10.8815 2.62029C10.8502 2.58904 10.8327 2.54664 10.8327 2.50244V1.66911C10.8327 1.22708 10.6571 0.803157 10.3445 0.490597C10.032 0.178036 9.60804 0.00244141 9.16602 0.00244141L5.83268 0.00244141C5.39066 0.00244141 4.96673 0.178036 4.65417 0.490597C4.34161 0.803157 4.16602 1.22708 4.16602 1.66911V2.50244C4.16602 2.54664 4.14846 2.58904 4.1172 2.62029C4.08594 2.65155 4.04355 2.66911 3.99935 2.66911H0.832682C0.655871 2.66911 0.486302 2.73935 0.361278 2.86437C0.236254 2.98939 0.166016 3.15896 0.166016 3.33577C0.166016 3.51259 0.236254 3.68215 0.361278 3.80718C0.486302 3.9322 0.655871 4.00244 0.832682 4.00244H14.166C14.3428 4.00244 14.5124 3.9322 14.6374 3.80718C14.7624 3.68215 14.8327 3.51259 14.8327 3.33577C14.8327 3.15896 14.7624 2.98939 14.6374 2.86437C14.5124 2.73935 14.3428 2.66911 14.166 2.66911ZM5.49935 2.50244V1.66911C5.49935 1.5807 5.53447 1.49592 5.59698 1.43341C5.65949 1.37089 5.74428 1.33577 5.83268 1.33577H9.16602C9.25442 1.33577 9.33921 1.37089 9.40172 1.43341C9.46423 1.49592 9.49935 1.5807 9.49935 1.66911V2.50244C9.49935 2.54664 9.48179 2.58904 9.45054 2.62029C9.41928 2.65155 9.37689 2.66911 9.33268 2.66911H5.66602C5.62181 2.66911 5.57942 2.65155 5.54817 2.62029C5.51691 2.58904 5.49935 2.54664 5.49935 2.50244Z" fill="#004DF6" className="group-hover:fill-hover"></path>
                        </svg> Delete
                     </Link>
                     <Link className='textLink text-center inline-flex flex-wrap items-center bg-fieldBg rounded-8 px-3 my-0 group' to="/">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                           <path className='group-hover:fill-hover' d="M10.0472 2.66937C10.0162 2.63716 9.9789 2.61167 9.93762 2.59446C9.89634 2.57726 9.85196 2.56872 9.80724 2.56937C9.72027 2.56885 9.63653 2.60234 9.57391 2.6627L2.29391 9.9427C2.26267 9.97369 2.23787 10.0106 2.22095 10.0512C2.20403 10.0918 2.19531 10.1354 2.19531 10.1794C2.19531 10.2234 2.20403 10.2669 2.22095 10.3076C2.23787 10.3482 2.26267 10.385 2.29391 10.416L5.58724 13.7094C5.65084 13.7732 5.73716 13.8091 5.82724 13.8094C5.87084 13.8091 5.91395 13.8001 5.95402 13.783C5.9941 13.7658 6.03033 13.7408 6.06058 13.7094L13.3339 6.43604C13.3954 6.3726 13.4298 6.28772 13.4298 6.19937C13.4298 6.11102 13.3954 6.02614 13.3339 5.9627L10.0472 2.66937Z" fill="#004DF6" className="group-hover:fill-hover"></path>
                           <path className='group-hover:fill-hover' d="M1.62054 11.2026C1.57766 11.1626 1.52519 11.1344 1.46822 11.1207C1.41124 11.107 1.35169 11.1083 1.29534 11.1244C1.239 11.1405 1.18777 11.1709 1.14663 11.2126C1.10549 11.2544 1.07583 11.306 1.06054 11.3626L0.0538683 15.5426C0.0405279 15.5984 0.0421309 15.6568 0.0585159 15.7118C0.0749009 15.7668 0.105489 15.8165 0.147202 15.8559C0.187378 15.8965 0.237149 15.9264 0.291914 15.9427C0.346679 15.959 0.404672 15.9613 0.460535 15.9492L4.6672 14.9426C4.72453 14.929 4.77711 14.9001 4.81936 14.859C4.86161 14.8179 4.89196 14.7662 4.9072 14.7092C4.92269 14.6525 4.92347 14.5927 4.90947 14.5356C4.89547 14.4784 4.86716 14.4258 4.8272 14.3826L1.62054 11.2026Z" fill="#004DF6" className="group-hover:fill-hover"></path>
                           <path className='group-hover:fill-hover' d="M15.4667 1.94926L14.0534 0.535932C13.739 0.225699 13.315 0.0517578 12.8734 0.0517578C12.4317 0.0517578 12.0078 0.225699 11.6934 0.535932L10.7534 1.4826C10.7215 1.51252 10.6961 1.54867 10.6787 1.5888C10.6613 1.62893 10.6523 1.6722 10.6523 1.71593C10.6523 1.75966 10.6613 1.80293 10.6787 1.84306C10.6961 1.88319 10.7215 1.91934 10.7534 1.94926L14.0534 5.2826C14.0833 5.31448 14.1194 5.3399 14.1596 5.35727C14.1997 5.37465 14.243 5.38361 14.2867 5.38361C14.3304 5.38361 14.3737 5.37465 14.4138 5.35727C14.454 5.3399 14.4901 5.31448 14.52 5.2826L15.4667 4.3026C15.7781 3.99019 15.953 3.56706 15.953 3.12593C15.953 2.68481 15.7781 2.26167 15.4667 1.94926Z" fill="#004DF6" className="group-hover:fill-hover"></path>
                        </svg> Edit
                     </Link>
                     <Button classes='custom-button custom-button-large custom-button-fill-primary w-auto ml-auto' attributes={{ disabled: false, type: 'button', loader: false, value: 'complete' }} />
                  </div>
               </div>
               <div className='w-5/12 pl-12'>
                  <div className='border border-fieldOutline rounded-lg p-6'>
                     <div className="text-16 leading-20 mb-4 font-semibold font-inter-regular text-black false">Comments</div>
                     <div className="form-control">
                        <input type="text" className="custom-input-field !mb-0" placeholder="Add a new comment" autoFocus tabIndex="3" />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <Footer />
      </div>
   )
}

export default EmptyTask;