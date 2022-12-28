import React, { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import projectService from "../../services/projectService";
import { useSelector } from "react-redux";
import Listing from "./Common/Listing";

const Backlog = (props, ref) => {
  const loggedInUser = useSelector((state) => state.user.userInfo);
  const [projects, setProjects] = useState([]);
  const [projectsHasLoaded, setProjectsHasLoaded] = useState(false);

  const getBackLogProjectsByUserId = async () => {
    setProjectsHasLoaded(false);
    const { _id } = loggedInUser;
    try {
      const res = await projectService.getProjectsByUserId(_id, "backlog");
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
    getBackLogProjectsByUserId();
  }, []);
  return <Listing projectsHasLoaded={projectsHasLoaded} projects={projects} />;
};

export default Backlog;
