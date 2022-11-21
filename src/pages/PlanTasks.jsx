import React from 'react';
import Plan from '../components/tasks/Plan';

const PlanTasks = (props) => {
   return (
      <Plan hideButton={props.hideButton} width={props.width} />
   )
}

export default PlanTasks;