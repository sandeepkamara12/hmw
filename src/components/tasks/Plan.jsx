import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../formElements/Button';

const Plan = (props) => {

   return (
      <div className="px-4 sm:px-0">
         <div className='tab-panel'>
            <div className={`text-16 leading-20 mb-4 mt-8 font-semibold font-inter-regular text-black ${props.width <= 640 && 'mt-8'}`}>Problem definition</div>
            <div className='text-center'><Link className='textLink text-center inline-block bg-fieldBg rounded-8 p-3 mt-1 mb-2' to="/">44 completed tasks</Link></div>
            <div className='project-listing'>

               <Link to="/" className='project-wrap flex-col lg:flex-row !items-start'>
                  <span className='project-content-wrap block'>
                     <span className='font-inter-regular text-16 text-black block leading-20'>Discounted Memberships (Holiday)</span>
                  </span>
                  <span className='flex flex-wrap items-center mt-4 lg:mt-0'>

                     <span className='chip'>
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4.995 0.502441C2.235 0.502441 0 2.74244 0 5.50244C0 8.26244 2.235 10.5024 4.995 10.5024C7.76 10.5024 10 8.26244 10 5.50244C10 2.74244 7.76 0.502441 4.995 0.502441ZM5 9.50244C2.79 9.50244 1 7.71244 1 5.50244C1 3.29244 2.79 1.50244 5 1.50244C7.21 1.50244 9 3.29244 9 5.50244C9 7.71244 7.21 9.50244 5 9.50244Z" fill="#004DF6" />
                           <path d="M5.25 3.00244H4.5V6.00244L7.125 7.57744L7.5 6.96244L5.25 5.62744V3.00244Z" fill="#004DF6" />
                        </svg>
                        4h
                     </span>
                  </span>
                  <Button classes='custom-button custom-button-large custom-button-outline-primary mt-4 lg:hidden' attributes={{ type: 'button', disabled: false, value: "View task" }} />
                  <span className='project-icon-wrap absolute right-4 top-0 bottom-0 flex flex-wrap items-center'>
                     <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.37593 7.00247C9.37593 7.41081 9.20093 7.76081 8.90926 7.99414L2.43426 13.7691C1.9676 14.1191 1.2676 14.0608 0.917597 13.5941C0.567597 13.1275 0.567597 12.4858 1.03426 12.1358L6.75093 7.11914C6.80926 7.06081 6.80926 7.00247 6.75093 6.88581L1.03426 1.86914C0.567596 1.46081 0.509263 0.819143 0.917596 0.352476C1.32593 -0.11419 1.9676 -0.172525 2.43426 0.235809C2.43426 0.235809 2.43426 0.235809 2.4926 0.294143L8.96759 6.01081C9.20093 6.24414 9.37593 6.65247 9.37593 7.00247Z" fill="#CADAE2" />
                     </svg>
                  </span>
               </Link>
               <Link to="/" className='project-wrap flex-col lg:flex-row !items-start'>
                  <span className='project-content-wrap block'>
                     <span className='font-inter-regular text-16 text-black block leading-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                  </span>
                  <span className='flex flex-wrap items-center mt-4 lg:mt-0'>
                     <span className='chip'>
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4.995 0.502441C2.235 0.502441 0 2.74244 0 5.50244C0 8.26244 2.235 10.5024 4.995 10.5024C7.76 10.5024 10 8.26244 10 5.50244C10 2.74244 7.76 0.502441 4.995 0.502441ZM5 9.50244C2.79 9.50244 1 7.71244 1 5.50244C1 3.29244 2.79 1.50244 5 1.50244C7.21 1.50244 9 3.29244 9 5.50244C9 7.71244 7.21 9.50244 5 9.50244Z" fill="#004DF6" />
                           <path d="M5.25 3.00244H4.5V6.00244L7.125 7.57744L7.5 6.96244L5.25 5.62744V3.00244Z" fill="#004DF6" />
                        </svg>
                        4h
                     </span>
                  </span>
                  <span className='project-icon-wrap absolute right-4 top-0 bottom-0 flex flex-wrap items-center'>
                     <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.37593 7.00247C9.37593 7.41081 9.20093 7.76081 8.90926 7.99414L2.43426 13.7691C1.9676 14.1191 1.2676 14.0608 0.917597 13.5941C0.567597 13.1275 0.567597 12.4858 1.03426 12.1358L6.75093 7.11914C6.80926 7.06081 6.80926 7.00247 6.75093 6.88581L1.03426 1.86914C0.567596 1.46081 0.509263 0.819143 0.917596 0.352476C1.32593 -0.11419 1.9676 -0.172525 2.43426 0.235809C2.43426 0.235809 2.43426 0.235809 2.4926 0.294143L8.96759 6.01081C9.20093 6.24414 9.37593 6.65247 9.37593 7.00247Z" fill="#CADAE2" />
                     </svg>
                  </span>
               </Link>
               <Link to="/" className='project-wrap red-zone flex-col lg:flex-row !items-start'>
                  <span className='project-content-wrap block'>
                     <span className='font-inter-regular text-16 text-black block leading-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                  </span>
                  <span className='flex flex-wrap items-center mt-4 lg:mt-0'>
                     <span className='chip red-zone'>
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85025 4.68082C6.3363 5.19477 5.63924 5.4835 4.91241 5.4835C4.18557 5.4835 3.48851 5.19477 2.97456 4.68082C2.46061 4.16687 2.17188 3.4698 2.17188 2.74297C2.17188 2.01614 2.46061 1.31907 2.97456 0.805124C3.48851 0.291175 4.18557 0.00244141 4.91241 0.00244141C5.63924 0.00244141 6.3363 0.291175 6.85025 0.805124C7.3642 1.31907 7.65293 2.01614 7.65293 2.74297C7.65293 3.4698 7.3642 4.16687 6.85025 4.68082ZM3.26762 6.78066C3.81653 6.59698 4.40537 6.50242 5.00011 6.50244C5.59083 6.50355 6.17533 6.59927 6.71932 6.78401C7.26332 6.96875 7.75585 7.23878 8.16803 7.57825C8.58997 7.9138 8.9249 8.31306 9.15351 8.75298C9.38212 9.19291 9.49988 9.6648 9.5 10.1414C9.5 10.2372 9.45259 10.329 9.3682 10.3967C9.28381 10.4644 9.16936 10.5024 9.05001 10.5024H0.950214C0.832412 10.5025 0.719299 10.4654 0.635164 10.3993C0.551029 10.3331 0.502581 10.2431 0.500225 10.1487C0.494278 9.67154 0.60628 9.19821 0.829756 8.75603C1.05323 8.31386 1.38375 7.91161 1.8022 7.57255C2.22064 7.23349 2.71872 6.96433 3.26762 6.78066Z" fill="#FE7A48" />
                        </svg>
                        Jamison Hill
                     </span>
                     <span className='chip red-zone'>
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4.995 0.502441C2.235 0.502441 0 2.74244 0 5.50244C0 8.26244 2.235 10.5024 4.995 10.5024C7.76 10.5024 10 8.26244 10 5.50244C10 2.74244 7.76 0.502441 4.995 0.502441ZM5 9.50244C2.79 9.50244 1 7.71244 1 5.50244C1 3.29244 2.79 1.50244 5 1.50244C7.21 1.50244 9 3.29244 9 5.50244C9 7.71244 7.21 9.50244 5 9.50244Z" fill="#004DF6" />
                           <path d="M5.25 3.00244H4.5V6.00244L7.125 7.57744L7.5 6.96244L5.25 5.62744V3.00244Z" fill="#004DF6" />
                        </svg>
                        4h
                     </span>
                  </span>
                  <span className='project-icon-wrap absolute right-4 top-0 bottom-0 flex flex-wrap items-center'>
                     <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.37593 7.00247C9.37593 7.41081 9.20093 7.76081 8.90926 7.99414L2.43426 13.7691C1.9676 14.1191 1.2676 14.0608 0.917597 13.5941C0.567597 13.1275 0.567597 12.4858 1.03426 12.1358L6.75093 7.11914C6.80926 7.06081 6.80926 7.00247 6.75093 6.88581L1.03426 1.86914C0.567596 1.46081 0.509263 0.819143 0.917596 0.352476C1.32593 -0.11419 1.9676 -0.172525 2.43426 0.235809C2.43426 0.235809 2.43426 0.235809 2.4926 0.294143L8.96759 6.01081C9.20093 6.24414 9.37593 6.65247 9.37593 7.00247Z" fill="#CADAE2" />
                     </svg>
                  </span>
               </Link>
               <Link to="/" className='project-wrap flex-col lg:flex-row !items-start'>
                  <span className='project-content-wrap block'>
                     <span className='font-inter-regular text-16 text-black flex flex-wrap items-center leading-20'>
                        Lorem ipsum dolor sit amet consectetur
                     </span>
                  </span>
                  <span className='flex flex-wrap items-center mt-4 lg:mt-0'>
                     <span className='chip'>
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <circle cx="1.5" cy="2.00244" r="1.5" fill="#004DF6" />
                           <circle cx="8.5" cy="9.00244" r="1.5" fill="#004DF6" />
                           <path d="M1.49999 2.50244L1.49999 6.00244C1.49999 7.6593 2.84314 9.00244 4.49999 9.00244L8 9.00244" stroke="#004DF6" />
                        </svg>
                        5 sub tasks
                     </span>
                  </span>
                  <span className='project-icon-wrap absolute right-4 top-0 bottom-0 flex flex-wrap items-center'>
                     <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.37593 7.00247C9.37593 7.41081 9.20093 7.76081 8.90926 7.99414L2.43426 13.7691C1.9676 14.1191 1.2676 14.0608 0.917597 13.5941C0.567597 13.1275 0.567597 12.4858 1.03426 12.1358L6.75093 7.11914C6.80926 7.06081 6.80926 7.00247 6.75093 6.88581L1.03426 1.86914C0.567596 1.46081 0.509263 0.819143 0.917596 0.352476C1.32593 -0.11419 1.9676 -0.172525 2.43426 0.235809C2.43426 0.235809 2.43426 0.235809 2.4926 0.294143L8.96759 6.01081C9.20093 6.24414 9.37593 6.65247 9.37593 7.00247Z" fill="#CADAE2" />
                     </svg>
                  </span>
               </Link>
               <Link to="/" className='project-wrap flex-col lg:flex-row !items-start'>
                  <span className='project-content-wrap block'>
                     <span className='font-inter-regular text-16 text-black flex flex-wrap items-center leading-20'>
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                           <path d="M8.42291 3.90748C8.40779 3.89377 8.39571 3.87705 8.38745 3.85839C8.37918 3.83974 8.37491 3.81956 8.37491 3.79915C8.37491 3.77874 8.37918 3.75856 8.38745 3.7399C8.39571 3.72125 8.40779 3.70452 8.42291 3.69082L11.6729 1.10165C11.9546 0.874153 11.9329 0.662903 11.9004 0.559987C11.8679 0.45707 11.7379 0.27832 11.375 0.27832H3.70833C3.6365 0.27832 3.56762 0.306854 3.51683 0.357645C3.46603 0.408436 3.4375 0.477324 3.4375 0.549153V7.04914C3.4375 7.12097 3.46603 7.18986 3.51683 7.24065C3.56762 7.29144 3.6365 7.31998 3.70833 7.31998H11.375C11.7325 7.31998 11.8517 7.14664 11.8896 7.03831C11.9275 6.92998 11.9437 6.72414 11.6621 6.49664L8.42291 3.90748Z" fill="#004DF6" />
                           <path d="M0.817916 0.00245946C0.710762 0.00174509 0.604525 0.0222337 0.505322 0.0627456C0.406119 0.103258 0.31591 0.162993 0.239887 0.238511C0.163865 0.31403 0.103532 0.403841 0.0623619 0.502772C0.0211917 0.601704 -2.38108e-06 0.707802 2.00641e-10 0.814958V12.1899C2.00641e-10 12.4054 0.0856024 12.6121 0.237975 12.7645C0.390349 12.9168 0.597011 13.0024 0.812499 13.0024C1.02799 13.0024 1.23465 12.9168 1.38702 12.7645C1.5394 12.6121 1.625 12.4054 1.625 12.1899V0.814958C1.625 0.600405 1.54014 0.39456 1.38894 0.242342C1.23774 0.0901232 1.03246 0.00388982 0.817916 0.00245946Z" fill="#004DF6" />
                        </svg>

                        Clarify the details of the problem
                     </span>
                  </span>
                  <span className='flex flex-wrap items-center mt-4 lg:mt-0'>
                     <span className='chip'>
                        <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7.16732 4.46077H6.85482V3.31494C6.85482 2.56902 6.5585 1.85365 6.03105 1.3262C5.50361 0.798757 4.78824 0.502441 4.04232 0.502441C3.2964 0.502441 2.58103 0.798757 2.05358 1.3262C1.52613 1.85365 1.22982 2.56902 1.22982 3.31494V4.46077H0.917318C0.696304 4.46077 0.484342 4.54857 0.328062 4.70485C0.171782 4.86113 0.0839844 5.07309 0.0839844 5.29411V9.66911C0.0839844 9.89012 0.171782 10.1021 0.328062 10.2584C0.484342 10.4146 0.696304 10.5024 0.917318 10.5024H7.16732C7.38833 10.5024 7.60029 10.4146 7.75657 10.2584C7.91285 10.1021 8.00065 9.89012 8.00065 9.66911V5.29411C8.00065 5.07309 7.91285 4.86113 7.75657 4.70485C7.60029 4.54857 7.38833 4.46077 7.16732 4.46077ZM4.04232 8.21077C3.8775 8.21077 3.71638 8.1619 3.57934 8.07033C3.4423 7.97876 3.33549 7.84862 3.27242 7.69634C3.20934 7.54407 3.19284 7.37652 3.225 7.21487C3.25715 7.05322 3.33652 6.90473 3.45306 6.78819C3.56961 6.67164 3.71809 6.59227 3.87974 6.56012C4.04139 6.52797 4.20895 6.54447 4.36122 6.60754C4.51349 6.67061 4.64364 6.77743 4.73521 6.91447C4.82678 7.05151 4.87565 7.21262 4.87565 7.37744C4.87565 7.59845 4.78785 7.81042 4.63157 7.9667C4.47529 8.12298 4.26333 8.21077 4.04232 8.21077ZM5.81315 4.25244C5.81315 4.30769 5.7912 4.36069 5.75213 4.39976C5.71306 4.43883 5.66007 4.46077 5.60482 4.46077H2.47982C2.42456 4.46077 2.37157 4.43883 2.3325 4.39976C2.29343 4.36069 2.27148 4.30769 2.27148 4.25244V3.31494C2.27148 2.84529 2.45805 2.39487 2.79015 2.06277C3.12224 1.73068 3.57266 1.54411 4.04232 1.54411C4.51197 1.54411 4.96239 1.73068 5.29449 2.06277C5.62658 2.39487 5.81315 2.84529 5.81315 3.31494V4.25244Z" fill="#004DF6" />
                        </svg>
                        7
                     </span>
                     <span className='chip'>
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4.995 0.502441C2.235 0.502441 0 2.74244 0 5.50244C0 8.26244 2.235 10.5024 4.995 10.5024C7.76 10.5024 10 8.26244 10 5.50244C10 2.74244 7.76 0.502441 4.995 0.502441ZM5 9.50244C2.79 9.50244 1 7.71244 1 5.50244C1 3.29244 2.79 1.50244 5 1.50244C7.21 1.50244 9 3.29244 9 5.50244C9 7.71244 7.21 9.50244 5 9.50244Z" fill="#004DF6" />
                           <path d="M5.25 3.00244H4.5V6.00244L7.125 7.57744L7.5 6.96244L5.25 5.62744V3.00244Z" fill="#004DF6" />
                        </svg>
                        4h
                     </span>
                  </span>
                  <span className='project-icon-wrap absolute right-4 top-0 bottom-0 flex flex-wrap items-center'>
                     <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.37593 7.00247C9.37593 7.41081 9.20093 7.76081 8.90926 7.99414L2.43426 13.7691C1.9676 14.1191 1.2676 14.0608 0.917597 13.5941C0.567597 13.1275 0.567597 12.4858 1.03426 12.1358L6.75093 7.11914C6.80926 7.06081 6.80926 7.00247 6.75093 6.88581L1.03426 1.86914C0.567596 1.46081 0.509263 0.819143 0.917596 0.352476C1.32593 -0.11419 1.9676 -0.172525 2.43426 0.235809C2.43426 0.235809 2.43426 0.235809 2.4926 0.294143L8.96759 6.01081C9.20093 6.24414 9.37593 6.65247 9.37593 7.00247Z" fill="#CADAE2" />
                     </svg>
                  </span>
               </Link>
            </div>
         </div>
         <div className='tab-panel'>
            <div className={`text-16 leading-20 mb-4 mt-8 font-semibold font-inter-regular text-black ${props.width <= 640 && 'mt-8'}`}>Solution strategy</div>
            <div className='project-listing'>

               <Link to="/" className='project-wrap flex-col lg:flex-row !items-start'>
                  <span className='project-content-wrap block'>
                     <span className='font-inter-regular text-16 text-black block leading-20'>Discounted Memberships (Holiday)</span>
                  </span>
                  <span className='flex flex-wrap items-center mt-4 lg:mt-0'>

                     <span className='chip'>
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4.995 0.502441C2.235 0.502441 0 2.74244 0 5.50244C0 8.26244 2.235 10.5024 4.995 10.5024C7.76 10.5024 10 8.26244 10 5.50244C10 2.74244 7.76 0.502441 4.995 0.502441ZM5 9.50244C2.79 9.50244 1 7.71244 1 5.50244C1 3.29244 2.79 1.50244 5 1.50244C7.21 1.50244 9 3.29244 9 5.50244C9 7.71244 7.21 9.50244 5 9.50244Z" fill="#004DF6" />
                           <path d="M5.25 3.00244H4.5V6.00244L7.125 7.57744L7.5 6.96244L5.25 5.62744V3.00244Z" fill="#004DF6" />
                        </svg>
                        4h
                     </span>
                  </span>
                  <Button classes='custom-button custom-button-large custom-button-outline-primary mt-4 lg:hidden' attributes={{ type: 'button', disabled: false, value: "View task" }} />
                  <span className='project-icon-wrap absolute right-4 top-0 bottom-0 flex flex-wrap items-center'>
                     <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.37593 7.00247C9.37593 7.41081 9.20093 7.76081 8.90926 7.99414L2.43426 13.7691C1.9676 14.1191 1.2676 14.0608 0.917597 13.5941C0.567597 13.1275 0.567597 12.4858 1.03426 12.1358L6.75093 7.11914C6.80926 7.06081 6.80926 7.00247 6.75093 6.88581L1.03426 1.86914C0.567596 1.46081 0.509263 0.819143 0.917596 0.352476C1.32593 -0.11419 1.9676 -0.172525 2.43426 0.235809C2.43426 0.235809 2.43426 0.235809 2.4926 0.294143L8.96759 6.01081C9.20093 6.24414 9.37593 6.65247 9.37593 7.00247Z" fill="#CADAE2" />
                     </svg>
                  </span>
               </Link>
               <Link to="/" className='project-wrap flex-col lg:flex-row !items-start'>
                  <span className='project-content-wrap block'>
                     <span className='font-inter-regular text-16 text-black block leading-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                  </span>
                  <span className='flex flex-wrap items-center mt-4 lg:mt-0'>
                     <span className='chip'>
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4.995 0.502441C2.235 0.502441 0 2.74244 0 5.50244C0 8.26244 2.235 10.5024 4.995 10.5024C7.76 10.5024 10 8.26244 10 5.50244C10 2.74244 7.76 0.502441 4.995 0.502441ZM5 9.50244C2.79 9.50244 1 7.71244 1 5.50244C1 3.29244 2.79 1.50244 5 1.50244C7.21 1.50244 9 3.29244 9 5.50244C9 7.71244 7.21 9.50244 5 9.50244Z" fill="#004DF6" />
                           <path d="M5.25 3.00244H4.5V6.00244L7.125 7.57744L7.5 6.96244L5.25 5.62744V3.00244Z" fill="#004DF6" />
                        </svg>
                        4h
                     </span>
                  </span>
                  <span className='project-icon-wrap absolute right-4 top-0 bottom-0 flex flex-wrap items-center'>
                     <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.37593 7.00247C9.37593 7.41081 9.20093 7.76081 8.90926 7.99414L2.43426 13.7691C1.9676 14.1191 1.2676 14.0608 0.917597 13.5941C0.567597 13.1275 0.567597 12.4858 1.03426 12.1358L6.75093 7.11914C6.80926 7.06081 6.80926 7.00247 6.75093 6.88581L1.03426 1.86914C0.567596 1.46081 0.509263 0.819143 0.917596 0.352476C1.32593 -0.11419 1.9676 -0.172525 2.43426 0.235809C2.43426 0.235809 2.43426 0.235809 2.4926 0.294143L8.96759 6.01081C9.20093 6.24414 9.37593 6.65247 9.37593 7.00247Z" fill="#CADAE2" />
                     </svg>
                  </span>
               </Link>
               <Link to="/" className='project-wrap red-zone flex-col lg:flex-row !items-start'>
                  <span className='project-content-wrap block'>
                     <span className='font-inter-regular text-16 text-black block leading-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                  </span>
                  <span className='flex flex-wrap items-center mt-4 lg:mt-0'>
                     <span className='chip red-zone'>
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85025 4.68082C6.3363 5.19477 5.63924 5.4835 4.91241 5.4835C4.18557 5.4835 3.48851 5.19477 2.97456 4.68082C2.46061 4.16687 2.17188 3.4698 2.17188 2.74297C2.17188 2.01614 2.46061 1.31907 2.97456 0.805124C3.48851 0.291175 4.18557 0.00244141 4.91241 0.00244141C5.63924 0.00244141 6.3363 0.291175 6.85025 0.805124C7.3642 1.31907 7.65293 2.01614 7.65293 2.74297C7.65293 3.4698 7.3642 4.16687 6.85025 4.68082ZM3.26762 6.78066C3.81653 6.59698 4.40537 6.50242 5.00011 6.50244C5.59083 6.50355 6.17533 6.59927 6.71932 6.78401C7.26332 6.96875 7.75585 7.23878 8.16803 7.57825C8.58997 7.9138 8.9249 8.31306 9.15351 8.75298C9.38212 9.19291 9.49988 9.6648 9.5 10.1414C9.5 10.2372 9.45259 10.329 9.3682 10.3967C9.28381 10.4644 9.16936 10.5024 9.05001 10.5024H0.950214C0.832412 10.5025 0.719299 10.4654 0.635164 10.3993C0.551029 10.3331 0.502581 10.2431 0.500225 10.1487C0.494278 9.67154 0.60628 9.19821 0.829756 8.75603C1.05323 8.31386 1.38375 7.91161 1.8022 7.57255C2.22064 7.23349 2.71872 6.96433 3.26762 6.78066Z" fill="#FE7A48" />
                        </svg>
                        Jamison Hill
                     </span>
                     <span className='chip red-zone'>
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4.995 0.502441C2.235 0.502441 0 2.74244 0 5.50244C0 8.26244 2.235 10.5024 4.995 10.5024C7.76 10.5024 10 8.26244 10 5.50244C10 2.74244 7.76 0.502441 4.995 0.502441ZM5 9.50244C2.79 9.50244 1 7.71244 1 5.50244C1 3.29244 2.79 1.50244 5 1.50244C7.21 1.50244 9 3.29244 9 5.50244C9 7.71244 7.21 9.50244 5 9.50244Z" fill="#004DF6" />
                           <path d="M5.25 3.00244H4.5V6.00244L7.125 7.57744L7.5 6.96244L5.25 5.62744V3.00244Z" fill="#004DF6" />
                        </svg>
                        4h
                     </span>
                  </span>
                  <span className='project-icon-wrap absolute right-4 top-0 bottom-0 flex flex-wrap items-center'>
                     <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.37593 7.00247C9.37593 7.41081 9.20093 7.76081 8.90926 7.99414L2.43426 13.7691C1.9676 14.1191 1.2676 14.0608 0.917597 13.5941C0.567597 13.1275 0.567597 12.4858 1.03426 12.1358L6.75093 7.11914C6.80926 7.06081 6.80926 7.00247 6.75093 6.88581L1.03426 1.86914C0.567596 1.46081 0.509263 0.819143 0.917596 0.352476C1.32593 -0.11419 1.9676 -0.172525 2.43426 0.235809C2.43426 0.235809 2.43426 0.235809 2.4926 0.294143L8.96759 6.01081C9.20093 6.24414 9.37593 6.65247 9.37593 7.00247Z" fill="#CADAE2" />
                     </svg>
                  </span>
               </Link>
               <Link to="/" className='project-wrap flex-col lg:flex-row !items-start'>
                  <span className='project-content-wrap block'>
                     <span className='font-inter-regular text-16 text-black flex flex-wrap items-center leading-20'>
                        Lorem ipsum dolor sit amet consectetur
                     </span>
                  </span>
                  <span className='flex flex-wrap items-center mt-4 lg:mt-0'>
                     <span className='chip'>
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <circle cx="1.5" cy="2.00244" r="1.5" fill="#004DF6" />
                           <circle cx="8.5" cy="9.00244" r="1.5" fill="#004DF6" />
                           <path d="M1.49999 2.50244L1.49999 6.00244C1.49999 7.6593 2.84314 9.00244 4.49999 9.00244L8 9.00244" stroke="#004DF6" />
                        </svg>
                        5 sub tasks
                     </span>
                  </span>
                  <span className='project-icon-wrap absolute right-4 top-0 bottom-0 flex flex-wrap items-center'>
                     <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.37593 7.00247C9.37593 7.41081 9.20093 7.76081 8.90926 7.99414L2.43426 13.7691C1.9676 14.1191 1.2676 14.0608 0.917597 13.5941C0.567597 13.1275 0.567597 12.4858 1.03426 12.1358L6.75093 7.11914C6.80926 7.06081 6.80926 7.00247 6.75093 6.88581L1.03426 1.86914C0.567596 1.46081 0.509263 0.819143 0.917596 0.352476C1.32593 -0.11419 1.9676 -0.172525 2.43426 0.235809C2.43426 0.235809 2.43426 0.235809 2.4926 0.294143L8.96759 6.01081C9.20093 6.24414 9.37593 6.65247 9.37593 7.00247Z" fill="#CADAE2" />
                     </svg>
                  </span>
               </Link>
               <Link to="/" className='project-wrap flex-col lg:flex-row !items-start'>
                  <span className='project-content-wrap block'>
                     <span className='font-inter-regular text-16 text-black flex flex-wrap items-center leading-20'>
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                           <path d="M8.42291 3.90748C8.40779 3.89377 8.39571 3.87705 8.38745 3.85839C8.37918 3.83974 8.37491 3.81956 8.37491 3.79915C8.37491 3.77874 8.37918 3.75856 8.38745 3.7399C8.39571 3.72125 8.40779 3.70452 8.42291 3.69082L11.6729 1.10165C11.9546 0.874153 11.9329 0.662903 11.9004 0.559987C11.8679 0.45707 11.7379 0.27832 11.375 0.27832H3.70833C3.6365 0.27832 3.56762 0.306854 3.51683 0.357645C3.46603 0.408436 3.4375 0.477324 3.4375 0.549153V7.04914C3.4375 7.12097 3.46603 7.18986 3.51683 7.24065C3.56762 7.29144 3.6365 7.31998 3.70833 7.31998H11.375C11.7325 7.31998 11.8517 7.14664 11.8896 7.03831C11.9275 6.92998 11.9437 6.72414 11.6621 6.49664L8.42291 3.90748Z" fill="#004DF6" />
                           <path d="M0.817916 0.00245946C0.710762 0.00174509 0.604525 0.0222337 0.505322 0.0627456C0.406119 0.103258 0.31591 0.162993 0.239887 0.238511C0.163865 0.31403 0.103532 0.403841 0.0623619 0.502772C0.0211917 0.601704 -2.38108e-06 0.707802 2.00641e-10 0.814958V12.1899C2.00641e-10 12.4054 0.0856024 12.6121 0.237975 12.7645C0.390349 12.9168 0.597011 13.0024 0.812499 13.0024C1.02799 13.0024 1.23465 12.9168 1.38702 12.7645C1.5394 12.6121 1.625 12.4054 1.625 12.1899V0.814958C1.625 0.600405 1.54014 0.39456 1.38894 0.242342C1.23774 0.0901232 1.03246 0.00388982 0.817916 0.00245946Z" fill="#004DF6" />
                        </svg>

                        Clarify the details of the problem
                     </span>
                  </span>
                  <span className='flex flex-wrap items-center mt-4 lg:mt-0'>
                     <span className='chip'>
                        <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7.16732 4.46077H6.85482V3.31494C6.85482 2.56902 6.5585 1.85365 6.03105 1.3262C5.50361 0.798757 4.78824 0.502441 4.04232 0.502441C3.2964 0.502441 2.58103 0.798757 2.05358 1.3262C1.52613 1.85365 1.22982 2.56902 1.22982 3.31494V4.46077H0.917318C0.696304 4.46077 0.484342 4.54857 0.328062 4.70485C0.171782 4.86113 0.0839844 5.07309 0.0839844 5.29411V9.66911C0.0839844 9.89012 0.171782 10.1021 0.328062 10.2584C0.484342 10.4146 0.696304 10.5024 0.917318 10.5024H7.16732C7.38833 10.5024 7.60029 10.4146 7.75657 10.2584C7.91285 10.1021 8.00065 9.89012 8.00065 9.66911V5.29411C8.00065 5.07309 7.91285 4.86113 7.75657 4.70485C7.60029 4.54857 7.38833 4.46077 7.16732 4.46077ZM4.04232 8.21077C3.8775 8.21077 3.71638 8.1619 3.57934 8.07033C3.4423 7.97876 3.33549 7.84862 3.27242 7.69634C3.20934 7.54407 3.19284 7.37652 3.225 7.21487C3.25715 7.05322 3.33652 6.90473 3.45306 6.78819C3.56961 6.67164 3.71809 6.59227 3.87974 6.56012C4.04139 6.52797 4.20895 6.54447 4.36122 6.60754C4.51349 6.67061 4.64364 6.77743 4.73521 6.91447C4.82678 7.05151 4.87565 7.21262 4.87565 7.37744C4.87565 7.59845 4.78785 7.81042 4.63157 7.9667C4.47529 8.12298 4.26333 8.21077 4.04232 8.21077ZM5.81315 4.25244C5.81315 4.30769 5.7912 4.36069 5.75213 4.39976C5.71306 4.43883 5.66007 4.46077 5.60482 4.46077H2.47982C2.42456 4.46077 2.37157 4.43883 2.3325 4.39976C2.29343 4.36069 2.27148 4.30769 2.27148 4.25244V3.31494C2.27148 2.84529 2.45805 2.39487 2.79015 2.06277C3.12224 1.73068 3.57266 1.54411 4.04232 1.54411C4.51197 1.54411 4.96239 1.73068 5.29449 2.06277C5.62658 2.39487 5.81315 2.84529 5.81315 3.31494V4.25244Z" fill="#004DF6" />
                        </svg>
                        7
                     </span>
                     <span className='chip'>
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4.995 0.502441C2.235 0.502441 0 2.74244 0 5.50244C0 8.26244 2.235 10.5024 4.995 10.5024C7.76 10.5024 10 8.26244 10 5.50244C10 2.74244 7.76 0.502441 4.995 0.502441ZM5 9.50244C2.79 9.50244 1 7.71244 1 5.50244C1 3.29244 2.79 1.50244 5 1.50244C7.21 1.50244 9 3.29244 9 5.50244C9 7.71244 7.21 9.50244 5 9.50244Z" fill="#004DF6" />
                           <path d="M5.25 3.00244H4.5V6.00244L7.125 7.57744L7.5 6.96244L5.25 5.62744V3.00244Z" fill="#004DF6" />
                        </svg>
                        4h
                     </span>
                  </span>
                  <span className='project-icon-wrap absolute right-4 top-0 bottom-0 flex flex-wrap items-center'>
                     <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.37593 7.00247C9.37593 7.41081 9.20093 7.76081 8.90926 7.99414L2.43426 13.7691C1.9676 14.1191 1.2676 14.0608 0.917597 13.5941C0.567597 13.1275 0.567597 12.4858 1.03426 12.1358L6.75093 7.11914C6.80926 7.06081 6.80926 7.00247 6.75093 6.88581L1.03426 1.86914C0.567596 1.46081 0.509263 0.819143 0.917596 0.352476C1.32593 -0.11419 1.9676 -0.172525 2.43426 0.235809C2.43426 0.235809 2.43426 0.235809 2.4926 0.294143L8.96759 6.01081C9.20093 6.24414 9.37593 6.65247 9.37593 7.00247Z" fill="#CADAE2" />
                     </svg>
                  </span>
               </Link>
            </div>
         </div>
      </div>
   )
}

export default Plan;