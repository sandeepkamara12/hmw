import React, { useState, useRef, useEffect } from "react";
import ProblemTasks from "./ProblemTasks";

const Plan = (props) => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState([]);

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

  useEffect(() => {
    if (props.sections) {
      setList(props.sections);
    }
  }, [props]);
  return (
    <>
      {list &&
        list.map((item, index) => (
          <div
            className="tab-panel"
            key={item._id}
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            draggable
          >
            <div
              className={`text-16 leading-20 mb-4 mt-8 font-semibold font-inter-regular text-black ${
                props.width <= 640 && "mt-8"
              }`}
            >
              {item.title}
            </div>
            <ProblemTasks tasks={item.tasks} />
          </div>
        ))}
    </>
  );
};

export default Plan;
