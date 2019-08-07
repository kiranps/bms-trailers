import React from "react";

const Tag = ({ value }) => {
  return (
    <div className="inline-block m-1 my-2 px-2 py-1 rounded bg-black-200 text-xs">
      {value}
    </div>
  );
};

export default Tag;
