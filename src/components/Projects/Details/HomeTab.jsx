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
import NewNoteModal from "./NewNoteModal";
import Dropdown from "../../../layout/Dropdown";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import notesService from "../../../services/notesService";
import Moment from "react-moment";
import CustomModal from "../../../layout/Modal";
import ConfirmModal from "../../Modals/Confirm";
import StatusUpdate from "../../Modals/StatusUpdate";
import statusService from "../../../services/statusService";
import Stage from "./Status/Stage";
import Expired from "./Status/Expired";
import Blocked from "./Status/Blocked";
import Missing from "./Status/Missing";

const HomeTab = (props) => {
  const [percentage, setPercentage] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const [noteContent, setNoteContent] = useState(null);
  const [showSkelton, setShowSkelton] = useState(true);
  const [unResolvedNotes, setUnResolvedNotes] = useState([]);
  const [resolvedNotesLength, setResolvedNotesLength] = useState([]);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState([]);
  const [editNoteMode, setEditNoteMode] = useState(false);
  const [projectStatus, setProjectStatus] = useState([]);

  function closeModal() {
    setIsOpen(false);
  }

  function closeDeleteModal() {
    setDeleteModalIsOpen(false);
  }

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

  const [statusUpdateOpen, setStatusUpdateOpen] = useState(false);

  const openStatusUpdate = () => {
    setStatusUpdateOpen(true);
  };
  const closeStatusUpdate = () => {
    setStatusUpdateOpen(false);
  };

  const cancelEdit = (note) => {
    setEditNoteMode(false);
    mapUnResolvedNotes(note, true);
    setNoteContent(null);
  };

  const isEditorNotEmpty = (value) => {
    if (
      value.replace(/<(.|\n)*?>/g, "").trim().length === 0 &&
      !value.includes("<img")
    ) {
      return true;
    }
    return false;
  };

  const handleDropdownEvent = (action, note) => {
    setSelectedNote(note);
    if (action === "Delete") {
      setDeleteModalIsOpen(true);
    }
    if (action === "Edit") {
      setEditNoteMode(true);
      mapUnResolvedNotes(note);
      setNoteContent(note.content);
    }
  };

  const setSkeltonLoadingState = (status) => {
    props.setShowSkelton(status);
    setShowSkelton(status);
  };
  const filterUnResolvedNotes = (note) => {
    const cloneUnResolvedNotes = [...unResolvedNotes];
    const updatedUnsolvedNotes = cloneUnResolvedNotes.filter((obj) => {
      if (obj._id === note._id) {
        return false;
      }
      return true;
    });
    setUnResolvedNotes(updatedUnsolvedNotes);
  };

  const mapUnResolvedNotes = (note = null, updateEntireNote = false) => {
    const cloneUnResolvedNotes = [...unResolvedNotes];
    const updatedUnsolvedNotes = cloneUnResolvedNotes.map((obj) => {
      if (obj.editable) {
        obj.editable = false;
      }
      if (obj._id === note?._id) {
        if (updateEntireNote) {
          obj = note;
        } else {
          note.editable = true;
        }
      }
      return obj;
    });
    setUnResolvedNotes(updatedUnsolvedNotes);
  };

  const getNotes = async () => {
    try {
      const res = await notesService.get(props.project._id);
      setUnResolvedNotes(res.data.filter((d) => !d.resolved));
      setResolvedNotesLength(res.data.filter((d) => d.resolved).length);
      setSkeltonLoadingState(false);
    } catch (err) {
      setSkeltonLoadingState(false);
      console.log(err);
    }
  };

  const getStatusByProjectId = async () => {
    try {
      const res = await statusService.getByProjectId(props.project._id);
      setProjectStatus(res.data);
      console.log(res);
      // setUnResolvedNotes(res.data.filter((d) => !d.resolved));
      // setResolvedNotesLength(res.data.filter((d) => d.resolved).length);
      // setSkeltonLoadingState(false);
    } catch (err) {
      setSkeltonLoadingState(false);
      console.log(err);
    }
  };

  const handleSubmit = async (note = null) => {
    if (!isEditorNotEmpty(noteContent)) {
      const payload = {
        project_id: props.project._id,
        content: noteContent,
        resolved: false,
        active: true,
        _id: note?._id,
      };
      try {
        setShowLoader(true);
        const res = await notesService.save(payload);
        if (res.data) {
          setUnResolvedNotes((prev) => [...prev, res.data]);
        }
        setShowLoader(false);
        setNoteContent(null);
        closeNewNoteModal(true);
        if (editNoteMode) {
          mapUnResolvedNotes(res.data, true);
        }
        setEditNoteMode(false);
      } catch (error) {
        setShowLoader(false);
        closeNewNoteModal(false);
        setEditNoteMode(false);
        console.log(error);
      }
    }
  };

  const reSolvedHanlder = async (e, note) => {
    e.preventDefault();
    try {
      const res = await notesService.resolved(note._id);
      if (res.data) {
        filterUnResolvedNotes(note);
        setResolvedNotesLength((prev) => [++prev]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async () => {
    try {
      const res = await notesService.inActive(selectedNote._id);
      if (res.data) {
        filterUnResolvedNotes(selectedNote);
        setDeleteModalIsOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStatusByProjectId();
    getNotes();
  }, []);

  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  return (
    <>
      {showSkelton ? (
        <ProjectStatusHomeSkeleton />
      ) : (
        <div className="flex flex-wrap flex-col-reverse lg:flex-row">
          {!editNoteMode && (
            <MediaQuery maxWidth={640}>
              <div className="flex justify-center mt-4 fixed left-0 right-0 bottom-24 z-10">
                <button
                  className="custom-button custom-button-large custom-button-fill-primary w-auto flex items-center justify-center"
                  type="button"
                  onClick={openNewNoteModal}
                >
                  <span className="mr-2.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0463 2.66668C10.0152 2.63448 9.97793 2.60898 9.93665 2.59178C9.89536 2.57458 9.85099 2.56604 9.80627 2.56668C9.71929 2.56616 9.63556 2.59966 9.57294 2.66002L2.29294 9.94002C2.26169 9.97101 2.23689 10.0079 2.21997 10.0485C2.20305 10.0891 2.19434 10.1327 2.19434 10.1767C2.19434 10.2207 2.20305 10.2643 2.21997 10.3049C2.23689 10.3455 2.26169 10.3824 2.29294 10.4134L5.58627 13.7067C5.64986 13.7705 5.73618 13.8065 5.82627 13.8067C5.86987 13.8064 5.91297 13.7975 5.95305 13.7803C5.99312 13.7631 6.02935 13.7381 6.0596 13.7067L13.3329 6.43335C13.3944 6.36992 13.4288 6.28504 13.4288 6.19668C13.4288 6.10833 13.3944 6.02345 13.3329 5.96002L10.0463 2.66668Z"
                        fill="white"
                      />
                      <path
                        d="M1.61956 11.2C1.57669 11.1601 1.52422 11.1319 1.46724 11.1182C1.41026 11.1045 1.35071 11.1057 1.29437 11.1218C1.23802 11.1379 1.18679 11.1683 1.14565 11.2101C1.10451 11.2518 1.07485 11.3034 1.05956 11.36L0.0528917 15.54C0.0395513 15.5958 0.0411543 15.6542 0.0575393 15.7092C0.0739243 15.7642 0.104513 15.8139 0.146225 15.8534C0.186402 15.894 0.236172 15.9238 0.290937 15.9402C0.345702 15.9565 0.403695 15.9587 0.459558 15.9467L4.66622 14.94C4.72356 14.9264 4.77613 14.8975 4.81838 14.8564C4.86063 14.8154 4.89099 14.7636 4.90622 14.7067C4.92171 14.6499 4.92249 14.5901 4.90849 14.533C4.8945 14.4759 4.86619 14.4232 4.82622 14.38L1.61956 11.2Z"
                        fill="white"
                      />
                      <path
                        d="M15.4667 1.9467L14.0534 0.533368C13.739 0.223136 13.315 0.0491943 12.8734 0.0491943C12.4317 0.0491943 12.0078 0.223136 11.6934 0.533368L10.7534 1.48004C10.7215 1.50996 10.6961 1.54611 10.6787 1.58624C10.6613 1.62637 10.6523 1.66964 10.6523 1.71337C10.6523 1.7571 10.6613 1.80037 10.6787 1.8405C10.6961 1.88063 10.7215 1.91677 10.7534 1.9467L14.0534 5.28004C14.0833 5.31192 14.1194 5.33734 14.1596 5.35471C14.1997 5.37208 14.243 5.38105 14.2867 5.38105C14.3304 5.38105 14.3737 5.37208 14.4138 5.35471C14.454 5.33734 14.4901 5.31192 14.52 5.28004L15.4667 4.30003C15.7781 3.98763 15.953 3.56449 15.953 3.12337C15.953 2.68224 15.7781 2.25911 15.4667 1.9467Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  New note
                </button>
              </div>
            </MediaQuery>
          )}

          <div className="lg:w-7/12">
            <div className="border border-fieldOutline rounded-lg p-6">
              <h4 className="text-16 leading-20 font-inter-medium text-black false flex items-center">
                Notes
                {unResolvedNotes && unResolvedNotes.length > 0 && (
                  <span className="w-5 h-5 bg-primary text-xs text-white font-mono-medium rounded-full flex items-center justify-center ml-3">
                    {unResolvedNotes.length}
                  </span>
                )}
              </h4>
              {unResolvedNotes?.map((note, index) => {
                return (
                  <>
                    <div
                      className={`flex py-6 ${
                        unResolvedNotes.length - 1 !== index
                          ? "border-b border-fieldOutline"
                          : ""
                      }`}
                      key={index}
                    >
                      <div className="c-userimg relative top-1.5">
                        <span className="w-8 h-8 rounded-full bg-[#FECD48] font-inter-medium uppercase text-black flex items-center justify-center">
                          {note.created_by.full_name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 pl-2.5">
                        <div className="flex justify-between items-center">
                          <h5 className="text-16 font-inter-regular">
                            {note.created_by.full_name}
                            <span className="opacity-40 text-13 font-inter-regular ml-2">
                              <Moment fromNow>{note.created_on}</Moment>
                            </span>
                          </h5>
                          {!note.editable && (
                            <span className="ml-auto">
                              <Dropdown
                                clickEvent={(action) => {
                                  handleDropdownEvent(action, note);
                                }}
                              />
                            </span>
                          )}
                        </div>
                        {!note.editable && (
                          <>
                            <div
                              className="text-14 pb-2.5 qill-list break-all"
                              dangerouslySetInnerHTML={{ __html: note.content }}
                            />
                            <Link
                              onClick={(e) => reSolvedHanlder(e, note)}
                              className="text-13 text-primary font-mono-medium"
                            >
                              Resolved
                            </Link>
                          </>
                        )}

                        <MediaQuery minWidth={641}>
                          {note.editable && (
                            <div className="mt-4">
                              <div
                                className={`relative ${
                                  editNoteMode ? "edit-mode" : ""
                                }`}
                              >
                                <ReactQuill
                                  theme="snow"
                                  modules={modules}
                                  value={noteContent}
                                  onChange={setNoteContent}
                                />
                                <Button
                                  classes="custom-button custom-button-large px-4  custom-button-fill-primary absolute right-0 bottom-0 w-auto"
                                  attributes={{
                                    type: "button",
                                    disabled:
                                      !noteContent ||
                                      isEditorNotEmpty(noteContent)
                                        ? true
                                        : false,
                                    value: "Save",
                                    loader: showLoader,
                                    clickEvent: () => handleSubmit(note),
                                  }}
                                />
                                <Button
                                  classes="custom-button custom-button-large px-4  custom-button-fill-primary absolute bg-black border-black right-[75px] bottom-0 w-auto"
                                  attributes={{
                                    type: "button",
                                    value: "Cancel",
                                    clickEvent: () => {
                                      cancelEdit(note);
                                    },
                                  }}
                                />
                              </div>
                            </div>
                          )}
                        </MediaQuery>
                      </div>
                    </div>
                    <MediaQuery maxWidth={640}>
                      {note.editable && (
                        <div className="mt-4">
                          <div className="relative ReactQuillMobile">
                            <ReactQuill
                              theme="snow"
                              modules={modules}
                              value={noteContent}
                              onChange={setNoteContent}
                            />
                            <Button
                              classes="custom-button custom-button-large custom-button-fill-primary mt-4"
                              attributes={{
                                type: "button",
                                disabled:
                                  !noteContent || isEditorNotEmpty(noteContent)
                                    ? true
                                    : false,
                                value: "Save",
                                loader: showLoader,
                                clickEvent: () => handleSubmit(note),
                              }}
                            />
                            <Button
                              classes="custom-button custom-button-large custom-button-fill-primary bg-black border-black mt-3"
                              attributes={{
                                type: "button",
                                value: "Cancel",
                                clickEvent: () => {
                                  cancelEdit(note);
                                },
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </MediaQuery>
                  </>
                );
              })}

              {resolvedNotesLength > 0 && (
                <div className="bg-[#F9F9FB] text-center p-3 rounded-md">
                  <Link className="text-13 text-primary font-mono-medium">
                    {resolvedNotesLength} resolved notes
                  </Link>
                </div>
              )}
              {!editNoteMode && (
                <MediaQuery minWidth={641}>
                  <div className="mt-4">
                    <div className="relative">
                      <ReactQuill
                        theme="snow"
                        modules={modules}
                        value={noteContent}
                        onChange={setNoteContent}
                      />
                      <Button
                        classes="custom-button custom-button-large custom-button-fill-primary absolute right-0 bottom-0 w-auto"
                        attributes={{
                          type: "button",
                          disabled:
                            !noteContent || isEditorNotEmpty(noteContent)
                              ? true
                              : false,
                          value: "Save",
                          loader: showLoader,
                          clickEvent: () => handleSubmit(),
                        }}
                      />
                    </div>
                  </div>
                </MediaQuery>
              )}
            </div>
          </div>

          <div className="lg:w-5/12 lg:pl-6 mb-2.5">
            {/* <Stage
              percentage={percentage}
              openStatusUpdateModal={openStatusUpdate}
            />
            <Blocked
              percentage={percentage}
              openStatusUpdateModal={openStatusUpdate}
            />
            <Expired percentage={percentage} /> */}
            <Missing openStatusUpdateModal={openStatusUpdate}></Missing>
          </div>
        </div>
      )}
      <ModalBottom
        isOpen={newNoteModalOpen}
        isClose={closeNewNoteModal}
        component={
          <NewNoteModal setNoteContent={(value) => setNoteContent(value)} />
        }
        title="New note"
        buttonContent="Save"
        attributes={{
          clickEvent: () => {
            handleSubmit();
          },
          loader: showLoader,
          disabled:
            !noteContent || isEditorNotEmpty(noteContent) ? true : false,
        }}
      />
      <CustomModal
        isOpen={deleteModalIsOpen}
        isClose={closeModal}
        component={
          <ConfirmModal
            heading="Are you sure you want to delete this note?"
            attributes={{
              clickEvent: () => {
                deleteNote();
              },
            }}
            closeModal={closeDeleteModal}
          />
        }
        closeModal={closeDeleteModal}
      />
      <CustomModal
        isOpen={statusUpdateOpen}
        isClose={closeModal}
        component={
          <StatusUpdate
            project={props.project}
            closeModal={closeStatusUpdate}
          />
        }
        title="Status update"
        closeModal={closeStatusUpdate}
      />
    </>
  );
};

export default HomeTab;
