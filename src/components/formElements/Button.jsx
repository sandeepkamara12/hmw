import React from 'react'

const Button = (props) => {
   return (
      <button className={props.classes} disabled={props.attributes.disabled} onClick={props.attributes.clickEvent}>{props.attributes.value}</button>
   )
}

export default Button;