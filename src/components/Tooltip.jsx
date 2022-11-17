import React from 'react';
import Button from '../components/formElements/Button';
import { usePopperTooltip } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

const Tooltip = ({ content, tabIndex }) => {
   const {
      getArrowProps,
      getTooltipProps,
      setTooltipRef,
      setTriggerRef,
      visible,
   } = usePopperTooltip({
      placement: 'top',
      trigger: ['click', 'hover'],
      defaultVisible: false
   });

   return (
      <div className='popover-wrap inline-block relative' tabIndex={tabIndex}>
         <button type="button" ref={setTriggerRef} className='cursor-pointer inline-block ml-2 align-middle'>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" className='group'>
               <path className='group-hover:fill-black' d="M7 -0.000488281C5.61553 -0.000488281 4.26216 0.410055 3.11101 1.17922C1.95987 1.94839 1.06266 3.04164 0.532846 4.32073C0.003033 5.59981 -0.13559 7.00728 0.134506 8.36514C0.404603 9.72301 1.07129 10.9703 2.05026 11.9493C3.02922 12.9282 4.2765 13.5949 5.63437 13.865C6.99224 14.1351 8.3997 13.9965 9.67879 13.4667C10.9579 12.9369 12.0511 12.0396 12.8203 10.8885C13.5895 9.73736 14 8.38398 14 6.99951C14 5.143 13.2625 3.36252 11.9498 2.04976C10.637 0.73701 8.85652 -0.000488281 7 -0.000488281V-0.000488281ZM7.14584 2.91618C7.3189 2.91618 7.48807 2.9675 7.63196 3.06364C7.77585 3.15979 7.88801 3.29644 7.95423 3.45633C8.02046 3.61622 8.03779 3.79215 8.00402 3.96188C7.97026 4.13162 7.88693 4.28753 7.76456 4.4099C7.64218 4.53227 7.48627 4.6156 7.31654 4.64937C7.14681 4.68313 6.97087 4.6658 6.81099 4.59957C6.6511 4.53335 6.51445 4.4212 6.4183 4.2773C6.32215 4.13341 6.27084 3.96424 6.27084 3.79118C6.27084 3.55911 6.36302 3.33655 6.52712 3.17246C6.69121 3.00837 6.91377 2.91618 7.14584 2.91618ZM8.45834 10.7912H6.125C5.97029 10.7912 5.82192 10.7297 5.71252 10.6203C5.60313 10.5109 5.54167 10.3626 5.54167 10.2078C5.54167 10.0531 5.60313 9.90476 5.71252 9.79537C5.82192 9.68597 5.97029 9.62451 6.125 9.62451H6.5625C6.60118 9.62451 6.63827 9.60915 6.66562 9.5818C6.69297 9.55445 6.70834 9.51736 6.70834 9.47868V6.85368C6.70834 6.815 6.69297 6.77791 6.66562 6.75056C6.63827 6.72321 6.60118 6.70784 6.5625 6.70784H6.125C5.97029 6.70784 5.82192 6.64639 5.71252 6.53699C5.60313 6.42759 5.54167 6.27922 5.54167 6.12451C5.54167 5.9698 5.60313 5.82143 5.71252 5.71203C5.82192 5.60264 5.97029 5.54118 6.125 5.54118H6.70834C7.01776 5.54118 7.3145 5.66409 7.53329 5.88289C7.75209 6.10168 7.875 6.39843 7.875 6.70784V9.47868C7.875 9.51736 7.89037 9.55445 7.91772 9.5818C7.94507 9.60915 7.98216 9.62451 8.02084 9.62451H8.45834C8.61305 9.62451 8.76142 9.68597 8.87082 9.79537C8.98021 9.90476 9.04167 10.0531 9.04167 10.2078C9.04167 10.3626 8.98021 10.5109 8.87082 10.6203C8.76142 10.7297 8.61305 10.7912 8.45834 10.7912Z" fill="#BABFC9" />
            </svg>
         </button>

         {visible && (
            <div
               ref={setTooltipRef}
               {...getTooltipProps({ className: 'tooltip-container tooltip' })}
            >
               {/* <div className="tooltip-inner"> */}
               {content}
               {/* <Button classes='custom-button custom-button-large bg-white border border-primary mt-6 block sm:hidden' attributes={{ disabled: false, value: "Got it" }} /> */}
               {/* </div> */}
               <div {...getArrowProps({ className: 'tooltip-arrow tooltip-updated-arrow' })} />
            </div>
         )}
      </div>
   )
}

export default Tooltip;