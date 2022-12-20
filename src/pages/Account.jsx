import React from "react";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import { userActions } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
const Account = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(userActions.userLoggedIn(false));
  };
  return (
    <div className={`sm:ml-20 py-7 sm:py-18`}>
      <div className="custom-medium-container">
        <h1 class="headingOne transition-all !mb-0 ">Log out</h1>
        <div className="px-4 sm:px-0 py-8">
          <div className="text-center">
            <Link
              onClick={logoutHandler}
              className="textLink text-center inline-flex items-center flex-wrap bg-fieldBg rounded-8 p-3 mt-1 mb-2 group"
            >
              <svg
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.4443 1.68433C6.08879 0.585513 8.02219 -0.000976562 10 -0.000976562C12.6522 -0.000976562 15.1957 1.05259 17.0711 2.92796C18.9464 4.80332 20 7.34686 20 9.99902C20 11.9768 19.4135 13.9102 18.3147 15.5547C17.2159 17.1992 15.6541 18.4809 13.8268 19.2378C11.9996 19.9947 9.98891 20.1927 8.0491 19.8069C6.10929 19.421 4.32746 18.4686 2.92894 17.0701C1.53041 15.6716 0.578004 13.8897 0.192152 11.9499C-0.193701 10.0101 0.00433285 7.99945 0.761209 6.17219C1.51809 4.34493 2.79981 2.78314 4.4443 1.68433ZM9.99935 10.3357C11.8403 10.3357 13.3327 8.84331 13.3327 7.00236C13.3327 5.16141 11.8403 3.66902 9.99935 3.66902C8.15841 3.66902 6.66602 5.16141 6.66602 7.00236C6.66602 8.84331 8.15841 10.3357 9.99935 10.3357ZM10.0009 11.9766C8.96253 11.9806 7.94635 12.2775 7.06921 12.8333C6.19208 13.389 5.4896 14.1811 5.04257 15.1183C5.00826 15.1794 4.99024 15.2483 4.99024 15.3183C4.99024 15.3884 5.00826 15.4572 5.04257 15.5183C5.08022 15.577 5.13199 15.6253 5.19314 15.6588C5.25428 15.6923 5.32286 15.7099 5.39257 15.71H14.5592C14.629 15.7099 14.6975 15.6923 14.7587 15.6588C14.8198 15.6253 14.8716 15.577 14.9092 15.5183C14.9436 15.4572 14.9616 15.3884 14.9616 15.3183C14.9616 15.2483 14.9436 15.1794 14.9092 15.1183C14.4659 14.1887 13.7712 13.4017 12.9038 12.8465C12.0363 12.2912 11.0308 11.9899 10.0009 11.9766Z"
                  fill="#044FF5"
                />
              </svg>
              Logout
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Account;
