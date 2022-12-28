import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import projectService from "../../services/projectService";
import Listing from "./Common/Listing";

const Complete = (props, ref) => {
  const loggedInUser = useSelector((state) => state.user.userInfo);
  const [projects, setProjects] = useState([]);
  const [projectsHasLoaded, setProjectsHasLoaded] = useState(false);

  const getCompleteProjectsByUserId = async () => {
    setProjectsHasLoaded(false);
    const { _id } = loggedInUser;
    try {
      const res = await projectService.getProjectsByUserId(_id, "complete");
      if (res.data.length) {
        setProjects(res.data);
        setProjectsHasLoaded(true);
      }
      props.projectsHasLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCompleteProjectsByUserId();
  }, []);

  return <Listing projectsHasLoaded={projectsHasLoaded} projects={projects} />;
};

export default Complete;
