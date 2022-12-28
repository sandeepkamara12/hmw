import React, { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import projectService from "../../services/projectService";
import { useSelector } from "react-redux";
import Listing from "./Common/Listing";

const Active = (props) => {
  const loggedInUser = useSelector((state) => state.user.userInfo);
  const [projects, setProjects] = useState([]);
  const [projectsHasLoaded, setProjectsHasLoaded] = useState(false);

  const getActiveProjectsByUserId = async () => {
    setProjectsHasLoaded(false);
    const { _id } = loggedInUser;
    try {
      const res = await projectService.getProjectsByUserId(_id, "active");
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
    getActiveProjectsByUserId();
  }, []);

  return <Listing projectsHasLoaded={projectsHasLoaded} projects={projects} />;
};

export default Active;
