import React from "react";

const VoteProgressBar = (props) => {
  const { completed } = props;

  const insideBarStyle = {
    width: `${completed < 30 ? 30 : completed}%`,
  };

  return (
    <div
      className="flex overflow-hidden h-10 mb-4 border border-black bg-white rounded-lg"
      style={{ boxShadow: "0 5px 0px 0px black" }}
    >
      <div
        className="flex flex-col h-full justify-center rounded-r-lg border-r border-black bg-yello text-center "
        style={insideBarStyle}
      >
        <span className="text-white font-bold">
          {`Vote Progress ${completed}%`}
        </span>
      </div>
    </div>
  );
};

export default VoteProgressBar;
