import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
const Profile = ({ bg }) => {
  return (
    <div
      className={`${bg} my-[40px] flex justify-between p-2  items-center border-[1px] border-default w-[247px] h-[44px] rounded-[4px]`}
    >
      <div className="">
        {bg === "bg-primary" && (
          <RxAvatar className="w-[32px] h-[32px] text-default" />
        )}
        {bg === "sd" && (
        <RxAvatar className="w-[32px] h-[32px] text-white" />
        )}
      </div>
      <h6 className="font-[Roboto] leading-[14.06px] text-default ml-[-100px]">
        Michael
      </h6>
      <BiDotsHorizontalRounded className="text-default" />
    </div>
  );
};

export default Profile;
