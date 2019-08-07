import React from "react";
import Tag from "/components/Tag";

const VideoPlayer = ({ data }) => {
  return (
    <div className="w-full h-px-480 py-4">
      <iframe
        className="w-3/5 mx-auto px-4 inline-block align-top h-full"
        src={`https://www.youtube.com/embed/${
          data.TrailerURL.split("v=")[1].split("&")[0]
        }`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="inline-block w-2/5 px-4 h-full align-top">
        <div className="bg-black-blur p-3 h-full text-white">
          <div className="text-base font-bold">{data.EventTitle}</div>
          <div className="text-xs uppercase">{data.EventLanguage}</div>
          <div>
            {data.EventGenre.map((x, i) => (
              <Tag key={i} value={x} />
            ))}
          </div>
          <div>
            <span className="text-xs">{data.totalVotes} votes </span>
            <span className="text-xs ml-2">{data.ShowDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
