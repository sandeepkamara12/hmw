import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useViewport from '../utils';
import ActiveProjects from './ActiveProjects';
import UpcomingProjects from './UpcomingProjects';
import CompleteProjects from './CompleteProjects';
import Button from '../components/formElements/Button';
import AddProject from '../components/projects/AddProject';
import Footer from '../layout/Footer';
import CustomModal from '../layouts/CustomModal';
// import Modal from 'react-modal';
// Modal.setAppElement('#root');

// const customStyles = {
//    content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       padding: '0',
//       borderRadius: '8px',
//       transform: 'translate(-50%, -50%)',
//       maxWidth: '100%',
//       width: '550px',
//    },
// };
const Projects = () => {
   const [modalIsOpen, setIsOpen] = useState(false);
   const [activeTab, setActiveTab] = useState({ active: true, upcoming: false, complete: false });

   const width = useViewport();
   const [hideHeader, setHideHeader] = useState('show');
   const [hideButton, setHideButton] = useState('show');

   function openModal() { setIsOpen(true) }
   function closeModal() { setIsOpen(false) }

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


   useEffect(() => {
      window.addEventListener("scroll", handleWindowScroll);
      return () => window.removeEventListener("scroll", handleWindowScroll);
   }, []);

   const changeTab = (tab) => {
      tab === 'active' ? setActiveTab({ active: true, upcoming: false, complete: false }) : tab === 'upcoming' ? setActiveTab({ active: false, upcoming: true, complete: false }) : setActiveTab({ active: false, upcoming: false, complete: true });
   }

   return (
      <div className={`sm:ml-20 py-7 sm:py-18`}>
         {
            hideHeader === 'show' && <div className="header block sm:hidden text-center">
               <Link to="/" className='mx-auto mb-10 inline-block'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="62" height="15" viewBox="0 0 62 15" fill="none">
                     <path fillRule="evenodd" clipRule="evenodd" d="M28.2304 10.6421L23.2193 0L16.1406 14.4376H26.3695H30.0176H40.2464L33.4481 0L28.2304 10.6421Z" fill="#FE7A48" />
                     <path fillRule="evenodd" clipRule="evenodd" d="M50.7648 0.982422H40.252V9.7431C40.252 12.6461 42.6053 14.9995 45.5084 14.9995C48.4114 14.9995 50.7648 12.6461 50.7648 9.7431V0.982422ZM61.2793 0.982422H50.7664V9.7431C50.7664 12.6461 53.1198 14.9995 56.0229 14.9995C58.9259 14.9995 61.2793 12.6461 61.2793 9.7431V0.982422Z" fill="#044FF5" />
                     <path fillRule="evenodd" clipRule="evenodd" d="M0.72168 1.11987H6.74903V4.48188H9.13035V1.11987H15.1577V14.4361H9.13035V11.0699H6.74903V14.4361H0.72168V1.11987Z" fill="#FECD48" />
                  </svg>
               </Link>
            </div>
         }

         <div className="custom-medium-container">
            <div className={hideButton === 'hide' ? 'sticky-header border-b-fieldOutline' : 'relative px-4 sm:px-0'}>
               <div className={`flex flex-wrap items-center mb-8 sm:mb-12 ${hideButton === 'hide' ? 'justify-center mb-6' : 'justify-between'}`}>
                  <h1 className={`headingOne transition-all !text-left !mb-0 ${hideButton === 'hide' ? '!text-18 !leading-21' : ''}`}>Projects</h1>
                  {
                     hideButton === 'show' && <div>
                        <Button classes='custom-button custom-button-small custom-button-outline-primary' attributes={{ type: 'button', disabled: false, value: "Add project", clickEvent: openModal }} />
                     </div>
                  }
               </div>
               <div className="tabs">
                  <Button attributes={{ type: 'button', disabled: false, value: "active", clickEvent: () => { changeTab('active') } }} classes={`tab ${activeTab.active ? 'active' : ''}`} />
                  <Button attributes={{ type: 'button', disabled: false, value: "upcoming", clickEvent: () => { changeTab('upcoming') } }} classes={`tab ${activeTab.upcoming ? 'active' : ''}`} />
                  <Button attributes={{ type: 'button', disabled: false, value: "complete", clickEvent: () => { changeTab('complete') } }} classes={`tab ${activeTab.complete ? 'active' : ''}`} />
               </div>
            </div>

            {
               activeTab.active ? <ActiveProjects width={width} /> : activeTab.upcoming ? <UpcomingProjects width={width} /> : <CompleteProjects width={width} />
            }
         </div>

         <Footer />
         <CustomModal isOpen={modalIsOpen} isClose={closeModal} component={<AddProject />} />
         {/* <div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Add Project">
               <div className='modal-header-wrap'>
                  <h3 className="text-18 leading-21 text-black font-inter-medium block text-center font-medium">Add a project</h3>
                  <button type="button" className="absolute top-4.5 right-4 bg-transparent group" onClick={closeModal}>
                     <svg aria-hidden="true" className="w-6 h-6 group-hover:fill-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                     <span className="sr-only">Close modal</span>
                  </button>
               </div>
               <AddProject />
               <div className='modal-footer border-t border-t-fieldOutline p-6 flex flex-wrap items-center justify-end fixed left-0 right-0 bottom-0 bg-white z-50'>
                  <Button classes='custom-button custom-button-large custom-button-fill-primary w-auto' attributes={{ type: 'button', disabled: true, value: "Save project" }} />
               </div>
            </Modal>
         </div> */}

      </div>
   )
}

export default Projects;