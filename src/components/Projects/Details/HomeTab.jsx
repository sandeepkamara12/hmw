import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import UserImage from "../../../assets/images/user-pf-image.png";
import CustomChip from "../../../layout/CustomChip";
import Button from "../../../components/FormElements/Button";
import MediaQuery from "react-responsive";
import ModalBottom from "../../../layout/ModalBottom";
import ProjectStatusHomeSkeleton from "../../Skeleton/ProjectStatusHomeSkeleton";
import StatusModalContent from "./StatusModalContent";
import NewNoteModal from "./NewNoteModal";
import Dropdown from "../../../layout/Dropdown";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const HomeTab = () => {
  const [percentage, setPercentage] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const [value, setValue] = useState("");
  useEffect(() => {
    setTimeout(() => {
      if (percentage < 20) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const openStatusModal = () => {
    setStatusModalOpen(true);
  };
  const closeStatusModal = () => {
    setStatusModalOpen(false);
  };

  const [newNoteModalOpen, setNewNoteModalOpen] = useState(false);
  const openNewNoteModal = () => {
    setNewNoteModalOpen(true);
  };
  const closeNewNoteModal = () => {
    setNewNoteModalOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 3000);
  }, []);

  return (
    <>
      <ProjectStatusHomeSkeleton />
    </>
  );
};

export default HomeTab;
