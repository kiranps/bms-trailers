import React from "react";

const Filters = ({ children }) => {
  return (
    <div className="fixed w-full top-12 h-12 left-0 bg-black-100">
      <div className="flex flex-wrap text-white">{children}</div>
    </div>
  );
};

export default Filters;
