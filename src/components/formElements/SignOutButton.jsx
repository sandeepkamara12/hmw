import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../store/slices/userSlice";

const SignOutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(userActions.userLoggedIn(false));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <button to="/" className="flex items-center SignOutButton" onClick={logoutHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
      >
        <g fill="#004DF6" clipPath="url(#clip0_926_2513)">
          <path d="M9 11.667a.666.666 0 00-.667.666V14a.333.333 0 01-.333.333H1.667A.333.333 0 011.333 14V2a.333.333 0 01.334-.333H8A.333.333 0 018.333 2v1.667a.667.667 0 101.334 0v-2A1.333 1.333 0 008.333.333h-7A1.333 1.333 0 000 1.667v12.666a1.333 1.333 0 001.333 1.334h7a1.334 1.334 0 001.334-1.334v-2A.667.667 0 009 11.667z"></path>
          <path d="M15.701 7.78l-4-2.667a.667.667 0 00-1.033.554v1.666h-6a1 1 0 000 2h6V11a.667.667 0 00.667.667.667.667 0 00.366-.114l4-2.666a.666.666 0 00.3-.554.666.666 0 00-.3-.553z"></path>
        </g>
        <defs>
          <clipPath id="clip0_926_2513">
            <path fill="#fff" d="M0 0H16V16H0z"></path>
          </clipPath>
        </defs>
      </svg>
      Sign out
    </button>
  );
};

export default SignOutButton;
