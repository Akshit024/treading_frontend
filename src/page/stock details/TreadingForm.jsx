/* eslint-disable no-unused-vars */
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DotIcon } from "lucide-react";
import React, { useState } from "react";

const TreadingForm = () => {
const [orderType ,setOrderType]=useState("BUY");
  const handleChange = () => {
    console.log("change");
  };
  return (
    <div className="space-y-10 p-5 ">
      <div>
        <div className="flex gap-4 items-center justify-between">
          <Input
            className="py-7 focus:outline-none"
            placeholder="Enter Amount ....."
            onChange={handleChange}
            type="numder"
            name="amount"
          />
          <div>
            <p className="border text-2xl flex justify-center items-center w-36 h-14 rounded-md">
              5567
            </p>
          </div>
        </div>
        <div>
          {false && (
            <h1 className="text-red-700">Insufficient wallet balance to Buy</h1>
          )}
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <Avatar>
            <AvatarImage
              src={
                "https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-6278326_1280.png"
              }
              alt="gelt"
            />
          </Avatar>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p>BTC</p>
            <DotIcon className="text-gray-400" />
            <p className="text-gray-400">Bitcoin</p>
          </div>
          <div className="flex items-end gap-2">
            <p className="text-xl font-bold">$4567</p>
            <p className="text-red-600">
              <span>-134567.567</span>
              <span>(-0.234567%)</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p>Order Type</p>
        <p>Market Order</p>
      </div>
      <div className="flex items-center justify-between">
        <p>{orderType == "BUY"?"Available Cash":"Available Quantity"}</p>
        <p>{orderType == "BUY"?90000:456}</p>

      </div>
      <div className="flex flex-col">
        <Button className={`"w-full py-6 " ${orderType=="SELL"?"bg-red-600 text-white":""}`}>
            {orderType}
        </Button>
        <Button
        variant ="link"
         className="w-full mt-5 text-xl"
        onClick={()=>setOrderType(orderType=="BUY"?"SELL":"BUY")}>
            {orderType=="BUY"?"Or Sell":"Or Buy"}
        </Button>
      </div>
    </div>
  );
};

export default TreadingForm;
