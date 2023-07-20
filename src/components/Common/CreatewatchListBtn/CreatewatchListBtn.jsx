import React from "react";

const CreatewatchListBtn = ({ label, width, height, lineHeight, variant }) => {
  return (
    <div>
      {variant === "primary" && (
        <button
          className={`${width} ${height} ${lineHeight} bg-secondary rounded-[6px] text-center font-[Lato] text-[16px] `}
        >
          {label}
        </button>
      )}
      {variant === "secondary" && (
        <button
          className={`${width} ${height} ${lineHeight} bg-btnvariant rounded-[6px] text-center font-[Lato]  text-[16px] `}
        >
          {label}
        </button>
      )}
    </div>
  );
};

export default CreatewatchListBtn;
