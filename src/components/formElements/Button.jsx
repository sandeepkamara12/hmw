import React from 'react'

const Button = (props) => {
   console.log(props)
   return (
      <button className={props.classes} disabled={props.attributes.disabled}>{props.attributes.value}</button>
   )
}

export default Button;