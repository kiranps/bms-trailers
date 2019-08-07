import React from "react";

const Movies = ({ children }) => {
  return (
    <div className="fixed w-full overflow-y-scroll top-24 bottom-0 left-0 bg-black-100 scroll1">
      <div className="flex flex-wrap mx-auto justify-center">{children}</div>
    </div>
  );
};

export default Movies;
