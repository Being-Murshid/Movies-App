import React from "react";
import Movie from "../../../images/icons/Movie.png";
const WatchList = ({ width, height, label, variant }) => {
  return (
    <>
      {variant === "primary" && (
        <div
          className={`${width} ${height} flex items-center justify-start  p-2 rounded-md bg-primary`}
        >
          <img src={Movie} alt="loading" className="mr-2" />
          <h1 className="text-default font-[Lato] text-base ">{label}</h1>
        </div>
      )}
      {variant === "secondary" && (
        <div
          className={`${width} ${height} flex items-center justify-around p-2 rounded-md bg-btnvariant1`}
        >
          <img src={Movie} alt="loading" className="mr-2" />
          <h1 className="text-default font-[Lato] text-base ">{label}</h1>
        </div>
      )}
      {variant === "base" && (
        <div
          className={`${width} ${height} flex items-center justify-around p-2 rounded-md border-[1px] border-[#F33F3F] bg-btnvariant1`}
        >
          <img src={Movie} alt="loading" className="mr-2" />
          <h1 className="text-default font-[Lato] text-base ">{label}</h1>
        </div>
      )}
    </>
  );
};

export default WatchList;
