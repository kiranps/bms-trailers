import React from "react";

const Poster = ({ data }) => {
  return (
    <div className="p-2">
      <img
        width="200"
        src={`https://in.bmscdn.com/events/moviecard/${data.EventCode}.jpg`}
      />
      <div className="text-sm">{data.EventName}</div>
    </div>
  );
};

export default Poster;
