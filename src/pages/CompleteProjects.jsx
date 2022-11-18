import React from 'react';
import Complete from '../components/projects/Complete';

const CompleteProjects = (props) => {
   return (
      <Complete hideButton={props.hideButton} width={props.width} />
   )
}

export default CompleteProjects;