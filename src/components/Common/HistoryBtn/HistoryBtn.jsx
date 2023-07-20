import React from "react";
// import { GoHistory } from "react-icons/fa";
const HomeBtn = ({ label, width, height, variant }) => {
  return (
    <div>
      {variant === "primary" && (
        <button
          className={`${width} ${height} flex items-center gap-2 pl-2 bg-btnvariant1 text-white rounded-[6px] font-[Lato] text-[16px] leading-[19.2px]`}
        >
          {/* <GoHistory/> */}
          {label}
        </button>
      )}
      {variant === "secondary" && (
        <button
          className={`${width} ${height} flex items-center gap-2 pl-2 bg-primary text-white rounded-[6px] font-[Lato] text-[16px] leading-[19.2px]`}
        >
          {/* <GoHistory/> */}
          {label}
        </button>
      )}
    </div>
  );
};

export default HomeBtn;
