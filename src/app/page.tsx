"use client"

import DiscussionFourm from "@/components/DiscussionFourm";
import {discussion, marketData} from "@/data/data"
import MarketStories from "@/components/MarketStories";
import SideNav from "@/components/Sidenav";

export default function Home() {
  return (
    <div className="w-screen h-screen  flex flex-col lg:flex-row gap-20 justify-around m-2 overflow-y-auto overflow-x-hidden">
      <SideNav />

      <div className="flex flex-col gap-5 lg:w-[50%] w-full">
        <h1 className="text-4xl font-semibold">
          <span className="text-red-600 bg-slate-200 p-2">DISCUSSION FORUM</span>
        </h1>
        <div className="flex flex-col gap-8 h-full">
          {discussion.map((profile, index) => (
            <DiscussionFourm key={index} card={profile} />
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:w-[30%] w-full gap-5 overflow-hidden">
        <h2 className="text-2xl font-semibold">
          <span className="text-red-600 bg-slate-200 p-2">MARKET STORIES</span>
        </h2>
        <div className="flex flex-col h-full gap-4">
          {marketData.map((data, index) => (
            <MarketStories key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
}

