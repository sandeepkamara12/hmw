import BackBtn from '../assets/images/back-arrow.svg';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useViewport from '../utils';
import PlanTasks from './PlanTasks';
import UpcomingProjects from './UpcomingProjects';
import CompleteProjects from './CompleteProjects';
import Button from '../components/formElements/Button';
import SimpleTooltip from '../components/SimpleTooltip';

const Tasks = () => {

   const [activeTab, setActiveTab] = useState({ active: true, upcoming: false, complete: false });

   const [hideHeader, setHideHeader] = useState('show');
   const [hideButton, setHideButton] = useState('show');
   const [showAddProjectModal, setShowAddProjectModal] = useState(false);

   const width = useViewport();

   const handleWindowScroll = () => {
      if (width <= 640) {
         if (window.scrollY > 100) {
            setHideHeader('hide');
         }
         else {
            setHideHeader('show');
         }
         if (window.scrollY > 30) {
            setHideButton('hide');
         }
         else {
            setHideButton('show');
         }
      }
   };

   const handleAddProjectModal = () => {
      setShowAddProjectModal(true);
   }

   useEffect(() => {
      window.addEventListener("scroll", handleWindowScroll);
      return () => window.removeEventListener("scroll", handleWindowScroll);
   }, []);

   const changeTab = (tab) => {
      tab === 'active' ? setActiveTab({ active: true, upcoming: false, complete: false }) : tab === 'upcoming' ? setActiveTab({ active: false, upcoming: true, complete: false }) : setActiveTab({ active: false, upcoming: false, complete: true });
   }

   function handleCloseAddProjectModal() {
      setShowAddProjectModal(false);
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
            {/* <div className={hideButton === 'hide' ? 'sticky-header border-b-fieldOutline' : 'relative px-4 sm:px-0'}> */}
            <div className={hideButton === 'hide' ? 'border-b-fieldOutline' : 'relative px-4 sm:px-0'}>
               <div className={`flex flex-wrap items-center mb-8 sm:mb-12 ${hideButton === 'hide' ? 'justify-center mb-6' : 'justify-between'}`}>
                  {/* <h1 className={`headingOne !text-left !mb-0 ${hideButton === 'hide' ? '!text-18 !leading-21' : ''}`}>Discounted Memberships (Holiday)</h1> */}
                  <h1 className={`headingOne !text-left !mb-0`}>Discounted Memberships (Holiday)</h1>
               </div>
               <div className='flex flex-wrap items-center justify-between'>
                  <div className="tabs w-auto">
                     <Button attributes={{ type: 'button', disabled: false, value: "Plan", clickEvent: () => { changeTab('active') } }} classes={`tab ${activeTab.active ? 'active' : ''}`} />
                     <Button attributes={{ type: 'button', disabled: false, value: "Support", clickEvent: () => { changeTab('upcoming') } }} classes={`tab ${activeTab.upcoming ? 'active' : ''}`} />
                     <Button attributes={{ type: 'button', disabled: false, value: "Status", clickEvent: () => { changeTab('complete') } }} classes={`tab ${activeTab.complete ? 'active' : ''}`} />
                  </div>
                  <span className='chip !ml-0 !hidden lg:!inline-flex'>
                     <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5.50244" r="5" fill="#2AD430" />
                     </svg>
                     On-track: Oct 12-14
                  </span>
               </div>
            </div>

            {
               activeTab.active ? <PlanTasks width={width} /> : activeTab.upcoming ? <UpcomingProjects width={width} /> : <CompleteProjects width={width} />
            }


            <div className='add-section px-4 sm:px-0'>
               <div className="form-control flex flex-wrap items-center justify-between relative">
                  <label className="field-label text-left" tabIndex="2">
                     <svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6.00244L19 6.00244" stroke="#CADAE2" stroke-width="2" stroke-linecap="round" />
                        <path d="M1 1.00244L19 1.00244" stroke="#CADAE2" stroke-width="2" stroke-linecap="round" />
                     </svg>
                  </label>
                  <input type="text" className="custom-input-field mb-0 !custom-max-container !pr-10" placeholder="Section title" tabIndex="3" />
                  <div className='delete-section absolute right-4 z-50 cursor-pointer group'>
                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.967 5.00225H3.03362C2.98751 5.00211 2.94187 5.01153 2.89959 5.02992C2.8573 5.04832 2.81929 5.07528 2.78797 5.10912C2.75664 5.14295 2.73267 5.18292 2.71758 5.22649C2.70249 5.27006 2.6966 5.31629 2.70029 5.36225L3.55362 14.7889C3.58366 15.1214 3.73729 15.4304 3.98416 15.6551C4.23102 15.8797 4.55317 16.0036 4.88695 16.0023H11.1136C11.4474 16.0036 11.7696 15.8797 12.0164 15.6551C12.2633 15.4304 12.4169 15.1214 12.447 14.7889L13.3336 5.33559C13.3373 5.28962 13.3314 5.2434 13.3163 5.19982C13.3012 5.15625 13.2773 5.11628 13.2459 5.08245C13.2146 5.04862 13.1766 5.02165 13.1343 5.00325C13.092 4.98486 13.0464 4.97544 13.0003 4.97559L12.967 5.00225ZM6.83362 13.6689C6.83362 13.8015 6.78094 13.9287 6.68717 14.0225C6.59341 14.1162 6.46623 14.1689 6.33362 14.1689C6.20101 14.1689 6.07384 14.1162 5.98007 14.0225C5.8863 13.9287 5.83362 13.8015 5.83362 13.6689V7.66892C5.83362 7.53631 5.8863 7.40914 5.98007 7.31537C6.07384 7.2216 6.20101 7.16892 6.33362 7.16892C6.46623 7.16892 6.59341 7.2216 6.68717 7.31537C6.78094 7.40914 6.83362 7.53631 6.83362 7.66892V13.6689ZM10.167 13.6689C10.167 13.8015 10.1143 13.9287 10.0205 14.0225C9.92674 14.1162 9.79956 14.1689 9.66695 14.1689C9.53435 14.1689 9.40717 14.1162 9.3134 14.0225C9.21963 13.9287 9.16695 13.8015 9.16695 13.6689V7.66892C9.16695 7.53631 9.21963 7.40914 9.3134 7.31537C9.40717 7.2216 9.53435 7.16892 9.66695 7.16892C9.79956 7.16892 9.92674 7.2216 10.0205 7.31537C10.1143 7.40914 10.167 7.53631 10.167 7.66892V13.6689Z" fill="#BABFC9" className='group-hover:text-primary' />
                        <path d="M14.666 2.66911H11.4994C11.4551 2.66911 11.4128 2.65155 11.3815 2.62029C11.3502 2.58904 11.3327 2.54664 11.3327 2.50244V1.66911C11.3327 1.22708 11.1571 0.803157 10.8445 0.490597C10.532 0.178036 10.108 0.00244141 9.66602 0.00244141L6.33268 0.00244141C5.89066 0.00244141 5.46673 0.178036 5.15417 0.490597C4.84161 0.803157 4.66602 1.22708 4.66602 1.66911V2.50244C4.66602 2.54664 4.64846 2.58904 4.6172 2.62029C4.58594 2.65155 4.54355 2.66911 4.49935 2.66911H1.33268C1.15587 2.66911 0.986302 2.73935 0.861278 2.86437C0.736254 2.98939 0.666016 3.15896 0.666016 3.33577C0.666016 3.51259 0.736254 3.68215 0.861278 3.80718C0.986302 3.9322 1.15587 4.00244 1.33268 4.00244H14.666C14.8428 4.00244 15.0124 3.9322 15.1374 3.80718C15.2624 3.68215 15.3327 3.51259 15.3327 3.33577C15.3327 3.15896 15.2624 2.98939 15.1374 2.86437C15.0124 2.73935 14.8428 2.66911 14.666 2.66911ZM5.99935 2.50244V1.66911C5.99935 1.5807 6.03447 1.49592 6.09698 1.43341C6.15949 1.37089 6.24428 1.33577 6.33268 1.33577H9.66602C9.75442 1.33577 9.83921 1.37089 9.90172 1.43341C9.96423 1.49592 9.99935 1.5807 9.99935 1.66911V2.50244C9.99935 2.54664 9.98179 2.58904 9.95054 2.62029C9.91928 2.65155 9.87689 2.66911 9.83268 2.66911H6.16602C6.12181 2.66911 6.07942 2.65155 6.04817 2.62029C6.01691 2.58904 5.99935 2.54664 5.99935 2.50244Z" fill="#BABFC9" className='group-hover:text-primary' />
                     </svg>
                  </div>
               </div>
               <div className='text-center border border-dashed border-fieldOutline rounded-lg mt-4'><Link className='textLink text-center inline-block bg-fieldBg rounded-8 p-3 mt-1 mb-2' to="/">Add a section</Link></div>
               <div className='text-center border border-dashed border-fieldOutline rounded-lg mt-4'><Link className='textLink text-center inline-block bg-fieldBg rounded-8 p-3 mt-1 mb-2' to="/">Add a task</Link></div>
            </div>


         </div>

         <div className='footer sidebar'>
            {
               width > 640 && <Link to="/" className='mb-10 sm:mb-14 sm:mt-7 mx-auto inline-block'>
                  <svg xmlns="http://www.w3.org/2000/svg" width='44' height="15" viewBox="0 0 62 15" fill="none">
                     <path fillRule="evenodd" clipRule="evenodd" d="M28.2304 10.6421L23.2193 0L16.1406 14.4376H26.3695H30.0176H40.2464L33.4481 0L28.2304 10.6421Z" fill="#FE7A48" />
                     <path fillRule="evenodd" clipRule="evenodd" d="M50.7648 0.982422H40.252V9.7431C40.252 12.6461 42.6053 14.9995 45.5084 14.9995C48.4114 14.9995 50.7648 12.6461 50.7648 9.7431V0.982422ZM61.2793 0.982422H50.7664V9.7431C50.7664 12.6461 53.1198 14.9995 56.0229 14.9995C58.9259 14.9995 61.2793 12.6461 61.2793 9.7431V0.982422Z" fill="#044FF5" />
                     <path fillRule="evenodd" clipRule="evenodd" d="M0.72168 1.11987H6.74903V4.48188H9.13035V1.11987H15.1577V14.4361H9.13035V11.0699H6.74903V14.4361H0.72168V1.11987Z" fill="#FECD48" />
                  </svg>
               </Link>
            }
            <Link to="/" className='sm:mb-4 w-1/3 sm:w-10 h-10 flex-wrap items-center justify-center flex active'>
               <SimpleTooltip tabIndex="5" content="Projects" placement="right" icon="projects" />

            </Link>
            <Link to="/" className='sm:mb-4 w-1/3 sm:w-10 h-10 flex-wrap items-center justify-center flex'>
               <SimpleTooltip tabIndex="5" content="Team" placement="right" icon="team" />
            </Link>
            <Link to="/" className='sm:mb-4 w-1/3 sm:w-10 h-10 flex-wrap items-center justify-center flex'>
               <SimpleTooltip tabIndex="5" content="Account" placement="right" icon="account" />
            </Link>
         </div>
      </div>
   )
}

export default Tasks;