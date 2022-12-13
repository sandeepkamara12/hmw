import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../layout/CustomChip";

const Backlog = (props) => {
  return (
    <div className="custom-medium-container">
      <div className="px-4 sm:px-0">
        <div className="tab-panel">
          <>
            {props.projects?.map((project, index) => {
              return (
                <React.Fragment key={index}>
                  <div
                    className={`text-16 leading-20 mb-4 mt-8 font-semibold font-inter-regular text-black ${
                      props.width <= 640 && "mt-8"
                    }`}
                  >
                    {project.date}
                    <span className="text-14 leading-18 font-normal ml-2 inline-block text-gray">
                      ( {project.range} )
                    </span>
                  </div>
                  <div className="project-listing">
                    {project.projects?.map((pro, index) => {
                      return (
                        <Link
                          to={`/project/${pro.slug}/${pro.project_name
                            .toLowerCase()
                            .replace(/\s/g, "-")}`}
                          className="project-wrap"
                          key={index}
                        >
                          <span className="project-content-wrap block">
                            <span className="font-inter-regular text-16 text-black block leading-20 mb-4">
                              {pro.project_name}
                            </span>
                            <Chip
                              overrideClasses="!mx-0"
                              icon="status"
                              content="On-track: Oct 12-14"
                            />
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
                      );
                    })}
                  </div>
                </React.Fragment>
              );
            })}
          </>
        </div>
        <Link
          className="textLink text-center block bg-fieldBg rounded-8 p-3"
          // to="/"
        >
          1 completed project
        </Link>
      </div>
    </div>
  );
};

export default Backlog;
