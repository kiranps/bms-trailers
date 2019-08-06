import React from "react";

const AppBar = ({ children }) => {
  return (
    <nav className="fixed flex w-full h-12 bg-black-900 p-2 z-10 justify-between">
      {children}
    </nav>
  );
};

const Left = ({ children }) => <div>{children}</div>;
const Right = ({ children }) => <div>{children}</div>;

AppBar.Left = Left;
AppBar.Right = Right;

export default AppBar;
