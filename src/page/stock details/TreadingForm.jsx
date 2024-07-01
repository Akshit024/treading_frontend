/* eslint-disable no-unused-vars */
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAssetDetails } from "@/state/Asset/Action";
import { payOrder } from "@/state/Order/Action";
import { getUserWallet } from "@/state/Wallet/Action";
import { DotIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TreadingForm = () => {
  const [orderType, setOrderType] = useState("BUY");
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(0.0000);
  const { coin, wallet, asset } = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserWallet(localStorage.getItem("jwt")));
    dispatch(
      getAssetDetails({
        coinId: coin.coinDetails.id,
        jwt: localStorage.getItem("jwt"),
      })
    );
  }, []);


const handleChange = (e) => {
  const amount = parseFloat(e.target.value);
  setAmount(amount);
  let volume;

  if (orderType === "BUY") {
    volume = calculateBuyCost(
      amount,
      parseFloat(coin.coinDetails.market_data.current_price.usd).toFixed(4)
    );
  } else {
    volume = calculateSellCost(
      amount,
      parseFloat(coin.coinDetails.market_data.current_price.usd).toFixed(4)
    );
  }

  setQuantity(parseFloat(volume).toFixed(4));
};

const calculateSellCost = (quantity, price) => {
  return parseFloat(quantity) * parseFloat(price);
};

const calculateBuyCost = (amount, price) => {
  return parseFloat(amount) / parseFloat(price);
};

  

  const handleBuyCrypto = () => {
    dispatch(payOrder({
      jwt: localStorage.getItem("jwt"),
      orderData:{
        coinId:coin.coinDetails?.id,
        quantity,
        orderType,
      },
      amount,
    }))
  }
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
            <p className="border text-2xl flex justify-center items-center w-44 h-14 rounded-md">
              {parseInt(quantity).toFixed(4)}
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
                coin.coinDetails?.image.large
              }
              alt="gelt"
            />
          </Avatar>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p>{
                coin.coinDetails?.symbol.toUpperCase()
            }</p>
            <DotIcon className="text-gray-400" />
            <p className="text-gray-400">{
                coin.coinDetails?.name
              }</p>
          </div>
          <div className="flex items-end gap-2">
            <p className="text-xl font-bold">
              ${coin.coinDetails.market_data.current_price.usd.toFixed(4)}
            </p>
            <p className={coin.coinDetails?.market_data.market_cap_change_24h<0?"text-red-600":"text-green-600"}>
                <span>{coin.coinDetails?.market_data.market_cap_change_24h}</span>
                <span>({coin.coinDetails?.market_data.market_cap_change_percentage_24h}%)</span>
              </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p>Order Type</p>
        <p>Market Order</p>
      </div>
      <div className="flex items-center justify-between">
        <p>{orderType == "BUY" ? "Available Cash" : "Available Quantity"}</p>
        <p>
          {orderType == "BUY"
            ? "$" + (wallet.userWallet.balance)
            : asset.assetDetails?.quantity || 0}
        </p>
      </div>
      <div className="flex flex-col">
        <Button
        onClick={handleBuyCrypto}
          className={`"w-full py-6 " ${
            orderType == "SELL" ? "bg-red-600 text-white" : ""
          }`}
        >
          {orderType}
        </Button>
        <Button
          variant="link"
          className="w-full mt-5 text-xl"
          onClick={() => setOrderType(orderType == "BUY" ? "SELL" : "BUY")}
        >
          {orderType == "BUY" ? "Or Sell" : "Or Buy"}
        </Button>
      </div>
    </div>
  );
};

export default TreadingForm;
