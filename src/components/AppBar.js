import React from "react";

const AppBar = ({ children }) => {
  return (
    <div className="fixed flex w-full h-12 bg-black-900 p-2 justify-start z-10">
      {children}
    </div>
  );
};

export default AppBar;
