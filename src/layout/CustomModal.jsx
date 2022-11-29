import React, { useState } from 'react';
import Button from '../components/FormElements/Button';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const customStyles = {
   content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      padding: '0',
      borderRadius: '8px',
      transform: 'translate(-50%, -50%)',
      maxWidth: '100%',
      width: '550px',
   },
};

const CustomModal = ({ isOpen, isClose, component, title, buttonContent }) => {
   return (
      <Modal isOpen={isOpen} onRequestClose={isClose} style={customStyles} contentLabel="Add Project">
         <div className='modal-header-wrap'>
            <h3 className="text-18 leading-21 text-black font-inter-medium block text-center font-medium">{title}</h3>
            <button type="button" className="absolute top-4.5 right-4 bg-transparent group" onClick={isClose}>
               <svg aria-hidden="true" className="w-6 h-6 group-hover:fill-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
               <span className="sr-only">Close modal</span>
            </button>
         </div>
         {component}
         <div className='modal-footer border-t border-t-fieldOutline p-6 flex flex-wrap items-center justify-end fixed left-0 right-0 bottom-0 bg-white z-50'>
            <Button classes='custom-button custom-button-large custom-button-fill-primary w-auto' attributes={{ type: 'button', disabled: true, value: buttonContent }} />
         </div>
      </Modal>
   )
}

export default CustomModal;