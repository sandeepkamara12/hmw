import React, { useState } from "react";
import { ReactComponent as EditIcon } from "../assets/images/edit-icon.svg";
import { ReactComponent as DeleteIcon } from "../assets/images/delete-icon.svg";

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

  return (
    <>
      <div className="DropDownContainer relative inline-block text-left">
        <div className="DropDownHeader cursor-pointer" onClick={toggling}>
          <svg
            width="22"
            height="6"
            viewBox="0 0 22 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.70833 5.71067C4.2041 5.71067 5.41667 4.49811 5.41667 3.00234C5.41667 1.50657 4.2041 0.294006 2.70833 0.294006C1.21256 0.294006 0 1.50657 0 3.00234C0 4.49811 1.21256 5.71067 2.70833 5.71067Z"
              fill="#BABFC9"
            />
            <path
              d="M11.0013 5.71067C12.4971 5.71067 13.7096 4.49811 13.7096 3.00234C13.7096 1.50657 12.4971 0.294006 11.0013 0.294006C9.50553 0.294006 8.29297 1.50657 8.29297 3.00234C8.29297 4.49811 9.50553 5.71067 11.0013 5.71067Z"
              fill="#BABFC9"
            />
            <path
              d="M19.2913 5.71067C20.7871 5.71067 21.9997 4.49811 21.9997 3.00234C21.9997 1.50657 20.7871 0.294006 19.2913 0.294006C17.7956 0.294006 16.583 1.50657 16.583 3.00234C16.583 4.49811 17.7956 5.71067 19.2913 5.71067Z"
              fill="#BABFC9"
            />
          </svg>
        </div>
        {isOpen && (
          <div className="DropDownListContainer">
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
