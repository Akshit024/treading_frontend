/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { DotIcon, MessageCircle, MessageCircleIcon } from "lucide-react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";

const Home = () => {
  const [category, setCategory] = React.useState("all");
  const [inputValue, setInputValue] = React.useState("");
  const [isBotOpen,setIsBotOpen] = React.useState(false);

  const handleCategory = (value) => {
    setCategory(value);
  };

  const handleKeyPress = (event)=>{
    if(event.key == "Enter"){
        console.log("");
    }
    setInputValue("");
  }

  const handleBotRelease =()=>{
    setIsBotOpen(!isBotOpen);
  }
  const handleChange=(e)=>{
    setInputValue(e.target.value);
  }
  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-4">
            <Button
              onClick={() => handleCategory("all")}
              variant={category == "all" ? "default" : "outline"}
              className="rounded-full"
            >
              All
            </Button>
            <Button
              onClick={() => handleCategory("top50")}
              variant={category == "top50" ? "default" : "outline"}
              className="rounded-full"
            >
              Top 50
            </Button>
            <Button
              onClick={() => handleCategory("topGainers")}
              variant={category == "topGainers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Gainers
            </Button>
            <Button
              onClick={() => handleCategory("topLosers")}
              variant={category == "topLosers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Losers
            </Button>
          </div>
          <AssetTable />
        </div>
        <div className="hidden lg:block lg:w-[50%] p-5">
          <StockChart />
          <div className="flex gap-5 items-center">
            <div className="h-12 w-12">
              <Avatar>
                <AvatarImage src={"src/assets/logo.png"} />
              </Avatar>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p>ETH</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400">Ethereum</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold">12345</p>
                <p className="text-red-500">
                  <span>123456</span>
                  <span>(-102932%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="absolute bottom-5 right-14 z-40 flex flex-col justify-end items-end gap-2">
        {isBotOpen && <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-800">
          <div className="flex justify-between items-center border-b px-6 h-[12%]">
            <p>Chat Bot</p>
            <Button onClick={handleBotRelease} variant="ghost" size="icon ">
              <Cross1Icon />
            </Button>
          </div>

          <div className="h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container">
            <div className="self-start pb-5 w-auto">
              <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-700 w-auto">
                <p>hi, Akshit Tayal</p>
                <p>you can ask crypto related any question</p>
                <p>like, price, market Cap etc......</p>
              </div>
            </div>
            {[1, 1, 1, 1].map((items, index) => (
              <div
                key={index}
                className={`${
                  index % 2 == 0 ? "self-start" : "self-end"
                } "pb-5 w-auto"`}
              >
                {index % 2 == 0 ? (
                  <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-700 w-auto">
                    <p>Prompt who are you</p>
                  </div>
                ) : (
                  <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-700 w-auto">
                    <p>Answer : hi,ram arora</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div  className="h-[12%] border-t">
            <Input className="w-full h-full order-none outline-none  bg-slate-600" placeholder="Write prompt" onChange={()=>handleChange} value={inputValue} onKeyPress={handleKeyPress} />
          </div>
        </div>}

        <div className="relative w-[10rem] cursor-pointer group">
          <Button className="h-[3rem] gap-2 items-center" onClick={handleBotRelease}>
            <MessageCircle
              size={30}
              className="fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#1a1a1a]"
            />
            <span className="text-3xl">Chat Bot</span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
