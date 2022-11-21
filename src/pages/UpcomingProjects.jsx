import React from 'react';
import Upcoming from '../components/projects/Upcoming';

const UpcomingProjects = (props) => {
   return (
      <Upcoming hideButton={props.hideButton} width={props.width} />
   )
}

export default UpcomingProjects;