import React from 'react';
import Support from '../components/tasks/Support';

const SupportTasks = (props) => {
   return (
      <Support hideButton={props.hideButton} width={props.width} />
   )
}

export default SupportTasks;