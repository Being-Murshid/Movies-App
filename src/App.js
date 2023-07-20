import {
  CreateAccount,
  CreatewatchListBtn,
  InputField,
  HomeBtn,
  HistoryBtn
} from "./components/Common";

function App() {
  return (
    <>
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
