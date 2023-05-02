import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`w-full mt-3 md:mt-0 max-w-[1280px]  px-5  md:px-10 mx-auto border rounded-[25px] md:rounded-[40px]  ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
