import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomModal from "../../../layout/Modal";
import AddProject from "../../Projects/AddProject";
import ConfirmModal from "../../Modals/Confirm";
import userService from "../../../services/userService";

const SupportTab = (props) => {
  // console.log();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  function openDeleteModal() {
    setDeleteModalIsOpen(true);
  }

  function closeDeleteModal() {
    setDeleteModalIsOpen(false);
  }

  const getAllUsers = async () => {
    try {
      const res = await userService.getAllUsers();
      const { user } = res.data;
      let options = [];
      user.forEach((u) => {
        if (u.full_name) {
          options.push({ value: u.full_name, label: u.full_name });
        }
      });
      setAllUsers(options);
    } catch (err) {
      console.log(err);
      // setShowLoader(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="px-4 sm:px-0 py-8">
      <div className="tab-panel">
        <div className="text-center">
          <Link
            className="textLink text-center inline-flex items-center flex-wrap bg-fieldBg rounded-8 p-3 mt-1 mb-2 group"
            onClick={openDeleteModal}
            // to="/"
          >
            <svg
              width="15"
              height="17"
              viewBox="0 0 15 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M12.467 5.00225H2.53362C2.48751 5.00211 2.44187 5.01153 2.39959 5.02992C2.3573 5.04832 2.31929 5.07528 2.28797 5.10912C2.25664 5.14295 2.23267 5.18292 2.21758 5.22649C2.20249 5.27006 2.1966 5.31629 2.20029 5.36225L3.05362 14.7889C3.08366 15.1214 3.23729 15.4304 3.48416 15.6551C3.73102 15.8797 4.05317 16.0036 4.38695 16.0023H10.6136C10.9474 16.0036 11.2696 15.8797 11.5164 15.6551C11.7633 15.4304 11.9169 15.1214 11.947 14.7889L12.8336 5.33559C12.8373 5.28962 12.8314 5.2434 12.8163 5.19982C12.8012 5.15625 12.7773 5.11628 12.7459 5.08245C12.7146 5.04862 12.6766 5.02165 12.6343 5.00325C12.592 4.98486 12.5464 4.97544 12.5003 4.97559L12.467 5.00225ZM6.33362 13.6689C6.33362 13.8015 6.28094 13.9287 6.18717 14.0225C6.09341 14.1162 5.96623 14.1689 5.83362 14.1689C5.70101 14.1689 5.57384 14.1162 5.48007 14.0225C5.3863 13.9287 5.33362 13.8015 5.33362 13.6689V7.66892C5.33362 7.53631 5.3863 7.40914 5.48007 7.31537C5.57384 7.2216 5.70101 7.16892 5.83362 7.16892C5.96623 7.16892 6.09341 7.2216 6.18717 7.31537C6.28094 7.40914 6.33362 7.53631 6.33362 7.66892V13.6689ZM9.66695 13.6689C9.66695 13.8015 9.61428 13.9287 9.52051 14.0225C9.42674 14.1162 9.29956 14.1689 9.16695 14.1689C9.03435 14.1689 8.90717 14.1162 8.8134 14.0225C8.71963 13.9287 8.66695 13.8015 8.66695 13.6689V7.66892C8.66695 7.53631 8.71963 7.40914 8.8134 7.31537C8.90717 7.2216 9.03435 7.16892 9.16695 7.16892C9.29956 7.16892 9.42674 7.2216 9.52051 7.31537C9.61428 7.40914 9.66695 7.53631 9.66695 7.66892V13.6689Z"
                fill="#004DF6"
                className="group-hover:fill-hover"
              />
              <path
                d="M14.166 2.66911H10.9994C10.9551 2.66911 10.9128 2.65155 10.8815 2.62029C10.8502 2.58904 10.8327 2.54664 10.8327 2.50244V1.66911C10.8327 1.22708 10.6571 0.803157 10.3445 0.490597C10.032 0.178036 9.60804 0.00244141 9.16602 0.00244141L5.83268 0.00244141C5.39066 0.00244141 4.96673 0.178036 4.65417 0.490597C4.34161 0.803157 4.16602 1.22708 4.16602 1.66911V2.50244C4.16602 2.54664 4.14846 2.58904 4.1172 2.62029C4.08594 2.65155 4.04355 2.66911 3.99935 2.66911H0.832682C0.655871 2.66911 0.486302 2.73935 0.361278 2.86437C0.236254 2.98939 0.166016 3.15896 0.166016 3.33577C0.166016 3.51259 0.236254 3.68215 0.361278 3.80718C0.486302 3.9322 0.655871 4.00244 0.832682 4.00244H14.166C14.3428 4.00244 14.5124 3.9322 14.6374 3.80718C14.7624 3.68215 14.8327 3.51259 14.8327 3.33577C14.8327 3.15896 14.7624 2.98939 14.6374 2.86437C14.5124 2.73935 14.3428 2.66911 14.166 2.66911ZM5.49935 2.50244V1.66911C5.49935 1.5807 5.53447 1.49592 5.59698 1.43341C5.65949 1.37089 5.74428 1.33577 5.83268 1.33577H9.16602C9.25442 1.33577 9.33921 1.37089 9.40172 1.43341C9.46423 1.49592 9.49935 1.5807 9.49935 1.66911V2.50244C9.49935 2.54664 9.48179 2.58904 9.45054 2.62029C9.41928 2.65155 9.37689 2.66911 9.33268 2.66911H5.66602C5.62181 2.66911 5.57942 2.65155 5.54817 2.62029C5.51691 2.58904 5.49935 2.54664 5.49935 2.50244Z"
                fill="#004DF6"
                className="group-hover:fill-hover"
              />
            </svg>{" "}
            Delete project
          </Link>
        </div>

        <div className="text-center">
          <Link
            className="textLink text-center inline-flex flex-wrap items-center bg-fieldBg rounded-8 p-3 mt-1 mb-2 group"
            onClick={openModal}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M10.0472 2.66937C10.0162 2.63716 9.9789 2.61167 9.93762 2.59446C9.89634 2.57726 9.85196 2.56872 9.80724 2.56937C9.72027 2.56885 9.63653 2.60234 9.57391 2.6627L2.29391 9.9427C2.26267 9.97369 2.23787 10.0106 2.22095 10.0512C2.20403 10.0918 2.19531 10.1354 2.19531 10.1794C2.19531 10.2234 2.20403 10.2669 2.22095 10.3076C2.23787 10.3482 2.26267 10.385 2.29391 10.416L5.58724 13.7094C5.65084 13.7732 5.73716 13.8091 5.82724 13.8094C5.87084 13.8091 5.91395 13.8001 5.95402 13.783C5.9941 13.7658 6.03033 13.7408 6.06058 13.7094L13.3339 6.43604C13.3954 6.3726 13.4298 6.28772 13.4298 6.19937C13.4298 6.11102 13.3954 6.02614 13.3339 5.9627L10.0472 2.66937Z"
                fill="#004DF6"
                className="group-hover:fill-hover"
              />
              <path
                d="M1.62054 11.2026C1.57766 11.1626 1.52519 11.1344 1.46822 11.1207C1.41124 11.107 1.35169 11.1083 1.29534 11.1244C1.239 11.1405 1.18777 11.1709 1.14663 11.2126C1.10549 11.2544 1.07583 11.306 1.06054 11.3626L0.0538683 15.5426C0.0405279 15.5984 0.0421309 15.6568 0.0585159 15.7118C0.0749009 15.7668 0.105489 15.8165 0.147202 15.8559C0.187378 15.8965 0.237149 15.9264 0.291914 15.9427C0.346679 15.959 0.404672 15.9613 0.460535 15.9492L4.6672 14.9426C4.72453 14.929 4.77711 14.9001 4.81936 14.859C4.86161 14.8179 4.89196 14.7662 4.9072 14.7092C4.92269 14.6525 4.92347 14.5927 4.90947 14.5356C4.89547 14.4784 4.86716 14.4258 4.8272 14.3826L1.62054 11.2026Z"
                fill="#004DF6"
                className="group-hover:fill-hover"
              />
              <path
                d="M15.4667 1.94926L14.0534 0.535932C13.739 0.225699 13.315 0.0517578 12.8734 0.0517578C12.4317 0.0517578 12.0078 0.225699 11.6934 0.535932L10.7534 1.4826C10.7215 1.51252 10.6961 1.54867 10.6787 1.5888C10.6613 1.62893 10.6523 1.6722 10.6523 1.71593C10.6523 1.75966 10.6613 1.80293 10.6787 1.84306C10.6961 1.88319 10.7215 1.91934 10.7534 1.94926L14.0534 5.2826C14.0833 5.31448 14.1194 5.3399 14.1596 5.35727C14.1997 5.37465 14.243 5.38361 14.2867 5.38361C14.3304 5.38361 14.3737 5.37465 14.4138 5.35727C14.454 5.3399 14.4901 5.31448 14.52 5.2826L15.4667 4.3026C15.7781 3.99019 15.953 3.56706 15.953 3.12593C15.953 2.68481 15.7781 2.26167 15.4667 1.94926Z"
                fill="#004DF6"
                className="group-hover:fill-hover"
              />
            </svg>{" "}
            Edit project
          </Link>
        </div>
      </div>

      <CustomModal
        isOpen={modalIsOpen}
        isClose={closeModal}
        component={
          <AddProject
            closeModal={closeModal}
            editMode={true}
            project={props.project}
            allUsers={allUsers}
            updateProjects={(projectData) => {
              props.updateCurrentProject(projectData);
            }}
          />
        }
        closeModal={closeModal}
        title="Edit a project"
        buttonContent="Save project"
      />

      <CustomModal
        isOpen={deleteModalIsOpen}
        isClose={closeModal}
        component={
          <ConfirmModal
            heading="Are you sure you want to delete this project?"
            attributes={{
              clickEvent: () => {
                props.deleteAction();
              },
            }}
            closeModal={closeDeleteModal}
          />
        }
        closeModal={closeDeleteModal}
      />
    </div>
  );
};

export default SupportTab;
