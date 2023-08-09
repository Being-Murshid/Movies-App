import React from "react";
import {
  CreatewatchListBtn,
  HistoryBtn,
  HomeBtn,
  InputField,
  Logo,
  Profile,
  WatchList,
} from "../../components";

const Home = ({ bg }) => {
  return (
    <div className={`${bg} flex justify-center w-[300px]`}>
      <div>
        <Logo />
        <InputField
          type="text"
          variant="secondary"
          label="search"
          width={"w-[247px]"}
          height={"h-[35px]"}
        />
        <HomeBtn
          width="w-[247px]"
          height="h-[41px]"
          variant="primary"
          label="Home"
        />
        <HistoryBtn
          width="w-[247px]"
          height="h-[41px]"
          variant="primary"
          label="History"
        />
        <CreatewatchListBtn
          width="w-[247px]"
          height="h-[41px]"
          label="+  Create watchlist"
          lineHeight="leading-[19.2px]"
          variant="primary"
        />
        <div className="w-[260px] border-[1px] border-[#D9D9D9] my-5"></div>
        <div>
          <h1 className="text-[20px] text-default font-[Lato]">My Lists</h1>
        </div>
        <WatchList
          width="w-[247px]"
          height="h-[41px]"
          label="Movies by Tom Cruise"
          variant="primary"
        />
        <Profile bg="bg-primary" />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
