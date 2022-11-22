import React from 'react';
import Status from '../components/tasks/Status';

const StatusTasks = (props) => {
   return (
      <Status hideButton={props.hideButton} width={props.width} />
   )
}

export default StatusTasks;