import { Home, History } from "./Pages";
import {
  CreateAccount,
  CreatewatchListBtn,
  InputField,
  HomeBtn,
  HistoryBtn,
  Profile,
  // Logo
  WatchList
} from "./components/Common";

function App() {
  return (
    <>
      <Home bg="bg-primary" />
      {/* <WatchList
        width="w-[247px]"
        height="h-[41px]"
        label="Movies by Tom Cruise"
        variant="primary"
      />
      <WatchList
        width="w-[247px]"
        height="h-[41px]"
        label="Movies by Tom Cruise"
        variant="secodary"
      />
      <WatchList
        width="w-[247px]"
        height="h-[41px]"
        label="Movies by Tom Cruise"
        variant="base"
      /> */}

     

      {/* <Logo /> */}
      {/* <History /> */}
      <Profile bg="bg-primary" />
      <CreateAccount />
      <InputField
        type="text"
        variant="secondary"
        label="lanasdk"
        width={"w-[279px]"}
        height={"h-[45px]"}
      />
      <CreatewatchListBtn
        width="w-[247px]"
        height="h-[41px]"
        label="+  Create watchlist"
        lineHeight="leading-[19.2px]"
        variant="primary"
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
    </>
  );
}

export default App;
