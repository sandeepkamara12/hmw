import React from 'react';
import BackBtn from '../assets/images/back-arrow.svg';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
   return (
      <div className="custom-container py-9">
         <div className="header flex flex-wrap items-center justify-center">
            <Link to="/" tabIndex="1" className='block sm:hidden mr-auto'>
               <img src={BackBtn} alt="Back Btn" className="mx-auto mb-10" />
            </Link>
            <Link to="/" className='mx-auto mb-20 mt-9 hidden sm:block'>
               <svg xmlns="http://www.w3.org/2000/svg" width="62" height="15" viewBox="0 0 62 15" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M28.2304 10.6421L23.2193 0L16.1406 14.4376H26.3695H30.0176H40.2464L33.4481 0L28.2304 10.6421Z" fill="#FE7A48" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M50.7648 0.982422H40.252V9.7431C40.252 12.6461 42.6053 14.9995 45.5084 14.9995C48.4114 14.9995 50.7648 12.6461 50.7648 9.7431V0.982422ZM61.2793 0.982422H50.7664V9.7431C50.7664 12.6461 53.1198 14.9995 56.0229 14.9995C58.9259 14.9995 61.2793 12.6461 61.2793 9.7431V0.982422Z" fill="#044FF5" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.72168 1.11987H6.74903V4.48188H9.13035V1.11987H15.1577V14.4361H9.13035V11.0699H6.74903V14.4361H0.72168V1.11987Z" fill="#FECD48" />
               </svg>
            </Link>
         </div>
         <div className="custom-medium-container">
            <div className='terms-content'>
               <h1 className='headingOne !text-left !mb-4'>Terms of Service</h1>
               <div className="last-updated mb-8 custom-input-field">Last Updated: September 30, 2022.</div>

               <h2 className='text-24 font-semibold font-inter-regular tracking-subHeading mb-8'>Sub heading 1</h2>

               <h3 className='text-18 font-semibold font-inter-regular tracking-subHeading mb-4'>Sub heading 2</h3>
               <p className='font-inter-regular font-16 leading-20 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

               <h3 className='text-18 font-semibold font-inter-regular tracking-subHeading mb-4'>Sub heading 2</h3>
               <p className='font-inter-regular font-16 leading-20 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

               <h3 className='text-18 font-semibold font-inter-regular tracking-subHeading mb-4'>Sub heading 2</h3>
               <p className='font-inter-regular font-16 leading-20 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

               <h3 className='text-18 font-semibold font-inter-regular tracking-subHeading mb-4'>Previous versions</h3>
               <ul className='list-disc list-inside'>
                  <li><Link to="/" className='normalLink text-16 leading-20'>November 15, 202</Link></li>
                  <li><Link to="/" className='normalLink text-16 leading-20'>November 15, 202</Link></li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default TermsOfService;