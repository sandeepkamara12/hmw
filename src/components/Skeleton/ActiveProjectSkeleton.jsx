import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ActiveProjectSkeleton = () => {
  return (
    <>
      <div className="custom-medium-container">
        <div className="px-4 sm:px-0">
          <div className="tab-panel">
            <div className="text-16 leading-20 mb-4 mt-8 font-semibold font-inter-regular text-black">
              {/* <Skeleton
                duration={1}
                height={32}
                width={141}
                style={{
                  borderRadius: 30,
                }}
              /> */}
            </div>

            {/* <ul className="list">
              {Array(3)
                .fill()
                .map((item, index) => (
                  <div className="project-listing" key={index}>
                    <Link to="#" className="project-wrap">
                      <span className="project-content-wrap flex flex-col items-start">
                        <span className="font-inter-regular text-16 text-black  leading-20 mb-4">
                          <Skeleton
                            width={285}
                            height={20}
                            style={{
                              borderRadius: 30,
                            }}
                          />
                        </span>

                        <Skeleton
                          width={103}
                          height={20}
                          style={{
                            borderRadius: 30,
                          }}
                        />
                      </span>
                    </Link>
                  </div>
                ))}
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveProjectSkeleton;
