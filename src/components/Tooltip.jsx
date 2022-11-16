import React, { useState, useRef } from 'react';
import { usePopper } from 'react-popper';
import Info from '../assets/images/info.svg';
import 'react-popper-tooltip/dist/styles.css';
import useViewport from '../utils';
import Button from '../components/formElements/Button';

const Tooltip = () => {
   const [showPopper, setShowPopper] = useState(false);

   const buttonRef = useRef(null);
   const popperRef = useRef(null);

   const [arrowRef, setArrowRef] = useState(null);

   let { styles, attributes } = usePopper(
      buttonRef.current,
      popperRef.current,
      {
         modifiers: [
            {
               name: "arrow",
               options: {
                  element: arrowRef
               }
            },
            {
               name: "offset",
               options: {
                  offset: [0, 10]
               }
            }
         ],
         placement: "top",
      },
   );
   styles.popper = {};


   const { width } = useViewport();
   const handleTooltip = () => {
      console.log(showPopper)
      showPopper ? setShowPopper(false) : setShowPopper(true);
   }
   return (
      <span className='popover-wrap inline-block relative'>
         {
            width > 640 ?
               <button ref={buttonRef} onMouseEnter={() => setShowPopper(true)} onMouseLeave={() => setShowPopper(false)} >
                  <img src={Info} alt="info icon" className='cursor-pointer inline-block ml-2' />
               </button>
               :
               <button ref={buttonRef} onClick={() => setShowPopper(!showPopper)}>
                  <img src={Info} alt="info icon" className='cursor-pointer inline-block ml-2' />
               </button>
         }
         {showPopper ? (
            <div ref={popperRef} style={styles.popper} {...attributes.popper} className="tooltip">
               <div className="tooltip-inner">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <Button classes='custom-button custom-button-large bg-white border border-primary mt-6 block sm:hidden' attributes={{ disabled: false, value: "Got it", clickEvent: handleTooltip }} />
               </div>
               <div ref={setArrowRef} style={styles.arrow} />
            </div>
         ) : null}
      </span>
   )
}

export default Tooltip;