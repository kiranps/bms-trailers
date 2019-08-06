import React from "react";

const AppBar = ({ children }) => {
  return (
    <div className="fixed inline-block w-full overflow-y-scroll top-12 bottom-0 left-0 bg-black-100 scroll1">
      <div className="flex flex-wrap mx-auto justify-center">{children}</div>
    </div>
  );
};

export default AppBar;
