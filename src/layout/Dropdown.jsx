import React, { useState, useRef } from "react";
import { ReactComponent as EditIcon } from "../assets/images/edit-icon.svg";
import { ReactComponent as DeleteIcon } from "../assets/images/delete-icon.svg";
import { useEffect } from "react";

const options = [
  {
    name: "Edit",
    icon: EditIcon,
  },
  {
    name: "Delete",
    icon: DeleteIcon,
  },
];

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    };
  }, [wrapperRef]);

  return (
    <>
      <div className="DropDownContainer relative inline-block text-left">
        <div className="DropDownHeader cursor-pointer" onClick={toggling}>
          <svg
            width="45"
            height="35"
            viewBox="0 0 45 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2083 20.2083C15.7041 20.2083 16.9167 18.9958 16.9167 17.5C16.9167 16.0042 15.7041 14.7917 14.2083 14.7917C12.7126 14.7917 11.5 16.0042 11.5 17.5C11.5 18.9958 12.7126 20.2083 14.2083 20.2083Z"
              fill="#BABFC9"
            />
            <path
              d="M22.5013 20.2083C23.9971 20.2083 25.2096 18.9958 25.2096 17.5C25.2096 16.0042 23.9971 14.7917 22.5013 14.7917C21.0055 14.7917 19.793 16.0042 19.793 17.5C19.793 18.9958 21.0055 20.2083 22.5013 20.2083Z"
              fill="#BABFC9"
            />
            <path
              d="M30.7917 20.2083C32.2874 20.2083 33.5 18.9958 33.5 17.5C33.5 16.0042 32.2874 14.7917 30.7917 14.7917C29.2959 14.7917 28.0833 16.0042 28.0833 17.5C28.0833 18.9958 29.2959 20.2083 30.7917 20.2083Z"
              fill="#BABFC9"
            />
          </svg>
        </div>
        {isOpen && (
          <div className="DropDownListContainer" ref={wrapperRef}>
            <ul className="absolute right-0 z-10 mt-2 py-3 origin-top-right min-w-[106px] rounded-md bg-black text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {options.map((option) => (
                <li
                  key={option.name}
                  onClick={toggling}
                  className="flex items-center px-4 py-1 text-gray-700 text-13 font-inter-medium hover:bg-[#FECD48] hover:text-black"
                >
                  <option.icon className="flex-shrink-0 text-gray-400 m-2" aria-hidden="true" />
                  {option.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
