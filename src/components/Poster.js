import React from "react";

const Poster = ({ data }) => {
  return (
    <div className="p-3 overflow-hidden w-px-180 h-px-234">
      <img
        className="w-full"
        src={`https://in.bmscdn.com/events/moviecard/${data.EventCode}.jpg`}
      />
      <div className="text-sm overflow-hidden text-white font-semi-bold">
        {data.EventName}
      </div>
    </div>
  );
};

export default Poster;
