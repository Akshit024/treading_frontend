/* eslint-disable no-unused-vars */
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BookmarkFilledIcon, BookmarkIcon } from "@radix-ui/react-icons";
import { DotIcon } from "lucide-react";
import React, { useEffect } from "react";
import TreadingForm from "./TreadingForm";
import StockChart from "../home/StockChart";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "@/state/Coin/Action";
import { addItemToWatchlist, getUserWatchlist } from "@/state/Watchlist/Action";
import { existInWatchlist } from "@/utils/existInWatchlist";

const StockDetails = () => {
  const {coin,watchlist} = useSelector(store=>store)
  const dispatch = useDispatch();
  const {id}=useParams();
  useEffect(()=>{
    dispatch(getUserWatchlist({jwt:localStorage.getItem("jwt")}));
    dispatch(fetchCoinDetails({coinId:id}));
  },[id]);

  const handleAddToWatchlist=()=>{
    dispatch(addItemToWatchlist({coinId:coin.coinDetails?.id,jwt:localStorage.getItem("jwt")}));
  }
  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <div>
            <Avatar>
              <AvatarImage src={coin.coinDetails?.image.large} alt="glat"/>
            </Avatar>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p>{coin.coinDetails?.symbol?.toUpperCase()}</p>
              <DotIcon className="text-gray-400" />
              <p className="text-gray-400">{coin.coinDetails?.name}</p>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-xl font-bold">${coin.coinDetails?.market_data.current_price.usd}</p>
              <p className={coin.coinDetails?.market_data.market_cap_change_24h<0?"text-red-600":"text-green-600"}>
                <span>{coin.coinDetails?.market_data.market_cap_change_24h}</span>
                <span>({coin.coinDetails?.market_data.market_cap_change_percentage_24h}%)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={handleAddToWatchlist}>
            {existInWatchlist(watchlist.items,coin.coinDetails) ? (
              <BookmarkFilledIcon className="h-6 w-6" />
            ) : (
              <BookmarkIcon className="h-6 w-6" />
            )}
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button size="lg">
                Tread
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How Much Do you want to spend ?</DialogTitle>
              </DialogHeader>
              <TreadingForm/>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-14">
      <StockChart coinId={id}/>
      </div>
    </div>
  );
};

export default StockDetails;
