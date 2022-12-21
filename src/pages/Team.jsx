import React, { useEffect } from "react";
import Footer from "../layout/Footer";

const Team = () => {
  useEffect(() => {
    document.title = `Team – HMW`;
  });
  return (
    <div className={`sm:ml-20 py-7 sm:py-18`}>
      <div className="custom-medium-container">
        <h1 class="headingOne transition-all !mb-0 ">Team</h1>
        <Footer />
      </div>
    </div>
  );
};

export default Team;
