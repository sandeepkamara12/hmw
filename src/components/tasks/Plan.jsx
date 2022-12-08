import DraggableList from "react-draggable-list";
import { useEffect, useRef, useState } from "react";
import ProblemTasks from "./ProblemTasks";
import SolutionTasks from "./SolutionTasks";
import { Link } from "react-router-dom";
// const data = Array(2)
//   .fill(null)
//   .map((item, index) => ({ id: index }));

const SectionList = [1, 2, 3, 4, 5, 6];

const Section = ({ item, itemSelected, dragHandleProps }, props) => {
  const { onMouseDown, onTouchStart } = dragHandleProps;

  return (
    <>
      <div className="tab-panel" key={item._id}>
        <div
          className={`text-16 leading-20 mb-4 mt-8 font-semibold font-inter-regular text-black ${
            props.width <= 640 && "mt-8"
          }`}
          onTouchStart={(e) => {
            e.preventDefault();
            console.log("touchStart");
            e.target.style.backgroundColor = "blue";
            document.body.style.overflow = "hidden";
            onTouchStart(e);
          }}
          onMouseDown={(e) => {
            console.log("mouseDown");
            document.body.style.overflow = "hidden";
            onMouseDown(e);
          }}
          onTouchEnd={(e) => {
            e.target.style.backgroundColor = "black";
            document.body.style.overflow = "visible";
          }}
          onMouseUp={() => {
            document.body.style.overflow = "visible";
          }}
        >
          {item.title}
        </div>
        {/* <div className="text-center">
          <Link
            className="textLink text-center block bg-fieldBg rounded-8 p-3 mt-1 mb-2"
            to="/"
          >
            44 completed tasks
          </Link>
        </div> */}
        <ProblemTasks tasks={item.tasks} />
      </div>
    </>
  );
};

export default function Plan(props) {
  const dd = props.sections.map((item, index) => ({ id: index }));
  console.log(dd);
  console.log(props.sections);
  const [list, setList] = useState(props.sections || []);
  const containerRef = useRef(null);

  const _onListChange = (newList) => {
    setList(newList);
  };

  useEffect(() => {
    setList(props.sections);
  }, [props.sections]);

  return (
    <div className="px-4 sm:px-0">
      <div ref={containerRef} style={{ touchAction: "pan-y" }}>
        <DraggableList
          itemKey="id"
          template={Section}
          list={list}
          onMoveEnd={(newList) => _onListChange(newList)}
          container={() => containerRef.current}
        />
      </div>
    </div>
  );
}
