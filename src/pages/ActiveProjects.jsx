import React from 'react';
import Active from '../components/projects/Active';

const ActiveProjects = (props) => {
   return (
      <Active hideButton={props.hideButton} width={props.width} />
   )
}

export default ActiveProjects;