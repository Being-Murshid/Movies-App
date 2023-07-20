import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import InputFeild from "../InputField/InputField";
import CreatewatchListBtn from "../CreatewatchListBtn/CreatewatchListBtn";
const CreateAccount = () => {
  return (
    <div className="w-[351px] h-[524px] ">
      <div className="bg-[#C4C4C4] w-[100px] p-4 mx-auto h-[100px] rounded-full flex justify-center items-center">
        <FaCameraRetro className="w-[30px] h-[36px]" />
      </div>
      <div className="flex justify-center mt-1 mx-auto text-default">
        <FaCameraRetro className="w-[33.33px] h-[24px] " />
        <p className="font-[Lato]">Add an avatar</p>
      </div>
      <form className="space-y-3">
        <InputFeild
          label="Name *"
          type="text"
          variant="primary"
          width={"w-[350px]"}
          height={"h-[45px]"}
        />
        <InputFeild
          label="Email *"
          type="email"
          variant="primary"
          width={"w-[350px]"}
          height={"h-[45px]"}
        />

        <InputFeild
          label="Password *"
          type="password"
          variant="primary"
          width={"w-[350px]"}
          height={"h-[45px]"}
        />
        <div>
          <CreatewatchListBtn
            width="w-[247px]"
            height="h-[41px]"
            label="+  Create watchlist"
            lineHeight="leading-[19.2px]"
            variant="secondary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
