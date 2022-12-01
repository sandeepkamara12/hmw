import React from "react";
import Active from "../components/projects/Active";

const ActiveProjects = (props) => {
  return (
    <Active
      projects={props.projects}
      hideButton={props.hideButton}
      width={props.width}
    />
  );
};

export default ActiveProjects;
