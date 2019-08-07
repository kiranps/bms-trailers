import React, { useState } from "react";
import Placeholder from "./image_placeholder.png";

const Poster = ({ data, onClick }) => {
  const [imgStatus, setImageStatus] = useState("loading");

  return (
    <div
      className="flex p-sm overflow-hidden w-px-192 h-px-274"
      onClick={onClick}
    >
      <div class="flex flex-col absolute ml-px-114 mt-2 bg-green-500 rounded-full h-10 w-10 text-white text-xs flex items-center justify-center">
        <div className="font-bold leading-none">12</div>
        <div className="leading-none">Aug</div>
      </div>

      <img
        className={
          "w-px-168 h-px-217" +
          (imgStatus === "loading" ? " hidden" : " visible")
        }
        onLoad={_ => setImageStatus("loaded")}
        src={`https://in.bmscdn.com/events/moviecard/${data.EventCode}.jpg`}
      />
      {imgStatus === "loading" && (
        <img className="w-px-168 h-px-217" src={Placeholder} />
      )}
      <div className="text-sm overflow-hidden text-white font-semi-bold">
        {data.EventName}
      </div>
    </div>
  );
};

export default Poster;
