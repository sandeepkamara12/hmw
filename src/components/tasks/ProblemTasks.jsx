import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../FormElements/Button";
import Chip from "../../layout/CustomChip";
const data = Array(5)
  .fill(null)
  .map((item, index) => ({ id: index }));

const ProblemTasks = (props) => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState(props.tasks || []);

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  return (
    <>
      {list.map((item, index) => (
        <div
          className="project-listing disable-select"
          key={item._id}
          onDragStart={(e) => dragStart(e, index)}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragEnd={drop}
          draggable
        >
          <Link
            className="project-wrap flex-col lg:flex-row !items-start disable-select dragHandle"
            to={`/task/${item.slug}/${item.task_name
              .toLowerCase()
              .replace(/\s/g, "-")}`}
          >
            <span className="project-content-wrap block">
              <span className="font-inter-regular text-16 text-black block leading-20 pr-5">
                {item.task_name}
              </span>
            </span>
            <span className="flex flex-wrap items-center mt-4 lg:mt-0">
              {item.assigned_to.map((user) => {
                return (
                  <Chip overrideClasses="red-zone" icon="user" content={user} />
                );
              })}
              <Chip overrideClasses="" icon="watch" content={item.time_est} />
            </span>
            <Button
              classes="custom-button custom-button-large custom-button-outline-primary mt-4 lg:hidden"
              attributes={{
                type: "button",
                disabled: false,
                value: "View task",
              }}
            />
            <span className="project-icon-wrap absolute right-4 top-0 bottom-0 flex flex-wrap items-center">
              <svg
                width="10"
                height="14"
                viewBox="0 0 10 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37593 7.00247C9.37593 7.41081 9.20093 7.76081 8.90926 7.99414L2.43426 13.7691C1.9676 14.1191 1.2676 14.0608 0.917597 13.5941C0.567597 13.1275 0.567597 12.4858 1.03426 12.1358L6.75093 7.11914C6.80926 7.06081 6.80926 7.00247 6.75093 6.88581L1.03426 1.86914C0.567596 1.46081 0.509263 0.819143 0.917596 0.352476C1.32593 -0.11419 1.9676 -0.172525 2.43426 0.235809C2.43426 0.235809 2.43426 0.235809 2.4926 0.294143L8.96759 6.01081C9.20093 6.24414 9.37593 6.65247 9.37593 7.00247Z"
                  fill="#CADAE2"
                />
              </svg>
            </span>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProblemTasks;
