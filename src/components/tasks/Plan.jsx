import React from "react";
import { Link } from "react-router-dom";
import Button from "../FormElements/Button";
import Chip from "../../layout/CustomChip";
const Plan = (props) => {
  return (
    <div className="px-4 sm:px-0">
      <div className="tab-panel">
        <div
          className={`text-16 leading-20 mb-4 mt-8 font-semibold font-inter-regular text-black ${
            props.width <= 640 && "mt-8"
          }`}
        >
          Problem definition
        </div>
        <div className="text-center">
          <Link className="textLink text-center block bg-fieldBg rounded-8 p-3 mt-1 mb-2" to="/">
            44 completed tasks
          </Link>
        </div>
        <div className="project-listing">
          <Link to="/" className="project-wrap flex-col lg:flex-row !items-start">
            <span className="project-content-wrap block">
              <span className="font-inter-regular text-16 text-black block leading-20 pr-5">
                Discounted Memberships (Holiday)
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
          <Link to="/" className="project-wrap flex-col lg:flex-row !items-start">
            <span className="project-content-wrap block">
              <span className="font-inter-regular text-16 text-black block leading-20 pr-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>
            </span>
            <span className="flex flex-wrap items-center mt-4 lg:mt-0">
              <Chip overrideClasses="" icon="watch" content="4h" />
            </span>
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
          <Link to="/" className="project-wrap red-zone flex-col lg:flex-row !items-start">
            <span className="project-content-wrap block">
              <span className="font-inter-regular text-16 text-black block leading-20 pr-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>
            </span>
            <span className="flex flex-wrap items-center mt-4 lg:mt-0">
              <Chip overrideClasses="red-zone" icon="user" content="Jamison Hill" />
              <Chip overrideClasses="red-zone" icon="watch" content="4h" />
            </span>
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
          <Link to="/" className="project-wrap flex-col lg:flex-row !items-start">
            <span className="project-content-wrap block">
              <span className="font-inter-regular text-16 text-black flex flex-wrap items-center leading-20">
                Lorem ipsum dolor sit amet consectetur
              </span>
            </span>
            <span className="flex flex-wrap items-center mt-4 lg:mt-0">
              <Chip overrideClasses="" icon="tasks" content="5 sub tasks" />
            </span>
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
          <Link to="/" className="project-wrap flex-col lg:flex-row !items-start">
            <span className="project-content-wrap block">
              <span className="font-inter-regular text-16 text-black flex flex-wrap items-center leading-20">
                <svg
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path
                    d="M8.42291 3.90748C8.40779 3.89377 8.39571 3.87705 8.38745 3.85839C8.37918 3.83974 8.37491 3.81956 8.37491 3.79915C8.37491 3.77874 8.37918 3.75856 8.38745 3.7399C8.39571 3.72125 8.40779 3.70452 8.42291 3.69082L11.6729 1.10165C11.9546 0.874153 11.9329 0.662903 11.9004 0.559987C11.8679 0.45707 11.7379 0.27832 11.375 0.27832H3.70833C3.6365 0.27832 3.56762 0.306854 3.51683 0.357645C3.46603 0.408436 3.4375 0.477324 3.4375 0.549153V7.04914C3.4375 7.12097 3.46603 7.18986 3.51683 7.24065C3.56762 7.29144 3.6365 7.31998 3.70833 7.31998H11.375C11.7325 7.31998 11.8517 7.14664 11.8896 7.03831C11.9275 6.92998 11.9437 6.72414 11.6621 6.49664L8.42291 3.90748Z"
                    fill="#004DF6"
                  />
                  <path
                    d="M0.817916 0.00245946C0.710762 0.00174509 0.604525 0.0222337 0.505322 0.0627456C0.406119 0.103258 0.31591 0.162993 0.239887 0.238511C0.163865 0.31403 0.103532 0.403841 0.0623619 0.502772C0.0211917 0.601704 -2.38108e-06 0.707802 2.00641e-10 0.814958V12.1899C2.00641e-10 12.4054 0.0856024 12.6121 0.237975 12.7645C0.390349 12.9168 0.597011 13.0024 0.812499 13.0024C1.02799 13.0024 1.23465 12.9168 1.38702 12.7645C1.5394 12.6121 1.625 12.4054 1.625 12.1899V0.814958C1.625 0.600405 1.54014 0.39456 1.38894 0.242342C1.23774 0.0901232 1.03246 0.00388982 0.817916 0.00245946Z"
                    fill="#004DF6"
                  />
                </svg>
                Clarify the details of the problem
              </span>
            </span>
            <span className="flex flex-wrap items-center mt-4 lg:mt-0">
              <Chip overrideClasses="" icon="lock" content="7" />
              <Chip overrideClasses="" icon="watch" content="4h" />
            </span>
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
      </div>
      <div className="tab-panel">
        <div
          className={`text-16 leading-20 mb-4 mt-8 font-semibold font-inter-regular text-black ${
            props.width <= 640 && "mt-8"
          }`}
        >
          Solution strategy
        </div>
        <div className="project-listing">
          <Link to="/" className="project-wrap flex-col lg:flex-row !items-start">
            <span className="project-content-wrap block">
              <span className="font-inter-regular text-16 text-black block leading-20 pr-5">
                Discounted Memberships (Holiday)
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
          <Link to="/" className="project-wrap flex-col lg:flex-row !items-start">
            <span className="project-content-wrap block">
              <span className="font-inter-regular text-16 text-black block leading-20 pr-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>
            </span>
            <span className="flex flex-wrap items-center mt-4 lg:mt-0">
              <Chip overrideClasses="" icon="watch" content="4h" />
            </span>
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
          <Link to="/" className="project-wrap red-zone flex-col lg:flex-row !items-start">
            <span className="project-content-wrap block">
              <span className="font-inter-regular text-16 text-black block leading-20 pr-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>
            </span>
            <span className="flex flex-wrap items-center mt-4 lg:mt-0">
              <Chip overrideClasses="red-zone" icon="user" content="Jamison Hill" />
              <Chip overrideClasses="red-zone" icon="watch" content="4h" />
            </span>
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
          <Link to="/" className="project-wrap flex-col lg:flex-row !items-start">
            <span className="project-content-wrap block">
              <span className="font-inter-regular text-16 text-black flex flex-wrap items-center leading-20">
                Lorem ipsum dolor sit amet consectetur
              </span>
            </span>
            <span className="flex flex-wrap items-center mt-4 lg:mt-0">
              <Chip overrideClasses="" icon="tasks" content="5 sub tasks" />
            </span>
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
          <Link to="/" className="project-wrap flex-col lg:flex-row !items-start">
            <span className="project-content-wrap block">
              <span className="font-inter-regular text-16 text-black flex flex-wrap items-center leading-20">
                <svg
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path
                    d="M8.42291 3.90748C8.40779 3.89377 8.39571 3.87705 8.38745 3.85839C8.37918 3.83974 8.37491 3.81956 8.37491 3.79915C8.37491 3.77874 8.37918 3.75856 8.38745 3.7399C8.39571 3.72125 8.40779 3.70452 8.42291 3.69082L11.6729 1.10165C11.9546 0.874153 11.9329 0.662903 11.9004 0.559987C11.8679 0.45707 11.7379 0.27832 11.375 0.27832H3.70833C3.6365 0.27832 3.56762 0.306854 3.51683 0.357645C3.46603 0.408436 3.4375 0.477324 3.4375 0.549153V7.04914C3.4375 7.12097 3.46603 7.18986 3.51683 7.24065C3.56762 7.29144 3.6365 7.31998 3.70833 7.31998H11.375C11.7325 7.31998 11.8517 7.14664 11.8896 7.03831C11.9275 6.92998 11.9437 6.72414 11.6621 6.49664L8.42291 3.90748Z"
                    fill="#004DF6"
                  />
                  <path
                    d="M0.817916 0.00245946C0.710762 0.00174509 0.604525 0.0222337 0.505322 0.0627456C0.406119 0.103258 0.31591 0.162993 0.239887 0.238511C0.163865 0.31403 0.103532 0.403841 0.0623619 0.502772C0.0211917 0.601704 -2.38108e-06 0.707802 2.00641e-10 0.814958V12.1899C2.00641e-10 12.4054 0.0856024 12.6121 0.237975 12.7645C0.390349 12.9168 0.597011 13.0024 0.812499 13.0024C1.02799 13.0024 1.23465 12.9168 1.38702 12.7645C1.5394 12.6121 1.625 12.4054 1.625 12.1899V0.814958C1.625 0.600405 1.54014 0.39456 1.38894 0.242342C1.23774 0.0901232 1.03246 0.00388982 0.817916 0.00245946Z"
                    fill="#004DF6"
                  />
                </svg>
                Clarify the details of the problem
              </span>
            </span>
            <span className="flex flex-wrap items-center mt-4 lg:mt-0">
              <Chip overrideClasses="" icon="lock" content="7" />
              <Chip overrideClasses="" icon="watch" content="4h" />
            </span>
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
      </div>
    </div>
  );
};

export default Plan;
