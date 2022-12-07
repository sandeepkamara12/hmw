import DraggableList from "react-draggable-list";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../FormElements/Button";
import Chip from "../../layout/CustomChip";
const data = Array(5)
  .fill(null)
  .map((item, index) => ({ id: index }));

const SolutionTasksList = ({ item, itemSelected, dragHandleProps }) => {
  const { onMouseDown, onTouchStart } = dragHandleProps;

  return (
    <>
      <div className="project-listing disable-select">
        {/* {item.id} */}
        <Link
          className="project-wrap flex-col lg:flex-row !items-start disable-select dragHandle"
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
          <span className="project-content-wrap block">
            <span className="font-inter-regular text-16 text-black block leading-20 pr-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
          </span>
          <span className="flex flex-wrap items-center mt-4 lg:mt-0">
            <Chip overrideClasses="" icon="watch" content="4h" />
          </span>
          <Button
            classes="custom-button custom-button-large custom-button-outline-primary mt-4 lg:hidden"
            attributes={{ type: "button", disabled: false, value: "View task" }}
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
    </>
  );
};

export default function SolutionTasks() {
  const [list, setList] = useState(data);

  const containerRef = useRef();

  const _onListChange = (newList) => {
    setList(newList);
  };

  return (
    <div ref={containerRef} style={{ touchAction: "pan-y" }}>
      <DraggableList
        itemKey="id"
        template={SolutionTasksList}
        list={list}
        onMoveEnd={(newList) => _onListChange(newList)}
        container={() => containerRef.current}
      />
    </div>
  );
}
