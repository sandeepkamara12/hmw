import React from "react";
import Upcoming from "../components/projects/Backlog";

const BacklogProjects = (props) => {
  return <Upcoming projects={props.projects} hideButton={props.hideButton} width={props.width} />;
};

export default BacklogProjects;
