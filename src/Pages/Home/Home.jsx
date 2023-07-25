import React from 'react'
import { CreatewatchListBtn, HistoryBtn, HomeBtn, Logo } from '../../components/Common'

const Home = ({bg}) => {
  return (
    <div className={`${bg}`}>
      <div>
        <Logo />
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
      </div>
      <div></div>
    </div>
  );
}

export default Home
